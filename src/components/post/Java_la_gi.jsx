import React from "react";
import { motion } from "framer-motion";

export default function JavaLaGi() {
  return (
    <div className="container">
      <style>
        {`
          .container {
            min-height: 100vh;
            padding: 4rem 1.5rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            color: #ffffff;
            background: transparent;
          }

          .header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            color: transparent;
            background: linear-gradient(to right, #a5b4fc, #ffffff);
            -webkit-background-clip: text;
            background-clip: text;
            margin-bottom: 1rem;
          }

          .header p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1rem;
            font-weight: 400;
          }

          .header p span {
            color: #a5b4fc;
            font-weight: 600;
          }

          .main-image {
            border-radius: 1rem;
            overflow: hidden;
            margin-bottom: 3rem;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          .main-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .section {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .section h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1rem;
          }

          .section p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.7;
            margin-bottom: 1rem;
          }

          .section ul {
            list-style-type: disc;
            padding-left: 2rem;
            margin-bottom: 1rem;
          }

          .section li {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.7;
            margin-bottom: 0.5rem;
          }

          .section img {
            width: 100%;
            max-width: 600px;
            border-radius: 0.75rem;
            margin: 1.5rem auto;
            display: block;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          }

          .code-card {
            position: relative;
            background: rgba(30, 41, 59, 0.9);
            border-radius: 0.75rem;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            font-family: 'Fira Code', Consolas, monospace;
            font-size: 0.9rem;
            color: #e2e8f0;
          }

          .code-card .language-label {
            position: absolute;
            top: 0.5rem;
            left: 0.75rem;
            background: #4f46e5;
            color: #ffffff;
            padding: 0.25rem 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 600;
          }

          .code-card pre {
            margin: 1rem 0 0 0;
            white-space: pre-wrap;
            overflow-x: auto;
          }

          .code-card code {
            display: block;
            line-height: 1.6;
          }

          .code-card .keyword { color: #ff79c6; }
          .code-card .string { color: #f1fa8c; }
          .code-card .class { color: #8be9fd; }
          .code-card .method { color: #50fa7b; }
          .code-card .comment { color: #6272a4; }
          .code-card .number { color: #bd93f9; }

          .cta-section {
            text-align: center;
            background: rgba(79, 70, 229, 0.8);
            border-radius: 1rem;
            padding: 3rem;
            margin-top: 3rem;
            box-shadow: 0 8px 30px rgba(79, 70, 229, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          .cta-section h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
          }

          .cta-section p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto 2rem;
            line-height: 1.6;
          }

          .cta-section a {
            background: #ffffff;
            color: #4f46e5;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
            transition: background 0.3s ease, transform 0.2s ease;
          }

          .cta-section a:hover {
            background: #eff6ff;
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .container { padding: 2rem 1rem; }
            .header h1 { font-size: 2rem; }
            .header p { font-size: 1rem; }
            .section h2 { font-size: 1.5rem; }
            .section p, .section li { font-size: 1rem; }
            .code-card { font-size: 0.85rem; }
            .cta-section h2 { font-size: 1.75rem; }
          }
        `}
      </style>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>Java là gì? Tìm hiểu ngôn ngữ lập trình phổ biến nhất thế giới</h1>
        <p>
          Bởi <span>Đinh Sơn</span> | 10/10/2025 | 7 phút đọc
        </p>
      </motion.header>

      {/* Hình ảnh chính */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="main-image"
      >
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
          alt="Java Programming"
        />
      </motion.div>

      {/* Nội dung chính */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Giới thiệu về Java</h2>
        <p>
          Java là một ngôn ngữ lập trình hướng đối tượng, mạnh mẽ và phổ biến, được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995. Với triết lý <strong>“Write Once, Run Anywhere” (WORA)</strong>, Java cho phép các nhà phát triển viết mã một lần và chạy trên bất kỳ nền tảng nào có cài đặt <strong>Java Virtual Machine (JVM)</strong>. Điều này giúp Java trở thành một trong những ngôn ngữ được sử dụng rộng rãi nhất trong phát triển phần mềm.
        </p>
        <p>
          Java nổi bật nhờ tính <strong>độc lập nền tảng</strong>, cú pháp dễ học (gần giống C/C++), và hệ sinh thái phong phú với các thư viện và framework như Spring, Hibernate. Từ ứng dụng web, di động đến các hệ thống doanh nghiệp lớn, Java đều có mặt.
        </p>
      </motion.section>

      {/* Lịch sử */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Lịch sử và sự phát triển của Java</h2>
        <p>
          Java được tạo ra bởi <strong>James Gosling</strong> và nhóm của ông tại Sun Microsystems, ban đầu với mục đích phát triển phần mềm cho các thiết bị điện tử tiêu dùng. Dự án bắt đầu với tên mã <em>“Oak”</em>, nhưng sau đó được đổi thành <strong>Java</strong> (lấy cảm hứng từ cà phê Java).
        </p>
        <ul>
          <li><strong>1995</strong>: Phiên bản Java 1.0 ra mắt, hỗ trợ applet cho trình duyệt web.</li>
          <li><strong>2000</strong>: Java 2 Enterprise Edition (J2EE) ra đời, tập trung vào ứng dụng doanh nghiệp.</li>
          <li><strong>2010</strong>: Oracle mua lại Sun Microsystems, tiếp tục phát triển Java.</li>
          <li><strong>2025</strong>: Java 21+ với các cải tiến về hiệu suất, pattern matching, và module hóa.</li>
        </ul>
        <motion.img
          src="https://images.unsplash.com/photo-1547658719-6007f6a3c8a8?auto=format&fit=crop&w=800&q=80"
          alt="Java History"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Đặc điểm nổi bật */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Đặc điểm nổi bật của Java</h2>
        <p>Java được yêu thích nhờ các đặc tính sau:</p>
        <ul>
          <li><strong>Độc lập nền tảng</strong>: Mã Java chạy trên JVM, không phụ thuộc vào hệ điều hành.</li>
          <li><strong>Hướng đối tượng</strong>: Hỗ trợ các nguyên tắc như đóng gói, kế thừa, đa hình.</li>
          <li><strong>Bảo mật</strong>: Tích hợp sandbox và các cơ chế kiểm tra lỗi thời gian chạy.</li>
          <li><strong>Hiệu suất cao</strong>: Nhờ JIT compiler, Java tối ưu hóa mã bytecode thành mã máy.</li>
          <li><strong>Cộng đồng lớn</strong>: Hệ sinh thái với hàng ngàn thư viện và công cụ.</li>
        </ul>
      </motion.section>

      {/* Ví dụ code */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Ví dụ code với Java</h2>
        <p>
          Dưới đây là các ví dụ Java hiện đại, bao gồm một chương trình in "Hello, World!" và một ứng dụng nhỏ tính tổng các số sử dụng Stream API (tính năng hiện đại trong Java).
        </p>

        {/* Code Card 1: Hello World */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Java</div>
          <pre>
            <code>
{`// Simple Hello World program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
            </code>
          </pre>
        </motion.div>

        {/* Code Card 2: Sum of Numbers with Stream API */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Java</div>
          <pre>
            <code>
{`// Using Stream API to sum numbers from 1 to n
import java.util.stream.IntStream;

public class SumNumbers {
    public static void main(String[] args) {
        int n = 10;
        int sum = IntStream.rangeClosed(1, n)
                           .sum();
        System.out.printf("Sum of numbers from 1 to %d is: %d%n", n, sum);
    }
}`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Ứng dụng thực tế */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Ứng dụng thực tế của Java</h2>
        <p>
          Java được sử dụng rộng rãi trong nhiều lĩnh vực, từ phát triển web đến trí tuệ nhân tạo. Một số ứng dụng nổi bật:
        </p>
        <ul>
          <li><strong>Ứng dụng web</strong>: Spring và Java EE cho các hệ thống như e-commerce, ngân hàng.</li>
          <li><strong>Ứng dụng di động</strong>: Android SDK sử dụng Java cho hàng triệu ứng dụng trên Google Play.</li>
          <li><strong>Doanh nghiệp</strong>: Các hệ thống ERP, CRM lớn như SAP, Oracle.</li>
          <li><strong>Big Data</strong>: Hadoop và Apache Spark dùng Java để xử lý dữ liệu lớn.</li>
        </ul>
        <motion.img
          src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
          alt="Java Applications"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Kết luận và CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="cta-section"
      >
        <h2>Bắt đầu với Java ngay hôm nay! 🚀</h2>
        <p>
          Java là một ngôn ngữ mạnh mẽ và linh hoạt, phù hợp cho cả người mới bắt đầu và lập trình viên chuyên nghiệp. Nếu bạn muốn tìm hiểu thêm hoặc cần hướng dẫn về Java, hãy liên hệ với tôi!
        </p>
        <a href="/contact">Liên hệ ngay</a>
      </motion.section>
    </div>
  );
}