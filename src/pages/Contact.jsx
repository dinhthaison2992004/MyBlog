import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ebf8ff, #ffffff)",
        padding: "60px 20px",
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
          marginBottom: "20px",
        }}
      >
        Liên hệ <span style={{ color: "#2563eb" }}>với tôi</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          textAlign: "center",
          color: "#374151",
          fontSize: "18px",
          maxWidth: "650px",
          margin: "0 auto 50px",
        }}
      >
        Nếu bạn có dự án, câu hỏi hoặc chỉ muốn kết nối – hãy gửi tin nhắn cho tôi!
        Mình sẽ phản hồi sớm nhất có thể 💬
      </motion.p>

      {/* Form liên hệ */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          padding: "40px 50px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "8px",
            }}
          >
            Họ và tên
          </label>
          <input
            type="text"
            placeholder="Nhập họ và tên của bạn..."
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "#2563eb")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "#cbd5e1")
            }
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "8px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Nhập email của bạn..."
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "#2563eb")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "#cbd5e1")
            }
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "8px",
            }}
          >
            Tin nhắn
          </label>
          <textarea
            rows="5"
            placeholder="Viết tin nhắn của bạn..."
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              resize: "none",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "#2563eb")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "#cbd5e1")
            }
          ></textarea>
        </div>

        <div style={{ textAlign: "center" }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "#2563eb",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 32px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#1e40af")}
            onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
          >
            Gửi tin nhắn 🚀
          </motion.button>
        </div>
      </motion.form>

      {/* Thông tin liên hệ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "#475569",
        }}
      >
        <p>📧 Email: <b>dinhson.dev@gmail.com</b></p>
        <p>💼 LinkedIn: <a href="https://linkedin.com" style={{ color: "#2563eb" }}>linkedin.com/in/dinhson</a></p>
        <p>🌐 GitHub: <a href="https://github.com/" style={{ color: "#2563eb" }}>github.com/dinhson</a></p>
      </motion.div>
    </div>
  );
}
