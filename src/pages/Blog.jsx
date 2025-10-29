import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Java là gì? Tìm hiểu ngôn ngữ lập trình phổ biến nhất thế giới",
      description:
        "Bài viết giúp bạn hiểu rõ về Java, lịch sử ra đời, ưu điểm và lý do Java vẫn là ngôn ngữ được ưa chuộng nhất hiện nay.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
      link: "/java-la-gi",
    },
    {
      id: 2,
      title: "Tạo RESTful API đơn giản với Spring Boot (GET, POST, PUT, DELETE)",
      description:
        "Hướng dẫn chi tiết cách xây dựng RESTful API với Spring Boot, bao gồm các phương thức GET, POST, PUT, DELETE để quản lý tài nguyên người dùng.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      link: "/rest-api-spring-boot",
    },
    {
      id: 3,
      title: "Triển khai ứng dụng Spring Boot lên Cloud (Render, Heroku, AWS, Azure)",
      description:
        "Tìm hiểu cách triển khai ứng dụng Spring Boot lên các nền tảng cloud như Render, Heroku, AWS Elastic Beanstalk và Azure App Service với hướng dẫn chi tiết và best practices.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      link: "/spring-boot-cloud-deployment",
    },
    {
      id: 4,
      title: "Spring Security: Xác thực và Phân quyền Người dùng với JWT và Role-based Access Control",
      description:
        "Hướng dẫn cách tích hợp Spring Security với JWT và RBAC để xây dựng hệ thống xác thực và phân quyền an toàn cho ứng dụng Spring Boot.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "/spring-security-jwt",
    },
    {
      id: 5,
      title: "Các Collection trong Java (List, Set, Map) – Khi nào nên dùng loại nào?",
      description:
        "Tìm hiểu về List, Set, và Map trong Java Collections Framework, cách sử dụng và các tình huống thực tế để chọn cấu trúc dữ liệu phù hợp.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      link: "/java-collections",
    },
    {
      id: 6,
      title: "Caching trong Spring Boot: Tăng tốc ứng dụng với bộ nhớ đệm",
      description:
        "Hướng dẫn cách sử dụng Spring Cache để tối ưu hóa hiệu suất ứng dụng Spring Boot với các cache provider như Caffeine và Redis.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "/spring-boot-caching",
    },
    {
      id: 7,
      title: "Giới thiệu về các kiểu dữ liệu, biến và vòng lặp trong Java",
      description:
        "Tìm hiểu các kiểu dữ liệu nguyên thủy, cách khai báo biến và sử dụng vòng lặp (for, while, do-while) trong Java dành cho người mới bắt đầu.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "/java-basics",
    },
    {
      id: 8,
      title: "Tích hợp thanh toán (VNPAY, Stripe, PayPal) trong ứng dụng Spring Boot",
      description:
        "Hướng dẫn chi tiết cách tích hợp các cổng thanh toán VNPAY, Stripe, và PayPal vào ứng dụng Spring Boot, bao gồm xử lý webhook và best practices.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      link: "/spring-boot-payment-integration",
    },
    {
      id: 9,
      title: "Testing trong Spring Boot",
      description:
        "Tìm hiểu cách viết unit test, integration test, và end-to-end test cho ứng dụng Spring Boot sử dụng JUnit, Mockito, và RestAssured.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      link: "/spring-boot-testing",
    },
    {
      id: 10,
      title: "Spring Boot với OAuth2 & Social Login",
      description:
        "Hướng dẫn tích hợp OAuth2 và social login (Google, GitHub) vào ứng dụng Spring Boot với Spring Security, đảm bảo xác thực an toàn.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "/spring-boot-oauth2",
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Playfair Display', 'Inter', serif;
  font-size: 2.8rem;
  font-weight: 400; /* không in đậm */
  color: #ffffff; /* màu trắng thuần */
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: capitalize; /* viết hoa chữ cái đầu mỗi từ */
  letter-spacing: 0.5px;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.1);
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


          .quote {
            text-align: center;
            font-size: 1.1rem;
            font-style: italic;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
          }

          .search-container {
            max-width: 600px;
            margin: 0 auto 3rem auto;
            position: relative;
          }

          .search-input {
            width: 100%;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.5rem;
            color: #ffffff;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }

          .search-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }

          .search-input:focus {
            border-color: #a5b4fc;
            box-shadow: 0 0 8px rgba(165, 180, 252, 0.3);
          }

          .search-icon {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.7);
          }

          .no-results {
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.2rem;
            margin: 2rem 0;
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
            min-height: 400px;
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
            flex-grow: 1;
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
            margin-top: auto;
            align-self: flex-start;
          }

          .card a:hover {
            background: linear-gradient(90deg, #6366f1, #a855f7);
            transform: scale(1.05);
          }

          .cta {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            color: white;
            text-align: center;
            padding: 50px 20px;
            width: 100%;
            max-width: 1000px;
            margin: 3rem auto;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          .cta h2 {
            font-family: 'Inter', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #ffffff;
            line-height: 1.4;
            letter-spacing: 0.02em;
          }

          .cta p {
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            color: #ffffff;
            margin-bottom: 24px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
            letter-spacing: 0.01em;
          }

          .cta a {
            background: linear-gradient(90deg, #4f46e5, #7c3aed);
            color: white;
            padding: 12px 32px;
            border-radius: 8px;
            font-weight: 600;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
          }

          .cta a:hover {
            background: linear-gradient(90deg, #6366f1, #a855f7);
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2rem;
            }

            .quote {
              font-size: 1rem;
              padding: 0 1rem;
            }

            .search-container {
              max-width: 90%;
            }

            .grid {
              grid-template-columns: 1fr;
            }

            .card {
              min-height: 350px;
            }

            .cta {
              padding: 40px 15px;
              max-width: 90%;
            }
          }
        `}
      </style>
      <h1 className="title">
  <span className="emoji">📝</span> <span className="text">Blog Lập Trình</span>
</h1>

      <p className="quote">
        "Lập trình là nghệ thuật biến ý tưởng thành hiện thực thông qua những dòng code." – Anonymous
      </p>
      <motion.div
        className="search-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm bài viết..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </motion.div>
      <div className="grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={post.link}>Xem thêm →</a>
            </motion.div>
          ))
        ) : (
          <p className="no-results">Không tìm thấy bài viết phù hợp.</p>
        )}
      </div>
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