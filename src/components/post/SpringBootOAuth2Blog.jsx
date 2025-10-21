import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SpringBootOAuth2Blog() {
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
        <h1>Spring Boot với OAuth2 & Social Login</h1>
        <p>
          Bởi <span>Đinh Sơn</span> | 21/10/2025 | 15 phút đọc
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
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
          alt="Spring Boot OAuth2"
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
        <h2>Giới thiệu về OAuth2 và Social Login trong Spring Boot</h2>
        <p>
          OAuth2 là một giao thức xác thực và phân quyền phổ biến, cho phép người dùng đăng nhập vào ứng dụng bằng tài khoản từ các nhà cung cấp bên thứ ba như Google, GitHub, hoặc Facebook. Trong Spring Boot, việc tích hợp OAuth2 và social login được hỗ trợ mạnh mẽ qua <strong>Spring Security OAuth2</strong>.
        </p>
        <p>
          Trong bài viết này, chúng ta sẽ tìm hiểu:
        </p>
        <ul>
          <li>OAuth2 là gì và cách hoạt động của nó.</li>
          <li>Cách cấu hình Spring Boot để sử dụng OAuth2.</li>
          <li>Tích hợp social login với Google và GitHub.</li>
          <li>Best practices để bảo mật và quản lý token.</li>
          <li>Ví dụ thực tế về ứng dụng Spring Boot với social login.</li>
        </ul>
        <p>
          Bài viết này phù hợp cho cả người mới bắt đầu và các lập trình viên muốn triển khai xác thực an toàn trong ứng dụng Spring Boot.
        </p>
      </motion.section>

      {/* Understanding OAuth2 */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Hiểu về OAuth2</h2>
        <p>
          OAuth2 là một giao thức cho phép ứng dụng truy cập tài nguyên của người dùng từ một nhà cung cấp dịch vụ (như Google) mà không cần chia sẻ mật khẩu. Nó hoạt động dựa trên các vai trò:
        </p>
        <ul>
          <li><strong>Resource Owner:</strong> Người dùng sở hữu dữ liệu (ví dụ: bạn).</li>
          <li><strong>Client:</strong> Ứng dụng Spring Boot của bạn.</li>
          <li><strong>Authorization Server:</strong> Nhà cung cấp như Google, GitHub.</li>
          <li><strong>Resource Server:</strong> Nơi lưu trữ dữ liệu của người dùng.</li>
        </ul>
        <p>
          OAuth2 sử dụng các luồng (flow) như Authorization Code Grant để cấp access token và refresh token.
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Luồng OAuth2</th>
                <th>Mục đích</th>
                <th>Ứng dụng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Authorization Code</strong></td>
                <td>Đăng nhập an toàn cho ứng dụng web</td>
                <td>Social login, ứng dụng server-side</td>
              </tr>
              <tr>
                <td><strong>Implicit</strong></td>
                <td>Ứng dụng client-side (ít dùng)</td>
                <td>SPA như React, Angular</td>
              </tr>
              <tr>
                <td><strong>Client Credentials</strong></td>
                <td>Xác thực giữa các dịch vụ</td>
                <td>Machine-to-machine</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Project Setup */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Thiết lập dự án Spring Boot</h2>
        <p>
          Để tích hợp OAuth2 và social login, chúng ta cần thiết lập dự án với các dependency cần thiết.
        </p>

        <h3>Bước 1: Thêm Dependencies</h3>
        <p>
          Trong <code>pom.xml</code>, thêm các dependency cho Spring Security, OAuth2, và Spring Web.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Maven POM.xml - Dependencies</div>
          <pre>
            <code>
{`<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>

    <!-- Spring Security OAuth2 Client -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-oauth2-client</artifactId>
    </dependency>

    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- H2 Database -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Cấu hình Application Properties</h3>
        <p>
          Cấu hình OAuth2 client cho Google và GitHub trong <code>application.properties</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">application.properties</div>
          <pre>
            <code>
{`spring.security.oauth2.client.registration.google.client-id=your-google-client-id
spring.security.oauth2.client.registration.google.client-secret=your-google-client-secret
spring.security.oauth2.client.registration.google.scope=openid,profile,email
spring.security.oauth2.client.registration.google.redirect-uri={baseUrl}/login/oauth2/code/google

spring.security.oauth2.client.registration.github.client-id=your-github-client-id
spring.security.oauth2.client.registration.github.client-secret=your-github-client-secret
spring.security.oauth2.client.registration.github.scope=user:email
spring.security.oauth2.client.registration.github.redirect-uri={baseUrl}/login/oauth2/code/github

spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.hibernate.ddl-auto=create-drop
spring.h2.console.enabled=true
`}
            </code>
          </pre>
        </motion.div>
        <p>
          <strong>Lưu ý:</strong> Bạn cần đăng ký ứng dụng trên Google Developer Console và GitHub Developer Settings để lấy <code>client-id</code> và <code>client-secret</code>.
        </p>
      </motion.section>

      {/* Configuring Spring Security */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Cấu hình Spring Security với OAuth2</h2>
        <p>
          Tạo một class cấu hình để thiết lập Spring Security hỗ trợ OAuth2 và social login.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - SecurityConfig</div>
          <pre>
            <code>
{`import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login", "/error").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/home", true)
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/").permitAll()
            );
        return http.build();
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Cấu hình trên cho phép truy cập không cần xác thực vào các endpoint <code>/</code>, <code>/login</code>, và <code>/error</code>, đồng thời thiết lập OAuth2 login với redirect URL sau khi đăng nhập thành công.
        </p>
      </motion.section>

      {/* Implementing Social Login */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tích hợp Social Login</h2>
        <p>
          Để xử lý thông tin người dùng sau khi đăng nhập, tạo một service để lưu thông tin vào database.
        </p>

        <h3>Bước 1: Tạo Entity và Repository</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - User Entity</div>
          <pre>
            <code>
{`import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String fullName;
    private String provider; // e.g., google, github
    private String providerId;
}
`}
            </code>
          </pre>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserRepository</div>
          <pre>
            <code>
{`import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByProviderAndProviderId(String provider, String providerId);
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Xử lý thông tin người dùng</h3>
        <p>
          Tạo một service để xử lý thông tin người dùng từ OAuth2 provider.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - OAuth2UserService</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        OAuth2User oauth2User = super.loadUser(userRequest);
        String provider = userRequest.getClientRegistration().getRegistrationId();
        String providerId = oauth2User.getName();
        String email = oauth2User.getAttribute("email");
        String fullName = oauth2User.getAttribute("name");

        User user = userRepository.findByProviderAndProviderId(provider, providerId)
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setEmail(email);
                    newUser.setFullName(fullName);
                    newUser.setProvider(provider);
                    newUser.setProviderId(providerId);
                    return userRepository.save(newUser);
                });

        return oauth2User;
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Service này lưu thông tin người dùng vào database nếu họ chưa tồn tại, dựa trên <code>provider</code> và <code>providerId</code>.
        </p>

        <h3>Bước 3: Tạo Login Page</h3>
        <p>
          Tạo một controller để hiển thị trang login với các nút đăng nhập Google và GitHub.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - LoginController</div>
          <pre>
            <code>
{`import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/home")
    public String home() {
        return "home";
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Tạo một trang login đơn giản với Thymeleaf.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">HTML - login.html</div>
          <pre>
            <code>
{`<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-6 text-center">Đăng nhập</h1>
        <a href="/oauth2/authorization/google" class="block bg-blue-500 text-white text-center py-2 mb-4 rounded">Đăng nhập với Google</a>
        <a href="/oauth2/authorization/github" class="block bg-gray-800 text-white text-center py-2 rounded">Đăng nhập với GitHub</a>
    </div>
</body>
</html>
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Best Practices cho OAuth2 và Social Login</h2>
        <p>
          Để triển khai OAuth2 và social login hiệu quả, hãy tuân theo các best practices sau:
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Secure Client Secrets:</strong> Lưu <code>client-id</code> và <code>client-secret</code> trong biến môi trường hoặc vault.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Use HTTPS:</strong> Đảm bảo ứng dụng chạy trên HTTPS để bảo vệ dữ liệu.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Handle Tokens Securely:</strong> Lưu access token an toàn, sử dụng refresh token để làm mới.
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <strong>Validate Scopes:</strong> Chỉ yêu cầu các scope cần thiết (như <code>email</code>, <code>profile</code>).
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <strong>Error Handling:</strong> Xử lý các lỗi OAuth2 (như token hết hạn) một cách rõ ràng.
          </div>
        </div>
      </motion.section>

      {/* Real-world Example */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Ví dụ thực tế: Ứng dụng Social Login</h2>
        <p>
          Tạo một REST API để lấy thông tin người dùng sau khi đăng nhập.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserController</div>
          <pre>
            <code>
{`import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public OAuth2User getUserProfile(@AuthenticationPrincipal OAuth2User principal) {
        return principal;
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          API này trả về thông tin người dùng (như email, name) sau khi đăng nhập qua OAuth2.
        </p>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="cta-section"
      >
        <h2>🚀 Kết luận: Bảo mật ứng dụng với OAuth2</h2>
        <p>
          Tích hợp OAuth2 và social login vào Spring Boot giúp bạn xây dựng các ứng dụng an toàn, thân thiện với người dùng. Với Spring Security OAuth2 Client, việc triển khai Google và GitHub login trở nên đơn giản và hiệu quả.
        </p>
        <p>
          Hãy bắt đầu với cấu hình cơ bản, tuân theo best practices như sử dụng HTTPS và quản lý token an toàn. Nếu bạn cần tích hợp thêm các nhà cung cấp khác hoặc xử lý các trường hợp phức tạp, hãy liên hệ để được hỗ trợ.
        </p>
        <a href="/contact">👋 Liên hệ tư vấn miễn phí</a>
      </motion.section>

      <motion.img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
        alt="OAuth2 Success"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />

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