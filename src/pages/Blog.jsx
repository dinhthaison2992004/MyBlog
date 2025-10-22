import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="container">
      <style>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 1.5rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #ffffff;
          }

          .title {
            font-size: 2.5rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 3rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            background: linear-gradient(to right, #a5b4fc, #ffffff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            justify-content: center;
          }

          .card {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            padding: 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            min-height: 400px; /* Ensure consistent card height */
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 0.75rem;
            margin-bottom: 1rem;
          }

          .card h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #ffffff;
          }

          .card p {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1rem;
            line-height: 1.5;
            flex-grow: 1; /* Allow description to take available space */
          }

          .card a {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(90deg, #4f46e5, #7c3aed);
            color: #ffffff;
            font-weight: 500;
            border-radius: 0.5rem;
            text-decoration: none;
            transition: background 0.3s ease, transform 0.2s ease;
            margin-top: auto; /* Push button to the bottom */
            align-self: flex-start; /* Align button to start for consistency */
          }

          .card a:hover {
            background: linear-gradient(90deg, #6366f1, #a855f7);
            transform: scale(1.05);
          }

          /* CTA SECTION */
          .cta {
            background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
            border: 1px solid rgba(255, 255, 255, 0.2); /* Visible border for frame */
            border-radius: 12px; /* Rounded corners */
            color: white;
            text-align: center;
            padding: 50px 20px; /* Reduced padding for smaller size */
            width: 100%;
            max-width: 1000px; /* Reduced max-width for smaller size */
            margin: 3rem auto; /* Consistent margin with blog layout */
            backdrop-filter: blur(10px); /* Match blog card blur effect */
            -webkit-backdrop-filter: blur(10px);
          }

          .cta h2 {
            font-family: 'Inter', sans-serif; /* Clean, consistent font */
            font-size: 2rem; /* Smaller font size */
            font-weight: 700; /* Slightly lighter weight for clarity */
            margin-bottom: 20px; /* Reduced margin */
            color: #ffffff; /* Bright white for contrast */
            line-height: 1.4; /* Adjusted for readability */
            letter-spacing: 0.02em; /* Subtle letter spacing */
          }

          .cta p {
            font-family: 'Inter', sans-serif; /* Consistent font */
            font-size: 1rem; /* Smaller font size */
            color: #ffffff; /* Bright white for contrast */
            margin-bottom: 24px; /* Reduced margin */
            max-width: 700px; /* Reduced max-width */
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6; /* Adjusted for readability */
            letter-spacing: 0.01em; /* Subtle letter spacing */
          }

          .cta a {
            background: linear-gradient(90deg, #4f46e5, #7c3aed); /* Match blog button style */
            color: white;
            padding: 12px 32px; /* Slightly reduced padding */
            border-radius: 8px;
            font-weight: 600;
            font-family: 'Inter', sans-serif; /* Consistent font */
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
          }

          .cta a:hover {
            background: linear-gradient(90deg, #6366f1, #a855f7); /* Match blog button hover style */
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2rem;
            }

            .grid {
              grid-template-columns: 1fr;
            }

            .card {
              min-height: 350px; /* Adjust for smaller screens */
            }

            .cta {
              padding: 40px 15px; /* Further reduced padding for mobile */
              max-width: 90%; /* Adjust for smaller screens */
            }
          }
        `}
      </style>
      <h1 className="title">📝 Blog Lập Trình</h1>
      <div className="grid">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80"
            alt="Java là gì"
          />
          <h2>Java là gì? Tìm hiểu ngôn ngữ lập trình phổ biến nhất thế giới</h2>
          <p>
            Bài viết giúp bạn hiểu rõ về Java, lịch sử ra đời, ưu điểm và lý do
            Java vẫn là ngôn ngữ được ưa chuộng nhất hiện nay.
          </p>
          <a href="/java-la-gi">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
            alt="RESTful API với Spring Boot"
          />
          <h2>Tạo RESTful API đơn giản với Spring Boot (GET, POST, PUT, DELETE)</h2>
          <p>
            Hướng dẫn chi tiết cách xây dựng RESTful API với Spring Boot, bao gồm các phương thức GET, POST, PUT, DELETE để quản lý tài nguyên người dùng.
          </p>
          <a href="/rest-api-spring-boot">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Triển khai Spring Boot lên Cloud"
          />
          <h2>Triển khai ứng dụng Spring Boot lên Cloud (Render, Heroku, AWS, Azure)</h2>
          <p>
            Tìm hiểu cách triển khai ứng dụng Spring Boot lên các nền tảng cloud như Render, Heroku, AWS Elastic Beanstalk và Azure App Service với hướng dẫn chi tiết và best practices.
          </p>
          <a href="/spring-boot-cloud-deployment">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Spring Security với JWT"
          />
          <h2>Spring Security: Xác thực và Phân quyền Người dùng với JWT và Role-based Access Control</h2>
          <p>
            Hướng dẫn cách tích hợp Spring Security với JWT và RBAC để xây dựng hệ thống xác thực và phân quyền an toàn cho ứng dụng Spring Boot.
          </p>
          <a href="/spring-security-jwt">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
            alt="Java Collections"
          />
          <h2>Các Collection trong Java (List, Set, Map) – Khi nào nên dùng loại nào?</h2>
          <p>
            Tìm hiểu về List, Set, và Map trong Java Collections Framework, cách sử dụng và các tình huống thực tế để chọn cấu trúc dữ liệu phù hợp.
          </p>
          <a href="/java-collections">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Caching trong Spring Boot"
          />
          <h2>Caching trong Spring Boot: Tăng tốc ứng dụng với bộ nhớ đệm</h2>
          <p>
            Hướng dẫn cách sử dụng Spring Cache để tối ưu hóa hiệu suất ứng dụng Spring Boot với các cache provider như Caffeine và Redis.
          </p>
          <a href="/spring-boot-caching">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Java Basics"
          />
          <h2>Giới thiệu về các kiểu dữ liệu, biến và vòng lặp trong Java</h2>
          <p>
            Tìm hiểu các kiểu dữ liệu nguyên thủy, cách khai báo biến và sử dụng vòng lặp (for, while, do-while) trong Java dành cho người mới bắt đầu.
          </p>
          <a href="/java-basics">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            alt="Payment Integration"
          />
          <h2>Tích hợp thanh toán (VNPAY, Stripe, PayPal) trong ứng dụng Spring Boot</h2>
          <p>
            Hướng dẫn chi tiết cách tích hợp các cổng thanh toán VNPAY, Stripe, và PayPal vào ứng dụng Spring Boot, bao gồm xử lý webhook và best practices.
          </p>
          <a href="/spring-boot-payment-integration">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <img
  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
  alt="Testing trong Spring Boot"
/>

          <h2>Testing trong Spring Boot</h2>
          <p>
            Tìm hiểu cách viết unit test, integration test, và end-to-end test cho ứng dụng Spring Boot sử dụng JUnit, Mockito, và RestAssured.
          </p>
          <a href="/spring-boot-testing">Xem thêm →</a>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Spring Boot với OAuth2"
          />
          <h2>Spring Boot với OAuth2 & Social Login</h2>
          <p>
            Hướng dẫn tích hợp OAuth2 và social login (Google, GitHub) vào ứng dụng Spring Boot với Spring Security, đảm bảo xác thực an toàn.
          </p>
          <a href="/spring-boot-oauth2">Xem thêm →</a>
        </motion.div>
      </div>
      {/* CTA SECTION */}
      <section className="cta">
        <h2>Cùng tạo nên điều tuyệt vời 🚀</h2>
        <p>
          Nếu bạn có ý tưởng, dự án hoặc chỉ muốn trò chuyện về công nghệ —
          đừng ngần ngại liên hệ với tôi.
        </p>
        <Link to="/contact">💬 Liên hệ ngay</Link>
      </section>
    </div>
  );
}