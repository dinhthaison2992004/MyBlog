
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  // State to manage modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to open modal with the selected image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <style>{`
        .about-container {
          min-height: 100vh;
          padding: 80px 20px;
          font-family: 'Inter', sans-serif;
          color: #1f2937;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1400px;
          margin: 0 auto;
        }

        .personal-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 30px;
          width: 100%;
          max-width: 350px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: left;
        }

        .personal-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .avatar {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: transform 0.4s ease;
          margin-bottom: 20px;
        }

        .avatar:hover {
          transform: scale(1.08);
        }

        .name {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(90deg, #a78bfa, #3b82f6);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: -5px;
        }

        .title {
          font-size: 1.2rem;
          color: #e0e7ff;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .contact-info {
          margin: 12px 0;
          color: #e0e7ff;
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-info p {
          margin: -1px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .intro-text {
          color: #e0e7ff;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 20px;
          text-align: left;
        }

        .highlight {
          color: #a78bfa;
          font-weight: 600;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-icons a {
          transition: transform 0.3s ease;
        }

        .social-icons a:hover {
          transform: translateY(-4px);
        }

        .content-sections {
          flex: 1;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .section-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .section-card:hover {
          transform: translateY(-4px);
        }

        .subtitle {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hutech-logo {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          padding: 10px;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.95);
          padding: 14px;
          border-radius: 10px;
          border: 1px solid rgba(167, 139, 250, 0.3);
          font-weight: 500;
          color: #1f2937;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .skill-item:hover {
          transform: translateY(-3px);
          background: #ffffff;
          box-shadow: 0 6px 12px rgba(167, 139, 250, 0.2);
          border-color: #a78bfa;
        }

        .timeline {
          border-left: 4px solid #a78bfa;
          padding-left: 20px;
          position: relative;
        }

        .timeline-item {
          margin-bottom: 30px;
          position: relative;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          background-color: #a78bfa;
          border-radius: 50%;
          position: absolute;
          left: -8px;
          top: 5px;
          border: 3px solid #ffffff;
          box-shadow: 0 0 0 2px #a78bfa;
        }

        .timeline-year {
          color: #a78bfa;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .timeline-title {
          font-weight: 600;
          font-size: 1rem;
          margin-top: 4px;
          color: #e0e7ff;
        }

        .timeline-desc {
          color: #d1d5db;
          margin-top: 6px;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .certificate-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding: 10px;
        }

        .certificate-card {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px;
          text-align: center;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .certificate-card:hover {
          transform: scale(1.05);
        }

        .certificate-img {
          width: 150px;
          height: 150px;
          object-fit: contain;
          margin-bottom: 8px;
        }

        .certificate-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #e0e7ff;
          margin-bottom: 4px;
        }

        .certificate-date {
          font-size: 0.8rem;
          color: #d1d5db;
        }

        .view-details-btn {
          background: #3b82f6;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          margin-top: 8px;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .view-details-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          position: relative;
          max-width: 70%;
          max-height: 90%;
          overflow: auto;
        }

        .modal-img {
          max-width: 60%;
          max-height: 60%;
          object-fit: contain;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #a78bfa;
          color: #ffffff;
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .close-btn:hover {
          background: #8b5cf6;
        }

        .cta {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: #ffffff;
          text-align: center;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .cta h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .cta p {
          color: #e0e7ff;
          font-size: 1rem;
          margin-bottom: 20px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta a {
          background: #3b82f6;
          color: #ffffff;
          padding: 12px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta a:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
            align-items: center;
          }

          .personal-card {
            max-width: 100%;
          }

          .content-sections {
            max-width: 100%;
          }

          .certificate-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="about-container">
        {/* Personal Info Card */}
        <motion.div
          className="personal-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="personal-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#a78bfa">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Thông Tin Cá Nhân
          </h2>
          <motion.img
            src="/images/avatar.jpg"
            alt="Đinh Thái Sơn"
            className="avatar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <h3 className="name">Đinh Thái Sơn</h3>
          <p className="title">Full-Stack Developer</p>
          <div className="contact-info">
            <p>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#DB4437">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              dinhthaison2992004@gmail.com
            </p>
            <p>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#4CAF50">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"/>
              </svg>
              (+84) 365855787
            </p>
          </div>
          <div className="intro-text">
            <p>
             Xin chào! Tôi là <b className="highlight">Đinh Thái Sơn</b> — một <b>Full Stack Developer</b> luôn tìm thấy niềm hứng khởi trong từng dòng code. Với tôi, lập trình không chỉ là tạo ra những trang web hay ứng dụng, mà là quá trình biến tư duy logic và sự sáng tạo thành những trải nghiệm số có ý nghĩa. Tôi yêu việc kết nối giữa công nghệ và con người — nơi mỗi sản phẩm không chỉ hoạt động mượt mà, mà còn mang lại cảm xúc và giá trị thực cho người dùng.
            </p>
            <p>
              Với phương châm{" "}
              <i>“Không ngừng học hỏi – Không ngừng sáng tạo”</i>, tôi luôn tìm
              kiếm cơ hội để cải thiện bản thân và đóng góp cho cộng đồng lập
              trình.
            </p>
          </div>
          <div className="social-icons">
            <a href="mailto:dinhson@example.com" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#DB4437">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#4267B2">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2v-3h2v-2c0-2.76 1.79-4.26 4.34-4.26.82 0 1.67.15 2.5.44v2.78h-1.7c-1.34 0-1.8.85-1.8 1.72v2.32h3.5l-.5 3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#181717">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.56 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.39V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.48v6.28zM5.34 7.45c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm1.78 13h-3.56V9h3.56v11.45zM22 2H2v20h20V2z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#E4405F">
                <path d="M12 2.16c3.21 0 3.58.01 4.85.07 1.17.06 1.81.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.06.42 2.23.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.81-.42 2.23-.22.56-.48.96-.90 1.38-.42.42-.82.68-1.38.90-.42.17-1.06.36-2.23.42-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.81-.25-2.23-.42-.56-.22-.96-.48-1.38-.90-.42-.42-.68-.82-.90-1.38-.17-.42-.36-1.06-.42-2.23-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.06-1.17.25-1.81.42-2.23.22-.56.48-.96.90-1.38.42-.42.82-.68 1.38-.90.42-.17 1.06-.36 2.23-.42 1.27-.06 1.64-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07c-1.3.06-2.19.27-2.97.58-.95.37-1.76.86-2.56 1.66S.23 4.07.86 5.02c-.31.78-.52 1.67-.58 2.97C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.3.27 2.19.58 2.97.37.95.86 1.76 1.66 2.56s1.61 1.29 2.56 1.66c.78.31 1.67.52 2.97.58 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.3-.06 2.19-.27 2.97-.58.95-.37 1.76-.86 2.56-1.66s1.29-1.61 1.66-2.56c.31-.78.52-1.67.58-2.97.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.3-.27-2.19-.58-2.97-.37-.95-.86-1.76-1.66-2.56s-1.61-1.29-2.56-1.66c-.78-.31-1.67-.52-2.97-.58C15.67.01 15.26 0 12 0z"/>
                <path d="M12 5.84c-3.39 0-6.16 2.77-6.16 6.16s2.77 6.16 6.16 6.16 6.16-2.77 6.16-6.16-2.77-6.16-6.16-6.16zm0 10.15c-2.19 0-3.98-1.79-3.98-3.98s1.79-3.98 3.98-3.98 3.98 1.79 3.98 3.98-1.79 3.98-3.98 3.98z"/>
                <circle cx="18.45" cy="5.55" r="1.44"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="content-sections">
          {/* Education Section */}
          <motion.section
            className="section-card bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="subtitle flex items-center gap-2 mb-4 text-purple-400 text-xl font-semibold">
              <img src="/images/hutech.png" alt="HUTECH Logo" className="hutech-logo" />
              Học Vấn
            </h2>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 flex flex-col gap-3">
              <h3 className="timeline-title text-white font-semibold text-lg">
                Trường Đại Học Công Nghệ TP.Hồ Chí Minh
              </h3>
              <p className="timeline-desc text-purple-400 font-medium">
                Bằng cấp: Kỹ sư Công Nghệ Thông Tin
              </p>
              <p className="timeline-desc text-white/90">
                GPA: <span className="font-semibold text-purple-400">3.41/4.0</span>
              </p>
              <p className="timeline-desc text-gray-200 mt-2">
                Tích cực tham gia các dự án web và nghiên cứu về công nghệ . Đạt thành tích học tập tốt , và có niềm đam mê sâu nặng với Công Nghệ Phần Mềm
              </p>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            className="section-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="subtitle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#a78bfa">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Kỹ Năng Chính
            </h2>
            <div className="skills-grid">
              {[
                "React.js",
                "ASP.NET MVC",
                "C#",
                "SQL Server",
                "Tailwind CSS",
                "JavaScript (ES6+)",
                "Node.js",
                "Git & GitHub",
                "RESTful API",
                "PostgreSQL",
                "HTML5 / CSS3",
                "Security Basics",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certificates Section */}
          <motion.section
            className="section-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="subtitle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#a78bfa">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Chứng Chỉ
            </h2>
            <div className="certificate-grid">
              {[
                {
                  src: "/images/networking-basics.png",
                  title: "Networking Basics",
                  date: "Issued Sep 12, 2025",
                  modalSrc: "/images/Networking Basics.jpg",
                },
                {
                  src: "/images/javascript-essentials-1.png",
                  title: "JavaScript Essentials 1",
                  date: "Issued Sep 24, 2025",
                  modalSrc: "/images/JavaScript Essentials 1.jpg",
                },
                {
                  src: "/images/javascript-essentials-2.png",
                  title: "JavaScript Essentials 2",
                  date: "Issued Oct 9, 2025",
                  modalSrc: "/images/JavaScript Essentials 2.jpg",
                },
              ].map((cert, index) => (
                <div key={index} className="certificate-card">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="certificate-img"
                  />
                  <h4 className="certificate-title">{cert.title}</h4>
                  <p className="certificate-date">{cert.date}</p>
                  <button
                    className="view-details-btn"
                    onClick={() => openModal(cert.modalSrc)}
                  >
                    Xem Chi Tiết
                  </button>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Modal for Certificate Image */}
          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeModal}>
                  &times;
                </button>
                <img src={selectedImage} alt="Certificate" className="modal-img" />
              </div>
            </div>
          )}

          {/* Timeline Section */}
<motion.section
  className="section-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="subtitle">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#a78bfa" className="mr-2">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
               10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
    Hành Trình Học Tập & Phát Triển
  </h2>

  <div className="timeline no-dot">
    {[
      {
        year: "2022 ",
        title: "Sinh viên ngành Công nghệ Thông tin",
        desc: "Bắt đầu hành trình học tập, định hướng phát triển về phần mềm, web và công nghệ ứng dụng.",
      },
      {
        year: "2023",
        title: "Khám phá Machine Learning",
        desc: "Thực hiện các project nhỏ về phân tích dữ liệu và dự đoán bằng Python, Pandas, scikit-learn.",
      },
      {
        year: "2024",
        title: "Dự án Dự đoán giá Bitcoin",
        desc: "Thực hiện dự án học máy sử dụng Linear Regression và dữ liệu từ Binance để dự đoán giá Bitcoin.",
      },
      {
        year: "2025",
        title: "Hệ thống MedBooking",
        desc: "Xây dựng website đặt lịch khám bệnh ASP.NET MVC, tích hợp VNPAY, Google Login và thống kê doanh thu.",
      },
      {
        year: "Tương lai",
        title: "Phát triển hướng Web & AI",
        desc: "Tiếp tục nghiên cứu React, ASP.NET Core, và trí tuệ nhân tạo để phát triển các giải pháp thông minh.",
      },
    ].map((item, index) => (
      <div key={index} className="timeline-item">
        <div className="timeline-content">
          <h3 className="timeline-year">{item.year}</h3>
          <h4 className="timeline-title">{item.title}</h4>
          <p className="timeline-desc">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</motion.section>

          {/* CTA Section */}
          <motion.section
            className="cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="subtitle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#a78bfa">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1zm0-10H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"/>
              </svg>
              Cùng tạo nên điều tuyệt vời 🚀
            </h2>
            <p>
              Nếu bạn có ý tưởng, dự án hoặc chỉ muốn trò chuyện về công nghệ —
              đừng ngần ngại liên hệ với tôi.
            </p>
            <Link to="/contact" className="btn">💬 Liên hệ ngay</Link>
          </motion.section>
        </div>
      </div>
    </>
  );
}
