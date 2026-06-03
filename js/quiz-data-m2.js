// =============================================
// MODULE 2 — Ý THỨC (CONSCIOUSNESS)
// Kiểm tra hình thành (Formative Quizzes)
// sourceRef: Giáo trình Triết học Mác-Lênin 2021, Chương 2, dòng 511-610
// =============================================

const FORMATIVE_QUIZZES_M2 = {
    // Kiểm tra hình thành 1: Sau Bài 2.1–2.2 (Ý thức là gì & Nguồn gốc)
    "M2-FQ1": {
        title: "Kiểm tra hình thành: Ý thức & Nguồn gốc",
        lessonId: "M2-L2",
        module: "M2",
        passingScore: 70,
        achievement: "consciousness-explorer",
        questions: [
            {
                id: "M2-FQ1-1",
                module: "M2",
                lessonId: "M2-L1",
                text: "Theo CNDV biện chứng, ý thức là thuộc tính của cái gì?",
                options: [
                    { id: "a", text: "Thuộc tính phổ biến của mọi dạng vật chất" },
                    { id: "b", text: "Thuộc tính của một dạng vật chất đặc biệt có tổ chức cao là bộ óc người" },
                    { id: "c", text: "Thuộc tính của linh hồn tồn tại độc lập với thể xác" }
                ],
                correctOptionId: "b",
                rationale: "CNDV biện chứng: 'ý thức chỉ là thuộc tính của vật chất; nhưng không phải của mọi dạng vật chất, mà là thuộc tính của một dạng vật chất sống có tổ chức cao nhất là bộ óc người.' (Triet.txt, dòng 522)"
            },
            {
                id: "M2-FQ1-2",
                module: "M2",
                lessonId: "M2-L1",
                text: "Bản chất của ý thức theo CNDV biện chứng là gì?",
                options: [
                    { id: "a", text: "Hình ảnh chủ quan của thế giới khách quan — quá trình phản ánh tích cực, sáng tạo hiện thực" },
                    { id: "b", text: "Một dạng vật chất đặc biệt do óc tiết ra như gan tiết ra mật" },
                    { id: "c", text: "Thực thể tồn tại độc lập, có trước và quyết định vật chất" }
                ],
                correctOptionId: "a",
                rationale: "'Bản chất của ý thức là hình ảnh chủ quan của thế giới khách quan, là quá trình phản ánh tích cực, sáng tạo hiện thực khách quan của óc người.' (Triet.txt, dòng 539)"
            },
            {
                id: "M2-FQ1-3",
                module: "M2",
                lessonId: "M2-L2",
                text: "Nguồn gốc xã hội của ý thức là gì?",
                options: [
                    { id: "a", text: "Sự tiến hóa sinh học của não người qua hàng triệu năm" },
                    { id: "b", text: "Lao động và ngôn ngữ — hai sức kích thích chủ yếu hình thành ý thức" },
                    { id: "c", text: "Giáo dục và trải nghiệm cá nhân từ khi còn nhỏ" }
                ],
                correctOptionId: "b",
                rationale: "Ph. Ăngghen: 'Trước hết là lao động; sau lao động và đồng thời với lao động là ngôn ngữ; đó là hai sức kích thích chủ yếu đã ảnh hưởng đến bộ óc của con vượn, làm cho bộ óc đó dần dần biến chuyển thành bộ óc con người.' (Triet.txt, dòng 528)"
            },
            {
                id: "M2-FQ1-4",
                module: "M2",
                lessonId: "M2-L2",
                text: "Nguồn gốc ý thức gồm mấy phần? Phần nào là điều kiện đủ?",
                options: [
                    { id: "a", text: "Một phần: nguồn gốc tự nhiên (bộ óc) là điều kiện duy nhất" },
                    { id: "b", text: "Hai phần: tự nhiên (điều kiện cần) và xã hội (điều kiện đủ)" },
                    { id: "c", text: "Ba phần: sinh học, tâm lý, xã hội — cân bằng nhau" }
                ],
                correctOptionId: "b",
                rationale: "'Nguồn gốc tự nhiên là điều kiện cần, còn nguồn gốc xã hội là điều kiện đủ để ý thức hình thành, tồn tại và phát triển.' (Triet.txt, dòng 534)"
            }
        ]
    },

    // Kiểm tra hình thành 2: Sau Bài 2.3–2.4 (Bản chất & Các hình thức phản ánh)
    "M2-FQ2": {
        title: "Kiểm tra hình thành: Bản chất & Phản ánh",
        lessonId: "M2-L4",
        module: "M2",
        passingScore: 70,
        questions: [
            {
                id: "M2-FQ2-1",
                module: "M2",
                lessonId: "M2-L3",
                text: "Ý thức 'là hình ảnh chủ quan của thế giới khách quan' có nghĩa là gì?",
                options: [
                    { id: "a", text: "Nội dung phản ánh là khách quan, hình thức phản ánh là chủ quan (phụ thuộc chủ thể)" },
                    { id: "b", text: "Ý thức hoàn toàn do chủ quan tạo ra, không phụ thuộc thế giới bên ngoài" },
                    { id: "c", text: "Ý thức và vật chất giống nhau về bản chất, chỉ khác về hình thức" }
                ],
                correctOptionId: "a",
                rationale: "'Về nội dung mà ý thức phản ánh là khách quan, còn hình thức phản ánh là chủ quan. Ý thức là cái vật chất ở bên ngoài di chuyển vào trong đầu óc của con người và được cải biến đi ở trong đó.' (Triet.txt, dòng 541)"
            },
            {
                id: "M2-FQ2-2",
                module: "M2",
                lessonId: "M2-L3",
                text: "Đặc tính cơ bản nhất của ý thức là gì?",
                options: [
                    { id: "a", text: "Tính thụ động — ý thức chỉ nhận thông tin, không tạo ra gì mới" },
                    { id: "b", text: "Tính sáng tạo — ý thức phản ánh và sáng tạo hiện thực khách quan" },
                    { id: "c", text: "Tính độc lập — ý thức tồn tại và phát triển tách rời vật chất" }
                ],
                correctOptionId: "b",
                rationale: "'Sáng tạo là đặc trưng bản chất nhất của ý thức... Ý thức phản ánh hiện thực khách quan vào bộ óc người, song đây là sự phản ánh đặc biệt, gắn liền với thực tiễn sinh động cải tạo thế giới khách quan.' (Triet.txt, dòng 543)"
            },
            {
                id: "M2-FQ2-3",
                module: "M2",
                lessonId: "M2-L4",
                text: "Các hình thức phản ánh từ thấp đến cao là gì?",
                options: [
                    { id: "a", text: "Phản ánh vật lý/hóa học → kích thích (thực vật) → phản xạ/tâm lý (động vật) → ý thức (người)" },
                    { id: "b", text: "Cảm giác → tri giác → biểu tượng → khái niệm" },
                    { id: "c", text: "Bản năng → tập tính → trí khôn → ý thức" }
                ],
                correctOptionId: "a",
                rationale: "'Giới vô sinh: phản ánh vật lý, hóa học; thực vật: kích thích; động vật có hệ thần kinh: phản xạ; động vật cấp cao: tâm lý; cao nhất là: ý thức người.' (Triet.txt, dòng 524)"
            },
            {
                id: "M2-FQ2-4",
                module: "M2",
                lessonId: "M2-L4",
                text: "Tại sao tâm lý động vật CHƯA phải là ý thức?",
                options: [
                    { id: "a", text: "Vì động vật không có bộ óc đủ phức tạp" },
                    { id: "b", text: "Vì tâm lý động vật mang tính bản năng, xuất phát từ nhu cầu sinh lý, không phải sản phẩm của thực tiễn xã hội" },
                    { id: "c", text: "Vì động vật không có ngôn ngữ" }
                ],
                correctOptionId: "b",
                rationale: "'Tâm lý động vật chưa phải là ý thức, mà đó vẫn là trình độ phản ánh mang tính bản năng của các loài động vật bậc cao, xuất phát từ nhu cầu sinh lý tự nhiên, trực tiếp của cơ thể động vật chi phối.' (Triet.txt, dòng 525)"
            }
        ]
    },

    // Kiểm tra hình thành 3: Sau Bài 2.5–2.6 (Quan hệ vật chất–ý thức & Ứng dụng)
    "M2-FQ3": {
        title: "Kiểm tra hình thành: Quan hệ vật chất–ý thức & Ứng dụng",
        lessonId: "M2-L6",
        module: "M2",
        passingScore: 70,
        questions: [
            {
                id: "M2-FQ3-1",
                module: "M2",
                lessonId: "M2-L5",
                text: "Mối quan hệ biện chứng giữa vật chất và ý thức trong nhận thức luận là gì?",
                options: [
                    { id: "a", text: "Ý thức quyết định vật chất — người suy nghĩ đúng sẽ tạo ra hiện thực tốt" },
                    { id: "b", text: "Vật chất quyết định ý thức; đồng thời ý thức có tính năng động tác động trở lại vật chất qua thực tiễn" },
                    { id: "c", text: "Vật chất và ý thức song song, không cái nào quyết định cái nào" }
                ],
                correctOptionId: "b",
                rationale: "CNDV biện chứng: vật chất quyết định ý thức (tính thứ nhất vs thứ hai), nhưng ý thức có thể tác động tích cực hoặc tiêu cực trở lại vật chất qua hoạt động thực tiễn. (Triet.txt, dòng 567+)"
            },
            {
                id: "M2-FQ3-2",
                module: "M2",
                lessonId: "M2-L5",
                text: "Trí tuệ nhân tạo (AI) có ý thức như con người không? Tại sao?",
                options: [
                    { id: "a", text: "Có — vì AI xử lý thông tin như bộ óc người" },
                    { id: "b", text: "Không — AI chỉ là quá trình vật lý được lập trình; chỉ mô phỏng, không sáng tạo lại hiện thực trong bản thân như ý thức người" },
                    { id: "c", text: "Chưa biết — tùy thuộc vào mức độ phát triển công nghệ" }
                ],
                correctOptionId: "b",
                rationale: "'Máy không thể sáng tạo lại hiện thực dưới dạng tinh thần trong bản thân nó. Năng lực đó chỉ có con người có ý thức mới thực hiện được.' (Triet.txt, dòng 563)"
            },
            {
                id: "M2-FQ3-3",
                module: "M2",
                lessonId: "M2-L6",
                text: "Muốn ý thức đúng đắn phát huy tác dụng trong thực tiễn, cần điều kiện gì?",
                options: [
                    { id: "a", text: "Chỉ cần có nhận thức đúng — ý thức đúng tự nhiên sẽ thành hiện thực" },
                    { id: "b", text: "Phải gắn với hoạt động thực tiễn — ý thức thể hiện sức mạnh qua hành động cải tạo thế giới khách quan" },
                    { id: "c", text: "Phải có điều kiện vật chất hoàn toàn thuận lợi trước rồi mới hành động" }
                ],
                correctOptionId: "b",
                rationale: "'Sức sáng tạo của ý thức trong tinh thần và sức sáng tạo của con người trong thực tiễn... chỉ là những biểu hiện khác nhau của năng lực sáng tạo, khẳng định sức mạnh của con người trong nhận thức và cải tạo thế giới.' (Triet.txt, dòng 546)"
            },
            {
                id: "M2-FQ3-4",
                module: "M2",
                lessonId: "M2-L6",
                text: "Câu nào sau đây thể hiện đúng nguyên tắc phương pháp luận từ CNDV biện chứng về ý thức?",
                options: [
                    { id: "a", text: "Chỉ cần tư duy tích cực — mọi khó khăn sẽ tự giải quyết" },
                    { id: "b", text: "Xuất phát từ hiện thực, phát huy tính sáng tạo chủ quan, thống nhất lý luận với thực tiễn" },
                    { id: "c", text: "Chấp nhận hoàn cảnh, không cố gắng cải tạo những gì khó thay đổi" }
                ],
                correctOptionId: "b",
                rationale: "Nguyên tắc từ CNDV biện chứng: tôn trọng khách quan (điều kiện vật chất thực tế) + phát huy tính năng động sáng tạo của ý thức + thống nhất lý luận–thực tiễn. Tránh cả duy ý chí lẫn thụ động."
            }
        ]
    }
};

