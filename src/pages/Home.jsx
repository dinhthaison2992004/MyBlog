import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
          backdrop-filter: blur(3px); /* Subtle aurora blur */
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
          font-size: 3.2rem; /* Increased size */
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
          width: 300px; /* Increased size */
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

        /* ABOUT SECTION */
        .about {
          background: rgba(255, 255, 255, 0.7); /* Slightly more transparent */
          padding: 80px 20px;
          text-align: center;
          border-radius: 12px;
          width: 100%;
          max-width: 1200px;
          margin: 20px 0;
        }

        .about h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 24px;
          color: #111827;
        }

        .about p {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 900px;
          margin: 0 auto 48px;
          line-height: 1.8;
        }

        .skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.7); /* Slightly more transparent */
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 32px 24px;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .skill-card h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: #1e40af;
        }

        .skill-card p {
          color: #4b5563;
          line-height: 1.6;
          font-size: 1rem;
        }

        .icon {
          font-size: 2.25rem;
          margin-bottom: 12px;
          color: #3b82f6;
        }

        /* CTA SECTION */
        .cta {
          background: rgba(255, 255, 255, 0.1); /* More transparent for harmony */
          color: white;
          text-align: center;
          padding: 80px 20px;
          width: 100%;
          border-radius: 12px;
          max-width: 1200px;
          margin: 20px 0;
        }

        .cta h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .cta p {
          color: #e0e7ff;
          font-size: 1.125rem;
          margin-bottom: 32px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .cta a {
          background: #3b82f6;
          color: white;
          padding: 14px 40px;
          border-radius: 8px;
          font-weight: 600;
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
              Blog này sẽ là nơi mình chia sẻ hành trình học tập, khám phá và theo đuổi đam mê lập trình. Ở đây, mình ghi lại những kiến thức, dự án, và cả những thử thách mình gặp phải trên con đường phát triển bản thân , với hy vọng mang đến nguồn cảm hứng và giá trị cho những ai cùng chung niềm đam mê công nghệ
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