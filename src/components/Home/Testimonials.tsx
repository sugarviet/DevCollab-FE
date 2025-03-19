export default function Testimonials() {
    return (
      <section className="py-16 px-6 bg-white text-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Khách hàng nói gì?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg">
              <p>&quot;Dịch vụ tuyệt vời! Tốc độ nhanh, cực kỳ ổn định.&quot;</p>
              <span className="block mt-2 font-semibold">- Nguyễn Văn A</span>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <p>&quot;Hệ thống realtime giúp doanh nghiệp của tôi tăng trưởng 200%.&quot;</p>
              <span className="block mt-2 font-semibold">- Trần Thị B</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  