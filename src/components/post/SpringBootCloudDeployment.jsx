import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SpringBootCloudDeployment() {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  // Handle scroll to show/hide buttons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Navigate back
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <style>
        {`
          .container {
            min-height: 100vh;
            padding: 4rem 1.5rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1100px;
            margin: 0 auto;
            color: #ffffff;
            background: transparent;
          }

          .header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .header h1 {
            font-size: 2.8rem;
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
            padding: 2.5rem;
            margin-bottom: 2.5rem;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }

          .section h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
          }

          .section h2::before {
            content: '';
            width: 4px;
            height: 30px;
            background: linear-gradient(to bottom, #4f46e5, #7c3aed);
            margin-right: 1rem;
            border-radius: 2px;
          }

          .section h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #a5b4fc;
            margin-bottom: 1rem;
            margin-top: 2rem;
          }

          .section p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          .section ul, .section ol {
            list-style-type: disc;
            padding-left: 2rem;
            margin-bottom: 1.5rem;
          }

          .section li {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.7;
            margin-bottom: 0.75rem;
          }

          .section img {
            width: 100%;
            max-width: 700px;
            border-radius: 1rem;
            margin: 2rem auto;
            display: block;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }

          .code-card {
            position: relative;
            background: rgba(30, 41, 59, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            font-family: 'Fira Code', Consolas, monospace;
            font-size: 0.9rem;
            color: #e2e8f0;
            overflow: hidden;
          }

          .code-card .language-label {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: #ffffff;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 10;
          }

          .code-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899);
          }

          .code-card pre {
            margin: 1rem 0 0 0;
            white-space: pre-wrap;
            overflow-x: auto;
            background: none;
            border: none;
            padding: 0;
          }

          .code-card code {
            display: block;
            line-height: 1.6;
          }

          .code-card .keyword { color: #ff79c6; }
          .code-card .string { color: #f1fa8c; }
          .code-card .class { color: #8be9fd; }
          .code-card .method { color: #50fa7b; }
          .code-card .comment { color: #6272a4; font-style: italic; }
          .code-card .annotation { color: #bd93f9; }
          .code-card .number { color: #bd93f9; }
          .code-card .url { color: #8be9fd; }

          .steps {
            display: grid;
            gap: 1.5rem;
            margin: 2rem 0;
          }

          .step {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 0.75rem;
            padding: 1.5rem;
            border-left: 4px solid #4f46e5;
          }

          .step-number {
            display: inline-block;
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            text-align: center;
            line-height: 2rem;
            font-weight: bold;
            margin-right: 1rem;
            font-size: 0.9rem;
          }

          .table-container {
            overflow-x: auto;
            margin: 2rem 0;
          }

          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 0.75rem;
            overflow: hidden;
          }

          .comparison-table th,
          .comparison-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .comparison-table th {
            background: rgba(79, 70, 229, 0.3);
            font-weight: 600;
            color: #ffffff;
          }

          .comparison-table tr:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .cta-section {
            text-align: center;
            background: linear-gradient(135deg, rgba(79, 70, 229, 0.9), rgba(124, 58, 237, 0.9));
            border-radius: 1.5rem;
            padding: 4rem 2rem;
            margin-top: 4rem;
            box-shadow: 0 20px 40px rgba(79, 70, 229, 0.3);
            backdrop-filter: blur(20px);
          }

          .cta-section h2 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
          }

          .cta-section p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.95);
            max-width: 700px;
            margin: 0 auto 2.5rem;
            line-height: 1.7;
          }

          .cta-section a {
            background: linear-gradient(135deg, #ffffff, #f8fafc);
            color: #4f46e5;
            padding: 1rem 2.5rem;
            border-radius: 0.75rem;
            font-weight: 700;
            font-size: 1.1rem;
            text-decoration: none;
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            display: inline-block;
          }

          .cta-section a:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
          }

          .nav-buttons {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            display: flex;
            flex-direction: column-reverse; /* Back button below Back to Top */
            gap: 0.75rem; /* Reduced gap for vertical layout */
            z-index: 1000;
          }

          .nav-button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.5rem;
            padding: 0.75rem 1.5rem;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav-button:hover {
            background: linear-gradient(90deg, #4f46e5, #7c3aed);
            transform: translateY(-2px);
          }

          .nav-button svg {
            width: 20px;
            height: 20px;
            fill: #ffffff;
            margin-right: 0.5rem;
          }

          @media (max-width: 768px) {
            .container { padding: 2rem 1rem; }
            .header h1 { font-size: 2.2rem; }
            .header p { font-size: 1rem; }
            .section h2 { font-size: 1.6rem; }
            .section h3 { font-size: 1.3rem; }
            .section p, .section li { font-size: 1rem; }
            .code-card { font-size: 0.85rem; padding: 1.5rem; }
            .cta-section { padding: 3rem 1.5rem; }
            .cta-section h2 { font-size: 1.8rem; }
            .nav-buttons {
              bottom: 1rem;
              right: 1rem;
              gap: 0.5rem; /* Smaller gap for mobile */
            }
            .nav-button {
              padding: 0.5rem 1rem;
              font-size: 0.8rem;
            }
          }
        `}
      </style>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <h1>Triển khai ứng dụng Spring Boot lên Cloud: Render, Heroku, AWS, Azure</h1>
        <p>
          Bởi <span>Đinh Sơn</span> | 21/10/2025 | 18 phút đọc
        </p>
      </motion.header>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="main-image"
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
          alt="Cloud Deployment"
        />
      </motion.div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Giới thiệu về việc triển khai ứng dụng Spring Boot lên Cloud</h2>
        <p>
          Việc triển khai ứng dụng Spring Boot lên cloud không chỉ giúp bạn mở rộng khả năng xử lý của ứng dụng mà còn mang lại sự linh hoạt, khả năng phục hồi cao và giảm thiểu chi phí vận hành. Trong bối cảnh năm 2025, khi cloud computing đã trở thành tiêu chuẩn cho hầu hết các ứng dụng doanh nghiệp, việc hiểu và áp dụng các nền tảng cloud khác nhau là kỹ năng không thể thiếu đối với các lập trình viên Java và Spring Boot.
        </p>
        <p>
          Bài viết này sẽ hướng dẫn chi tiết cách triển khai ứng dụng Spring Boot lên bốn nền tảng cloud phổ biến nhất hiện nay: <strong>Render</strong> (nền tảng triển khai dễ sử dụng cho developer), <strong>Heroku</strong> (PaaS cổ điển với hệ sinh thái phong phú), <strong>AWS Elastic Beanstalk</strong> (dịch vụ toàn diện của Amazon), và <strong>Azure App Service</strong> (nền tảng mạnh mẽ của Microsoft). Mỗi nền tảng sẽ được phân tích với ưu nhược điểm, quy trình triển khai chi tiết, mã nguồn mẫu và các ví dụ thực tế.
        </p>
        <p>
          Chúng ta sẽ khám phá từ việc chuẩn bị ứng dụng, cấu hình môi trường, đến việc triển khai production-ready với các best practices về security, monitoring, và scaling. Dù bạn là developer mới bắt đầu hay có kinh nghiệm, bài viết này sẽ cung cấp kiến thức toàn diện để bạn có thể tự tin triển khai ứng dụng Spring Boot lên bất kỳ cloud platform nào.
        </p>
      </motion.section>

      {/* Cloud Platforms Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tổng quan về các nền tảng Cloud phổ biến</h2>
        <p>
          Trước khi đi sâu vào từng nền tảng, hãy cùng xem xét sự khác biệt cơ bản giữa các lựa chọn triển khai cloud. Mỗi nền tảng có những điểm mạnh riêng, phù hợp với các nhu cầu và quy mô ứng dụng khác nhau.
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Nền tảng</th>
                <th>Loại dịch vụ</th>
                <th>Ưu điểm chính</th>
                <th>Nhược điểm</th>
                <th>Phù hợp với</th>
                <th>Chi phí khởi điểm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Render</strong></td>
                <td>PaaS</td>
                <td>Dễ sử dụng, triển khai Git tự động, free tier mạnh</td>
                <td>Giới hạn resources ở free tier, ít tính năng enterprise</td>
                <td>Startup, MVP, developer cá nhân</td>
                <td>$0 (free tier) / $7/tháng</td>
              </tr>
              <tr>
                <td><strong>Heroku</strong></td>
                <td>PaaS</td>
                <td>Hệ sinh thái add-ons phong phú, dễ scale, CLI mạnh mẽ</td>
                <td>Free tier bị hạn chế (sleep sau 30 phút), giá cao cho production</td>
                <td>Ứng dụng web nhỏ- trung bình, prototyping</td>
                <td>$0 (hobby) / $25/dyno/tháng</td>
              </tr>
              <tr>
                <td><strong>AWS Elastic Beanstalk</strong></td>
                <td>PaaS</td>
                <td>Tích hợp toàn bộ AWS ecosystem, scale tự động, monitoring đầy đủ</td>
                <td>Learning curve cao, chi phí phức tạp, overkill cho app nhỏ</td>
                <td>Enterprise, ứng dụng lớn, cần integration AWS</td>
                <td>$0 (tính theo usage)</td>
              </tr>
              <tr>
                <td><strong>Azure App Service</strong></td>
                <td>PaaS</td>
                <td>Tích hợp Visual Studio, Azure DevOps, hỗ trợ hybrid cloud tốt</td>
                <td>Phức tạp cho beginner, giá cao cho features nâng cao</td>
                <td>Enterprise Microsoft stack, .NET/Java hybrid</td>
                <td>$0 (free tier) / $13/tháng</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Bảng so sánh trên giúp bạn có cái nhìn tổng quan. Trong các phần tiếp theo, chúng ta sẽ đi sâu vào từng nền tảng với hướng dẫn triển khai cụ thể cho ứng dụng Spring Boot.
        </p>
        <motion.img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          alt="Cloud Platforms Comparison"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Render Deployment */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Triển khai trên Render: Đơn giản và Nhanh chóng</h2>
        <p>
          Render là nền tảng PaaS hiện đại, được thiết kế dành cho developer với giao diện web thân thiện và hỗ trợ triển khai tự động từ GitHub. Đây là lựa chọn lý tưởng cho các ứng dụng Spring Boot nhỏ đến trung bình, đặc biệt khi bạn muốn nhanh chóng đưa ứng dụng lên production mà không cần cấu hình phức tạp.
        </p>
        
        <h3>Bước 1: Chuẩn bị ứng dụng Spring Boot cho Render</h3>
        <p>
          Trước tiên, đảm bảo ứng dụng Spring Boot của bạn có thể chạy trong môi trường container. Thêm Procfile và cấu hình buildpack phù hợp.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Procfile</div>
          <pre>
            <code>
{`web: java -jar target/*.jar
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Tạo Repository và Push lên GitHub</h3>
        <p>
          Tạo một repository mới trên GitHub và push toàn bộ source code của ứng dụng Spring Boot. Đảm bảo có file <code>pom.xml</code> hoàn chỉnh với packaging là <code>jar</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Maven POM.xml (excerpt)</div>
          <pre>
            <code>
{`<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>

<profiles>
    <profile>
        <id>render</id>
        <properties>
            <spring.profiles.active>render</spring.profiles.active>
        </properties>
    </profile>
</profiles>
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Triển khai trên Render Dashboard</h3>
        <p>
          Đăng ký tài khoản Render (miễn phí), kết nối GitHub account, và tạo new Web Service. Chọn repository, đặt tên service, chọn region gần nhất, và branch chính. Render sẽ tự động detect Java và build ứng dụng.
        </p>

        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Environment Variables:</strong> Thêm DATABASE_URL, SPRING_PROFILES_ACTIVE=render nếu cần.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Build Command:</strong> mvn clean package -DskipTests
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Start Command:</strong> java -jar target/*.jar
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <strong>Deploy:</strong> Click "Create Web Service" và chờ build hoàn tất.
          </div>
        </div>

        <h3>Bước 4: Cấu hình Database và Environment</h3>
        <p>
          Render hỗ trợ PostgreSQL managed database. Tạo database mới và lấy connection string để set vào environment variables.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">application-render.properties</div>
          <pre>
            <code>
{`spring.datasource.url=\${DATABASE_URL}
spring.datasource.username=\${DB_USER}
spring.datasource.password=\${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=\${PORT:8080}
logging.level.org.springframework.web=DEBUG
`}
            </code>
          </pre>
        </motion.div>

        <p>
          Sau khi deploy thành công, ứng dụng sẽ có URL dạng <code>https://your-app-name.onrender.com</code>. Render tự động cung cấp SSL và auto-deploy khi push code mới lên GitHub.
        </p>

        <h3>Ưu điểm của Render</h3>
        <ul>
          <li><strong>Zero-downtime deployments:</strong> Không gián đoạn service khi deploy mới.</li>
          <li><strong>Preview environments:</strong> Tạo branch preview cho testing.</li>
          <li><strong>Built-in metrics:</strong> Monitoring CPU, memory, requests realtime.</li>
          <li><strong>Free SSL & custom domains:</strong> Hỗ trợ HTTPS miễn phí.</li>
          <li><strong>Native Docker support:</strong> Có thể deploy container nếu cần.</li>
        </ul>

        <motion.img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
          alt="Render Deployment Dashboard"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h3>Xử lý lỗi thường gặp trên Render</h3>
        <p>
          
          <strong>Lỗi Maven build:</strong> Kiểm tra dependencies và tăng memory limit nếu cần. <br/>
          <strong>Lỗi Database connection:</strong> Verify connection string format và firewall rules.
        </p>
      </motion.section>

      {/* Heroku Deployment */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Triển khai trên Heroku: PaaS Cổ điển với Add-ons Phong phú</h2>
        <p>
          Heroku là một trong những PaaS đầu tiên và vẫn duy trì vị thế mạnh mẽ nhờ hệ sinh thái add-ons đa dạng và CLI mạnh mẽ. Dù free tier có hạn chế (dyno ngủ sau 30 phút không hoạt động), Heroku vẫn là lựa chọn tuyệt vời cho prototyping và ứng dụng nhỏ.
        </p>

        <h3>Bước 1: Cài đặt Heroku CLI và Login</h3>
        <p>
          Tải Heroku CLI từ <a href="https://devcenter.heroku.com/articles/heroku-cli">official site</a> và login bằng <code>heroku login</code>.
        </p>

        <h3>Bước 2: Chuẩn bị ứng dụng với Procfile và System.properties</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Procfile</div>
          <pre>
            <code>
{`web: java $JAVA_OPTS -jar target/*.jar
release: java -jar target/*.jar db:migrate
`}
            </code>
          </pre>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">system.properties</div>
          <pre>
            <code>
{`java.runtime.version=17
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Deploy qua Git hoặc CLI</h3>
        <p>
          Khởi tạo Git local, add Heroku remote, và push master branch.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Bash</div>
          <pre>
            <code>
{`$ git init
$ heroku create your-app-name
$ git add .
$ git commit -m "Initial commit"
$ git push heroku main

// Scale dynos
$ heroku ps:scale web=1
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 4: Cấu hình Add-ons và Environment</h3>
        <p>
          Heroku Marketplace cung cấp hàng trăm add-ons. Ví dụ, thêm Heroku Postgres:
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Bash</div>
          <pre>
            <code>
{`$ heroku addons:create heroku-postgresql:hobby-dev
$ heroku config | grep DATABASE_URL
`}
            </code>
          </pre>
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java</div>
          <pre>
            <code>
{`@Configuration
public class HerokuConfig {
    
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource ds = new DriverManagerDataSource();
        String url = System.getenv("DATABASE_URL");
        if (url.startsWith("postgres://")) {
            url = url.replace("postgres://", "jdbc:postgresql://");
        }
        ds.setUrl(url);
        // Parse username/password from URL
        return ds;
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Scaling và Monitoring trên Heroku</h3>
        <ul>
          <li><code>heroku ps:scale web=2 worker=1</code>: Scale web dynos và background workers.</li>
          <li><code>heroku logs --tail</code>: Xem realtime logs.</li>
          <li>New Relic hoặc Papertrail add-ons cho advanced monitoring.</li>
        </ul>

        <p>
          Heroku tự động handle SSL, CDN, và load balancing. URL sẽ là <code>https://your-app-name.herokuapp.com</code>.
        </p>

        <motion.img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
          alt="Heroku Dashboard"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h3>Giới hạn và Best Practices</h3>
        <p>
          <strong>Slug size limit:</strong> Giữ dưới 500MB bằng cách exclude unnecessary files in <code>.slugignore</code>. <br/>
          <strong>Dyno sleeping:</strong> Upgrade to Hobby ($7/tháng) để tránh sleep. <br/>
          <strong>Buildpacks:</strong> Sử dụng multi-buildpacks nếu cần Node.js + Java hybrid.
        </p>
      </motion.section>

      {/* AWS Elastic Beanstalk */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Triển khai trên AWS Elastic Beanstalk: Enterprise-grade Scaling</h2>
        <p>
          AWS Elastic Beanstalk là PaaS của Amazon cho phép deploy ứng dụng Java một cách dễ dàng trong khi vẫn có quyền kiểm soát toàn diện infrastructure. Đây là lựa chọn hoàn hảo cho các ứng dụng enterprise cần integration sâu với AWS services như RDS, S3, CloudWatch.
        </p>

        <h3>Bước 1: Cài đặt AWS CLI và EB CLI</h3>
        <p>
          Cài đặt AWS CLI và Elastic Beanstalk CLI, sau đó configure credentials với <code>aws configure</code>.
        </p>

        <h3>Bước 2: Chuẩn bị ứng dụng với .ebextensions</h3>
        <p>
          Tạo thư mục <code>.ebextensions</code> để custom configuration.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">.ebextensions/01_logging.config</div>
          <pre>
            <code>
{`files:
  "/etc/awslogs/awslogs.conf":
    mode: "000644"
    owner: root
    group: root
    content: |
      [default]
      region = us-east-1
      log_group = /aws/elasticbeanstalk/your-environment
      log_stream_prefix = {instance_id}

commands:
  01_remove_default_log:
    command: rm /etc/awslogs/config/default
    ignoreErrors: true
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Tạo Application và Environment</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Bash</div>
          <pre>
            <code>
{`$ eb init -p "Java 17 running on 64bit Amazon Linux 2023" your-app-name
$ eb create your-environment-name --single --instance-type t3.micro
$ eb deploy

// Set environment variables
$ eb setenv SPRING_PROFILES_ACTIVE=aws DATABASE_URL=your-rds-connection
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 4: Integration với AWS Services</h3>
        <p>
          Kết nối với RDS PostgreSQL và S3 cho file storage.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - RDS Config</div>
          <pre>
            <code>
{`@Configuration
@EnableJpaRepositories
public class AwsDatabaseConfig {
    
    @Value("\${spring.datasource.url}")
    private String jdbcUrl;
    
    @Value("\${spring.datasource.username}")
    private String username;
    
  @Value("\${spring.datasource.password}")
    private String password;
    
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(jdbcUrl);
        config.setUsername(username);
        config.setPassword(password);
        config.setMaximumPoolSize(20);
        return new HikariDataSource(config);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Auto-scaling và Load Balancing</h3>
        <p>
          Elastic Beanstalk tự động tạo Auto Scaling Group và Application Load Balancer. Cấu hình scaling policies dựa trên CPU utilization.
        </p>

        <ul>
          <li><strong>Health checks:</strong> Configure ELB health checks cho /actuator/health.</li>
          <li><strong>CloudWatch alarms:</strong> Set alerts cho memory, disk space.</li>
          <li><strong>X-Ray integration:</strong> Trace requests end-to-end.</li>
        </ul>

        <motion.img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
          alt="AWS Console"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h3>Cost Optimization trên AWS</h3>
        <p>
          Sử dụng t3.micro cho dev ($0.0104/giờ), Reserved Instances cho production. Enable cost allocation tags để track spending theo environment.
        </p>
      </motion.section>

      {/* Azure App Service */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Triển khai trên Azure App Service: Microsoft Ecosystem Integration</h2>
        <p>
          Azure App Service cung cấp PaaS mạnh mẽ với integration sâu vào Visual Studio, Azure DevOps, và hỗ trợ hybrid cloud tốt. Đây là lựa chọn lý tưởng nếu team bạn sử dụng Microsoft stack hoặc cần Windows containers.
        </p>

        <h3>Bước 1: Tạo Resource Group và App Service Plan</h3>
        <p>
          Sử dụng Azure Portal hoặc CLI để tạo infrastructure.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Azure CLI</div>
          <pre>
            <code>
{`az group create --name myResourceGroup --location "East US"
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myUniqueApp --runtime "JAVA|17-java11"
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Deploy qua Git, ZIP, hoặc Azure DevOps</h3>
        <p>
          Phương pháp ZIP deploy đơn giản nhất cho Spring Boot JAR.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Bash</div>
          <pre>
            <code>
{`# Build JAR
mvn clean package -DskipTests

# Deploy ZIP (JAR wrapped in ZIP)
zip -r app.zip target/*.jar
az webapp deployment source config-zip --resource-group myResourceGroup --name myUniqueApp --src app.zip
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Cấu hình Application Settings và Connection Strings</h3>
        <p>
          Set environment variables qua Azure Portal &gt; Configuration &gt; Application settings.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Azure Config</div>
          <pre>
            <code>
{`@Configuration
@Profile("azure")
public class AzureConfig {
    
    @Value("\${AZURE_COSMOS_ENDPOINT}")
    private String cosmosEndpoint;
    
 @Value("\${AZURE_COSMOS_KEY}")
    private String cosmosKey;
    
    @Bean
    public CosmosClient cosmosClient() {
        return new CosmosClientBuilder()
            .endpoint(cosmosEndpoint)
            .key(cosmosKey)
            .buildClient();
    }
    
    // Azure Blob Storage integration
    @Bean
    public BlobServiceClient blobServiceClient() {
        return new BlobServiceClientBuilder()
            .connectionString(System.getenv("AZURE_STORAGE_CONNECTION_STRING"))
            .buildClient();
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 4: Integration với Azure Services</h3>
        <ul>
          <li><strong>Azure Database for PostgreSQL:</strong> Managed DB với auto-scaling.</li>
          <li><strong>Azure Key Vault:</strong> Secure secrets management.</li>
          <li><strong>Application Insights:</strong> APM và telemetry tích hợp.</li>
          <li><strong>Azure Front Door:</strong> Global load balancing và WAF.</li>
        </ul>

        <p>
          URL sẽ là <code>https://myUniqueApp.azurewebsites.net</code>. Azure tự động provision custom domain và SSL.
        </p>

        <motion.img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
          alt="Azure Portal"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h3>CI/CD với Azure DevOps</h3>
        <p>
          Tạo pipeline YAML để auto-deploy từ GitHub.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">azure-pipelines.yml</div>
          <pre>
            <code>
{`trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: Maven@3
  inputs:
    mavenPomFile: 'pom.xml'
    goals: 'clean package'
    publishJUnitResults: true

- task: AzureWebApp@1
  inputs:
    azureSubscription: 'myAzureSubscription'
    appType: 'webAppLinux'
    appName: 'myUniqueApp'
    package: '$(Pipeline.Workspace)/**/*.jar'
`}
            </code>
          </pre>
        </motion.div>

        <h3>Security và Compliance trên Azure</h3>
        <p>
          Sử dụng Managed Identity cho authentication, VNet integration cho private networking, và Azure Defender cho threat protection.
        </p>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Best Practices cho Production Deployment</h2>
        <p>
          Dù sử dụng nền tảng nào, việc áp dụng best practices sẽ đảm bảo ứng dụng Spring Boot chạy ổn định và hiệu quả trên cloud.
        </p>

        <h3>1. Security Hardening</h3>
        <ul>
          <li><strong>Secrets Management:</strong> Sử dụng Vault, AWS Secrets Manager, Azure Key Vault thay vì env vars cho sensitive data.</li>
          <li><strong>HTTPS Only:</strong> Redirect HTTP to HTTPS và configure HSTS headers.</li>
          <li><strong>JWT & OAuth2:</strong> Implement Spring Security với token-based authentication.</li>
          <li><strong>Rate Limiting:</strong> Sử dụng Spring Cloud Gateway hoặc API Gateway services.</li>
        </ul>

        <h3>2. Monitoring và Observability</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Micrometer Config</div>
          <pre>
            <code>
{`@Configuration
public class MonitoringConfig {
    
    @Bean
    public MeterRegistryCustomizer<MeterRegistry> metricsCommonTags() {
        return registry -> registry.config().commonTags("app", "spring-boot-cloud-app");
    }
    
    // Prometheus endpoint
    @Bean
    public ServletRegistrationBean<PrometheusMeterRegistry> actuator() {
        return new ServletRegistrationBean<>(new PrometheusMeterRegistry(PrometheusConfig.DEFAULT), "/actuator/prometheus");
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <ul>
          <li><strong>Metrics:</strong> Spring Boot Actuator + Prometheus + Grafana.</li>
          <li><strong>Logging:</strong> Structured logging với ELK stack hoặc CloudWatch Logs.</li>
          <li><strong>Tracing:</strong> Spring Cloud Sleuth + Zipkin hoặc AWS X-Ray.</li>
          <li><strong>Health Checks:</strong> Custom health indicators cho DB, cache, external APIs.</li>
        </ul>

        <h3>3. Performance Optimization</h3>
        <ul>
          <li><strong>Caching:</strong> Spring Cache với Redis hoặc Hazelcast.</li>
          <li><strong>Database Connection Pooling:</strong> HikariCP với optimal settings cho cloud.</li>
          <li><strong>Static Assets:</strong> Serve qua CDN (CloudFront, Azure CDN).</li>
          <li><strong>Async Processing:</strong> @Async methods cho heavy tasks.</li>
        </ul>

        <h3>4. CI/CD Pipeline</h3>
        <p>
          Implement GitHub Actions hoặc Azure DevOps pipeline với testing, security scanning, và blue-green deployment.
        </p>

        

        <h3>5. Disaster Recovery</h3>
        <ul>
          <li><strong>Multi-region deployment:</strong> Replicate across availability zones.</li>
          <li><strong>Backup strategy:</strong> Automated DB snapshots và S3 versioning.</li>
          <li><strong>Rollback plan:</strong> Keep deployment history và quick revert capability.</li>
        </ul>
      </motion.section>

      {/* Conclusion */}
      

      {/* Navigation Buttons */}
      {showButtons && (
        <div className="nav-buttons">
          <button
            onClick={scrollToTop}
            className="nav-button"
            aria-label="Lên đầu trang"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 5.41L17.59 11c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L13 9.22V21c0 .55-.45 1-1 1s-1-.45-1-1V9.22l-3.19 3.19c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L11.59 5c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41z"/>
            </svg>
            Lên đầu
          </button>
          <button
            onClick={goBack}
            className="nav-button"
            aria-label="Quay lại trang trước"
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>
            </svg>
            Quay lại
          </button>
        </div>
      )}
    </div>
  );
}