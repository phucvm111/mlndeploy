const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

let cachedPdfData = null;

exports.handler = async (event) => {
  // Chỉ accept POST method
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { question } = JSON.parse(event.body);

    if (!question) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Question is required" }),
      };
    }

    // Khởi tạo Gemini với API Key từ environment variable
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Vai trò: Bạn là một giảng viên Triết học Mác - Lênin nhiệt tình.
Nhiệm vụ: Trả lời câu hỏi của sinh viên dựa trên giáo trình được cung cấp.
Yêu cầu:
- Chỉ trả lời dựa trên nội dung file PDF đính kèm.
- Trích dẫn rõ ý đó nằm ở phần nào nếu có thể.
- Giọng văn: Học thuật nhưng dễ hiểu, khuyến khích tư duy.

Câu hỏi của sinh viên: "${question}"
`;

    // Load PDF data
    let pdfData = cachedPdfData;

    if (!pdfData) {
      // URL mặc định của giáo trình trên Google Drive
      const DEFAULT_PDF_URL =
        "https://drive.google.com/uc?export=download&confirm=t&id=13FQwIAIQqBWWcJzMBtopdpUKpAEaKOHW";

      const isLocal = !process.env.NETLIFY && !process.env.PDF_URL;

      if (isLocal) {
        // Chạy local: đọc file trực tiếp
        const pdfPath = path.join(
          __dirname,
          "../../assets/docs/1. Giao trinh Triet hoc Mac - Lenin 2021.doc.pdf",
        );
        const fileBuffer = fs.readFileSync(pdfPath);
        pdfData = fileBuffer.toString("base64");
      } else {
        // Chạy trên Netlify: tải PDF từ URL (env var hoặc mặc định)
        const pdfUrl = process.env.PDF_URL || DEFAULT_PDF_URL;
        const pdfResponse = await fetch(pdfUrl);
        if (!pdfResponse.ok) {
          throw new Error(
            `Không thể tải PDF (HTTP ${pdfResponse.status}). Kiểm tra lại PDF_URL.`,
          );
        }
        const buffer = Buffer.from(await pdfResponse.arrayBuffer());
        pdfData = buffer.toString("base64");
      }
      cachedPdfData = pdfData;
    }

    const parts = [
      { text: prompt },
      {
        inlineData: {
          mimeType: "application/pdf",
          data: pdfData,
        },
      },
    ];

    const result = await model.generateContent(parts);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ answer: text }),
    };
  } catch (error) {
    console.error("Error calling Gemini:", error);
    const message = error?.message || "Unknown error";
    const isQuota =
      message.includes("429") ||
      message.toLowerCase().includes("quota") ||
      message.toLowerCase().includes("too many requests");

    return {
      statusCode: isQuota ? 429 : 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: isQuota
          ? "Quota exceeded. Please wait and retry."
          : "Failed to get response from AI",
        details: message,
      }),
    };
  }
};
