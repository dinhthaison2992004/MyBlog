import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
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
    title: "Nhà Sách Việt Nam – Website bán sách trực tuyến",
    desc: "Website thương mại điện tử hỗ trợ đăng ký, đăng nhập, giỏ hàng và thanh toán, xây dựng bằng ASP.NET MVC và Razor Pages.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    tech: ["ASP.NET MVC", "Razor Pages", "Bootstrap", "SQL Server", "Identity Framework"],
    link: "https://github.com/bookstore"
  },
  {
    id: 3,
    title: "Dự đoán giá Bitcoin bằng Machine Learning",
    desc: "Mô hình dự đoán giá Bitcoin sử dụng thuật toán Linear Regression, huấn luyện từ dữ liệu Binance API.",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Binance API"],
    link: "https://github.com/dinhthaison2992004/Train_TimeStamp"
  },
  {
    id: 4,
    title: "Dungeon Maze – Game phiêu lưu hầm ngục",
    desc: "Trò chơi hành động tạo bản đồ ngẫu nhiên giống Soul Knight, phát triển bằng Cocos Creator và Unity.",
    img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
    tech: ["Cocos Creator", "Unity", "JavaScript", "C#"],
    link: "https://github.com/Dts299004/CNPM"
  }
];

export default function Project() {
  // State to manage tooltip visibility and content
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

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 30px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Tiêu đề */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontWeight: "800",
          color: "#1e3a8a",
          marginBottom: "40px",
        }}
      >
        Các <span style={{ color: "#2563eb" }}>Dự Án</span> Của Tôi
      </motion.h1>

      {/* Grid dự án */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{
              scale: 1.03,
              background: "#e2e8f0", // Xám đậm hơn khi hover
              border: "1px solid #e2e8f0",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              background: "#f1f5f9", // Xám nhẹ ở trạng thái ban đầu
              borderRadius: "20px",
              overflow: "hidden",
              border: "none",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
            }}
          >
            {/* Ảnh */}
            <div style={{ height: "200px", overflow: "hidden" }}>
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            {/* Nội dung */}
            <div style={{ padding: "24px", flexGrow: 1 }}>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: "#475569",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                {project.desc}
              </p>

              <div style={{ marginBottom: "15px" }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#dbeafe",
                      color: "#1e40af",
                      fontSize: "13px",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      marginRight: "6px",
                      marginBottom: "6px",
                      fontWeight: "500",
                      display: "inline-block",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ textAlign: "center" }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#181717"
                  style={{ cursor: "pointer", display: "inline-block" }}
                  onClick={(e) => showTooltip(project.link, e)}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.56 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            top: `${tooltip.position.y + 10}px`,
            left: `${tooltip.position.x}px`,
            background: "rgba(0, 0, 0, 0.85)",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            zIndex: 1000,
            maxWidth: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span style={{ fontSize: "14px", wordBreak: "break-all" }}>
            {tooltip.link}
          </span>
          <a
            href={tooltip.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "6px 12px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#1e40af")}
            onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
          >
            Open
          </a>
          <button
            onClick={hideTooltip}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
      )}

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          marginTop: "100px",
          textAlign: "center",
          background: "#2563eb",
          color: "white",
          padding: "70px 20px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(37,99,235,0.4)",
          maxWidth: "1100px",
          marginInline: "auto",
        }}
      >
        <h2 style={{ fontSize: "38px", fontWeight: "700", marginBottom: "20px" }}>
          Bạn có ý tưởng mới? 💡
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#dbeafe",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
          }}
        >
          Tôi luôn sẵn sàng tham gia vào những dự án sáng tạo – từ website đến
          game và ứng dụng thực tế. Cùng nhau biến ý tưởng thành sản phẩm!
        </p>
        <a
          href="/contact"
          style={{
            background: "white",
            color: "#2563eb",
            padding: "14px 36px",
            borderRadius: "12px",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(255,255,255,0.3)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#eff6ff")}
          onMouseLeave={(e) => (e.target.style.background = "white")}
        >
          Liên hệ với tôi
        </a>
      </motion.section>
    </div>
  );
}