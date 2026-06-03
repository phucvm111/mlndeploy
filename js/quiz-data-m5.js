// =============================================
// MODULE 5 — QUY LUẬT QUAN HỆ SẢN XUẤT PHÙ HỢP
// VỚI TRÌNH ĐỘ PHÁT TRIỂN CỦA LỰC LƯỢNG SẢN XUẤT
// sourceRef: Giáo trình Triết học Mác-Lênin 2021
//            Triet.txt, dòng 900–930
// =============================================

const FORMATIVE_QUIZZES_M5 = {

    // ── M5-FQ1: Sau Bài 5.1–5.3 — PTSX, LLSX & QHSX ──────────────────────
    "M5-FQ1": {
        title: "Kiểm tra hình thành: Phương thức SX, LLSX & QHSX",
        lessonId: "M5-L3",
        module: "M5",
        passingScore: 70,
        achievement: "production-analyst",
        questions: [
            {
                id: "M5-FQ1-1", module: "M5", lessonId: "M5-L1",
                text: "Phương thức sản xuất là gì và gồm mấy mặt cấu thành?",
                options: [
                    { id: "a", text: "Là cách thức con người tiến hành sản xuất; gồm hai mặt: lực lượng sản xuất (nội dung) và quan hệ sản xuất (hình thức xã hội)" },
                    { id: "b", text: "Là toàn bộ công cụ lao động mà xã hội sử dụng trong một thời kỳ nhất định" },
                    { id: "c", text: "Là hệ thống quan hệ kinh tế giữa người với người trong sản xuất, bao gồm sở hữu và phân phối" }
                ],
                correctOptionId: "a",
                rationale: '"Phương thức sản xuất là cách thức con người tiến hành quá trình sản xuất vật chất ở những giai đoạn lịch sử nhất định... là sự thống nhất giữa lực lượng sản xuất với một trình độ nhất định và quan hệ sản xuất tương ứng." (Triet.txt, dòng 900–901)'
            },
            {
                id: "M5-FQ1-2", module: "M5", lessonId: "M5-L2",
                text: "Trong lực lượng sản xuất, nhân tố nào được xác định là 'hàng đầu' và giữ vai trò quyết định?",
                options: [
                    { id: "a", text: "Công cụ lao động — vì đây là yếu tố cách mạng nhất và thước đo trình độ tác động vào tự nhiên" },
                    { id: "b", text: "Người lao động — là chủ thể sáng tạo, nguồn gốc của mọi sáng tạo trong sản xuất vật chất" },
                    { id: "c", text: "Tư liệu sản xuất — vì bao gồm cả công cụ lao động lẫn đối tượng lao động" }
                ],
                correctOptionId: "b",
                rationale: '"Người lao động là nhân tố hàng đầu giữ vai trò quyết định, bởi vì người lao động là chủ thể sáng tạo và sử dụng công cụ lao động... Người lao động là nguồn gốc của mọi sáng tạo trong sản xuất vật chất." (Triet.txt, dòng 905)'
            },
            {
                id: "M5-FQ1-3", module: "M5", lessonId: "M5-L3",
                text: "Quan hệ sản xuất gồm ba mặt. Mặt nào được coi là 'xuất phát, cơ bản, trung tâm' và quyết định các mặt còn lại?",
                options: [
                    { id: "a", text: "Quan hệ về tổ chức và quản lý sản xuất — vì quyết định trực tiếp quy mô và tốc độ sản xuất" },
                    { id: "b", text: "Quan hệ về phân phối sản phẩm — vì kích thích trực tiếp lợi ích và động lực người lao động" },
                    { id: "c", text: "Quan hệ sở hữu về tư liệu sản xuất — lực lượng nào nắm phương tiện sản xuất thì quyết định quản lý và phân phối" }
                ],
                correctOptionId: "c",
                rationale: '"Quan hệ sở hữu về tư liệu sản xuất là quan hệ xuất phát, cơ bản, trung tâm của quan hệ sản xuất, luôn có vai trò quyết định các quan hệ khác bởi vì, lực lượng xã hội nào nắm phương tiện vật chất chủ yếu của quá trình sản xuất thì sẽ quyết định việc quản lý quá trình sản xuất và phân phối sản phẩm." (Triet.txt, dòng 909)'
            },
            {
                id: "M5-FQ1-4", module: "M5", lessonId: "M5-L2",
                text: "C. Mác viết: 'Những thời đại kinh tế khác nhau không phải ở chỗ chúng sản xuất ra cái gì mà là ở chỗ chúng sản xuất bằng cách nào, với những tư liệu lao động nào.' Câu này nói lên điều gì?",
                options: [
                    { id: "a", text: "Sản phẩm sản xuất ra quan trọng hơn phương tiện sản xuất" },
                    { id: "b", text: "Công cụ lao động là tiêu chuẩn phân biệt các thời đại kinh tế — trình độ công cụ phản ánh trình độ tác động của con người vào tự nhiên" },
                    { id: "c", text: "Cách thức quản lý và tổ chức sản xuất là tiêu chí duy nhất để đánh giá nền kinh tế" }
                ],
                correctOptionId: "b",
                rationale: '"Công cụ lao động là yếu tố vật chất \"trung gian\", \"truyền dẫn\"... là \"khí quan\" của bộ óc, là tri thức được vật thể hóa... là thước đo trình độ tác động, cải biến tự nhiên của con người và tiêu chuẩn để phân biệt các thời đại kinh tế khác nhau." (Triet.txt, dòng 904)'
            }
        ]
    },

    // ── M5-FQ2: Sau Bài 5.4 — LLSX quyết định QHSX & Vòng chu kỳ ──────────
    "M5-FQ2": {
        title: "Kiểm tra hình thành: LLSX quyết định QHSX & Quy luật",
        lessonId: "M5-L4",
        module: "M5",
        passingScore: 70,
        questions: [
            {
                id: "M5-FQ2-1", module: "M5", lessonId: "M5-L4",
                text: "Lực lượng sản xuất quyết định quan hệ sản xuất theo nghĩa nào?",
                options: [
                    { id: "a", text: "LLSX quyết định sự ra đời, nội dung và tính chất của QHSX; QHSX phải phù hợp với trình độ phát triển của LLSX" },
                    { id: "b", text: "LLSX và QHSX có quan hệ bình đẳng — bên nào cũng có thể quyết định bên kia tùy hoàn cảnh" },
                    { id: "c", text: "LLSX chỉ quyết định hình thức sở hữu, không quyết định cách tổ chức và phân phối" }
                ],
                correctOptionId: "a",
                rationale: '"Sự vận động và phát triển của phương thức sản xuất bắt đầu từ sự biến đổi của lực lượng sản xuất... Lực lượng sản xuất quyết định quan hệ sản xuất." (Triet.txt, dòng 913–916). "Lực lượng sản xuất quyết định sự ra đời của một kiểu quan hệ sản xuất mới... quyết định nội dung và tính chất của quan hệ sản xuất." (dòng 918)'
            },
            {
                id: "M5-FQ2-2", module: "M5", lessonId: "M5-L4",
                text: "C. Mác viết: 'Cái cối xay quay bằng tay đưa lại xã hội có lãnh chúa, các cối xay chạy bằng hơi nước đưa lại xã hội có nhà tư bản công nghiệp.' Câu này muốn nói gì?",
                options: [
                    { id: "a", text: "Công nghệ quyết định hoàn toàn cấu trúc xã hội, không cần xét đến yếu tố nào khác" },
                    { id: "b", text: "Trình độ phát triển của lực lượng sản xuất (công cụ lao động) quyết định kiểu quan hệ sản xuất (xã hội) tương ứng" },
                    { id: "c", text: "Lịch sử kinh tế phụ thuộc vào nguồn năng lượng sử dụng — tay và hơi nước" }
                ],
                correctOptionId: "b",
                rationale: '"Do có những lực lượng sản xuất mới, loài người thay đổi phương thức sản xuất của mình... loài người thay đổi tất cả những quan hệ xã hội của mình. Cái cối xay quay bằng tay đưa lại xã hội có lãnh chúa, các cối xay chạy bằng hơi nước đưa lại xã hội có nhà tư bản công nghiệp." (Triet.txt, dòng 917)'
            },
            {
                id: "M5-FQ2-3", module: "M5", lessonId: "M5-L4",
                text: "C. Mác khẳng định: 'Từ chỗ là những hình thức phát triển của lực lượng sản xuất, những quan hệ ấy trở thành những xiềng xích của các lực lượng sản xuất. Khi đó bắt đầu thời đại một cuộc cách mạng xã hội.' Điều này xảy ra khi nào?",
                options: [
                    { id: "a", text: "Khi có chiến tranh hoặc thiên tai phá hoại lực lượng sản xuất" },
                    { id: "b", text: "Khi LLSX phát triển vượt trước đến mức QHSX hiện có không còn phù hợp — QHSX từ 'hình thức phát triển' trở thành 'xiềng xích' kìm hãm LLSX" },
                    { id: "c", text: "Khi giai cấp thống trị tự nguyện nhường quyền lực cho giai cấp mới" }
                ],
                correctOptionId: "b",
                rationale: '"Tới một giai đoạn phát triển nào đó của chúng, các lực lượng sản xuất vật chất của xã hội mâu thuẫn với những quan hệ sản xuất hiện có... Từ chỗ là những hình thức phát triển của lực lượng sản xuất, những quan hệ ấy trở thành những xiềng xích của các lực lượng sản xuất. Khi đó bắt đầu thời đại một cuộc cách mạng xã hội." (Triet.txt, dòng 925)'
            },
            {
                id: "M5-FQ2-4", module: "M5", lessonId: "M5-L4",
                text: "Vòng chu kỳ vận động của mâu thuẫn biện chứng giữa LLSX và QHSX diễn ra theo trình tự nào?",
                options: [
                    { id: "a", text: "Không phù hợp → cách mạng → phù hợp → lại không phù hợp → cách mạng mới..." },
                    { id: "b", text: "Phù hợp → LLSX phát triển vượt → mâu thuẫn (QHSX thành 'xiềng xích') → cách mạng thiết lập QHSX mới phù hợp → chu kỳ tiếp theo ở trình độ cao hơn" },
                    { id: "c", text: "QHSX phù hợp → QHSX vượt trước → LLSX bắt kịp → cân bằng mới" }
                ],
                correctOptionId: "b",
                rationale: '"Trạng thái vận động của mâu thuẫn biện chứng giữa lực lượng sản xuất và quan hệ sản xuất diễn ra là từ phù hợp đến không phù hợp, rồi đến sự phù hợp mới ở trình độ cao hơn." (Triet.txt, dòng 925)'
            }
        ]
    },

    // ── M5-FQ3: Sau Bài 5.5–5.6 — Tác động trở lại & Phương pháp luận ─────
    "M5-FQ3": {
        title: "Kiểm tra hình thành: Tác động trở lại của QHSX & Phương pháp luận",
        lessonId: "M5-L6",
        module: "M5",
        passingScore: 70,
        questions: [
            {
                id: "M5-FQ3-1", module: "M5", lessonId: "M5-L5",
                text: "QHSX tác động trở lại LLSX theo mấy chiều hướng và điều kiện của từng chiều là gì?",
                options: [
                    { id: "a", text: "Một chiều duy nhất: luôn thúc đẩy LLSX nếu được xây dựng đúng đắn" },
                    { id: "b", text: "Hai chiều: thúc đẩy (khi QHSX phù hợp với trình độ LLSX) hoặc kìm hãm (khi không phù hợp — đi sau hoặc vượt trước)" },
                    { id: "c", text: "Ba chiều: thúc đẩy, kìm hãm, và trung lập (khi QHSX vừa phù hợp vừa không phù hợp)" }
                ],
                correctOptionId: "b",
                rationale: '"Sự tác động của quan hệ sản xuất đối với lực lượng sản xuất diễn ra theo hai chiều hướng, đó là thúc đẩy hoặc kìm hãm sự phát triển của lực lượng sản xuất." (Triet.txt, dòng 924). Điều kiện thúc đẩy = QHSX phù hợp; kìm hãm = QHSX không phù hợp (đi sau hoặc vượt trước).'
            },
            {
                id: "M5-FQ3-2", module: "M5", lessonId: "M5-L5",
                text: "Nguyên tắc phương pháp luận số 1 của quy luật là gì?",
                options: [
                    { id: "a", text: "Muốn xóa bỏ QHSX cũ phải dùng mệnh lệnh hành chính và sắc lệnh từ trên ban xuống" },
                    { id: "b", text: "Muốn phát triển kinh tế phải bắt đầu từ phát triển LLSX, trước hết là phát triển người lao động và công cụ lao động" },
                    { id: "c", text: "QHSX phải được thiết lập trước rồi mới tạo điều kiện để LLSX phát triển" }
                ],
                correctOptionId: "b",
                rationale: '"Trong thực tiễn, muốn phát triển kinh tế phải bắt đầu từ phát triển lực lượng sản xuất, trước hết là phát triển lực lượng lao động và công cụ lao động." (Triet.txt, dòng 929)'
            },
            {
                id: "M5-FQ3-3", module: "M5", lessonId: "M5-L5",
                text: "Giáo trình nêu: 'Nếu quan hệ sản xuất đi sau hay vượt trước trình độ phát triển của lực lượng sản xuất đều là không phù hợp.' Tại sao cả hai trường hợp đều sai?",
                options: [
                    { id: "a", text: "Đi sau: QHSX kìm hãm LLSX đã phát triển vượt qua; Vượt trước: áp đặt QHSX mà LLSX chưa đủ điều kiện để vận hành — cả hai đều cản trở phát triển" },
                    { id: "b", text: "Chỉ 'đi sau' là sai; 'vượt trước' là tốt vì tạo động lực cho LLSX phát triển theo" },
                    { id: "c", text: "Cả hai đều gây thiệt hại kinh tế ngắn hạn nhưng về dài hạn QHSX 'vượt trước' sẽ kéo LLSX theo" }
                ],
                correctOptionId: "a",
                rationale: '"Nếu quan hệ sản xuất \"đi sau\" hay \"vượt trước\" trình độ phát triển của lực lượng sản xuất đều là không phù hợp." (Triet.txt, dòng 922). Đi sau → QHSX cũ kìm hãm LLSX mới; vượt trước → chủ quan duy ý chí, áp đặt hình thức SX khi LLSX chưa đủ điều kiện.'
            },
            {
                id: "M5-FQ3-4", module: "M5", lessonId: "M5-L6",
                text: "Theo giáo trình, 'quan hệ về phân phối sản phẩm lao động' có vai trò gì trong doanh nghiệp?",
                options: [
                    { id: "a", text: "Chỉ là hệ quả của sở hữu và quản lý, không có vai trò độc lập trong thúc đẩy sản xuất" },
                    { id: "b", text: "Là 'chất xúc tác' kinh tế kích thích trực tiếp lợi ích người lao động — thúc đẩy hoặc kìm hãm tốc độ và nhịp điệu sản xuất" },
                    { id: "c", text: "Quan trọng hơn quan hệ sở hữu — phân phối tốt thì không cần xét đến sở hữu" }
                ],
                correctOptionId: "b",
                rationale: '"Quan hệ về phân phối sản phẩm lao động... có vai trò đặc biệt quan trọng, kích thích trực tiếp lợi ích con người; là \"chất xúc tác\" kinh tế thúc đẩy tốc độ, nhịp điệu sản xuất, làm năng động hóa toàn bộ đời sống kinh tế - xã hội. Hoặc ngược lại, có thể làm trì trệ, kìm hãm quá trình sản xuất." (Triet.txt, dòng 911)'
            }
        ]
    }
};

