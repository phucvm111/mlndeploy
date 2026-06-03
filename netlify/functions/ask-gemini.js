const { GoogleGenerativeAI } = require("@google/generative-ai");

// ============================================================
// KNOWLEDGE BASE – Tóm tắt Giáo trình Triết học Mác-Lênin 2021
// (Bộ GD&ĐT, dùng cho hệ đại học không chuyên triết)
// Nhúng thẳng vào prompt thay vì gửi PDF để tiết kiệm quota.
// ============================================================
const PHILOSOPHY_KNOWLEDGE_BASE = `
=== GIÁO TRÌNH TRIẾT HỌC MÁC-LÊNIN 2021 – TÓM TẮT NỘI DUNG CỐT LÕI ===

--- CHƯƠNG MỞ ĐẦU: TRIẾT HỌC VÀ VAI TRÒ CỦA TRIẾT HỌC TRONG ĐỜI SỐNG XÃ HỘI ---

1. Triết học là gì?
- Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới, về vị trí và vai trò của con người trong thế giới đó.
- Ra đời khoảng thế kỷ VIII-VI TCN tại Trung Quốc, Ấn Độ, Hy Lạp.
- Đặc trưng: tính hệ thống, tính trừu tượng, tính khái quát cao.
- Triết học có 2 chức năng chính: (1) Chức năng thế giới quan; (2) Chức năng phương pháp luận.

2. Vấn đề cơ bản của triết học:
- Quan hệ giữa tư duy và tồn tại (ý thức và vật chất).
- Mặt thứ nhất: Cái nào có trước, cái nào có sau, cái nào quyết định cái nào?
  + Chủ nghĩa duy vật: Vật chất có trước, ý thức có sau.
  + Chủ nghĩa duy tâm: Ý thức (tinh thần) có trước, vật chất có sau.
  + Nhị nguyên luận: Vật chất và tinh thần cùng tồn tại độc lập.
- Mặt thứ hai: Con người có khả năng nhận thức thế giới không?
  + Khả tri luận (có thể nhận thức).
  + Bất khả tri luận (không thể nhận thức).

3. Chủ nghĩa duy vật:
- Duy vật chất phác (thời cổ đại): Thales (nước), Heraclitus (lửa), Democritus (nguyên tử).
- Duy vật siêu hình (thế kỷ XV-XVIII): Tách rời, bất biến, máy móc.
- Duy vật biện chứng (Mác-Ăngghen): Khắc phục hạn chế của các giai đoạn trước.

4. Chủ nghĩa duy tâm:
- Duy tâm chủ quan (Berkeley, Hume): Thế giới là phức hợp cảm giác của chủ thể.
- Duy tâm khách quan (Plato, Hegel): Ý niệm/tinh thần tuyệt đối tồn tại khách quan độc lập.

5. Triết học Mác-Lênin:
- Ra đời giữa thế kỷ XIX, do C.Mác và Ph.Ăngghen sáng lập, V.I.Lênin phát triển.
- Ba nguồn gốc lý luận: Triết học cổ điển Đức (Hegel, Feuerbach), Kinh tế chính trị Anh (Smith, Ricardo), CNXH không tưởng Pháp (Saint-Simon, Fourier, Owen).
- Hai phát kiến vĩ đại: Chủ nghĩa duy vật lịch sử và Lý luận về giá trị thặng dư.
- Đặc điểm: Thống nhất tính đảng và tính khoa học; lý luận gắn với thực tiễn.

--- CHƯƠNG I: CHỦ NGHĨA DUY VẬT BIỆN CHỨNG ---

1. VẬT CHẤT VÀ Ý THỨC

1.1 Vật chất:
- Định nghĩa Lênin (1909, "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán"):
  "Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh và tồn tại không lệ thuộc vào cảm giác."
- Đặc trưng cơ bản: Tồn tại khách quan (không phụ thuộc ý thức); nhận thức được qua cảm giác và thực tiễn.
- Phương thức tồn tại của vật chất: Vận động, không gian, thời gian.
- Vận động: Là phương thức tồn tại của vật chất. 5 hình thức: cơ học, vật lý, hóa học, sinh học, xã hội. Vận động mang tính khách quan, tuyệt đối, vĩnh viễn. Đứng im chỉ là tương đối, tạm thời.
- Không gian và thời gian: Hình thức tồn tại khách quan của vật chất đang vận động. Không gian (3 chiều), thời gian (1 chiều, không đảo ngược).

1.2 Ý thức:
- Bản chất: Là sự phản ánh thế giới khách quan vào bộ óc người; là hình ảnh chủ quan của thế giới khách quan.
- Nguồn gốc tự nhiên: Bộ óc người (cơ quan vật chất) + thế giới khách quan (tác động, phản ánh).
- Nguồn gốc xã hội: Lao động và ngôn ngữ. Lao động làm phong phú nội dung ý thức; ngôn ngữ là "vỏ vật chất" của ý thức.
- Kết cấu ý thức: Tri thức (quan trọng nhất); tình cảm; ý chí; tự ý thức.
- Vô thức: Hiện tượng tâm lý không có sự kiểm soát của lý trí.

1.3 Mối quan hệ vật chất – ý thức:
- Vật chất quyết định ý thức: Vật chất có trước, ý thức có sau; vật chất là nguồn gốc, nội dung của ý thức; sự biến đổi vật chất dẫn đến biến đổi ý thức.
- Ý thức có tính độc lập tương đối và tác động trở lại vật chất: Ý thức đúng đắn thúc đẩy; ý thức sai lầm kìm hãm sự phát triển.
- Nguyên tắc phương pháp luận: Xuất phát từ thực tế khách quan (tôn trọng vật chất), đồng thời phát huy tính năng động chủ quan (vai trò ý thức). Chống: chủ nghĩa duy tâm, chủ nghĩa duy vật tầm thường, chủ nghĩa chủ quan duy ý chí.

2. PHÉP BIỆN CHỨNG DUY VẬT

2.1 Phép biện chứng:
- Là khoa học về những quy luật chung nhất của sự vận động và phát triển.
- Lịch sử: Biện chứng chất phác (cổ đại) → Biện chứng duy tâm (Hegel) → Biện chứng duy vật (Mác-Ăngghen).
- Phép biện chứng siêu hình: Xem xét sự vật tách rời, bất biến, máy móc.

2.2 Hai nguyên lý cơ bản:
- Nguyên lý về mối liên hệ phổ biến:
  + Các sự vật, hiện tượng và quá trình tồn tại trong mối liên hệ tác động qua lại.
  + Tính chất: Khách quan, phổ biến, đa dạng.
  + Ý nghĩa: Phải có quan điểm toàn diện (xem xét nhiều chiều, tránh phiến diện, một chiều). Phân biệt liên hệ chủ yếu/thứ yếu, trực tiếp/gián tiếp.
- Nguyên lý về sự phát triển:
  + Phát triển là quá trình vận động đi lên, cái mới ra đời thay thế cái cũ, phủ định cái cũ.
  + Tính chất: Khách quan, phổ biến, phức tạp (có thể quanh co, thụt lùi tạm thời).
  + Ý nghĩa: Phải có quan điểm phát triển (tránh bảo thủ, trì trệ, định kiến). Ủng hộ cái mới, cái tiến bộ.

2.3 Sáu cặp phạm trù cơ bản:
1. Cái chung và cái riêng: Cái chung chỉ tồn tại trong cái riêng; cái riêng bao giờ cũng có cái chung. Không có cái chung thuần túy. → Không rập khuôn, máy móc; cần cụ thể hóa cái chung.
2. Nguyên nhân và kết quả: Nguyên nhân sinh ra kết quả (trước về thời gian); kết quả có thể trở thành nguyên nhân. Phân biệt nguyên nhân chủ yếu/thứ yếu, bên trong/bên ngoài. → Muốn có kết quả phải tạo nguyên nhân.
3. Tất nhiên và ngẫu nhiên: Tất nhiên gắn với bản chất, quy luật; ngẫu nhiên gắn với điều kiện bên ngoài. Chúng chuyển hóa lẫn nhau. → Cần nắm quy luật tất yếu, không ỷ lại vào ngẫu nhiên.
4. Nội dung và hình thức: Nội dung quyết định hình thức; hình thức tác động ngược lại. Không tách rời nhau. → Chú trọng nội dung; nhưng cũng cần đổi mới hình thức phù hợp.
5. Bản chất và hiện tượng: Bản chất là cái bên trong, quy định; hiện tượng là biểu hiện ra ngoài. Hiện tượng phong phú hơn bản chất. → Phải đi sâu tìm bản chất, không dừng ở hiện tượng.
6. Khả năng và hiện thực: Hiện thực là cái đang tồn tại; khả năng là cái chưa có nhưng sẽ có. → Dựa vào hiện thực, nhưng không bỏ qua khả năng; tạo điều kiện biến khả năng thành hiện thực.

2.4 Ba quy luật cơ bản:
QUY LUẬT 1 – Quy luật mâu thuẫn (quy luật thống nhất và đấu tranh của các mặt đối lập):
- Là quy luật "hạt nhân" của phép biện chứng.
- Mâu thuẫn: Là sự thống nhất và đấu tranh của các mặt đối lập.
- Mặt đối lập: Cùng tồn tại trong một sự vật, vừa thống nhất (nương tựa, cần đến nhau) vừa đấu tranh (bài trừ, phủ định nhau).
- Quá trình: Thống nhất → đấu tranh gay gắt → mâu thuẫn được giải quyết → sự vật biến đổi, phát triển. Mâu thuẫn cũ được giải quyết, mâu thuẫn mới xuất hiện.
- Phân loại mâu thuẫn: Bên trong/bên ngoài; cơ bản/không cơ bản; chủ yếu/thứ yếu; đối kháng/không đối kháng.
- Ý nghĩa: Phải thừa nhận mâu thuẫn, phân tích cụ thể từng mâu thuẫn; không điều hòa hay xóa bỏ mâu thuẫn một cách giả tạo.

QUY LUẬT 2 – Quy luật lượng – chất:
- Mọi sự vật đều có chất (thuộc tính bản chất, phân biệt sự vật này với sự vật khác) và lượng (số lượng, quy mô, tốc độ...).
- Độ: Giới hạn mà trong đó sự thay đổi lượng chưa làm thay đổi chất.
- Điểm nút: Thời điểm lượng thay đổi vượt độ, chất mới ra đời.
- Bước nhảy: Sự chuyển hóa về chất (đột biến). Có: bước nhảy toàn bộ/cục bộ; bước nhảy đột biến/dần dần.
- Chiều ngược lại: Chất mới tác động đến lượng (tốc độ, quy mô thay đổi).
- Ý nghĩa: Phải tích lũy lượng để tạo chất; không nôn nóng, chủ quan duy ý chí (phá vỡ điểm nút khi chưa đủ lượng). Đồng thời phải quyết tâm thực hiện bước nhảy khi đã tích lũy đủ.

QUY LUẬT 3 – Quy luật phủ định của phủ định:
- Phủ định biện chứng: Phủ định tự thân (do nội tại mâu thuẫn), có kế thừa (giữ lại nhân tố tích cực), mở đường cho phát triển.
- Phủ định siêu hình: Phủ định sạch trơn, không kế thừa (tiêu cực).
- Chu kỳ phát triển: Khẳng định → Phủ định lần 1 (đối lập) → Phủ định lần 2 (tổng hợp, dường như quay lại xuất phát điểm nhưng ở mức cao hơn) → Hình xoắn ốc.
- Ý nghĩa: Phát triển không thẳng mà quanh co; phải kế thừa có chọn lọc; không phủ định sạch trơn cũng không bảo thủ giữ nguyên.

--- CHƯƠNG II: CHỦ NGHĨA DUY VẬT LỊCH SỬ ---

1. HỌC THUYẾT VỀ HÌNH THÁI KINH TẾ - XÃ HỘI

1.1 Sản xuất vật chất – cơ sở của sự tồn tại và phát triển xã hội:
- Sản xuất vật chất là quá trình con người sử dụng công cụ lao động tác động vào tự nhiên để tạo ra của cải.
- Vai trò: Quyết định sự tồn tại, phát triển của xã hội và con người.

1.2 Lực lượng sản xuất và Quan hệ sản xuất:
- Lực lượng sản xuất (LLSX): Gồm người lao động (yếu tố năng động nhất) + tư liệu sản xuất (công cụ lao động – quan trọng nhất; đối tượng lao động; tư liệu lao động). Khoa học kỹ thuật trở thành LLSX trực tiếp.
- Quan hệ sản xuất (QHSX): Gồm quan hệ sở hữu tư liệu sản xuất (quan trọng nhất); quan hệ tổ chức quản lý; quan hệ phân phối sản phẩm.
- Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất:
  + LLSX quyết định QHSX (tính chất, hình thức, trình độ LLSX tương ứng với QHSX).
  + QHSX tác động ngược lại: Phù hợp → thúc đẩy LLSX; lỗi thời → kìm hãm LLSX.
  + Đây là quy luật kinh tế cơ bản, quyết định sự thay thế các HTKT-XH.

1.3 Cơ sở hạ tầng và Kiến trúc thượng tầng:
- Cơ sở hạ tầng (CSHT): Toàn bộ các QHSX của một xã hội ở một giai đoạn lịch sử nhất định. QHSX thống trị giữ vai trò chủ đạo.
- Kiến trúc thượng tầng (KTTT): Toàn bộ các quan điểm (chính trị, pháp quyền, tôn giáo, nghệ thuật, triết học...) và thiết chế tương ứng (nhà nước, pháp luật, đảng phái, giáo hội...).
- Quan hệ: CSHT quyết định KTTT (tính chất, cơ cấu, sự biến đổi); KTTT tác động ngược lại CSHT (bảo vệ hoặc phá vỡ CSHT). Nhà nước là bộ phận có quyền lực nhất của KTTT.

1.4 Hình thái kinh tế - xã hội (HTKT-XH):
- Là khái niệm chỉ xã hội ở một giai đoạn lịch sử nhất định với LLSX, QHSX, KTTT đặc trưng.
- Lịch sử loài người trải qua 5 HTKT-XH: Cộng sản nguyên thủy → Chiếm hữu nô lệ → Phong kiến → Tư bản chủ nghĩa → Cộng sản chủ nghĩa (giai đoạn đầu là CNXH).
- Sự phát triển của các HTKT-XH là một quá trình lịch sử tự nhiên, khách quan.

2. GIAI CẤP VÀ ĐẤU TRANH GIAI CẤP

2.1 Giai cấp:
- Định nghĩa Lênin: "Giai cấp là những tập đoàn người to lớn, khác nhau về địa vị trong một hệ thống sản xuất xã hội nhất định trong lịch sử, khác nhau về quan hệ của họ... đối với các tư liệu sản xuất, về vai trò trong tổ chức lao động xã hội và như vậy khác nhau về cách thức hưởng thụ và quy mô phần của cải xã hội ít hay nhiều mà họ được hưởng."
- Nguồn gốc: Từ khi có chế độ tư hữu về TLSX và sự phân công lao động xã hội.
- Gồm: Giai cấp thống trị và giai cấp bị trị trong mỗi xã hội có giai cấp.

2.2 Đấu tranh giai cấp:
- Là tất yếu, là động lực phát triển xã hội có giai cấp.
- Hình thức: Kinh tế, chính trị, tư tưởng. Cao nhất là cách mạng xã hội.
- Vai trò: "Đấu tranh giai cấp là đầu tàu của lịch sử" (trong xã hội có giai cấp đối kháng).

2.3 Cách mạng xã hội:
- Là sự biến đổi căn bản, triệt để về chất của một HTKT-XH.
- Nguyên nhân: Mâu thuẫn giữa LLSX và QHSX; điều kiện chủ quan (ý thức, tổ chức) và khách quan (thời cơ, khủng hoảng).
- Phân loại: Cách mạng tư sản, cách mạng vô sản (XHCN).

3. NHÀ NƯỚC VÀ CÁCH MẠNG

3.1 Nhà nước:
- Nguồn gốc: Ra đời khi xã hội có giai cấp và mâu thuẫn giai cấp không thể điều hòa.
- Bản chất: Là công cụ thống trị giai cấp, bảo vệ lợi ích giai cấp thống trị.
- Chức năng: Thống trị (giai cấp) + Xã hội (quản lý công việc chung).
- Các kiểu nhà nước lịch sử: Chủ nô, phong kiến, tư sản, vô sản (nhà nước XHCN).
- Nhà nước XHCN: Nhà nước của dân, do dân, vì dân; do giai cấp công nhân lãnh đạo (thông qua Đảng Cộng sản).

3.2 Dân chủ:
- Dân chủ là quyền lực thuộc về nhân dân.
- Dân chủ XHCN là nền dân chủ cao nhất, triệt để nhất.

4. Ý THỨC XÃ HỘI

4.1 Tồn tại xã hội:
- Là điều kiện sinh hoạt vật chất của xã hội: phương thức sản xuất, điều kiện địa lý, dân số.
- Quyết định ý thức xã hội.

4.2 Ý thức xã hội:
- Là phản ánh của tồn tại xã hội.
- Các hình thái: Chính trị, pháp quyền, đạo đức, tôn giáo, nghệ thuật, khoa học, triết học.
- Tính độc lập tương đối: Lạc hậu so với tồn tại xã hội; có thể vượt trước; kế thừa; tác động ngược lại.

5. CON NGƯỜI VÀ VAI TRÒ SÁNG TẠO CỦA QUẦN CHÚNG NHÂN DÂN

5.1 Bản chất con người:
- "Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng lẻ. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội." (Mác)
- Con người vừa là sản phẩm vừa là chủ thể sáng tạo lịch sử.

5.2 Quan hệ cá nhân – xã hội:
- Cá nhân: Cá thể người với đặc tính riêng về thể chất và tinh thần.
- Nhân cách: Tổng hòa phẩm chất xã hội được hình thành qua hoạt động xã hội.
- Cá nhân tồn tại trong cộng đồng; xã hội tạo điều kiện cho cá nhân phát triển.

5.3 Quần chúng nhân dân và vai trò cá nhân lịch sử:
- Quần chúng nhân dân là lực lượng sản xuất ra của cải vật chất; là động lực của cách mạng.
- Cá nhân kiệt xuất (lãnh tụ): Có vai trò quan trọng nhưng không thể thay thế quần chúng.

--- CHƯƠNG III: NHẬN THỨC LUẬN ---

1. THỰC TIỄN VÀ NHẬN THỨC

1.1 Thực tiễn:
- Định nghĩa: Là hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội.
- Ba hình thức: Sản xuất vật chất (cơ bản nhất); hoạt động chính trị - xã hội; thực nghiệm khoa học.
- Vai trò đối với nhận thức:
  + Là cơ sở, động lực của nhận thức.
  + Là mục đích của nhận thức.
  + Là tiêu chuẩn kiểm tra chân lý.

1.2 Nhận thức:
- Con đường biện chứng của nhận thức: Từ trực quan sinh động → tư duy trừu tượng → thực tiễn.
- Nhận thức cảm tính (trực quan sinh động): Cảm giác, tri giác, biểu tượng – phản ánh trực tiếp, bề ngoài.
- Nhận thức lý tính (tư duy trừu tượng): Khái niệm, phán đoán, suy lý – phản ánh bản chất, quy luật.
- Hai giai đoạn bổ sung cho nhau, đều cần thiết.

2. CHÂN LÝ
- Chân lý là tri thức phản ánh đúng hiện thực khách quan, được thực tiễn kiểm nghiệm.
- Tính khách quan: Nội dung không phụ thuộc vào ý muốn con người.
- Tính tương đối: Chưa hoàn toàn, còn hạn chế.
- Tính tuyệt đối: Phần không thể bác bỏ trong chân lý tương đối; tổng số chân lý tương đối.
- Tính cụ thể: Đúng trong hoàn cảnh, điều kiện nhất định.

--- CÁC KHÁI NIỆM VÀ VẤN ĐỀ THƯỜNG GẶP ---

- Phép biện chứng duy vật gồm: 2 nguyên lý + 6 cặp phạm trù + 3 quy luật.
- Quy luật quan trọng nhất (hạt nhân): Quy luật mâu thuẫn.
- Quy luật nói về xu hướng phát triển: Quy luật phủ định của phủ định.
- Quy luật nói về cách thức phát triển: Quy luật lượng – chất.
- Vật chất quyết định ý thức, nhưng ý thức có tính độc lập tương đối và tác động trở lại.
- Thực tiễn vừa là cơ sở, vừa là tiêu chuẩn của nhận thức.
- Hình thái KTXH: LLSX + QHSX (cơ sở kinh tế) + KTTT.
- Nhà nước ra đời từ mâu thuẫn giai cấp, sẽ tiêu vong khi không còn giai cấp.
- Giai cấp công nhân là giai cấp tiên tiến nhất, cách mạng nhất vì gắn với LLSX hiện đại.
- Sự phát triển của xã hội là quá trình lịch sử tự nhiên, không phụ thuộc ý muốn chủ quan.
`;

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
    // Dùng gemini-2.0-flash-lite để tối ưu quota (nhanh, rẻ nhất)
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    // Nhúng knowledge base thẳng vào prompt thay vì gửi PDF
    const prompt = `Bạn là một giảng viên Triết học Mác - Lênin nhiệt tình, am hiểu sâu về môn học.
Nhiệm vụ: Trả lời câu hỏi của sinh viên dựa trên nội dung giáo trình dưới đây.

Yêu cầu:
- Chỉ trả lời dựa trên nội dung giáo trình được cung cấp bên dưới.
- Trích dẫn rõ phần/chương tương ứng khi trả lời (ví dụ: "Theo Chương I, mục 2.4...").
- Giải thích rõ ràng, dễ hiểu, có ví dụ minh họa nếu phù hợp.
- Giọng văn học thuật nhưng thân thiện, khuyến khích tư duy phản biện.
- Nếu câu hỏi không liên quan đến giáo trình, hãy lịch sự từ chối và gợi ý câu hỏi phù hợp.

=== NỘI DUNG GIÁO TRÌNH ===
${PHILOSOPHY_KNOWLEDGE_BASE}
=== HẾT NỘI DUNG GIÁO TRÌNH ===

Câu hỏi của sinh viên: "${question}"

Hãy trả lời chi tiết và rõ ràng:`;

    const result = await model.generateContent(prompt);
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
      message.toLowerCase().includes("too many requests") ||
      message.toLowerCase().includes("resource_exhausted");

    return {
      statusCode: isQuota ? 429 : 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: isQuota
          ? "Đã vượt giới hạn quota API. Vui lòng thử lại sau vài phút hoặc đợi sang ngày mới."
          : "Failed to get response from AI",
        details: message,
      }),
    };
  }
};
