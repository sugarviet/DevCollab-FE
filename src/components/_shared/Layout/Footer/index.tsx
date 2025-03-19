'use client'

import { APP_NAME } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white p-6 text-center">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-lg font-semibold">{APP_NAME}</div>

        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/about" className="hover:underline">Về chúng tôi</Link>
          <Link href="/services" className="hover:underline">Dịch vụ</Link>
          <Link href="/contact" className="hover:underline">Liên hệ</Link>
          <Link href="/privacy-policy" className="hover:underline">Chính sách bảo mật</Link>
        </nav>
      </div>

      <div className="mt-10 text-sm opacity-75">
        © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