// =============================================
// MODULE 5 — Bài kiểm tra tổng kết (12 câu)
// sourceRef: Triet.txt, dòng 900–930
// =============================================

const MODULE_QUIZ_M5 = {
    id: "M5-FINAL",
    title: "Kiểm tra Module 5: Quy luật QHSX phù hợp với LLSX",
    module: "M5",
    passingScore: 75,
    achievement: "production-law-master",
    xp: 10,
    questions: [
        {
            id: "M5-Q1", module: "M5",
            text: "Phương thức sản xuất là sự thống nhất của hai mặt nào?",
            options: [
                { id: "a", text: "Lực lượng sản xuất (nội dung, năng động) và Quan hệ sản xuất (hình thức xã hội, ổn định tương đối)" },
                { id: "b", text: "Người lao động (chủ thể) và Tư liệu sản xuất (phương tiện)" },
                { id: "c", text: "Cơ sở hạ tầng (kinh tế) và Kiến trúc thượng tầng (pháp lý-chính trị)" }
            ],
            correctOptionId: "a",
            rationale: '"Phương thức sản xuất là sự thống nhất giữa lực lượng sản xuất với một trình độ nhất định và quan hệ sản xuất tương ứng." (Triet.txt, dòng 900–901). LLSX = nội dung, năng động; QHSX = hình thức xã hội, ổn định tương đối.'
        },
        {
            id: "M5-Q2", module: "M5",
            text: "Lực lượng sản xuất là gì? Xác định định nghĩa ĐÚNG nhất:",
            options: [
                { id: "a", text: "Là tổng hợp các công cụ, máy móc và nguyên liệu mà xã hội có trong tay" },
                { id: "b", text: "Là sự kết hợp giữa người lao động với tư liệu sản xuất, tạo ra sức sản xuất và năng lực thực tiễn làm biến đổi các đối tượng vật chất" },
                { id: "c", text: "Là trình độ kỹ thuật và công nghệ được áp dụng trong nền kinh tế quốc dân" }
            ],
            correctOptionId: "b",
            rationale: '"Lực lượng sản xuất là sự kết hợp giữa người lao động với tư liệu sản xuất, tạo ra sức sản xuất và năng lực thực tiễn làm biến đổi các đối tượng vật chất của giới tự nhiên theo nhu cầu nhất định của con người và xã hội." (Triet.txt, dòng 902)'
        },
        {
            id: "M5-Q3", module: "M5",
            text: "Ba mặt của quan hệ sản xuất là gì? Mặt nào là xuất phát, cơ bản?",
            options: [
                { id: "a", text: "Sản xuất, phân phối, tiêu dùng — mặt sản xuất là cơ bản" },
                { id: "b", text: "Sở hữu, tổ chức-quản lý, phân phối — quan hệ sở hữu về tư liệu sản xuất là xuất phát, cơ bản, trung tâm" },
                { id: "c", text: "Tư liệu sản xuất, sức lao động, giá trị thặng dư — tư liệu sản xuất là cơ bản" }
            ],
            correctOptionId: "b",
            rationale: '"Quan hệ sản xuất bao gồm quan hệ về sở hữu đối với tư liệu sản xuất, quan hệ trong tổ chức quản lý và trao đổi hoạt động với nhau, quan hệ về phân phối sản phẩm lao động. Quan hệ sở hữu về tư liệu sản xuất là quan hệ xuất phát, cơ bản, trung tâm." (Triet.txt, dòng 909)'
        },
        {
            id: "M5-Q4", module: "M5",
            text: "Khoa học được coi là 'lực lượng sản xuất trực tiếp' theo nghĩa nào? (Triet.txt, dòng 907)",
            options: [
                { id: "a", text: "Khoa học đã thay thế hoàn toàn người lao động và công cụ lao động trong sản xuất hiện đại" },
                { id: "b", text: "Tri thức khoa học được kết tinh, 'vật hóa' vào người lao động, công cụ lao động và đối tượng lao động — trực tiếp tạo ra của cải đặc biệt và biến đổi LLSX" },
                { id: "c", text: "Khoa học chỉ hỗ trợ gián tiếp — tạo ra lý thuyết để kỹ sư áp dụng" }
            ],
            correctOptionId: "b",
            rationale: '"Khoa học sản xuất ra của cải đặc biệt, hàng hóa đặc biệt. Đó là những phát minh sáng chế... Tri thức khoa học được kết tinh, \"vật hóa\" vào người lao động, người quản lý, công cụ lao động và đối tượng lao động." (Triet.txt, dòng 907)'
        },
        {
            id: "M5-Q5", module: "M5",
            text: "Sự 'phù hợp' giữa QHSX và LLSX có ý nghĩa tích cực nào?",
            options: [
                { id: "a", text: "Đảm bảo QHSX không bao giờ thay đổi, tạo ổn định lâu dài cho sản xuất" },
                { id: "b", text: "QHSX là 'hình thức phát triển' và 'tạo địa bàn đầy đủ' cho LLSX phát triển — người lao động nhiệt tình sáng tạo, công nghệ được áp dụng nhanh" },
                { id: "c", text: "Ngăn chặn mọi mâu thuẫn nảy sinh giữa LLSX và QHSX trong suốt quá trình phát triển" }
            ],
            correctOptionId: "b",
            rationale: '"Sự phù hợp của quan hệ sản xuất với lực lượng sản xuất là một trạng thái trong đó quan hệ sản xuất là \"hình thức phát triển\" của lực lượng sản xuất và \"tạo địa bàn đầy đủ\" cho lực lượng sản xuất phát triển." (Triet.txt, dòng 921)'
        },
        {
            id: "M5-Q6", module: "M5",
            text: "Khi QHSX 'kìm hãm' LLSX, điều gì là tất yếu theo quy luật?",
            options: [
                { id: "a", text: "LLSX dừng lại hoàn toàn cho đến khi có sự can thiệp từ bên ngoài" },
                { id: "b", text: "Yêu cầu tất yếu phải xóa bỏ QHSX cũ, thiết lập QHSX mới phù hợp — 'bắt đầu thời đại một cuộc cách mạng xã hội'" },
                { id: "c", text: "QHSX tự động điều chỉnh phù hợp với LLSX mà không cần hành động có ý thức" }
            ],
            correctOptionId: "b",
            rationale: '"Đòi hỏi tất yếu của nền sản xuất xã hội là phải xóa bỏ quan hệ sản xuất cũ, thiết lập quan hệ sản xuất mới phù hợp với trình độ phát triển của lực lượng sản xuất đã phát triển." (Triet.txt, dòng 917). Câu Mác (dòng 925): "Khi đó bắt đầu thời đại một cuộc cách mạng xã hội."'
        },
        {
            id: "M5-Q7", module: "M5",
            text: "Quy luật này là 'phổ biến' nghĩa là gì?",
            options: [
                { id: "a", text: "Chỉ áp dụng cho các xã hội có giai cấp — không áp dụng cho xã hội nguyên thủy và xã hội cộng sản" },
                { id: "b", text: "Tác động trong toàn bộ tiến trình lịch sử nhân loại — từ phương thức sản xuất cộng sản nguyên thủy qua chiếm hữu nô lệ, phong kiến, tư bản và đến cộng sản chủ nghĩa" },
                { id: "c", text: "Chỉ áp dụng cho giai đoạn chủ nghĩa tư bản — đây là phương thức sản xuất Mác tập trung phân tích" }
            ],
            correctOptionId: "b",
            rationale: '"Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất là quy luật phổ biến tác động trong toàn bộ tiến trình lịch sử nhân loại. Sự tác động biện chứng... làm cho lịch sử xã hội loài người là lịch sử kế tiếp nhau của các phương thức sản xuất..." (Triet.txt, dòng 926)'
        },
        {
            id: "M5-Q8", module: "M5",
            text: "Trong quản lý doanh nghiệp, nguyên tắc phương pháp luận của quy luật đòi hỏi điều gì khi muốn thay đổi cơ chế phân phối thu nhập?",
            options: [
                { id: "a", text: "Thay đổi cơ chế phân phối theo ý muốn của lãnh đạo mà không cần xét đến trình độ LLSX của doanh nghiệp" },
                { id: "b", text: "Phải căn cứ từ trình độ phát triển thực tế của LLSX (trình độ lao động, công nghệ) — không thể áp đặt chủ quan, không theo mệnh lệnh hành chính" },
                { id: "c", text: "Ưu tiên giữ cơ chế phân phối cũ để đảm bảo ổn định nội bộ" }
            ],
            correctOptionId: "b",
            rationale: '"Muốn xóa bỏ một quan hệ sản xuất cũ, thiết lập một quan hệ sản xuất mới phải căn cứ từ trình độ phát triển của lực lượng sản xuất, không phải là kết quả của mệnh lệnh hành chính, của mọi sắc lệnh từ trên ban xuống, mà từ tính tất yếu kinh tế, yêu cầu khách quan của quy luật kinh tế." (Triet.txt, dòng 929)'
        },
        {
            id: "M5-Q9", module: "M5",
            text: "Trong cuộc Cách mạng công nghiệp 4.0, AI và tự động hóa phát triển mạnh (LLSX). Theo quy luật, doanh nghiệp cần làm gì với QHSX?",
            options: [
                { id: "a", text: "Giữ nguyên QHSX cũ vì nó đã vận hành ổn định — chỉ cần mua thêm thiết bị mới" },
                { id: "b", text: "Điều chỉnh QHSX (quan hệ sở hữu, tổ chức quản lý, phân phối) phù hợp với trình độ AI/4.0 — nếu không QHSX trở thành 'xiềng xích' kìm hãm" },
                { id: "c", text: "Chờ QHSX tự điều chỉnh theo thị trường mà không cần can thiệp chủ động" }
            ],
            correctOptionId: "b",
            rationale: 'Quy luật (Triet.txt, dòng 914–925): LLSX 4.0 phát triển vượt → nếu QHSX không phù hợp sẽ kìm hãm, thậm chí phá hoại LLSX. Doanh nghiệp cần chủ động điều chỉnh cơ cấu sở hữu (cổ phần hóa), phân công lao động (vai trò mới cho nhân viên), và cơ chế phân phối (thưởng đổi mới sáng tạo) phù hợp với AI/4.0.'
        },
        {
            id: "M5-Q10", module: "M5",
            text: "Theo giáo trình, 'sự phù hợp không có nghĩa là đồng nhất tuyệt đối mà chỉ là tương đối.' Điều này có nghĩa gì trong thực tiễn?",
            options: [
                { id: "a", text: "QHSX chỉ cần gần đúng với LLSX — không cần điều chỉnh kỹ vì phù hợp tuyệt đối là không cần thiết" },
                { id: "b", text: "Phù hợp là trạng thái vận động liên tục — luôn nảy sinh mâu thuẫn mới và cần giải quyết; không có trạng thái 'hoàn toàn phù hợp' cố định trong lịch sử" },
                { id: "c", text: "LLSX và QHSX không bao giờ đạt được sự phù hợp thực sự — mâu thuẫn là vĩnh viễn" }
            ],
            correctOptionId: "b",
            rationale: '"Sự phù hợp không có nghĩa là đồng nhất tuyệt đối mà chỉ là tương đối, trong đó chứa đựng cả sự khác biệt. Sự phù hợp diễn ra trong sự vận động và phát triển, là một quá trình thường xuyên nảy sinh mâu thuẫn và giải quyết mâu thuẫn." (Triet.txt, dòng 922)'
        },
        {
            id: "M5-Q11", module: "M5",
            text: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa của Việt Nam có liên hệ thế nào với quy luật QHSX-LLSX?",
            options: [
                { id: "a", text: "Đây là mô hình từ chối quy luật — Việt Nam xây dựng QHSX xã hội chủ nghĩa trước khi LLSX đủ trình độ" },
                { id: "b", text: "Là 'sự vận dụng quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất trong phát triển kinh tế ở Việt Nam hiện nay'" },
                { id: "c", text: "Không có liên hệ — đây là mô hình thực dụng dựa trên kinh nghiệm chứ không phải quy luật triết học" }
            ],
            correctOptionId: "b",
            rationale: '"Nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát, là sự vận dụng quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất trong phát triển kinh tế ở Việt Nam hiện nay." (Triet.txt, dòng 930)'
        },
        {
            id: "M5-Q12", module: "M5",
            text: "Kết nối M4-M5: Trong quy luật Mâu thuẫn, khi mâu thuẫn giữa LLSX và QHSX không được giải quyết — điều gì xảy ra theo cả hai quy luật?",
            options: [
                { id: "a", text: "Theo M4: mâu thuẫn bị 'điều hòa' và biến mất; theo M5: QHSX tự điều chỉnh theo LLSX" },
                { id: "b", text: "Theo M4: mâu thuẫn phát triển đến mức không thể điều hòa → phá vỡ 'độ' cũ; theo M5: QHSX cũ trở thành 'xiềng xích' → cách mạng xã hội thiết lập QHSX mới — hai quy luật cùng giải thích động lực thay đổi phương thức sản xuất" },
                { id: "c", text: "Theo M4: mâu thuẫn luôn được giải quyết hòa bình; theo M5: LLSX và QHSX tự cân bằng không cần can thiệp" }
            ],
            correctOptionId: "b",
            rationale: 'Liên kết M4-M5: Quy luật Mâu thuẫn (M4) giải thích NGUỒN GỐC vận động — mâu thuẫn LLSX↔QHSX là nguồn gốc cách mạng xã hội (M4: dòng 763). Quy luật QHSX-LLSX (M5) giải thích CƠ CHẾ cụ thể — khi QHSX thành "xiềng xích" → cách mạng sản xuất (M5: dòng 925). Hai quy luật bổ sung cho nhau trong việc giải thích lịch sử phát triển của các phương thức sản xuất.'
        }
    ]
};

// Export M5 quiz data
if (typeof window !== 'undefined') {
    window.FORMATIVE_QUIZZES_M5 = FORMATIVE_QUIZZES_M5;
    window.MODULE_QUIZ_M5 = MODULE_QUIZ_M5;
}
