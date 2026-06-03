// =============================================
// MODULE 3 — QUY LUẬT LƯỢNG ↔ CHẤT
// Kiểm tra hình thành (Formative Quizzes)
// sourceRef: Giáo trình Triết học Mác-Lênin 2021, Chương 3 — dòng 727–751
// =============================================

const FORMATIVE_QUIZZES_M3 = {

    // ── M3-FQ1: Sau Bài 3.1–3.2 — Quy luật & Chất + Lượng ──────────────────
    "M3-FQ1": {
        title: "Kiểm tra hình thành: Chất & Lượng",
        lessonId: "M3-L2",
        module: "M3",
        passingScore: 70,
        achievement: "quantity-tracker",
        questions: [
            {
                id: "M3-FQ1-1", module: "M3", lessonId: "M3-L2",
                text: 'Theo CNDV biện chứng, "chất" của sự vật là gì?',
                options: [
                    { id: "a", text: "Màu sắc, kích thước, khối lượng đo lường được" },
                    { id: "b", text: "Tính quy định khách quan vốn có — sự thống nhất hữu cơ của các thuộc tính làm cho sự vật là nó chứ không phải sự vật khác" },
                    { id: "c", text: "Cảm nhận chủ quan của con người về sự vật" }
                ],
                correctOptionId: "b",
                rationale: '"Chất là khái niệm dùng để chỉ tính quy định khách quan vốn có của sự vật, hiện tượng; là sự thống nhất hữu cơ của các thuộc tính, yếu tố tạo nên sự vật, hiện tượng làm cho sự vật, hiện tượng là nó mà không phải là sự vật, hiện tượng khác." (Triet.txt, dòng 735)'
            },
            {
                id: "M3-FQ1-2", module: "M3", lessonId: "M3-L2",
                text: "Tại sao kim cương và than chì lại có chất hoàn toàn khác nhau dù đều được cấu tạo từ carbon?",
                options: [
                    { id: "a", text: "Vì chúng có nguồn gốc địa chất khác nhau — một từ núi lửa, một từ thực vật" },
                    { id: "b", text: "Vì phương thức liên kết giữa các nguyên tử carbon khác nhau làm cho chất của chúng hoàn toàn khác nhau" },
                    { id: "c", text: "Vì lượng carbon trong mỗi chất khác nhau về số lượng" }
                ],
                correctOptionId: "b",
                rationale: '"Do phương thức liên kết giữa các nguyên tử carbon là khác nhau, vì thế chất của chúng hoàn toàn khác nhau. Kim cương rất cứng, còn than chì lại mềm." (Triet.txt, dòng 737)'
            },
            {
                id: "M3-FQ1-3", module: "M3", lessonId: "M3-L3",
                text: 'Đặc điểm nổi bật nhất của "lượng" theo phép biện chứng duy vật là gì?',
                options: [
                    { id: "a", text: "Tính ổn định tương đối — lượng ít khi thay đổi hơn chất" },
                    { id: "b", text: "Tính khách quan — lượng là một dạng biểu hiện của vật chất, chiếm vị trí nhất định trong không gian và thời gian" },
                    { id: "c", text: "Tính chủ quan — lượng do con người định nghĩa và đặt ra đơn vị đo" }
                ],
                correctOptionId: "b",
                rationale: '"Đặc điểm cơ bản của lượng là tính khách quan vì nó là một dạng biểu hiện của vật chất, chiếm một vị trí nhất định trong không gian và tồn tại trong thời gian nhất định." (Triet.txt, dòng 739)'
            },
            {
                id: "M3-FQ1-4", module: "M3", lessonId: "M3-L3",
                text: "Câu nào sau đây nói ĐÚNG nhất về tính tương đối của ranh giới chất–lượng?",
                options: [
                    { id: "a", text: "Chất và lượng luôn tách biệt rõ ràng, không bao giờ chuyển hóa cho nhau" },
                    { id: "b", text: "Ranh giới chất–lượng chỉ tương đối: cái là lượng trong quan hệ này, lại có thể là chất trong quan hệ khác" },
                    { id: "c", text: "Lượng luôn quan trọng hơn chất vì đo được bằng số liệu cụ thể" }
                ],
                correctOptionId: "b",
                rationale: '"Sự phân biệt giữa chất và lượng chỉ có ý nghĩa tương đối, tùy theo từng mối quan hệ mà xác định đâu là lượng và đâu là chất; cái là lượng trong mối quan hệ này, lại có thể là chất trong mối quan hệ khác." (Triet.txt, dòng 739)'
            }
        ]
    },

    // ── M3-FQ2: Sau Bài 3.3–3.4 — Độ, Điểm nút, Bước nhảy ─────────────────
    "M3-FQ2": {
        title: "Kiểm tra hình thành: Độ, Điểm nút & Bước nhảy",
        lessonId: "M3-L4",
        module: "M3",
        passingScore: 70,
        questions: [
            {
                id: "M3-FQ2-1", module: "M3", lessonId: "M3-L4",
                text: '"Độ" trong quy luật lượng–chất là gì?',
                options: [
                    { id: "a", text: "Tốc độ thay đổi của sự vật theo thời gian" },
                    { id: "b", text: "Giới hạn tồn tại của sự vật mà trong đó lượng thay đổi nhưng chưa dẫn đến thay đổi chất — sự vật vẫn là nó" },
                    { id: "c", text: "Mức độ khác biệt giữa hai sự vật cùng loại" }
                ],
                correctOptionId: "b",
                rationale: '"Độ là khái niệm dùng để chỉ mối liên hệ thống nhất và quy định lẫn nhau giữa chất với lượng; là giới hạn tồn tại của sự vật, hiện tượng mà trong đó sự thay đổi về lượng chưa dẫn đến sự thay đổi về chất; sự vật, hiện tượng vẫn là nó, chưa chuyển hóa thành sự vật, hiện tượng khác." (Triet.txt, dòng 741)'
            },
            {
                id: "M3-FQ2-2", module: "M3", lessonId: "M3-L4",
                text: '"Điểm nút" là gì trong quá trình lượng đổi dẫn đến chất đổi?',
                options: [
                    { id: "a", text: "Điểm giữa của quá trình thay đổi về lượng" },
                    { id: "b", text: "Điểm giới hạn mà tại đó lượng phá vỡ độ cũ, chất bắt đầu chuyển hóa — thời điểm bước nhảy bắt đầu xảy ra" },
                    { id: "c", text: "Điểm mà tại đó sự vật dừng thay đổi hoàn toàn" }
                ],
                correctOptionId: "b",
                rationale: '"Điểm giới hạn mà tại đó sự thay đổi về lượng đạt tới chỗ phá vỡ độ cũ, làm cho chất của sự vật, hiện tượng thay đổi, chuyển thành chất mới, thời điểm mà tại đó bắt đầu xảy ra bước nhảy, gọi là điểm nút." (Triet.txt, dòng 741)'
            },
            {
                id: "M3-FQ2-3", module: "M3", lessonId: "M3-L4",
                text: "Phân loại bước nhảy theo QUY MÔ & NHỊP ĐỘ gồm những loại nào?",
                options: [
                    { id: "a", text: "Bước nhảy tức thời và bước nhảy dần dần" },
                    { id: "b", text: "Bước nhảy toàn bộ và bước nhảy cục bộ" },
                    { id: "c", text: "Bước nhảy trong tự nhiên và bước nhảy trong xã hội" }
                ],
                correctOptionId: "b",
                rationale: '"Căn cứ vào quy mô và nhịp độ của bước nhảy, có bước nhảy toàn bộ và bước nhảy cục bộ. Bước nhảy toàn bộ làm cho tất cả các mặt, các bộ phận, các yếu tố... của sự vật, hiện tượng thay đổi." (Triet.txt, dòng 744)'
            },
            {
                id: "M3-FQ2-4", module: "M3", lessonId: "M3-L4",
                text: "Phân loại bước nhảy theo THỜI GIAN & CƠ CHẾ là gì? Áp dụng vào ví dụ nào?",
                options: [
                    { id: "a", text: "Tức thời (ví dụ: nước đá tan thành nước) và dần dần (ví dụ: một người dần dần trưởng thành về nhận thức)" },
                    { id: "b", text: "Chủ quan (do con người quyết định) và khách quan (tự nhiên quy định)" },
                    { id: "c", text: "Tiến bộ (đi lên) và thoái bộ (đi xuống)" }
                ],
                correctOptionId: "a",
                rationale: '"Căn cứ vào thời gian của sự thay đổi về chất: có bước nhảy tức thời làm chất biến đổi mau chóng ở tất cả các bộ phận. Bước nhảy dần dần là quá trình thay đổi về chất diễn ra bằng cách tích lũy dần những yếu tố của chất mới và loại bỏ dần các yếu tố của chất cũ." (Triet.txt, dòng 745)'
            }
        ]
    },

    // ── M3-FQ3: Sau Bài 3.5–3.6 — Phương pháp luận & Ứng dụng ─────────────
    "M3-FQ3": {
        title: "Kiểm tra hình thành: Phương pháp luận & Ứng dụng",
        lessonId: "M3-L6",
        module: "M3",
        passingScore: 70,
        questions: [
            {
                id: "M3-FQ3-1", module: "M3", lessonId: "M3-L5",
                text: "Nguyên tắc phương pháp luận số 1 từ quy luật Lượng-Chất là gì?",
                options: [
                    { id: "a", text: "Luôn thực hiện bước nhảy ngay khi có cơ hội, không cần tích lũy" },
                    { id: "b", text: "Phải biết tích lũy về lượng để có biến đổi về chất; không được nôn nóng cũng như không được bảo thủ" },
                    { id: "c", text: "Tập trung vào chất, không cần chú ý đến lượng" }
                ],
                correctOptionId: "b",
                rationale: '"Trong hoạt động nhận thức và hoạt động thực tiễn phải biết tích lũy về lượng để có biến đổi về chất; không được nôn nóng cũng như không được bảo thủ." (Triet.txt, dòng 748)'
            },
            {
                id: "M3-FQ3-2", module: "M3", lessonId: "M3-L5",
                text: '"Tư tưởng nôn nóng" trong thực tiễn biểu hiện như thế nào theo quy luật Lượng-Chất?',
                options: [
                    { id: "a", text: "Không dám thực hiện bước nhảy, coi sự phát triển chỉ là thay đổi dần về lượng" },
                    { id: "b", text: "Không chú ý thỏa đáng đến tích lũy về lượng, cho rằng phát triển chỉ là những bước nhảy liên tục" },
                    { id: "c", text: "Quá chú ý đến điều kiện khách quan mà bỏ qua điều kiện chủ quan" }
                ],
                correctOptionId: "b",
                rationale: '"Tư tưởng nôn nóng thường biểu hiện ở chỗ không chú ý thỏa đáng đến sự tích lũy về lượng mà cho rằng sự phát triển của sự vật, hiện tượng chỉ là những bước nhảy liên tục." (Triet.txt, dòng 749)'
            },
            {
                id: "M3-FQ3-3", module: "M3", lessonId: "M3-L5",
                text: 'Khi lượng đã đạt đến điểm nút, tại sao vẫn phải chú ý đến "điều kiện chủ quan" khi thực hiện bước nhảy trong lĩnh vực xã hội?',
                options: [
                    { id: "a", text: "Vì quy luật xã hội không khách quan như quy luật tự nhiên" },
                    { id: "b", text: "Vì quy luật xã hội chỉ diễn ra thông qua hoạt động có ý thức của con người — cần cả quyết tâm, nghị lực và thời cơ" },
                    { id: "c", text: "Vì điều kiện chủ quan quan trọng hơn điều kiện khách quan trong xã hội" }
                ],
                correctOptionId: "b",
                rationale: '"Quy luật xã hội chỉ diễn ra thông qua hoạt động có ý thức của con người; do vậy, khi thực hiện bước nhảy trong lĩnh vực xã hội, tuy vẫn phải tuân theo điều kiện khách quan, nhưng cũng phải chú ý đến điều kiện chủ quan." (Triet.txt, dòng 750)'
            },
            {
                id: "M3-FQ3-4", module: "M3", lessonId: "M3-L6",
                text: "Theo quy luật Lượng-Chất, sau khi chất mới ra đời, điều gì tiếp tục xảy ra?",
                options: [
                    { id: "a", text: "Quá trình vận động dừng lại cho đến khi có tác nhân bên ngoài" },
                    { id: "b", text: "Chất mới tạo ra lượng mới phù hợp, lượng mới lại tiếp tục biến đổi đến điểm nút mới, tạo ra bước nhảy mới — chu kỳ vô tận" },
                    { id: "c", text: "Chất mới cố định, không thay đổi nữa vì đã đạt đỉnh phát triển" }
                ],
                correctOptionId: "b",
                rationale: '"Khi chất mới đã khẳng định mình, nó tạo ra lượng mới phù hợp để có sự thống nhất mới giữa chất với lượng. Sự vật, hiện tượng mới xuất hiện... lượng lại biến đổi, đến điểm nút mới, lại xảy ra bước nhảy mới. Cứ như thế... tạo nên một đường dài thay thế nhau vô tận." (Triet.txt, dòng 742)'
            }
        ]
    }
};

