// Philosophy Quiz Data - MLN111 (4 Stats Only, Balanced Bonus/Penalty)
// Questions about Dialectical Materialism for Development Map Game
// Stats: quantity, knowledge, softSkills, creativity, mentalHealth
// Bonus max: +6, Penalty max: -3

const QUIZ_QUESTIONS = [
    // === QUY LUẬT LƯỢNG - CHẤT (8 câu) ===
    {
        id: 'q1',
        category: 'luong-chat',
        question: 'Quy luật Lượng-Chất trong triết học duy vật biện chứng nói về điều gì?',
        options: [
            'Tích lũy về lượng đến một ngưỡng nhất định sẽ dẫn đến bước nhảy về chất',
            'Chất lượng quan trọng hơn số lượng trong mọi trường hợp',
            'Lượng và chất là hai yếu tố hoàn toàn độc lập không liên quan'
        ],
        correct: 0,
        explanation: 'Quy luật Lượng-Chất chỉ ra rằng sự tích lũy về lượng đến một điểm nút (ngưỡng) nhất định sẽ tạo ra bước nhảy về chất - một sự biến đổi căn bản.',
        bonus: { quantity: 6, knowledge: 3 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q2',
        category: 'luong-chat',
        question: 'Trong quá trình học tập, nếu bạn chỉ học nhiều giờ nhưng không hiểu bài, bạn đã vi phạm nguyên tắc nào?',
        options: [
            'Chỉ tích lũy lượng mà không chú ý đến chất',
            'Tích lũy đủ cả lượng và chất',
            'Không có vấn đề gì, học nhiều là tốt'
        ],
        correct: 0,
        explanation: 'Học nhiều giờ (lượng) nhưng không hiểu (chất thấp) là vi phạm quy luật Lượng-Chất. Cần cân bằng giữa thời gian học và chất lượng tiếp thu.',
        bonus: { quantity: 5, knowledge: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q3',
        category: 'luong-chat',
        question: '"Điểm nút" trong quy luật Lượng-Chất là gì?',
        options: [
            'Ngưỡng mà tại đó sự tích lũy lượng chuyển thành bước nhảy chất',
            'Điểm kết thúc của quá trình học tập',
            'Mức điểm tối thiểu để đạt môn học'
        ],
        correct: 0,
        explanation: 'Điểm nút là ngưỡng quan trọng - khi tích lũy lượng đạt đến đây, sẽ xảy ra bước nhảy về chất (chuyển biến căn bản).',
        bonus: { quantity: 4, creativity: 3 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q4',
        category: 'luong-chat',
        question: 'Ví dụ nào sau đây thể hiện đúng quy luật Lượng-Chất?',
        options: [
            'Học tích lũy kiến thức từng ngày → Hiểu sâu về một lĩnh vực',
            'Đọc sách càng nhiều càng tốt không cần suy nghĩ',
            'Chỉ cần chất lượng, không cần số lượng'
        ],
        correct: 0,
        explanation: 'Tích lũy kiến thức đều đặn (lượng) sẽ dẫn đến hiểu biết sâu sắc (chất) - đây là ví dụ điển hình của quy luật Lượng-Chất.',
        bonus: { quantity: 5, knowledge: 3 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q5',
        category: 'luong-chat',
        question: 'Tại sao không thể "nhảy cóc" - bỏ qua giai đoạn tích lũy lượng?',
        options: [
            'Vì bước nhảy chất chỉ xảy ra khi đã tích lũy đủ lượng',
            'Vì luôn có thể đạt được mọi thứ ngay lập tức',
            'Vì lượng không quan trọng'
        ],
        correct: 0,
        explanation: 'Không thể bỏ qua tích lũy lượng vì bước nhảy chất là kết quả tất yếu của sự tích lũy về lượng. Không có lượng thì không có chất.',
        bonus: { quantity: 6, knowledge: 3, creativity: 2 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q6',
        category: 'luong-chat',
        question: 'Sinh viên A học đều 2 giờ/ngày trong 3 tháng và hiểu sâu. Sinh viên B học dồn 180 giờ trong 1 tuần cuối. Ai áp dụng đúng quy luật Lượng-Chất?',
        options: [
            'Sinh viên A - tích lũy đều đặn tạo biến đổi chất bền vững',
            'Sinh viên B - học nhiều giờ hơn nên tốt hơn',
            'Cả hai đều đúng'
        ],
        correct: 0,
        explanation: 'Sinh viên A tích lũy đều đặn (lượng) qua thời gian dài, tạo nên sự thay đổi chất bền vững. Sinh viên B chỉ tích lũy lượng mà thiếu quá trình chuyển hóa chất.',
        bonus: { quantity: 6, knowledge: 4, mentalHealth: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q7',
        category: 'luong-chat',
        question: 'Bước nhảy từ "Sinh viên năm 1" thành "Sinh viên có kỹ năng" trong game là ví dụ về điều gì?',
        options: [
            'Bước nhảy về chất sau khi tích lũy đủ lượng',
            'Sự thay đổi ngẫu nhiên',
            'Chỉ là thay đổi tên gọi'
        ],
        correct: 0,
        explanation: 'Đây là bước nhảy về chất - một sự biến đổi căn bản về trình độ sau khi tích lũy đủ lượng (kiến thức, kỹ năng).',
        bonus: { quantity: 5, creativity: 4 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q8',
        category: 'luong-chat',
        question: 'Trong game, tại sao phải kéo thả nhiều lần (tích lũy lượng) mới có transformation (biến đổi chất)?',
        options: [
            'Để thể hiện quy luật Lượng-Chất: tích lũy lượng → biến đổi chất',
            'Để game khó hơn',
            'Không có lý do đặc biệt'
        ],
        correct: 0,
        explanation: 'Game mô phỏng quy luật Lượng-Chất: mỗi hành động là tích lũy lượng, và khi đạt ngưỡng sẽ xảy ra transformation (bước nhảy chất).',
        bonus: { quantity: 6, knowledge: 5, creativity: 3 },
        penalty: { quantity: -2 }
    },

    // === QUY LUẬT MÂU THUẪN (7 câu) ===
    {
        id: 'q9',
        category: 'mau-thuan',
        question: 'Mâu thuẫn trong triết học biện chứng là gì?',
        options: [
            'Sự đấu tranh và thống nhất giữa các mặt đối lập trong cùng sự vật',
            'Sự xung đột không thể giải quyết',
            'Sự khác biệt đơn thuần giữa hai sự vật'
        ],
        correct: 0,
        explanation: 'Mâu thuẫn biện chứng là sự thống nhất và đấu tranh giữa các mặt đối lập trong cùng một sự vật, là nguồn gốc và động lực phát triển.',
        bonus: { quantity: 5, knowledge: 4, creativity: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q10',
        category: 'mau-thuan',
        question: 'Trong game, "Học tập" (+tri thức, -tinh thần) và "Nghỉ ngơi" (+tinh thần, -lượng) thể hiện điều gì?',
        options: [
            'Mâu thuẫn cần được cân bằng để phát triển toàn diện',
            'Hai hành động không liên quan',
            'Chỉ nên chọn một trong hai'
        ],
        correct: 0,
        explanation: 'Đây là mâu thuẫn điển hình: học tập vs nghỉ ngơi. Cần cân bằng cả hai để phát triển bền vững, không thể chỉ tập trung vào một mặt.',
        bonus: { quantity: 6, mentalHealth: 4, creativity: 3 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q11',
        category: 'mau-thuan',
        question: 'Tại sao mâu thuẫn là động lực phát triển?',
        options: [
            'Vì sự đấu tranh giữa các mặt đối lập tạo ra sự vận động và phát triển',
            'Vì mâu thuẫn luôn tạo ra xung đột',
            'Vì mâu thuẫn không quan trọng'
        ],
        correct: 0,
        explanation: 'Mâu thuẫn là động lực phát triển vì sự đấu tranh giữa các mặt đối lập thúc đẩy sự vật vận động, thay đổi và phát triển.',
        bonus: { quantity: 5, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q12',
        category: 'mau-thuan',
        question: 'Khi stats "Tinh thần" xuống thấp trong game, bạn nên làm gì theo quy luật mâu thuẫn?',
        options: [
            'Cân bằng lại bằng "Nghỉ ngơi" hoặc "Giao tiếp" để giải quyết mâu thuẫn',
            'Tiếp tục "Học tập" để tăng lượng',
            'Bỏ qua, không cần quan tâm'
        ],
        correct: 0,
        explanation: 'Khi tinh thần thấp, cần giải quyết mâu thuẫn bằng cách nghỉ ngơi hoặc giao tiếp để cân bằng lại. Đây là cách giải quyết mâu thuẫn hợp lý.',
        bonus: { mentalHealth: 6, creativity: 3 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q13',
        category: 'mau-thuan',
        question: 'Element "Áp lực" (+lượng, -tinh thần) thể hiện mâu thuẫn gì?',
        options: [
            'Mâu thuẫn giữa động lực phát triển và sức khỏe tinh thần',
            'Không có mâu thuẫn',
            'Chỉ có tác động tiêu cực'
        ],
        correct: 0,
        explanation: 'Áp lực vừa là động lực (tăng lượng) vừa gây stress (giảm tinh thần) - đây là mâu thuẫn điển hình cần được quản lý hợp lý.',
        bonus: { quantity: 5, knowledge: 4, mentalHealth: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q14',
        category: 'mau-thuan',
        question: 'Làm sao để giải quyết mâu thuẫn giữa "Học nhiều" và "Sức khỏe tinh thần"?',
        options: [
            'Cân bằng giữa học tập và nghỉ ngơi, không cực đoan',
            'Chỉ tập trung học thôi',
            'Chỉ nghỉ ngơi, bỏ học'
        ],
        correct: 0,
        explanation: 'Giải quyết mâu thuẫn bằngcách cân bằng, không đi cực đoan. Vừa học vừa nghỉ hợp lý là cách tốt nhất.',
        bonus: { quantity: 6, mentalHealth: 5, creativity: 3 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q15',
        category: 'mau-thuan',
        question: 'Trong các elements của game, cặp nào thể hiện mâu thuẫn rõ nhất?',
        options: [
            'Học tập (tăng tri thức, giảm tinh thần) vs Nghỉ ngơi (tăng tinh thần, không tăng lượng)',
            'Thời gian vs Sáng tạo',
            'Làm thêm vs Tình nguyện'
        ],
        correct: 0,
        explanation: 'Cặp Học tập - Nghỉ ngơi thể hiện mâu thuẫn điển hình: một bên tích lũy kiến thức nhưng mệt mỏi, một bên phục hồi tinh thần nhưng không tiến bộ.',
        bonus: { quantity: 5, creativity: 4 },
        penalty: { quantity: -2 }
    },

    // === QUY LUẬT PHỦ ĐỊNH CỦA PHỦ ĐỊNH (5 câu) ===
    {
        id: 'q16',
        category: 'phu-dinh',
        question: 'Quy luật Phủ định của Phủ định nói về điều gì?',
        options: [
            'Sự phát triển theo hình xoáy ốc: phủ định nhưng kế thừa cái cũ ở mức cao hơn',
            'Phủ định hoàn toàn, loại bỏ hết cái cũ',
            'Quay lại trạng thái ban đầu giống hệt'
        ],
        correct: 0,
        explanation: 'Phủ định biện chứng là phủ định nhưng có kế thừa, phát triển theo hình xoáy ốc lên cao hơn, không phải quay lại điểm xuất phát cũ.',
        bonus: { quantity: 6, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q17',
        category: 'phu-dinh',
        question: 'Khi bạn từ "Sinh viên năm 1" → "Sinh viên có kỹ năng" → "Thực tập sinh" → "Có việc làm", đây là ví dụ về quy luật nào?',
        options: [
            'Phủ định của Phủ định - phát triển xoáy ốc lên cao',
            'Chỉ là thay đổi tuần tự',
            'Không liên quan đến quy luật nào'
        ],
        correct: 0,
        explanation: 'Đây là phát triển theo hình xoáy ốc: mỗi giai đoạn phủ định giai đoạn trước nhưng kế thừa và nâng lên mức cao hơn.',
        bonus: { quantity: 6, knowledge: 4, creativity: 5 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q18',
        category: 'phu-dinh',
        question: 'Tại sao sau khi "phủ định" (transformation), bạn không quay lại trạng thái ban đầu giống hệt?',
        options: [
            'Vì phủ định biện chứng là kế thừa và phát triển lên cao hơn',
            'Vì có thể quay lại giống hệt',
            'Vì không có sự thay đổi thực sự'
        ],
        correct: 0,
        explanation: 'Phủ định biện chứng không phải quay vòng tròn mà là xoáy ốc: kế thừa những gì tốt của cũ và phát triển lên mức cao hơn.',
        bonus: { quantity: 5, creativity: 5 },
        penalty: { creativity: -2 }
    },
    {
        id: 'q19',
        category: 'phu-dinh',
        question: 'Sự khác nhau giữa "phủ định siêu hình" và "phủ định biện chứng" là gì?',
        options: [
            'Phủ định siêu hình loại bỏ hoàn toàn, phủ định biện chứng kế thừa và phát triển',
            'Không có sự khác biệt',
            'Cả hai đều loại bỏ hoàn toàn cái cũ'
        ],
        correct: 0,
        explanation: 'Phủ định siêu hình phủ nhận tuyệt đối. Phủ định biện chứng phủ nhận nhưng kế thừa cái hợp lý và phát triển lên.',
        bonus: { quantity: 6, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q20',
        category: 'phu-dinh',
        question: 'Trong quá trình học, bạn học sai → nhận ra lỗi → học đúng cách. Đây là ví dụ về quy luật gì?',
        options: [
            'Phủ định của Phủ định - phủ nhận cách cũ nhưng tiếp thu kinh nghiệm',
            'Chỉ là sửa lỗi đơn thuần',
            'Không liên quan'
        ],
        correct: 0,
        explanation: 'Đây là phủ định biện chứng: phủ nhận cách học sai (phủ định lần 1), nhưng tiếp thu kinh nghiệm để học đúng hơn (phủ định lần 2, kế thừa kinh nghiệm).',
        bonus: { quantity: 5, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },

    // === ỨNG DỤNG THỰC TẾ (10 câu) ===
    {
        id: 'q21',
        category: 'ung-dung',
        question: 'Bạn muốn giỏi lập trình. Theo quy luật Lượng-Chất, bạn nên làm gì?',
        options: [
            'Luyện tập code đều đặn mỗi ngày, tích lũy kinh nghiệm dần dần',
            'Chỉ đọc lý thuyết không cần thực hành',
            'Học dồn vào cuối tuần'
        ],
        correct: 0,
        explanation: 'Tích lũy đều đặn (lượng) qua thực hành hàng ngày sẽ dẫn đến thành thạo (chất). Đây là áp dụng quy luật Lượng-Chất.',
        bonus: { quantity: 5, knowledge: 4, creativity: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q22',
        category: 'ung-dung',
        question: 'Bạn vừa muốn điểm cao, vừa muốn tham gia nhiều hoạt động CLB. Đây là mâu thuẫn gì?',
        options: [
            'Mâu thuẫn giữa học tập và hoạt động xã hội, cần cân bằng',
            'Không có mâu thuẫn, có thể làm cả hai dễ dàng',
            'Phải chọn một, không thể cả hai'
        ],
        correct: 0,
        explanation: 'Đây là mâu thuẫn điển hình của sinh viên. Cần quản lý thời gian hợp lý để cân bằng cả học tập và phát triển kỹ năng mềm.',
        bonus: { quantity: 4, softSkills: 4, mentalHealth: 3 },
        penalty: { softSkills: -2 }
    },
    {
        id: 'q23',
        category: 'ung-dung',
        question: 'Trong game, khi nào bạn nên sử dụng element "Áp lực"?',
        options: [
            'Khi cần boost lượng nhanh, nhưng phải cẩn thận với tinh thần',
            'Sử dụng liên tục để tăng lượng tối đa',
            'Không bao giờ nên dùng'
        ],
        correct: 0,
        explanation: 'Áp lực có thể tăng lượng nhanh nhưng giảm tinh thần. Cần dùng có chọn lọc và cân bằng với các elements phục hồi tinh thần.',
        bonus: { quantity: 5, mentalHealth: 3, creativity: 3 },
        penalty: { mentalHealth: -2 }
    },
    {
        id: 'q24',
        category: 'ung-dung',
        question: 'Element "Giao tiếp" (+kỹ năng mềm, +tinh thần) quan trọng như thế nào theo triết học?',
        options: [
            'Rất quan trọng - con người phát triển trong quan hệ xã hội',
            'Không quan trọng, chỉ cần học giỏi',
            'Chỉ là tùy chọn phụ'
        ],
        correct: 0,
        explanation: 'Theo triết học Mác, bản chất con người là tổng hòa các quan hệ xã hội. Giao tiếp phát triển kỹ năng mềm và tinh thần - không thể thiếu.',
        bonus: { softSkills: 5, mentalHealth: 5, creativity: 3 },
        penalty: { softSkills: -2 }
    },
    {
        id: 'q25',
        category: 'ung-dung',
        question: 'Tại sao cần có element "Nghỉ ngơi" trong game dù nó không tăng Lượng?',
        options: [
            'Vì cần cân bằng mâu thuẫn, phục hồi tinh thần để phát triển bền vững',
            'Vì game cần có nhiều lựa chọn',
            'Không cần thiết, nên bỏ đi'
        ],
        correct: 0,
        explanation: 'Nghỉ ngơi giải quyết mâu thuẫn giữa phấn đấu và sức khỏe. Dù không tăng lượng trực tiếp nhưng cần thiết cho phát triển bền vững.',
        bonus: { mentalHealth: 6 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q26',
        category: 'ung-dung',
        question: 'Trong thực tế, "thi trượt một môn" (event tiêu cực) có thể có mặt tích cực gì theo quy luật Phủ định?',
        options: [
            'Nhận ra lỗi sai, học cách học đúng hơn - phủ định để phát triển',
            'Hoàn toàn tiêu cực, không có gì tích cực',
            'Không liên quan đến quy luật'
        ],
        correct: 0,
        explanation: 'Theo phủ định biện chứng, thất bại có thể là bài học giúp phủ định cách học cũ và tìm cách học hiệu quả hơn.',
        bonus: { quantity: 5, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q27',
        category: 'ung-dung',
        question: 'Element "Tình nguyện" (+kỹ năng mềm, +tinh thần) thể hiện quan điểm triết học nào?',
        options: [
            'Con người phát triển toàn diện khi cống hiến cho cộng đồng',
            'Chỉ là hoạt động tốt nhưng không liên quan triết',
            'Lãng phí thời gian'
        ],
        correct: 0,
        explanation: 'Tình nguyện thể hiện quan điểm phát triển toàn diện: vừa rèn kỹ năng, vừa tốt cho tinh thần, vừa cống hiến xã hội.',
        bonus: { softSkills: 5, mentalHealth: 5 },
        penalty: { softSkills: -2 }
    },
    {
        id: 'q28',
        category: 'ung-dung',
        question: 'Khi bạn làm nhiều project cùng lúc, bạn đang áp dụng nguyên lý nào?',
        options: [
            'Cân bằng mâu thuẫn: đa dạng hóa kinh nghiệm vừa phát triển kỹ năng đa dạng',
            'Tham lam, làm nhiều thứ cùng lúc là sai',
            'Chỉ nên tập trung một việc duy nhất'
        ],
        correct: 0,
        explanation: 'Làm nhiều project đa dạng giúp phát triển toàn diện nhiều kỹ năng, thể hiện nguyên lý cân bằng và phát triển đa chiều.',
        bonus: { creativity: 5, softSkills: 4 },
        penalty: { creativity: -2 }
    },
    {
        id: 'q29',
        category: 'ung-dung',
        question: 'Element "Thể thao" (+tinh thần) quan trọng như thế nào trong phát triển toàn diện?',
        options: [
            'Rất quan trọng - cơ thể khỏe là nền tảng cho mọi hoạt động',
            'Không cần thiết, chỉ cần học',
            'Chỉ dành cho vận động viên'
        ],
        correct: 0,
        explanation: 'Thể chất và tinh thần có mối liên hệ biện chứng. Cơ thể khỏe là nền tảng cho học tập và làm việc hiệu quả.',
        bonus: { mentalHealth: 6, quantity: 3 },
        penalty: { mentalHealth: -2 }
    },
    {
        id: 'q30',
        category: 'ung-dung',
        question: 'Trong game, tại sao cần đa dạng hóa các elements thay vì chỉ spam một loại?',
        options: [
            'Vì phát triển toàn diện cần cân bằng nhiều mặt, tránh phát triển lệch lạc',
            'Vì game bắt buộc',
            'Không có lý do đặc biệt'
        ],
        correct: 0,
        explanation: 'Theo quan điểm phát triển toàn diện, cần cân bằng tri thức, kỹ năng, sức khỏe... Spam một loại dẫn đến phát triển lệch lạc.',
        bonus: { quantity: 5, knowledge: 4, creativity: 4, softSkills: 3 },
        penalty: { quantity: -2 }
    }
];

// Export for use in game
if (typeof window !== 'undefined') {
    window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}

// =============================================
// MODULE 1 — VẬT CHẤT & VẬN ĐỘNG
// Kiểm tra hình thành (Formative Quizzes)
// sourceRef: Giáo trình Triết học Mác-Lênin 2021, Chương 2
// =============================================

const FORMATIVE_QUIZZES_M1 = {
    // Kiểm tra hình thành 1: Sau Bài 1.1–1.2 (Vật chất & Vận động)
    "M1-FQ1": {
        title: "Kiểm tra hình thành: Vật chất & Vận động",
        lessonId: "M1-L2",
        module: "M1",
        passingScore: 70,
        questions: [
            {
                id: "M1-FQ1-1",
                module: "M1",
                lessonId: "M1-L1",
                text: "Theo V.I. Lênin, vật chất là gì?",
                options: [
                    { id: "a", text: "Một phạm trù triết học dùng để chỉ thực tại khách quan, tồn tại không lệ thuộc vào cảm giác" },
                    { id: "b", text: "Tất cả những gì ta có thể nhìn thấy và chạm vào được" },
                    { id: "c", text: "Nguyên tử và các hạt cơ bản cấu tạo nên vũ trụ" }
                ],
                correctOptionId: "a",
                rationale: "Định nghĩa kinh điển: 'Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác... và tồn tại không lệ thuộc vào cảm giác.' (Chương 2, tr.449)"
            },
            {
                id: "M1-FQ1-2",
                module: "M1",
                lessonId: "M1-L1",
                text: "Đặc tính duy nhất mà chủ nghĩa duy vật thừa nhận về vật chất là gì?",
                options: [
                    { id: "a", text: "Có khối lượng và chiếm chỗ trong không gian" },
                    { id: "b", text: "Tồn tại với tư cách là thực tại khách quan, ngoài ý thức" },
                    { id: "c", text: "Có thể cảm nhận bằng giác quan con người" }
                ],
                correctOptionId: "b",
                rationale: "V.I. Lênin nhấn mạnh: đặc tính duy nhất mà CNDV gắn liền — 'tồn tại với tư cách là thực tại khách quan, tồn tại ở ngoài ý thức' (Chương 2, tr.452)"
            },
            {
                id: "M1-FQ1-3",
                module: "M1",
                lessonId: "M1-L2",
                text: "Vận động được hiểu theo nghĩa chung nhất trong triết học Mác là gì?",
                options: [
                    { id: "a", text: "Sự di chuyển vị trí trong không gian của các vật thể" },
                    { id: "b", text: "Mọi sự biến đổi nói chung — là phương thức tồn tại, thuộc tính cố hữu của vật chất" },
                    { id: "c", text: "Sự thay đổi của ý thức con người qua thời gian" }
                ],
                correctOptionId: "b",
                rationale: "Ph. Ăngghen: 'Vận động... bao gồm tất cả mọi sự thay đổi và mọi quá trình diễn ra trong vũ trụ, kể từ sự thay đổi vị trí đơn giản cho đến tư duy.' (Chương 2, tr.465)"
            },
            {
                id: "M1-FQ1-4",
                module: "M1",
                lessonId: "M1-L2",
                text: "Câu nào sau đây mô tả đúng quan hệ giữa vận động và đứng im?",
                options: [
                    { id: "a", text: "Vận động là tuyệt đối, đứng im là tương đối và tạm thời" },
                    { id: "b", text: "Đứng im là trạng thái bình thường, vận động là ngoại lệ" },
                    { id: "c", text: "Vận động và đứng im có vị trí ngang nhau, không cái nào tuyệt đối" }
                ],
                correctOptionId: "a",
                rationale: "CNDV biện chứng: vận động là tuyệt đối, đứng im là tương đối, tạm thời — 'đứng im là một dạng của vận động trong thăng bằng ổn định tương đối' (Chương 2, tr.479)"
            }
        ]
    },

    // Kiểm tra hình thành 2: Sau Bài 1.3–1.4 (Không gian, Thời gian & Các dạng vận động)
    "M1-FQ2": {
        title: "Kiểm tra hình thành: Không gian, Thời gian & Các dạng vận động",
        lessonId: "M1-L4",
        module: "M1",
        passingScore: 70,
        questions: [
            {
                id: "M1-FQ2-1",
                module: "M1",
                lessonId: "M1-L3",
                text: "Theo CNDV biện chứng, không gian và thời gian là gì?",
                options: [
                    { id: "a", text: "Những hình thức tư duy thuần túy của con người, tồn tại trong ý thức" },
                    { id: "b", text: "Những hình thức tồn tại khách quan của vật chất vận động" },
                    { id: "c", text: "Những không gian trống rỗng chứa đựng vật chất bên trong" }
                ],
                correctOptionId: "b",
                rationale: "CNDV biện chứng khẳng định: không gian và thời gian 'là hình thức tồn tại của vật chất vận động', có tính khách quan. (Chương 2, tr.486)"
            },
            {
                id: "M1-FQ2-2",
                module: "M1",
                lessonId: "M1-L3",
                text: "Thuyết tương đối của Einstein chứng minh điều gì liên quan đến không gian-thời gian?",
                options: [
                    { id: "a", text: "Không gian và thời gian là bất biến, tuyệt đối" },
                    { id: "b", text: "Không gian và thời gian có tính khả biến, phụ thuộc vào tốc độ và khối lượng của vật chất" },
                    { id: "c", text: "Không gian và thời gian chỉ tồn tại trong nhận thức con người" }
                ],
                correctOptionId: "b",
                rationale: "Einstein chứng minh: 'không gian, thời gian có tính khả biến, phụ thuộc vào tốc độ, khối lượng... của các đối tượng vật chất' (Chương 2, tr.489)"
            },
            {
                id: "M1-FQ2-3",
                module: "M1",
                lessonId: "M1-L4",
                text: "Ph. Ăngghen phân chia vận động vật chất thành mấy hình thức cơ bản?",
                options: [
                    { id: "a", text: "3 hình thức: cơ học, hóa học, sinh học" },
                    { id: "b", text: "5 hình thức: cơ học, vật lý, hóa học, sinh học, xã hội" },
                    { id: "c", text: "4 hình thức: cơ học, vật lý, sinh học, xã hội" }
                ],
                correctOptionId: "b",
                rationale: "Ph. Ăngghen phân chia thành 5 hình thức: cơ học, vật lý, hóa học, sinh học và xã hội — từ thấp đến cao (Chương 2, tr.472)"
            },
            {
                id: "M1-FQ2-4",
                module: "M1",
                lessonId: "M1-L4",
                text: "Hình thức vận động cao và thấp có quan hệ với nhau như thế nào?",
                options: [
                    { id: "a", text: "Hoàn toàn độc lập, không liên quan nhau" },
                    { id: "b", text: "Hình thức cao nảy sinh trên cơ sở hình thức thấp và bao hàm hình thức thấp; nhưng khác về chất" },
                    { id: "c", text: "Hình thức cao có thể quy về hình thức thấp bằng phương trình toán học" }
                ],
                correctOptionId: "b",
                rationale: "Nguyên tắc: 'hình thức vận động cao nảy sinh trên cơ sở của những hình thức vận động thấp... nhưng không thể quy về hình thức vận động thấp' (Chương 2, tr.473)"
            }
        ]
    },

    // Kiểm tra hình thành 3: Sau Bài 1.5–1.6 (Ý thức & Ứng dụng)
    "M1-FQ3": {
        title: "Kiểm tra hình thành: Ý thức, Tính thống nhất & Ứng dụng",
        lessonId: "M1-L6",
        module: "M1",
        passingScore: 70,
        questions: [
            {
                id: "M1-FQ3-1",
                module: "M1",
                lessonId: "M1-L5",
                text: "Theo CNDV biện chứng, mối quan hệ giữa vật chất và ý thức là gì?",
                options: [
                    { id: "a", text: "Ý thức quyết định vật chất — tư duy đúng sẽ tạo ra hoàn cảnh" },
                    { id: "b", text: "Vật chất quyết định ý thức; ý thức phản ánh vật chất và có thể tác động ngược lại" },
                    { id: "c", text: "Vật chất và ý thức song song tồn tại, không cái nào quyết định cái nào" }
                ],
                correctOptionId: "b",
                rationale: "CNDV biện chứng: vật chất là tính thứ nhất, ý thức là tính thứ hai. Ý thức phản ánh vật chất nhưng có tính năng động, sáng tạo có thể tác động trở lại vật chất. (Chương 2)"
            },
            {
                id: "M1-FQ3-2",
                module: "M1",
                lessonId: "M1-L5",
                text: "Nam muốn thoát nghèo bằng cách 'ngồi thiền hút tiền từ vũ trụ'. Đây phạm sai lầm triết học nào?",
                options: [
                    { id: "a", text: "Chủ nghĩa duy vật siêu hình — quá cứng nhắc với thực tại" },
                    { id: "b", text: "Chủ nghĩa duy tâm chủ quan — đề cao ý thức, tách rời hoàn cảnh vật chất thực tế" },
                    { id: "c", text: "Chủ nghĩa định mệnh — tin vào số phận" }
                ],
                correctOptionId: "b",
                rationale: "Tin ý thức/ý chí có thể tạo ra vật chất không cần hành động thực tiễn là chủ nghĩa duy tâm chủ quan — lầm lẫn về vai trò của vật chất."
            },
            {
                id: "M1-FQ3-3",
                module: "M1",
                lessonId: "M1-L6",
                text: "Nguyên tắc 'tôn trọng tính khách quan' trong thực tiễn có nghĩa là gì?",
                options: [
                    { id: "a", text: "Chấp nhận hoàn cảnh và không cố gắng thay đổi gì" },
                    { id: "b", text: "Xuất phát từ hiện thực khách quan, nhận thức và vận dụng đúng quy luật khách quan" },
                    { id: "c", text: "Hoàn toàn phụ thuộc vào điều kiện bên ngoài mà không phát huy chủ quan" }
                ],
                correctOptionId: "b",
                rationale: "Tôn trọng khách quan = xuất phát từ thực tế, tôn trọng quy luật. Kết hợp với phát huy tính năng động chủ quan — không buông xuôi cũng không duy ý chí. (Chương 2)"
            }
        ]
    }
};

// =============================================
// MODULE 1 — Bài kiểm tra tổng kết (12 câu)
// sourceRef: Giáo trình Triết học Mác-Lênin 2021, Chương 2
// =============================================

const MODULE_QUIZ_M1 = {
    id: "M1-FINAL",
    title: "Kiểm tra Module 1: Vật chất & Vận động",
    module: "M1",
    passingScore: 75,
    achievement: "motion-analyst",
    xp: 10,
    questions: [
        {
            id: "M1-Q1",
            module: "M1",
            text: "Định nghĩa vật chất của V.I. Lênin xác định vật chất bằng cách đối lập với khái niệm nào?",
            options: [
                { id: "a", text: "Với năng lượng — vì năng lượng là phi vật chất" },
                { id: "b", text: "Với ý thức — trên phương diện nhận thức luận cơ bản (cái nào có trước)" },
                { id: "c", text: "Với tinh thần thế giới của triết học Hegel" }
            ],
            correctOptionId: "b",
            rationale: "Lênin định nghĩa vật chất 'bằng cách đem đối lập với phạm trù ý thức trên phương diện nhận thức luận cơ bản' — cái nào được coi là có trước. (Chương 2, tr.448)"
        },
        {
            id: "M1-Q2",
            module: "M1",
            text: "Tại sao cuối TK XIX – đầu TK XX, nhiều nhà khoa học rơi vào 'chủ nghĩa duy tâm vật lý học'?",
            options: [
                { id: "a", text: "Vì họ hiểu rằng vật chất thực sự biến mất khi nguyên tử bị phân chia" },
                { id: "b", text: "Vì họ đồng nhất vật chất với nguyên tử — khi nguyên tử bị phân chia, họ lầm tưởng 'vật chất tiêu tan'" },
                { id: "c", text: "Vì Einstein chứng minh vật chất không tồn tại độc lập" }
            ],
            correctOptionId: "b",
            rationale: "Do chủ nghĩa duy vật siêu hình đồng nhất vật chất với nguyên tử. Khi nguyên tử bị phân chia, họ kết luận sai 'vật chất tiêu tan'. Lênin gọi đó là 'khủng hoảng vật lý học' do thiếu phép biện chứng. (Chương 2, tr.439)"
        },
        {
            id: "M1-Q3",
            module: "M1",
            text: "Ph. Ăngghen định nghĩa vận động 'theo nghĩa chung nhất' là gì?",
            options: [
                { id: "a", text: "Sự di chuyển của vật thể trong không gian theo thời gian" },
                { id: "b", text: "Mọi sự biến đổi nói chung — là phương thức tồn tại và thuộc tính cố hữu của vật chất" },
                { id: "c", text: "Sự chuyển hóa từ dạng năng lượng này sang dạng khác" }
            ],
            correctOptionId: "b",
            rationale: "'Vận động... bao gồm tất cả mọi sự thay đổi và mọi quá trình diễn ra trong vũ trụ, kể từ sự thay đổi vị trí đơn giản cho đến tư duy' (Ph. Ăngghen, Chương 2, tr.465)"
        },
        {
            id: "M1-Q4",
            module: "M1",
            text: "Điều gì chứng minh vận động là 'tự thân vận động' của vật chất?",
            options: [
                { id: "a", text: "Có một lực bên ngoài (Thượng đế, tinh thần thế giới) tạo ra vận động ban đầu" },
                { id: "b", text: "Bất cứ sự vật nào cũng có kết cấu thống nhất của các nhân tố đối lập — sự tác động qua lại của chúng gây ra biến đổi" },
                { id: "c", text: "Con người có thể tạo ra vận động từ trạng thái nghỉ hoàn toàn" }
            ],
            correctOptionId: "b",
            rationale: "Vận động là tự thân vì 'bất cứ sự vật nào cũng là một thể thống nhất có kết cấu nhất định giữa các nhân tố... chúng luôn tác động lẫn nhau và chính sự tác động đó gây ra biến đổi' (Chương 2, tr.467)"
        },
        {
            id: "M1-Q5",
            module: "M1",
            text: "Đứng im trong triết học Mác-Lênin được hiểu là gì?",
            options: [
                { id: "a", text: "Sự hoàn toàn bất động, không có bất kỳ biến đổi nào" },
                { id: "b", text: "Trạng thái ổn định về chất trong những điều kiện cụ thể — một dạng vận động trong thăng bằng tương đối" },
                { id: "c", text: "Trạng thái nghỉ hoàn toàn khi tất cả năng lượng bằng 0" }
            ],
            correctOptionId: "b",
            rationale: "'Đứng im là trạng thái ổn định về chất của sự vật trong những mối quan hệ và điều kiện cụ thể... là một dạng của vận động trong thăng bằng ổn định tương đối' (Chương 2, tr.479)"
        },
        {
            id: "M1-Q6",
            module: "M1",
            text: "Thuyết tương đối Einstein bác bỏ quan niệm của ai về không gian-thời gian?",
            options: [
                { id: "a", text: "Bác bỏ quan niệm của Hegel về không gian tinh thần" },
                { id: "b", text: "Bác bỏ quan niệm Newton về không gian-thời gian tuyệt đối, đồng nhất, bất biến" },
                { id: "c", text: "Bác bỏ quan niệm của Marx về thời gian lịch sử" }
            ],
            correctOptionId: "b",
            rationale: "Einstein chứng minh không gian và thời gian có tính khả biến — phụ thuộc vào tốc độ và khối lượng. Điều này bác bỏ Newton khi coi không gian là 'thùng rỗng cứng đắn bất biến'. (Chương 2, tr.489)"
        },
        {
            id: "M1-Q7",
            module: "M1",
            text: "Tại sao không thể quy hình thức vận động xã hội về hình thức vận động sinh học?",
            options: [
                { id: "a", text: "Vì xã hội phức tạp hơn sinh học về mặt số lượng" },
                { id: "b", text: "Vì hình thức vận động cao khác về chất so với hình thức thấp — con người không chỉ là sinh vật" },
                { id: "c", text: "Vì chúng tồn tại hoàn toàn tách biệt nhau" }
            ],
            correctOptionId: "b",
            rationale: "Lênin phê phán 'chủ nghĩa Đácuyn xã hội': dùng 'đấu tranh sinh tồn sinh vật' giải thích xã hội là sai, vì vận động xã hội 'khác về chất, không thể quy về hình thức thấp'. (Chương 2, tr.476)"
        },
        {
            id: "M1-Q8",
            module: "M1",
            text: "Thế giới thống nhất ở điểm nào theo CNDV biện chứng?",
            options: [
                { id: "a", text: "Ở sự tồn tại của nó — mọi thứ đều tồn tại nên thống nhất" },
                { id: "b", text: "Ở tính vật chất — chỉ một thế giới duy nhất là thế giới vật chất, mọi thứ đều là dạng cụ thể của vật chất" },
                { id: "c", text: "Ở ý thức thế giới — mọi thứ đều phản ánh một tinh thần tuyệt đối" }
            ],
            correctOptionId: "b",
            rationale: "'Chỉ một thế giới duy nhất và thống nhất là thế giới vật chất... mọi bộ phận đều là những dạng cụ thể của vật chất, cùng chịu quy luật khách quan phổ biến' (Chương 2, tr.500-502)"
        },
        {
            id: "M1-Q9",
            module: "M1",
            text: "Áp dụng CNDV biện chứng: Sinh viên A tin 'chỉ cần nghĩ tích cực, mọi thứ sẽ tốt' và không cần học. Sai lầm này là gì?",
            options: [
                { id: "a", text: "Chủ nghĩa duy tâm chủ quan — đề cao ý thức, bỏ qua thực tại vật chất (kiến thức, kỹ năng)" },
                { id: "b", text: "Chủ nghĩa định mệnh — tin vào số phận cố định" },
                { id: "c", text: "Chủ nghĩa cơ giới — cứng nhắc theo quy luật máy móc" }
            ],
            correctOptionId: "a",
            rationale: "Tin ý thức (suy nghĩ tích cực) quyết định kết quả mà không cần điều kiện vật chất (học tập, rèn luyện) là chủ nghĩa duy tâm chủ quan."
        },
        {
            id: "M1-Q10",
            module: "M1",
            text: "Bạn cùng phòng của Nam nói 'nhà mình nghèo, mình cũng chỉ đến thế thôi'. Đây là thái độ nào?",
            options: [
                { id: "a", text: "Tôn trọng tính khách quan — đúng vì thừa nhận hoàn cảnh thực tế" },
                { id: "b", text: "Thụ động trước hoàn cảnh, phủ nhận vai trò tích cực của ý thức trong việc cải tạo thực tại" },
                { id: "c", text: "Áp dụng đúng quan điểm duy vật — vật chất quyết định nên chấp nhận" }
            ],
            correctOptionId: "b",
            rationale: "CNDV biện chứng không chỉ dừng ở 'vật chất quyết định ý thức' — còn khẳng định ý thức có thể tác động ngược lại, cải tạo hoàn cảnh. Buông xuôi là phủ nhận vai trò của tính năng động chủ quan."
        },
        {
            id: "M1-Q11",
            module: "M1",
            text: "Điện tử được phát hiện năm 1897. Điều này có nghĩa là vật chất 'tiêu tan' không?",
            options: [
                { id: "a", text: "Có — vì nguyên tử bị phân chia chứng tỏ vật chất không bền vững" },
                { id: "b", text: "Không — chỉ là dạng vật chất cụ thể (nguyên tử) bị phân chia; vật chất với tư cách là thực tại khách quan không tiêu tan" },
                { id: "c", text: "Không rõ — khoa học chưa chứng minh được" }
            ],
            correctOptionId: "b",
            rationale: "Lênin phân biệt vật chất là phạm trù triết học (thực tại khách quan) với các dạng vật chất cụ thể. Nguyên tử bị phân chia nhưng không có nghĩa thực tại khách quan tiêu tan. 'Điện tử cũng vô cùng tận như nguyên tử'. (Chương 2, tr.438)"
        },
        {
            id: "M1-Q12",
            module: "M1",
            text: "Nguyên tắc phương pháp luận quan trọng nhất rút ra từ quan niệm CNDV biện chứng về vật chất là gì?",
            options: [
                { id: "a", text: "Luôn đặt lợi ích tinh thần lên trên lợi ích vật chất" },
                { id: "b", text: "Quán triệt nguyên tắc khách quan — xuất phát từ thực tế, tôn trọng quy luật, kết hợp phát huy năng động chủ quan" },
                { id: "c", text: "Chỉ tin vào những gì mắt thấy tai nghe, không suy luận" }
            ],
            correctOptionId: "b",
            rationale: "'Trong nhận thức và thực tiễn, đòi hỏi phải quán triệt nguyên tắc khách quan, xuất phát từ hiện thực khách quan, tôn trọng khách quan, nhận thức và vận dụng đúng quy luật khách quan' (Chương 2, tr.461)"
        }
    ]
};

// Export M1 quiz data
if (typeof window !== 'undefined') {
    window.FORMATIVE_QUIZZES_M1 = FORMATIVE_QUIZZES_M1;
    window.MODULE_QUIZ_M1 = MODULE_QUIZ_M1;
}

// NOTE: Module 2 quiz data is in js/quiz-data-m2.js (loaded by module2.html)
// FORMATIVE_QUIZZES_M2 and MODULE_QUIZ_M2 are defined there.
