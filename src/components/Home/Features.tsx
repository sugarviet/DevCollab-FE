export default function Features() {
    return (
      <section className="py-16 px-6 bg-gray-100 text-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Tại sao chọn chúng tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">Realtime</h3>
              <p>Cập nhật dữ liệu ngay lập tức với WebSockets.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">Bảo mật cao</h3>
              <p>Mã hóa dữ liệu và xác thực người dùng an toàn.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">Dễ mở rộng</h3>
              <p>Thiết kế linh hoạt, phù hợp với mọi quy mô.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  