// =============================================
// MODULE 3 — Bài kiểm tra tổng kết (12 câu)
// sourceRef: Triet.txt, dòng 727–751
// =============================================

const MODULE_QUIZ_M3 = {
    id: "M3-FINAL",
    title: "Kiểm tra Module 3: Quy luật Lượng ↔ Chất",
    module: "M3",
    passingScore: 75,
    achievement: "leap-master",
    xp: 10,
    questions: [
        {
            id: "M3-Q1", module: "M3",
            text: "Quy luật Lượng-Chất chỉ ra điều gì về sự vận động, phát triển của sự vật?",
            options: [
                { id: "a", text: "Nguyên nhân bên trong của sự phát triển — mâu thuẫn nội tại" },
                { id: "b", text: "Cách thức chung nhất của sự vận động: tích lũy lượng → bước nhảy chất → chất mới tạo lượng mới" },
                { id: "c", text: "Khuynh hướng đi lên của sự phát triển theo hình xoáy ốc" }
            ],
            correctOptionId: "b",
            rationale: '"Quy luật này chỉ ra cách thức chung nhất của sự vận động và phát triển, khi cho thấy sự thay đổi về chất chỉ xảy ra khi sự vật, hiện tượng đã tích lũy những thay đổi về lượng đạt đến ngưỡng nhất định." (Triet.txt, dòng 733)'
        },
        {
            id: "M3-Q2", module: "M3",
            text: "Chất của sự vật phụ thuộc vào những yếu tố nào?",
            options: [
                { id: "a", text: "Chỉ phụ thuộc vào chất của các yếu tố cấu thành" },
                { id: "b", text: "Phụ thuộc vào chất của yếu tố cấu thành VÀ phương thức liên kết giữa các yếu tố đó" },
                { id: "c", text: "Chỉ phụ thuộc vào phương thức liên kết, không cần quan tâm bản thân các yếu tố" }
            ],
            correctOptionId: "b",
            rationale: '"Chất của sự vật không những được quy định bởi chất của những yếu tố tạo thành mà còn bởi phương thức liên kết giữa các yếu tố tạo thành, nghĩa là bởi kết cấu của sự vật." (Triet.txt, dòng 737)'
        },
        {
            id: "M3-Q3", module: "M3",
            text: 'Tại sao lượng "khó đo bằng số liệu cụ thể" trong một số lĩnh vực của xã hội và tư duy?',
            options: [
                { id: "a", text: "Vì các nhà khoa học chưa phát triển đủ công cụ đo lường" },
                { id: "b", text: "Vì trong những trường hợp đó lượng chỉ có thể nhận biết bằng năng lực trừu tượng hóa — không có đơn vị vật lý" },
                { id: "c", text: "Vì lượng trong xã hội mang tính chủ quan, phụ thuộc người đánh giá" }
            ],
            correctOptionId: "b",
            rationale: '"Trong một số trường hợp của xã hội và nhất là trong tư duy, lượng khó đo được bằng số liệu cụ thể mà chỉ có thể nhận biết được bằng năng lực trừu tượng hóa." (Triet.txt, dòng 739)'
        },
        {
            id: "M3-Q4", module: "M3",
            text: '"Độ mới" và "điểm nút mới" xuất hiện khi nào?',
            options: [
                { id: "a", text: "Khi lượng thay đổi đủ nhanh trong một thời gian ngắn" },
                { id: "b", text: "Khi bước nhảy hoàn thành: chất mới kết hợp với lượng mới tạo ra độ mới và điểm nút mới, bắt đầu chu kỳ mới" },
                { id: "c", text: "Khi con người can thiệp tích cực vào quá trình phát triển tự nhiên" }
            ],
            correctOptionId: "b",
            rationale: '"Sự thống nhất giữa lượng mới với chất mới tạo ra độ mới và điểm nút mới." (Triet.txt, dòng 741)'
        },
        {
            id: "M3-Q5", module: "M3",
            text: "Phân tích: Nước ở 25°C → 50°C → 99°C → 100°C (bốc hơi). Xác định đúng các phạm trù:",
            options: [
                { id: "a", text: "Độ = 0°C–99°C; Điểm nút = 100°C; Bước nhảy = quá trình bốc hơi; Chất mới = hơi nước" },
                { id: "b", text: "Độ = 25°C–100°C; Điểm nút = 50°C; Bước nhảy = tăng từ 50°C lên 100°C" },
                { id: "c", text: "Bước nhảy = mọi sự thay đổi nhiệt độ; Chất mới = nước nóng" }
            ],
            correctOptionId: "a",
            rationale: 'Từ 0°C → 100°C: lượng (nhiệt độ) tích lũy trong độ của nước lỏng; 100°C là điểm nút phá vỡ độ cũ; bốc hơi là bước nhảy (chuyển hóa căn bản về chất); hơi nước là chất mới. (Triet.txt, dòng 741)'
        },
        {
            id: "M3-Q6", module: "M3",
            text: "Cách mạng Tháng Tám 1945 ở Việt Nam thuộc loại bước nhảy nào?",
            options: [
                { id: "a", text: "Bước nhảy cục bộ, dần dần" },
                { id: "b", text: "Bước nhảy toàn bộ, tức thời — thay đổi toàn bộ chế độ chính trị trong thời gian ngắn" },
                { id: "c", text: "Bước nhảy cục bộ, tức thời" }
            ],
            correctOptionId: "b",
            rationale: 'Cách mạng 1945: bước nhảy toàn bộ (thay đổi tất cả các mặt cơ bản của xã hội — chính trị, giai cấp, nhà nước) + tức thời (diễn ra trong vài tuần). Tương phản với "Đổi mới 1986" là bước nhảy toàn bộ nhưng dần dần. (Triet.txt, dòng 744–745)'
        },
        {
            id: "M3-Q7", module: "M3",
            text: "Một sinh viên học môn Triết học: đọc 200 trang sách, làm 50 bài tập, thảo luận nhóm 10 buổi. Đây là quá trình gì theo quy luật Lượng-Chất?",
            options: [
                { id: "a", text: "Thực hiện bước nhảy liên tục về chất" },
                { id: "b", text: "Tích lũy lượng (kiến thức, kỹ năng) để chuẩn bị cho bước nhảy chất (hiểu sâu, tư duy biện chứng)" },
                { id: "c", text: "Thay đổi chất của môn học — làm cho môn học trở nên khó hơn" }
            ],
            correctOptionId: "b",
            rationale: '"Trong hoạt động nhận thức và hoạt động thực tiễn phải biết tích lũy về lượng để có biến đổi về chất." (dòng 748). Đọc sách, làm bài tập, thảo luận là tích lũy lượng → đạt điểm nút hiểu sâu → bước nhảy: tư duy biện chứng hình thành.'
        },
        {
            id: "M3-Q8", module: "M3",
            text: "Startup tăng vốn gấp 10 lần nhưng không cải tổ quy trình, văn hóa. Sau 1 năm, startup thất bại. Sai lầm theo quy luật Lượng-Chất là gì?",
            options: [
                { id: "a", text: "Bảo thủ — không dám thay đổi lượng (vốn đầu tư)" },
                { id: "b", text: "Nôn nóng — tăng lượng quá nhanh mà không tạo ra chất mới tương ứng (quy trình, văn hóa, năng lực)" },
                { id: "c", text: "Không thực hiện bước nhảy khi điều kiện đã chín muồi" }
            ],
            correctOptionId: "b",
            rationale: 'Đây là "nôn nóng" — tăng lượng (vốn) mà không chú ý đến việc thay đổi chất (hệ thống quản lý, văn hóa công ty, năng lực con người). Lượng thay đổi nhưng chất cũ vẫn giữ nguyên → không tạo ra độ mới → bước nhảy thất bại. (dòng 748–749)'
        },
        {
            id: "M3-Q9", module: "M3",
            text: 'Một nhà lãnh đạo nói: "Tình hình chưa chín muồi, chưa đến lúc thay đổi. Cứ từ từ." Nhưng thực ra điều kiện đã đủ. Sai lầm nào?',
            options: [
                { id: "a", text: "Nôn nóng — muốn thay đổi quá nhanh" },
                { id: "b", text: "Bảo thủ — không dám thực hiện bước nhảy khi điều kiện đã chín muồi, lượng đã đến điểm nút" },
                { id: "c", text: "Không sai — thận trọng là đúng đắn" }
            ],
            correctOptionId: "b",
            rationale: '"Tư tưởng bảo thủ thường biểu hiện ở chỗ không dám thực hiện bước nhảy, coi sự phát triển chỉ là những thay đổi về lượng." (Triet.txt, dòng 749). Khi lượng đã đạt điểm nút mà không thực hiện bước nhảy là bảo thủ.'
        },
        {
            id: "M3-Q10", module: "M3",
            text: 'Quy luật yêu cầu "chú ý đến phương thức liên kết" có nghĩa gì trong thực tiễn?',
            options: [
                { id: "a", text: "Chỉ cần tăng số lượng thành phần — nhiều hơn thì tốt hơn" },
                { id: "b", text: "Để thay đổi chất, đôi khi không cần thêm yếu tố mới mà cần thay đổi cách tổ chức, liên kết các yếu tố hiện có" },
                { id: "c", text: "Phương thức liên kết chỉ quan trọng trong hóa học, không áp dụng trong xã hội" }
            ],
            correctOptionId: "b",
            rationale: '"Phải nhận thức được sự thay đổi về chất còn phụ thuộc vào phương thức liên kết giữa các yếu tố tạo thành sự vật, hiện tượng; do đó, phải biết lựa chọn phương pháp phù hợp để tác động vào phương thức liên kết đó." (Triet.txt, dòng 751). VD: cùng 30 nhân viên nhưng thay đổi mô hình làm việc → chất đội nhóm thay đổi.'
        },
        {
            id: "M3-Q11", module: "M3",
            text: 'Ph. Ăngghen viết: "những sự biến đổi về chất chỉ có thể có được do thêm vào hay bớt đi một số lượng vật chất hay vận động." Câu này xác nhận điều gì?',
            options: [
                { id: "a", text: "Chất thay đổi ngẫu nhiên, không cần tích lũy lượng trước" },
                { id: "b", text: "Mọi biến đổi về chất đều có cơ sở từ biến đổi về lượng — quy luật này có tính phổ biến trong giới tự nhiên" },
                { id: "c", text: "Biến đổi về lượng và biến đổi về chất diễn ra đồng thời, không có trước sau" }
            ],
            correctOptionId: "b",
            rationale: 'Ph. Ăngghen: "...trong giới tự nhiên, thì những sự biến đổi về chất... chỉ có thể có được do thêm vào hay bớt đi một số lượng vật chất hay vận động." (Triet.txt, dòng 733). Xác nhận tính phổ biến: mọi biến đổi chất đều có nền tảng tích lũy lượng trước đó.'
        },
        {
            id: "M3-Q12", module: "M3",
            text: "Ứng dụng quy luật Lượng-Chất vào quá trình học ngoại ngữ: Bạn học tiếng Anh 30 phút/ngày trong 2 năm nhưng không tiến bộ rõ rệt. Phân tích và đề xuất:",
            options: [
                { id: "a", text: "Tăng thời gian học lên 3 giờ/ngày mà không thay đổi phương pháp — lượng tăng là đủ" },
                { id: "b", text: "30 phút/ngày × 2 năm = tích lũy lượng, nhưng có thể chưa đến điểm nút. Cần đánh giá xem phương thức học (chất của phương pháp) có phù hợp không — thay đổi cả lượng lẫn phương thức liên kết" },
                { id: "c", text: "Bỏ cuộc — 2 năm không tiến bộ chứng tỏ không có năng khiếu (chất bẩm sinh)" }
            ],
            correctOptionId: "b",
            rationale: 'Phân tích toàn diện: (1) 30 phút × 730 ngày = lượng đáng kể, nhưng chưa chắc đến điểm nút; (2) phương thức học (nghe thụ động, đọc grammar vs. thực hành giao tiếp) ảnh hưởng đến chất của lượng tích lũy; (3) cần cả: tăng lượng + thay đổi phương thức → điểm nút sẽ đến. (Triet.txt, dòng 748, 751)'
        }
    ]
};

// Export M3 quiz data
if (typeof window !== 'undefined') {
    window.FORMATIVE_QUIZZES_M3 = FORMATIVE_QUIZZES_M3;
    window.MODULE_QUIZ_M3 = MODULE_QUIZ_M3;
}
