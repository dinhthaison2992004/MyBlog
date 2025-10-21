import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  // State for tooltip in featured projects
  const [tooltip, setTooltip] = useState({ visible: false, link: "", position: { x: 0, y: 0 } });

  // Function to show tooltip
  const showTooltip = (link, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      link,
      position: { x: rect.left, y: rect.bottom + window.scrollY }
    });
  };

  // Function to hide tooltip
  const hideTooltip = () => {
    setTooltip({ visible: false, link: "", position: { x: 0, y: 0 } });
  };

  // Featured blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: "Java là gì? Tìm hiểu ngôn ngữ lập trình phổ biến nhất thế giới",
      desc: "Bài viết giúp bạn hiểu rõ về Java, lịch sử ra đời, ưu điểm và lý do Java vẫn là ngôn ngữ được ưa chuộng nhất hiện nay.",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
      link: "/java-la-gi"
    },
    {
      id: 2,
      title: "Giới thiệu về các kiểu dữ liệu, biến và vòng lặp trong Java",
      desc: "Tìm hiểu các kiểu dữ liệu nguyên thủy, cách khai báo biến và sử dụng vòng lặp (for, while, do-while) trong Java dành cho người mới bắt đầu.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "/java-basics"
    },
    {
      id: 3,
      title: "Các Collection trong Java (List, Set, Map) – Khi nào nên dùng loại nào?",
      desc: "Tìm hiểu về List, Set, và Map trong Java Collections Framework, cách sử dụng và các tình huống thực tế để chọn cấu trúc dữ liệu phù hợp.",
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      link: "/java-collections"
    }
  ];

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "MedBooking – Hệ thống đặt lịch khám bệnh",
      desc: "Ứng dụng web ASP.NET MVC cho phép bệnh nhân đặt lịch khám theo tuần, thanh toán qua VNPAY, đăng nhập bằng Google, và quản lý lịch làm việc của bác sĩ.",
      img: "/images/medbooksmed.jpg",
      tech: ["ASP.NET MVC", "SQL Server", "VNPAY API", "Identity", "Chart.js"],
      link: "https://github.com/Acetyl12/DACN_MedBooking"
    },
    {
      id: 2,
      title: "Dự đoán giá Bitcoin bằng Machine Learning",
      desc: "Mô hình dự đoán giá Bitcoin sử dụng thuật toán Linear Regression, huấn luyện từ dữ liệu Binance API.",
      img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Binance API"],
      link: "https://github.com/dinhthaison2992004/Train_TimeStamp"
    },
    {
    id: 3,
    title: "Dungeon Maze – Game phiêu lưu hầm ngục",
    desc: "Trò chơi hành động tạo bản đồ ngẫu nhiên giống Soul Knight, phát triển bằng Cocos Creator và Unity.",
    img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
    tech: ["Cocos Creator", "Unity", "JavaScript", "C#"],
    link: "https://github.com/Dts299004/CNPM"
  }
  ];

  return (
    <>
      <style>{`
        .home-container {
          font-family: 'Inter', sans-serif;
          color: #1f2937;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #0f172a 100%);
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .home-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(3px);
          z-index: 0;
        }

        .home-container > * {
          position: relative;
          z-index: 1;
        }

        .hero {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          text-align: left;
          padding: 100px 20px;
          gap: 40px;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }

        .hero-content {
          flex: 1;
          min-width: 300px;
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 900;
          margin-bottom: 24px;
          color: #ffffff;
          line-height: 1.3;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #a78bfa, #3b82f6);
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero p {
          font-size: 1.25rem;
          color: #e0e7ff;
          line-height: 1.8;
          margin-bottom: 32px;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .btn-outline {
          border: 2px solid #a78bfa;
          color: #a78bfa;
          background: transparent;
        }

        .btn-outline:hover {
          background: #a78bfa;
          color: white;
          transform: translateY(-2px);
        }

        .hero .avatar {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          transition: transform 0.4s ease;
          flex-shrink: 0;
        }

        .hero .avatar:hover {
          transform: scale(1.08);
        }

        /* FEATURED POSTS SECTION */
        .featured-posts {
          width: 100%;
          max-width: 1200px;
          padding: 50px 20px;
          text-align: center;
        }

        .featured-posts h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .post-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
        }

        .post-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .post-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .post-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .post-card p {
          font-size: 1rem;
          color: #e0e7ff;
          line-height: 1.6;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .post-card a {
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .post-card a:hover {
          background: linear-gradient(90deg, #1d4ed8, #3b82f6);
          transform: translateY(-2px);
        }

        /* FEATURED PROJECTS SECTION */
        .featured-projects {
          width: 100%;
          max-width: 1200px;
          padding: 50px 20px;
          text-align: center;
        }

        .featured-projects h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .project-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .project-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .project-card p {
          font-size: 1rem;
          color: #e0e7ff;
          line-height: 1.6;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .project-card .tech-tags {
          margin-bottom: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-card .tech-tags span {
          background: #dbeafe;
          color: #1e40af;
          font-size: 0.9rem;
          padding: 6px 12px;
          border-radius: 999px;
          font-weight: 500;
        }

        .project-card .github-link {
          text-align: center;
        }

        .project-card .github-link svg {
          width: 24px;
          height: 24px;
          fill: #ffffff;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .project-card .github-link svg:hover {
          transform: scale(1.1);
        }

        .tooltip {
          position: absolute;
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 10px 15px;
          border-radius: 8px;
          z-index: 1000;
          max-width: 300px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tooltip span {
          font-size: 14px;
          word-break: break-all;
        }

        .tooltip a {
          background: #3b82f6;
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
        }

        .tooltip a:hover {
          background: #1d4ed8;
        }

        .tooltip button {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        /* CTA SECTION */
        .cta {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          text-align: center;
          padding: 50px 20px;
          width: 100%;
          max-width: 1000px;
          margin: 20px 0;
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
          background: #3b82f6;
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
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }
          .hero-content {
            order: 1;
          }
          .hero .avatar {
            order: 2;
          }
          .posts-grid, .projects-grid {
            grid-template-columns: 1fr;
          }
          .cta {
            padding: 40px 15px;
            max-width: 90%;
          }
        }
      `}</style>

      <div className="home-container">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Xin chào 👋 <br /> Mình là <span>Đinh Thái Sơn</span>
            </h1>
            <p>
              Blog này sẽ là nơi mình chia sẻ hành trình học tập, khám phá và theo đuổi đam mê lập trình. Ở đây, mình ghi lại những kiến thức, dự án, và cả những thử thách mình gặp phải trên con đường phát triển bản thân, với hy vọng mang đến nguồn cảm hứng và giá trị cho những ai cùng chung niềm đam mê công nghệ
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                🌟 Xem Dự Án
              </Link>
              <Link to="/about" className="btn btn-outline">
                👤 Giới Thiệu
              </Link>
            </div>
          </div>

          <img
            src="/images/avatar.jpg"
            alt="Developer"
            className="avatar"
          />
        </section>

        {/* FEATURED POSTS SECTION */}
        <section className="featured-posts">
          <h2>Bài Viết Nổi Bật 📝</h2>
          <div className="posts-grid">
            {featuredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="post-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: post.id * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={post.img} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <Link to={post.link}>Xem thêm →</Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="featured-projects">
          <h2>Dự Án Nổi Bật 🚀</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: project.id * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="github-link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    onClick={(e) => showTooltip(project.link, e)}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.56 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TOOLTIP */}
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{
              top: `${tooltip.position.y + 10}px`,
              left: `${tooltip.position.x}px`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>{tooltip.link}</span>
            <a
              href={tooltip.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
            <button onClick={hideTooltip}>&times;</button>
          </div>
        )}

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
    </>
  );
}