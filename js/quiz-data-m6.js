/**
 * quiz-data-m6.js — Module 6: Biện chứng CSHT & KTTT
 * Nguồn: assets/docs/Triet.txt, dòng 931–962
 * Exports: window.FORMATIVE_QUIZZES_M6, window.MODULE_QUIZ_M6
 */

(function () {
    'use strict';

    // ─────────────────────────────────────────────────────────
    // M6-FQ1: Sau Bài 6.3 — CSHT & KTTT: định nghĩa, cấu trúc, Nhà nước
    // ─────────────────────────────────────────────────────────
    const M6_FQ1 = {
        id: 'M6-FQ1',
        title: 'Kiểm tra Hình thành — Bài 6.1 đến 6.3',
        passingScore: 70,
        achievement: 'base-analyst',
        questions: [
            {
                id: 'M6-FQ1-Q1',
                text: 'Theo quan điểm Chủ nghĩa duy vật lịch sử, "Cơ sở hạ tầng" (CSHT) là gì?',
                options: [
                    { id: 'a', text: 'Toàn bộ hệ thống hạ tầng vật chất của xã hội như nhà máy, đường sá, cầu cống' },
                    { id: 'b', text: 'Toàn bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực của chúng hợp thành cơ cấu kinh tế' },
                    { id: 'c', text: 'Toàn bộ quan điểm, tư tưởng và thiết chế xã hội được hình thành trên nền kinh tế' },
                    { id: 'd', text: 'Lực lượng sản xuất kết hợp với quan hệ sản xuất tạo thành phương thức sản xuất' }
                ],
                correctOptionId: 'b',
                rationale: 'CSHT là toàn bộ những quan hệ sản xuất (QHSX) hợp thành cơ cấu kinh tế của xã hội — đây là định nghĩa chính xác theo dòng 934. Lưu ý quan trọng: CSHT ≠ hạ tầng vật lý (nhà máy, đường sá) — đó là nhầm lẫn phổ biến nhất!',
                sourceRef: 'Triet.txt, dòng 934'
            },
            {
                id: 'M6-FQ1-Q2',
                text: 'Cấu trúc của Cơ sở hạ tầng bao gồm mấy loại quan hệ sản xuất? Loại nào đặc trưng cho xã hội đó?',
                options: [
                    { id: 'a', text: '2 loại: quan hệ sản xuất tư hữu và công hữu; loại tư hữu đặc trưng' },
                    { id: 'b', text: '3 loại: thống trị, tàn dư, mầm mống; quan hệ sản xuất thống trị là đặc trưng' },
                    { id: 'c', text: '4 loại: thống trị, lệ thuộc, tàn dư, mầm mống; loại lệ thuộc đặc trưng' },
                    { id: 'd', text: '2 loại: chủ yếu và phụ trợ; quan hệ sản xuất chủ yếu đặc trưng' }
                ],
                correctOptionId: 'b',
                rationale: 'CSHT gồm 3 loại QHSX (dòng 936): thống trị (đặc trưng cho xã hội đó), tàn dư (QHSX cũ còn sót lại), mầm mống (QHSX mới đang hình thành). Trong đó QHSX thống trị là đặc trưng và quyết định tính chất của CSHT.',
                sourceRef: 'Triet.txt, dòng 936'
            },
            {
                id: 'M6-FQ1-Q3',
                text: 'Kiến trúc thượng tầng (KTTT) bao gồm những thành phần nào?',
                options: [
                    { id: 'a', text: 'Chỉ bao gồm hệ thống pháp luật và nhà nước' },
                    { id: 'b', text: 'Chỉ bao gồm các quan điểm, tư tưởng (chính trị, đạo đức, tôn giáo, nghệ thuật, triết học...)' },
                    { id: 'c', text: 'Toàn bộ quan điểm/tư tưởng xã hội VÀ những thiết chế xã hội tương ứng (nhà nước, đảng phái, giáo hội...)' },
                    { id: 'd', text: 'Hệ thống kinh tế kết hợp với thể chế chính trị và pháp luật' }
                ],
                correctOptionId: 'c',
                rationale: 'KTTT gồm 2 thành phần (dòng 937–938): (1) Quan điểm/tư tưởng: chính trị, pháp quyền, đạo đức, tôn giáo, nghệ thuật, triết học; (2) Thiết chế tương ứng: Nhà nước, đảng phái, giáo hội, đoàn thể, tổ chức xã hội. Hai thành phần này có quan hệ nội tại với nhau.',
                sourceRef: 'Triet.txt, dòng 937–938'
            },
            {
                id: 'M6-FQ1-Q4',
                text: 'Tại sao Nhà nước được coi là "bộ phận có quyền lực mạnh nhất" trong kiến trúc thượng tầng?',
                options: [
                    { id: 'a', text: 'Vì nhà nước có nhiều nhân viên và cơ quan nhất trong xã hội' },
                    { id: 'b', text: 'Vì nhà nước là tổ chức quyền lực chính trị đặc biệt — chính nhờ nhà nước mà tư tưởng của giai cấp thống trị trở thành sức mạnh thống trị toàn bộ đời sống xã hội' },
                    { id: 'c', text: 'Vì nhà nước kiểm soát toàn bộ hoạt động kinh tế và có quyền thu thuế' },
                    { id: 'd', text: 'Vì nhà nước được bầu cử dân chủ và đại diện cho ý chí toàn dân' }
                ],
                correctOptionId: 'b',
                rationale: 'Nhà nước là "tổ chức đặc biệt của quyền lực chính trị" (dòng 941). Chính nhờ nhà nước mà tư tưởng của giai cấp thống trị mới trở thành sức mạnh thống trị toàn bộ đời sống xã hội. Giai cấp nào nắm nhà nước thì hệ tư tưởng và thể chế của giai cấp đó giữ địa vị thống trị.',
                sourceRef: 'Triet.txt, dòng 941'
            }
        ]
    };

    // ─────────────────────────────────────────────────────────
    // M6-FQ2: Sau Bài 6.5 — CSHT quyết định, tác động trở lại, 2 sai lầm
    // ─────────────────────────────────────────────────────────
    const M6_FQ2 = {
        id: 'M6-FQ2',
        title: 'Kiểm tra Hình thành — Bài 6.4 đến 6.5',
        passingScore: 70,
        questions: [
            {
                id: 'M6-FQ2-Q1',
                text: 'CSHT quyết định KTTT theo mấy nội dung? Liệt kê đúng:',
                options: [
                    { id: 'a', text: '2 nội dung: quyết định nguồn gốc và quyết định tốc độ phát triển của KTTT' },
                    { id: 'b', text: '3 nội dung: quyết định kiểu KTTT; quyết định cơ cấu và tính chất; quyết định sự vận động và phát triển của KTTT' },
                    { id: 'c', text: '4 nội dung: kiểu, cơ cấu, tính chất, tốc độ thay đổi của KTTT' },
                    { id: 'd', text: '1 nội dung: CSHT chỉ quyết định kiểu KTTT mà thôi' }
                ],
                correctOptionId: 'b',
                rationale: 'CSHT quyết định KTTT theo 3 nội dung (dòng 946): (1) Quyết định KIỂU KTTT — loại KTTT nào sẽ ra đời; (2) Quyết định CƠ CẤU và TÍNH CHẤT của KTTT; (3) Quyết định SỰ VẬN ĐỘNG và PHÁT TRIỂN của KTTT. Ba nội dung này liên kết với nhau.',
                sourceRef: 'Triet.txt, dòng 946'
            },
            {
                id: 'M6-FQ2-Q2',
                text: 'C. Mác khẳng định điều gì khi cơ sở kinh tế thay đổi?',
                options: [
                    { id: 'a', text: '"Cơ sở kinh tế thay đổi thì toàn bộ cái kiến trúc thượng tầng đồ sộ cũng bị đảo lộn ít nhiều nhanh chóng"' },
                    { id: 'b', text: '"Cơ sở kinh tế thay đổi thì kiến trúc thượng tầng về chính trị thay đổi ngay lập tức"' },
                    { id: 'c', text: '"Khi cơ sở kinh tế biến đổi, kiến trúc thượng tầng sẽ tự động biến đổi theo trong vòng 10 năm"' },
                    { id: 'd', text: '"Kiến trúc thượng tầng độc lập với cơ sở kinh tế và không bị ảnh hưởng bởi thay đổi kinh tế"' }
                ],
                correctOptionId: 'a',
                rationale: 'C. Mác khẳng định (dòng 948): "Cơ sở kinh tế thay đổi thì toàn bộ cái kiến trúc thượng tầng đồ sộ cũng bị đảo lộn ít nhiều nhanh chóng." Tuy nhiên tốc độ thay đổi khác nhau: chính trị/pháp luật thay đổi nhanh; tôn giáo/nghệ thuật thay đổi chậm hơn.',
                sourceRef: 'Triet.txt, dòng 948'
            },
            {
                id: 'M6-FQ2-Q3',
                text: 'KTTT tác động trở lại đối với CSHT theo mấy chiều hướng? Khi nào nó thúc đẩy, khi nào kìm hãm?',
                options: [
                    { id: 'a', text: '1 chiều: KTTT luôn luôn thúc đẩy CSHT phát triển' },
                    { id: 'b', text: '3 chiều: thúc đẩy, kìm hãm, và trung tính' },
                    { id: 'c', text: '2 chiều: thúc đẩy khi phản ánh đúng tính tất yếu kinh tế; kìm hãm khi không phản ánh đúng' },
                    { id: 'd', text: 'KTTT không tác động trở lại CSHT mà chỉ phản ánh một chiều' }
                ],
                correctOptionId: 'c',
                rationale: 'KTTT tác động 2 chiều (dòng 953): (1) THÚC ĐẨY khi KTTT tác động cùng chiều với sự phát triển của CSHT — tức là phản ánh đúng tính tất yếu kinh tế, các quy luật kinh tế khách quan; (2) KÌM HÃM khi KTTT tác động ngược chiều với sự phát triển của CSHT — không phản ánh đúng tính tất yếu kinh tế.',
                sourceRef: 'Triet.txt, dòng 953'
            },
            {
                id: 'M6-FQ2-Q4',
                text: 'Đâu là mô tả đúng về hai sai lầm cần tránh trong quan hệ kinh tế–chính trị?',
                options: [
                    { id: 'a', text: 'Sai lầm 1: phân tích kinh tế quá nhiều; Sai lầm 2: phân tích chính trị quá nhiều' },
                    { id: 'b', text: 'Sai lầm 1: tuyệt đối hóa kinh tế (duy vật kinh tế thô thiển → vô chính phủ); Sai lầm 2: tuyệt đối hóa chính trị (duy ý chí, nôn nóng, đốt cháy giai đoạn)' },
                    { id: 'c', text: 'Sai lầm 1: coi chính trị quan trọng hơn kinh tế; Sai lầm 2: coi chính trị và kinh tế bình đẳng nhau' },
                    { id: 'd', text: 'Sai lầm 1: quá chú trọng CSHT; Sai lầm 2: bỏ qua QHSX thống trị' }
                ],
                correctOptionId: 'b',
                rationale: 'Theo dòng 961: Sai lầm 1 — Tuyệt đối hóa kinh tế, hạ thấp chính trị → "duy vật tầm thường, duy vật kinh tế → vô chính phủ, bất chấp kỷ cương". Sai lầm 2 — Tuyệt đối hóa chính trị, hạ thấp kinh tế → "duy tâm, duy ý chí, nôn nóng, chủ quan, đốt cháy giai đoạn". Cả hai đều dẫn đến thất bại.',
                sourceRef: 'Triet.txt, dòng 961'
            }
        ]
    };

    // ─────────────────────────────────────────────────────────
    // M6-FQ3: Sau Bài 6.6 — Lenin, Đổi mới VN, CNXH, 4.0
    // ─────────────────────────────────────────────────────────
    const M6_FQ3 = {
        id: 'M6-FQ3',
        title: 'Kiểm tra Hình thành — Bài 6.6: Vận dụng',
        passingScore: 70,
        questions: [
            {
                id: 'M6-FQ3-Q1',
                text: 'V.I. Lênin phát biểu thế nào về quan hệ giữa chính trị và kinh tế?',
                options: [
                    { id: 'a', text: '"Kinh tế là nền tảng, chính trị là công cụ; không thể tách rời hai yếu tố này"' },
                    { id: 'b', text: '"Chính trị là sự biểu hiện tập trung của kinh tế... Chính trị không thể không chiếm địa vị hàng đầu so với kinh tế"' },
                    { id: 'c', text: '"Kinh tế và chính trị hoàn toàn độc lập với nhau trong xã hội hiện đại"' },
                    { id: 'd', text: '"Chính trị quyết định kinh tế, nhà nước có thể tự ý thay đổi quan hệ kinh tế"' }
                ],
                correctOptionId: 'b',
                rationale: 'V.I. Lênin (dòng 960) khẳng định: "Chính trị là sự biểu hiện tập trung của kinh tế... Chính trị không thể không chiếm địa vị hàng đầu so với kinh tế." Điều này có nghĩa: chính trị phản ánh kinh tế (CSHT quyết định), nhưng đồng thời chính trị có vị trí quan trọng hàng đầu trong cuộc đấu tranh giai cấp — không thể xem nhẹ.',
                sourceRef: 'Triet.txt, dòng 960'
            },
            {
                id: 'M6-FQ3-Q2',
                text: 'Đường lối Đổi mới của ĐCSVN (từ 1986) vận dụng quy luật CSHT-KTTT như thế nào?',
                options: [
                    { id: 'a', text: 'Đổi mới chính trị trước, rồi mới đổi mới kinh tế theo' },
                    { id: 'b', text: 'Chỉ đổi mới kinh tế, không đổi mới chính trị để giữ ổn định' },
                    { id: 'c', text: 'Đổi mới toàn diện cả kinh tế và chính trị; đổi mới kinh tế là trung tâm; đổi mới chính trị từng bước thận trọng' },
                    { id: 'd', text: 'Giữ nguyên CSHT cũ, chỉ thay đổi KTTT để tạo điều kiện cho CSHT mới' }
                ],
                correctOptionId: 'c',
                rationale: 'Theo dòng 962: "Đảng Cộng sản Việt Nam chủ trương đổi mới toàn diện cả kinh tế và chính trị, trong đó đổi mới kinh tế là trung tâm, đồng thời đổi mới chính trị từng bước thận trọng vững chắc." Điều này thể hiện đúng quy luật: CSHT (kinh tế) thay đổi trước → KTTT (chính trị, pháp luật) thay đổi theo từng bước phù hợp.',
                sourceRef: 'Triet.txt, dòng 962'
            },
            {
                id: 'M6-FQ3-Q3',
                text: 'Trong thời kỳ quá độ lên CNXH, CSHT có đặc điểm gì đặc biệt so với CSHT của xã hội tư bản?',
                options: [
                    { id: 'a', text: 'CSHT thời kỳ quá độ chỉ có một loại QHSX: công hữu thuần túy' },
                    { id: 'b', text: 'CSHT thời kỳ quá độ mang tính chất quá độ với kết cấu kinh tế nhiều thành phần đan xen nhau của nhiều loại hình kinh tế-xã hội' },
                    { id: 'c', text: 'CSHT thời kỳ quá độ không có mâu thuẫn vì KTTT XHCN đã giải quyết tất cả' },
                    { id: 'd', text: 'CSHT thời kỳ quá độ giống hoàn toàn CSHT tư bản chủ nghĩa, chỉ khác ở KTTT' }
                ],
                correctOptionId: 'b',
                rationale: 'Theo dòng 957: "Cơ sở hạ tầng còn mang tính chất quá độ với một kết cấu kinh tế nhiều thành phần đan xen nhau của nhiều loại hình kinh tế-xã hội." Vì vậy, "phát triển kinh tế nhiều thành phần theo định hướng xã hội chủ nghĩa là vấn đề có tính quy luật để phát triển cơ sở hạ tầng xã hội chủ nghĩa."',
                sourceRef: 'Triet.txt, dòng 957'
            },
            {
                id: 'M6-FQ3-Q4',
                text: 'Trong bối cảnh Cách mạng 4.0, sự bùng nổ của kinh tế số và AI tạo ra CSHT mới. Theo quy luật CSHT-KTTT, điều này đòi hỏi gì?',
                options: [
                    { id: 'a', text: 'Không cần thay đổi gì vì quy luật CSHT-KTTT chỉ áp dụng trong xã hội phong kiến và tư bản' },
                    { id: 'b', text: 'Chỉ cần đầu tư vào công nghệ, không cần thay đổi thể chế (KTTT)' },
                    { id: 'c', text: 'KTTT (luật pháp, chính sách, thể chế) phải thay đổi để phù hợp với CSHT số hóa mới; nếu không KTTT cũ sẽ kìm hãm sự phát triển' },
                    { id: 'd', text: 'Phải thay đổi KTTT trước (luật dữ liệu, AI...) rồi mới được phát triển kinh tế số' }
                ],
                correctOptionId: 'c',
                rationale: 'Áp dụng quy luật: Kinh tế số, AI là CSHT mới đang phát triển nhanh. Theo quy luật (dòng 948), CSHT thay đổi → KTTT phải thay đổi theo. Nếu KTTT (luật dữ liệu lỗi thời, quy định AI chưa có, thể chế lao động gig cũ) không thay đổi kịp → KTTT sẽ kìm hãm CSHT số mới (dòng 953). Đây là thách thức quản trị hiện đại.',
                sourceRef: 'Triet.txt, dòng 948, 953'
            }
        ]
    };

    // ─────────────────────────────────────────────────────────
    // M6-FINAL: 12 câu tổng kết Module 6
    // ─────────────────────────────────────────────────────────
    const M6_FINAL = {
        id: 'M6-FINAL',
        title: 'Bài kiểm tra Module 6: Biện chứng CSHT & KTTT',
        passingScore: 75,
        achievement: 'governance-scholar',
        questions: [
            {
                id: 'M6-F-Q1',
                text: 'Định nghĩa nào sau đây là ĐÚNG nhất về "Cơ sở hạ tầng" theo CNDVLS?',
                options: [
                    { id: 'a', text: 'Toàn bộ cơ sở vật chất kỹ thuật: nhà máy, đường sá, cầu cống, hệ thống điện nước' },
                    { id: 'b', text: 'Toàn bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực hợp thành cơ cấu kinh tế' },
                    { id: 'c', text: 'Lực lượng sản xuất bao gồm người lao động và tư liệu sản xuất' },
                    { id: 'd', text: 'Hệ thống thể chế kinh tế và luật kinh tế của một quốc gia' }
                ],
                correctOptionId: 'b',
                rationale: 'CSHT = toàn bộ QHSX hợp thành cơ cấu kinh tế (dòng 934). Đây là định nghĩa triết học — khác hoàn toàn với "hạ tầng vật lý" thông thường.',
                sourceRef: 'Triet.txt, dòng 934'
            },
            {
                id: 'M6-F-Q2',
                text: 'C. Mác mô tả CSHT là "cái cơ sở hiện thực" làm nền tảng cho điều gì?',
                options: [
                    { id: 'a', text: 'Cho sự phát triển của lực lượng sản xuất và công nghệ kỹ thuật' },
                    { id: 'b', text: 'Cho "một kiến trúc thượng tầng pháp lý và chính trị và những hình thái ý thức xã hội nhất định tương ứng"' },
                    { id: 'c', text: 'Cho quá trình tích lũy tư bản và phát triển thị trường' },
                    { id: 'd', text: 'Cho hệ thống giáo dục và đào tạo nhân lực của xã hội' }
                ],
                correctOptionId: 'b',
                rationale: 'C. Mác (dòng 935): "Toàn bộ những quan hệ sản xuất ấy hợp thành cơ cấu kinh tế của xã hội, tức là cái cơ sở hiện thực trên đó dựng lên một kiến trúc thượng tầng pháp lý và chính trị và những hình thái ý thức xã hội nhất định tương ứng với cơ sở hiện thực đó."',
                sourceRef: 'Triet.txt, dòng 935'
            },
            {
                id: 'M6-F-Q3',
                text: 'Trong 3 loại QHSX cấu thành CSHT, loại nào "đặc trưng cho cơ sở hạ tầng của xã hội đó"?',
                options: [
                    { id: 'a', text: 'Quan hệ sản xuất mầm mống — vì nó đại diện cho tương lai' },
                    { id: 'b', text: 'Quan hệ sản xuất tàn dư — vì nó phổ biến nhất trong thực tế' },
                    { id: 'c', text: 'Quan hệ sản xuất thống trị — đây là loại đặc trưng cho CSHT' },
                    { id: 'd', text: 'Tổng hợp cả 3 loại đồng đều, không loại nào đặc trưng hơn' }
                ],
                correctOptionId: 'c',
                rationale: 'Dòng 936: "Trong đó quan hệ sản xuất thống trị đặc trưng cho cơ sở hạ tầng của xã hội đó." QHSX tàn dư là dạng cũ còn sót, QHSX mầm mống là dạng mới đang hình thành — cả hai đều tồn tại nhưng QHSX thống trị mới là đặc trưng định tính xã hội.',
                sourceRef: 'Triet.txt, dòng 936'
            },
            {
                id: 'M6-F-Q4',
                text: 'KTTT bao gồm những bộ phận nào có "liên hệ TRỰC TIẾP" với CSHT?',
                options: [
                    { id: 'a', text: 'Tôn giáo, nghệ thuật, đạo đức — vì chúng phổ biến nhất trong xã hội' },
                    { id: 'b', text: 'Kiến trúc thượng tầng về chính trị và pháp lý' },
                    { id: 'c', text: 'Triết học và văn học — vì chúng phản ánh trực tiếp đời sống kinh tế' },
                    { id: 'd', text: 'Tất cả các bộ phận KTTT đều liên hệ trực tiếp như nhau với CSHT' }
                ],
                correctOptionId: 'b',
                rationale: 'Dòng 939: "Một số bộ phận như kiến trúc thượng tầng chính trị và pháp lý có mối liên hệ trực tiếp với cơ sở hạ tầng, còn các yếu tố khác như triết học, nghệ thuật, tôn giáo, đạo đức... lại có liên hệ gián tiếp."',
                sourceRef: 'Triet.txt, dòng 939'
            },
            {
                id: 'M6-F-Q5',
                text: 'Tại sao CSHT quyết định KTTT? Lý do cơ bản nhất là gì?',
                options: [
                    { id: 'a', text: 'Vì CSHT được xây dựng trước KTTT về mặt thời gian trong lịch sử' },
                    { id: 'b', text: 'Vì CSHT chứa đựng nhiều người hơn và có quy mô lớn hơn KTTT' },
                    { id: 'c', text: 'Vì quan hệ vật chất quyết định quan hệ tinh thần; tính tất yếu kinh tế xét đến cùng quyết định tính tất yếu chính trị-xã hội' },
                    { id: 'd', text: 'Vì giai cấp công nhân tạo ra CSHT thông qua lao động sản xuất' }
                ],
                correctOptionId: 'c',
                rationale: 'Dòng 945: "Chủ nghĩa duy vật lịch sử khẳng định cơ sở hạ tầng quyết định kiến trúc thượng tầng, bởi vì, quan hệ vật chất quyết định quan hệ tinh thần; tính tất yếu kinh tế xét đến cùng quyết định tính tất yếu chính trị - xã hội." Đây là nguyên lý cơ bản của CNDVLS.',
                sourceRef: 'Triet.txt, dòng 945'
            },
            {
                id: 'M6-F-Q6',
                text: 'Khi CSHT thay đổi, các bộ phận của KTTT thay đổi với tốc độ như thế nào?',
                options: [
                    { id: 'a', text: 'Tất cả thay đổi đồng đều và cùng tốc độ' },
                    { id: 'b', text: 'Chỉ các thiết chế (Nhà nước, pháp luật) thay đổi; quan điểm/tư tưởng không bao giờ thay đổi' },
                    { id: 'c', text: 'Các bộ phận thay đổi với tốc độ khác nhau: chính trị/pháp luật thay đổi nhanh; tôn giáo/nghệ thuật thay đổi chậm hơn; một số yếu tố cũ vẫn được kế thừa' },
                    { id: 'd', text: 'KTTT không thay đổi cùng với CSHT mà chỉ thay đổi sau 50–100 năm' }
                ],
                correctOptionId: 'c',
                rationale: 'Dòng 949: "Có những bộ phận của kiến trúc thượng tầng thay đổi nhanh chóng cùng với sự thay đổi của cơ sở hạ tầng như chính trị, luật pháp...; có những nhân tố riêng lẻ của kiến trúc thượng tầng thay đổi chậm hơn như tôn giáo, nghệ thuật...; Cũng có những nhân tố nào đó của kiến trúc thượng tầng cũ vẫn được kế thừa."',
                sourceRef: 'Triet.txt, dòng 949'
            },
            {
                id: 'M6-F-Q7',
                text: 'KTTT có "tính độc lập tương đối" có nghĩa là gì?',
                options: [
                    { id: 'a', text: 'KTTT hoàn toàn độc lập với CSHT và có thể phát triển theo hướng riêng mà không cần CSHT' },
                    { id: 'b', text: 'KTTT có quy luật vận động nội tại của nó; vai trò tích cực, tự giác của ý thức, tư tưởng; và sức mạnh vật chất của bộ máy tổ chức-thể chế luôn tác động mạnh mẽ trở lại CSHT' },
                    { id: 'c', text: 'KTTT tồn tại mà không cần CSHT khi xã hội đã phát triển đủ cao' },
                    { id: 'd', text: 'KTTT chỉ phụ thuộc vào ý chí của giai cấp lãnh đạo, không phụ thuộc kinh tế' }
                ],
                correctOptionId: 'b',
                rationale: 'Dòng 951: KTTT có "tính độc lập tương đối" vì: (1) Lĩnh vực ý thức, tinh thần có quy luật vận động nội tại; (2) KTTT có vai trò tích cực, tự giác; (3) Sức mạnh vật chất của bộ máy tổ chức-thể chế tác động mạnh mẽ. Ph. Ăngghen: tác động "trong giới hạn nhất định" — không phải tuyệt đối.',
                sourceRef: 'Triet.txt, dòng 951'
            },
            {
                id: 'M6-F-Q8',
                text: 'KTTT củng cố và bảo vệ CSHT sinh ra nó bằng những cách nào?',
                options: [
                    { id: 'a', text: 'Chỉ bằng cách ban hành luật và quy định pháp lý' },
                    { id: 'b', text: 'Củng cố, hoàn thiện, bảo vệ CSHT; ngăn chặn CSHT mới; đấu tranh xóa bỏ tàn dư CSHT cũ; định hướng, tổ chức, xây dựng chế độ kinh tế' },
                    { id: 'c', text: 'Chỉ bằng cách tuyên truyền tư tưởng hệ của giai cấp thống trị' },
                    { id: 'd', text: 'Thông qua hoạt động kinh tế trực tiếp của nhà nước' }
                ],
                correctOptionId: 'b',
                rationale: 'Dòng 952: "KTTT củng cố, hoàn thiện và bảo vệ CSHT sinh ra nó; ngăn chặn CSHT mới, đấu tranh xóa bỏ tàn dư CSHT cũ; định hướng, tổ chức, xây dựng chế độ kinh tế." Thực chất là bảo vệ lợi ích kinh tế của giai cấp thống trị.',
                sourceRef: 'Triet.txt, dòng 952'
            },
            {
                id: 'M6-F-Q9',
                text: 'Ph. Ăngghen khẳng định "Bạo lực (tức là quyền lực nhà nước) — cũng là một sức mạnh kinh tế." Điều này có nghĩa là gì?',
                options: [
                    { id: 'a', text: 'Nhà nước có thể dùng vũ lực để trực tiếp tạo ra của cải kinh tế thay cho sản xuất' },
                    { id: 'b', text: 'Quyền lực nhà nước (chính trị) có thể tác động mạnh mẽ đến kinh tế: thúc đẩy nếu cùng chiều, kìm hãm nếu ngược chiều với xu hướng phát triển kinh tế' },
                    { id: 'c', text: 'Quân sự và công an là bộ phận kinh tế quan trọng của xã hội' },
                    { id: 'd', text: 'Nhà nước phải kiểm soát tuyệt đối nền kinh tế thông qua kế hoạch hóa tập trung' }
                ],
                correctOptionId: 'b',
                rationale: 'Dòng 954: Ph. Ăngghen chỉ rõ tác động của quyền lực nhà nước đối với kinh tế theo 2 chiều: (1) Nếu cùng hướng với phát triển kinh tế → thúc đẩy nhanh hơn; (2) Nếu ngược lại → kìm hãm phát triển kinh tế. Đây là ý nghĩa sâu sắc: nhà nước (KTTT) là "sức mạnh kinh tế" vì tác động trực tiếp đến CSHT.',
                sourceRef: 'Triet.txt, dòng 954'
            },
            {
                id: 'M6-F-Q10',
                text: 'Trong xã hội có đối kháng giai cấp, giai cấp thống trị về kinh tế có vị trí thế nào trong KTTT?',
                options: [
                    { id: 'a', text: 'Giai cấp thống trị về kinh tế không nhất thiết thống trị về chính trị và tư tưởng' },
                    { id: 'b', text: 'Giai cấp thống trị về kinh tế cũng chiếm địa vị thống trị trong đời sống chính trị và tinh thần của xã hội' },
                    { id: 'c', text: 'Giai cấp bị trị về kinh tế nhưng lại nắm quyền lực chính trị' },
                    { id: 'd', text: 'Chính trị và kinh tế do hai giai cấp khác nhau kiểm soát để cân bằng quyền lực' }
                ],
                correctOptionId: 'b',
                rationale: 'Dòng 947: "Trong xã hội có đối kháng giai cấp, giai cấp nào chiếm địa vị thống trị về kinh tế thì cũng chiếm địa vị thống trị trong đời sống chính trị, tinh thần của xã hội; mâu thuẫn trong lĩnh vực kinh tế quyết định tính chất mâu thuẫn trong lĩnh vực tư tưởng của xã hội."',
                sourceRef: 'Triet.txt, dòng 947'
            },
            {
                id: 'M6-F-Q11',
                text: 'Điều gì phân biệt quy luật CSHT-KTTT trong CNXH với các xã hội có đối kháng giai cấp?',
                options: [
                    { id: 'a', text: 'Trong CNXH không có CSHT và KTTT vì mọi người đều bình đẳng' },
                    { id: 'b', text: 'CSHT XHCN khi hoàn thiện không còn mâu thuẫn đối kháng; KTTT XHCN có sự nhất trí về chính trị và tinh thần trong toàn xã hội' },
                    { id: 'c', text: 'CSHT XHCN mạnh hơn về vật chất nên KTTT XHCN tự động hoàn thiện' },
                    { id: 'd', text: 'KTTT XHCN không cần nhà nước vì giai cấp vô sản đã làm chủ' }
                ],
                correctOptionId: 'b',
                rationale: 'Dòng 958: "Cơ sở hạ tầng xã hội chủ nghĩa không còn mâu thuẫn đối kháng, trong kết cấu kinh tế không bao hàm sự đối lập về lợi ích căn bản. Đặc trưng của kiến trúc thượng tầng xã hội chủ nghĩa là sự nhất trí về chính trị và tinh thần trong toàn xã hội."',
                sourceRef: 'Triet.txt, dòng 958'
            },
            {
                id: 'M6-F-Q12',
                text: 'Kết nối M5-M6: Tại sao khi toàn bộ QHSX (học trong M5) thay đổi về chất, điều đó ảnh hưởng đến KTTT (nội dung M6)?',
                options: [
                    { id: 'a', text: 'QHSX và KTTT độc lập hoàn toàn, không ảnh hưởng nhau' },
                    { id: 'b', text: 'QHSX thay đổi chỉ ảnh hưởng đến LLSX, không ảnh hưởng KTTT' },
                    { id: 'c', text: 'Toàn bộ QHSX hợp thành CSHT; khi QHSX thay đổi về chất → CSHT thay đổi về chất → tất yếu dẫn đến biến đổi căn bản trong KTTT (dòng 948 + 971)' },
                    { id: 'd', text: 'KTTT thay đổi trước rồi mới tạo điều kiện cho QHSX thay đổi' }
                ],
                correctOptionId: 'c',
                rationale: 'Chuỗi nhân quả (dòng 971): LLSX phát triển → QHSX thay đổi về chất → CSHT (= tổng QHSX) thay đổi → KTTT biến đổi căn bản. Đây là cơ chế vận hành của lịch sử xã hội theo CNDVLS — kết nối trực tiếp Module 5 (LLSX-QHSX) với Module 6 (CSHT-KTTT).',
                sourceRef: 'Triet.txt, dòng 948, 970–971'
            }
        ]
    };

    // ─────────────────────────────────────────────────────────
    // EXPORTS
    // ─────────────────────────────────────────────────────────
    const FORMATIVE_QUIZZES_M6 = {
        'M6-FQ1': M6_FQ1,
        'M6-FQ2': M6_FQ2,
        'M6-FQ3': M6_FQ3
    };

    if (typeof window !== 'undefined') {
        window.FORMATIVE_QUIZZES_M6 = FORMATIVE_QUIZZES_M6;
        window.MODULE_QUIZ_M6 = M6_FINAL;
    }

})();