// =============================================
// MODULE 2 — Bài kiểm tra tổng kết (12 câu)
// sourceRef: Giáo trình Triết học Mác-Lênin 2021, Chương 2, dòng 511-610
// =============================================

const MODULE_QUIZ_M2 = {
    id: "M2-FINAL",
    title: "Kiểm tra Module 2: Ý thức",
    module: "M2",
    passingScore: 75,
    achievement: "origin-analyst",
    xp: 10,
    questions: [
        {
            id: "M2-Q1",
            module: "M2",
            text: "Chủ nghĩa duy tâm chủ quan (Berkeley, Mach) lý giải nguồn gốc ý thức như thế nào?",
            options: [
                { id: "a", text: "Ý thức do 'ý niệm tuyệt đối' sinh ra — ý thức người chỉ là 'hồi tưởng ý niệm'" },
                { id: "b", text: "Cảm giác là tồn tại duy nhất, tiên thiên — thế giới vật chất do cảm giác sinh ra" },
                { id: "c", text: "Ý thức là chức năng của bộ óc, sản phẩm của tiến hóa sinh học" }
            ],
            correctOptionId: "b",
            rationale: "CNDT chủ quan (Berkeley, Mach): 'tuyệt đối hóa vai trò của cảm giác, coi cảm giác là tồn tại duy nhất, tiên thiên, sản sinh ra thế giới vật chất.' (Triet.txt, dòng 515)"
        },
        {
            id: "M2-Q2",
            module: "M2",
            text: "Sai lầm của 'chủ nghĩa duy vật tầm thường' (ví dụ: 'óc tiết ra ý thức như gan tiết ra mật') là gì?",
            options: [
                { id: "a", text: "Phủ nhận bộ óc là cơ quan vật chất của ý thức" },
                { id: "b", text: "Đồng nhất ý thức với vật chất — coi ý thức là một dạng vật chất cụ thể, bỏ qua tính chủ quan, sáng tạo" },
                { id: "c", text: "Tuyệt đối hóa vai trò của ý thức, tách khỏi vật chất" }
            ],
            correctOptionId: "b",
            rationale: "Duy vật tầm thường đồng nhất ý thức với vật chất: 'Óc tiết ra ý thức như gan tiết ra mật' — tầm thường hóa, bỏ qua bản chất phản ánh-sáng tạo của ý thức. (Triet.txt, dòng 518)"
        },
        {
            id: "M2-Q3",
            module: "M2",
            text: "C. Mác khẳng định điều gì về nguồn gốc của ý niệm (ý thức)?",
            options: [
                { id: "a", text: "'Ý niệm chẳng qua chỉ là vật chất được đem chuyển vào trong đầu óc con người và được cải biến đi ở trong đó'" },
                { id: "b", text: "'Ý thức là bản thể đầu tiên, tạo ra thế giới vật chất'" },
                { id: "c", text: "'Ý thức và vật chất cùng tồn tại song song, không cái nào có trước'" }
            ],
            correctOptionId: "a",
            rationale: "C. Mác: 'ý niệm chẳng qua chỉ là vật chất được đem chuyển vào trong đầu óc con người và được cải biến đi ở trong đó.' (Triet.txt, dòng 521)"
        },
        {
            id: "M2-Q4",
            module: "M2",
            text: "Vai trò của ngôn ngữ đối với ý thức là gì?",
            options: [
                { id: "a", text: "Ngôn ngữ chỉ là phương tiện giao tiếp bề ngoài, không ảnh hưởng đến tư duy" },
                { id: "b", text: "Ngôn ngữ là 'vỏ vật chất' của tư duy, hiện thực trực tiếp của ý thức — giúp khái quát hóa, trừu tượng hóa và lưu giữ tri thức" },
                { id: "c", text: "Ngôn ngữ quan trọng hơn lao động trong việc hình thành ý thức" }
            ],
            correctOptionId: "b",
            rationale: "'Ngôn ngữ là hệ thống tín hiệu vật chất mang nội dung ý thức... vừa là phương tiện giao tiếp, vừa là công cụ của tư duy... giúp con người khái quát, trừu tượng hóa.' (Triet.txt, dòng 532)"
        },
        {
            id: "M2-Q5",
            module: "M2",
            text: "Sự phản ánh ý thức là quá trình thống nhất của mấy mặt?",
            options: [
                { id: "a", text: "2 mặt: nhận thức và hành động" },
                { id: "b", text: "3 mặt: trao đổi thông tin → mô hình hóa trong tư duy → chuyển hóa mô hình ra hiện thực" },
                { id: "c", text: "4 mặt: cảm giác, tri giác, biểu tượng, khái niệm" }
            ],
            correctOptionId: "b",
            rationale: "'Sự phản ánh ý thức là quá trình thống nhất của ba mặt: (1) trao đổi thông tin hai chiều; (2) mô hình hóa đối tượng trong tư duy; (3) chuyển hóa mô hình từ tư duy ra hiện thực khách quan.' (Triet.txt, dòng 544)"
        },
        {
            id: "M2-Q6",
            module: "M2",
            text: "Tiềm thức và vô thức có điểm gì khác nhau?",
            options: [
                { id: "a", text: "Tiềm thức = tri thức đã thành kỹ năng bán tự động; vô thức = không có lý trí điều khiển, bản năng/thói quen" },
                { id: "b", text: "Chúng giống nhau — cả hai đều là ý thức nằm sâu trong não bộ" },
                { id: "c", text: "Vô thức chứa tri thức; tiềm thức chứa bản năng" }
            ],
            correctOptionId: "a",
            rationale: "Tiềm thức: 'những tri thức mà chủ thể có từ trước gần như đã thành bản năng, kỹ năng nằm trong tầng sâu ý thức' (dòng 558). Vô thức: 'không phải do lý trí điều khiển, nằm ngoài phạm vi của lý trí' (dòng 559)."
        },
        {
            id: "M2-Q7",
            module: "M2",
            text: "Ý thức là 'hình ảnh chủ quan' nghĩa là gì — liệu điều này có mâu thuẫn với tính khách quan của nhận thức không?",
            options: [
                { id: "a", text: "Mâu thuẫn — nếu chủ quan thì không thể khách quan được" },
                { id: "b", text: "Không mâu thuẫn — nội dung phản ánh là khách quan, nhưng cách phản ánh mang dấu ấn chủ thể (kinh nghiệm, điều kiện lịch sử)" },
                { id: "c", text: "Mâu thuẫn — chứng tỏ nhận thức của mỗi người hoàn toàn khác nhau, không có chân lý chung" }
            ],
            correctOptionId: "b",
            rationale: "'Kết quả phản ánh của ý thức tùy thuộc vào nhiều yếu tố: đối tượng phản ánh, điều kiện lịch sử - xã hội, phẩm chất, năng lực, kinh nghiệm sống của chủ thể phản ánh.' (Triet.txt, dòng 541). Nội dung khách quan, hình thức chủ quan."
        },
        {
            id: "M2-Q8",
            module: "M2",
            text: "Cấu trúc ý thức gồm những thành phần nào (theo chiều rộng — các lớp)?",
            options: [
                { id: "a", text: "Tri thức, tình cảm, ý chí — ba thành phần tương hỗ" },
                { id: "b", text: "Cảm giác, tri giác, biểu tượng, khái niệm, phán đoán, suy luận" },
                { id: "c", text: "Ý thức cá nhân và ý thức xã hội" }
            ],
            correctOptionId: "a",
            rationale: "Theo chiều rộng (các lớp cấu trúc): tri thức (nội dung, phương thức tồn tại cơ bản), tình cảm (thái độ với đối tượng), ý chí (nỗ lực vượt khó khăn). (Triet.txt, dòng 550-553)"
        },
        {
            id: "M2-Q9",
            module: "M2",
            text: "Tự ý thức là gì và tại sao nó quan trọng?",
            options: [
                { id: "a", text: "Ý thức hướng về nhận thức bản thân trong mối quan hệ với thế giới — đánh dấu trình độ phát triển của ý thức" },
                { id: "b", text: "Khả năng suy nghĩ độc lập, không bị ảnh hưởng bởi xã hội" },
                { id: "c", text: "Ý thức cá nhân tách biệt hoàn toàn với ý thức xã hội" }
            ],
            correctOptionId: "a",
            rationale: "'Tự ý thức là ý thức hướng về nhận thức bản thân mình trong mối quan hệ với ý thức về thế giới bên ngoài... đánh dấu trình độ phát triển của ý thức.' (Triet.txt, dòng 556)"
        },
        {
            id: "M2-Q10",
            module: "M2",
            text: "Áp dụng: Một học sinh đọc sách triết và hiểu bài, nhưng khi thi thì trả lời sai. Hiện tượng này liên quan đến gì?",
            options: [
                { id: "a", text: "Tự ý thức chưa phát triển đủ — chưa tự đánh giá được năng lực thực sự" },
                { id: "b", text: "Sự phản ánh ý thức chưa hoàn thiện — thiếu bước 'chuyển hóa mô hình ra hiện thực' qua thực hành" },
                { id: "c", text: "Vô thức cản trở — bản năng lo lắng chi phối trong kỳ thi" }
            ],
            correctOptionId: "b",
            rationale: "Bước 3 của phản ánh ý thức: 'chuyển hóa mô hình từ tư duy ra hiện thực... biến cái quan niệm thành cái thực tại.' Thiếu thực hành → chưa hoàn thành vòng phản ánh. Cần 'sáng tạo đồng bộ nội dung, phương pháp, phương tiện phù hợp'. (Triet.txt, dòng 544)"
        },
        {
            id: "M2-Q11",
            module: "M2",
            text: "Tại sao 'ý thức xã hội chủ nghĩa giữ vai trò chủ đạo' là yêu cầu quan trọng trong xây dựng đất nước?",
            options: [
                { id: "a", text: "Vì ý thức quan trọng hơn điều kiện kinh tế — cần định hướng tinh thần trước" },
                { id: "b", text: "Vì ý thức đúng đắn (CNXH) tác động tích cực trở lại nền tảng vật chất, thúc đẩy thực tiễn cách mạng" },
                { id: "c", text: "Vì người dân cần được kiểm soát tư tưởng để ổn định xã hội" }
            ],
            correctOptionId: "b",
            rationale: "CNDV biện chứng: ý thức đúng tác động tích cực trở lại vật chất qua thực tiễn. 'Muốn ý thức xã hội chủ nghĩa thực sự giữ vai trò chủ đạo... cần quán triệt đường lối đổi mới, lấy đổi mới kinh tế làm trung tâm.' (Triet.txt, dòng 566)"
        },
        {
            id: "M2-Q12",
            module: "M2",
            text: "Nguyên tắc phương pháp luận cốt lõi rút ra từ mối quan hệ vật chất–ý thức là gì?",
            options: [
                { id: "a", text: "Phải luôn đặt lợi ích vật chất lên trên tinh thần" },
                { id: "b", text: "Tôn trọng tính khách quan của vật chất, đồng thời phát huy tính năng động sáng tạo của ý thức — tránh duy ý chí lẫn thụ động" },
                { id: "c", text: "Ưu tiên giáo dục tư tưởng vì ý thức thay đổi xã hội nhanh nhất" }
            ],
            correctOptionId: "b",
            rationale: "Nguyên tắc: (1) Tôn trọng khách quan — xuất phát từ thực tế; (2) Phát huy năng động chủ quan — sáng tạo, chủ động; (3) Thống nhất biện chứng — lý luận + thực tiễn. Tránh duy ý chí (lệch cực 2) và thụ động (lệch cực 1)."
        }
    ]
};

// Export M2 quiz data
if (typeof window !== 'undefined') {
    window.FORMATIVE_QUIZZES_M2 = FORMATIVE_QUIZZES_M2;
    window.MODULE_QUIZ_M2 = MODULE_QUIZ_M2;
}
