import Image from "next/image";

export default function Collaboration() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tiêu đề */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hợp tác Realtime Dễ Dàng</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Làm việc cùng nhau theo thời gian thực, dễ dàng chia sẻ và chỉnh sửa nội dung mà không cần tải lại trang.
        </p>

        {/* Nội dung chính */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 items-center">
          {/* Danh sách lợi ích */}
          <ul className="space-y-4 text-left text-gray-800">
            <li className="flex items-center">
              ✅ Cập nhật tức thì mà không cần refresh
            </li>
            <li className="flex items-center">
              ✅ Chia sẻ tài liệu, code, hoặc bản vẽ dễ dàng
            </li>
            <li className="flex items-center">
              ✅ Hỗ trợ nhiều người cùng chỉnh sửa một lúc
            </li>
            <li className="flex items-center">
              ✅ Lưu lại lịch sử thay đổi theo thời gian
            </li>
          </ul>

          <div className="flex justify-center">
            <Image 
              src="/gif/screen.gif" 
              alt="Collaboration Illustration"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
