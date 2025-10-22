import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SpringBootCachingBlog() {
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
        <h1>Caching trong Spring Boot: Tăng tốc ứng dụng với bộ nhớ đệm</h1>
        <p>
          Bởi <span>Đinh Sơn</span> | 21/10/2025 | 10 phút đọc
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
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
          alt="Spring Boot Caching"
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
        <h2>Giới thiệu về Caching trong Spring Boot</h2>
        <p>
          Caching là một kỹ thuật quan trọng giúp cải thiện hiệu suất ứng dụng bằng cách lưu trữ dữ liệu thường xuyên truy cập trong bộ nhớ đệm, giảm thời gian truy xuất từ cơ sở dữ liệu hoặc các nguồn tài nguyên khác. Spring Boot cung cấp hỗ trợ tích hợp cho caching thông qua <strong>Spring Cache</strong>, giúp triển khai bộ nhớ đệm một cách dễ dàng và hiệu quả.
        </p>
        <p>
          Trong bài viết này, chúng ta sẽ khám phá cách sử dụng caching trong Spring Boot với các nội dung sau:
        </p>
        <ul>
          <li>Cách kích hoạt và cấu hình caching trong Spring Boot.</li>
          <li>Sử dụng các annotation như <code>@Cacheable</code>, <code>@CachePut</code>, và <code>@CacheEvict</code>.</li>
          <li>Tích hợp với các cache provider như EhCache, Redis, và Caffeine.</li>
          <li>Best practices để tối ưu hóa hiệu suất caching và tránh các vấn đề phổ biến.</li>
        </ul>
        <p>
          Bài viết sẽ bao gồm các ví dụ mã nguồn thực tế và hướng dẫn từng bước để bạn có thể triển khai caching trong ứng dụng Spring Boot của mình.
        </p>
      </motion.section>

      {/* Caching Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tổng quan về Caching trong Spring Boot</h2>
        <p>
          Spring Cache cung cấp một lớp trừu tượng cho phép tích hợp caching mà không cần sửa đổi nhiều mã nguồn. Nó sử dụng các annotation để đánh dấu các phương thức cần cache và hỗ trợ nhiều cache provider như EhCache, Redis, Caffeine, và ConcurrentMapCache (mặc định).
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Cache Provider</th>
                <th>Mô tả</th>
                <th>Ưu điểm</th>
                <th>Nhược điểm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ConcurrentMapCache</strong></td>
                <td>Cache đơn giản trong bộ nhớ, tích hợp sẵn</td>
                <td>Dễ sử dụng, không cần cấu hình thêm</td>
                <td>Không hỗ trợ phân tán, giới hạn bởi RAM</td>
              </tr>
              <tr>
                <td><strong>EhCache</strong></td>
                <td>Cache mạnh mẽ trong bộ nhớ với cấu hình XML</td>
                <td>Hiệu suất cao, hỗ trợ cấu hình chi tiết</td>
                <td>Cần cấu hình phức tạp hơn</td>
              </tr>
              <tr>
                <td><strong>Redis</strong></td>
                <td>Cache phân tán, lưu trữ key-value</td>
                <td>Hỗ trợ phân tán, phù hợp với microservices</td>
                <td>Yêu cầu server Redis riêng</td>
              </tr>
              <tr>
                <td><strong>Caffeine</strong></td>
                <td>Cache hiệu suất cao trong bộ nhớ</td>
                <td>Tối ưu hơn EhCache, cấu hình đơn giản</td>
                <td>Không hỗ trợ phân tán</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Spring Boot sử dụng ConcurrentMapCache làm cache provider mặc định, nhưng bạn có thể dễ dàng chuyển sang các provider khác như Redis hoặc Caffeine để phù hợp với nhu cầu ứng dụng.
        </p>
        <motion.img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          alt="Caching Architecture"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Implementing Caching */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Triển khai Caching trong Spring Boot</h2>
        <p>
          Để triển khai caching, chúng ta sẽ sử dụng Spring Cache với Caffeine làm cache provider. Dưới đây là các bước chi tiết.
        </p>

        <h3>Bước 1: Thêm Dependencies</h3>
        <p>
          Thêm Spring Boot Starter Cache và Caffeine vào file <code>pom.xml</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Maven POM.xml</div>
          <pre>
            <code>
{`<dependencies>
    <!-- Spring Boot Starter Cache -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-cache</artifactId>
    </dependency>
    <!-- Caffeine Cache -->
    <dependency>
        <groupId>com.github.ben-manes.caffeine</groupId>
        <artifactId>caffeine</artifactId>
        <version>3.1.8</version>
    </dependency>
    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <!-- PostgreSQL -->
    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Kích hoạt Caching</h3>
        <p>
          Thêm annotation <code>@EnableCaching</code> vào class chính của ứng dụng.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Main Application</div>
          <pre>
            <code>
{`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class CachingApplication {
    public static void main(String[] args) {
        SpringApplication.run(CachingApplication.class, args);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Cấu hình Caffeine Cache</h3>
        <p>
          Cấu hình Caffeine trong class cấu hình để quản lý cache.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Cache Configuration</div>
          <pre>
            <code>
{`import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.CacheManager;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager("users", "products");
        cacheManager.setCaffeine(caffeineCacheBuilder());
        return cacheManager;
    }

    Caffeine<Object, Object> caffeineCacheBuilder() {
        return Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(500)
                .expireAfterAccess(10, TimeUnit.MINUTES)
                .recordStats();
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 4: Sử dụng Cache Annotations</h3>
        <p>
          Sử dụng các annotation như <code>@Cacheable</code>, <code>@CachePut</code>, và <code>@CacheEvict</code> để quản lý cache trong service.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - User Entity</div>
          <pre>
            <code>
{`import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    private Long id;
    private String name;
    private String email;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
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
          <div className="language-label">Java - User Repository</div>
          <pre>
            <code>
{`import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
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
          <div className="language-label">Java - User Service</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Cacheable(value = "users", key = "#id")
    public User getUserById(Long id) {
        // Simulate slow database query
        simulateSlowQuery();
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @CachePut(value = "users", key = "#user.id")
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @CacheEvict(value = "users", key = "#id")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    private void simulateSlowQuery() {
        try {
            Thread.sleep(2000); // Giả lập truy vấn chậm
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 5: Tạo REST Controller</h3>
        <p>
          Tạo API endpoints để tương tác với cache.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - User Controller</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 6: Cấu hình Application Properties</h3>
        <p>
          Cấu hình database và các thuộc tính liên quan trong <code>application.properties</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">application.properties</div>
          <pre>
            <code>
{`spring.datasource.url=jdbc:postgresql://localhost:5432/yourdb
spring.datasource.username=youruser
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.cache.type=caffeine
spring.cache.cache-names=users,products
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Advanced Caching Techniques */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Kỹ thuật Caching Nâng cao</h2>
        <p>
          Ngoài các annotation cơ bản, Spring Cache hỗ trợ các kỹ thuật nâng cao để tối ưu hóa hiệu suất và quản lý cache.
        </p>

        <h3>1. Conditional Caching</h3>
        <p>
          Sử dụng thuộc tính <code>condition</code> và <code>unless</code> để kiểm soát khi nào dữ liệu được lưu vào cache.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Conditional Caching</div>
          <pre>
            <code>
{`@Cacheable(value = "users", key = "#id", condition = "#id > 0", unless = "#result == null")
public User getUserById(Long id) {
    return userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>2. Cache Eviction Strategies</h3>
        <p>
          Sử dụng <code>@CacheEvict</code> với <code>allEntries=true</code> để xóa toàn bộ cache khi cần.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Cache Eviction</div>
          <pre>
            <code>
{`@CacheEvict(value = "users", allEntries = true)
public void clearAllUserCaches() {
    // Xóa toàn bộ cache users
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>3. Tích hợp với Redis</h3>
        <p>
          Để sử dụng Redis làm cache provider, thêm dependency và cấu hình Redis.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Maven POM.xml - Redis</div>
          <pre>
            <code>
{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
`}
            </code>
          </pre>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">application.properties - Redis</div>
          <pre>
            <code>
{`spring.cache.type=redis
spring.redis.host=localhost
spring.redis.port=6379
spring.cache.redis.time-to-live=600000
`}
            </code>
          </pre>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Redis Cache Config</div>
          <pre>
            <code>
{`import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;

import java.time.Duration;

@Configuration
public class RedisCacheConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(10));
        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(config)
                .build();
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Best Practices cho Caching trong Spring Boot</h2>
        <p>
          Để tối ưu hóa caching và tránh các vấn đề phổ biến, hãy áp dụng các best practices sau:
        </p>

        <h3>1. Chọn Cache Provider Phù hợp</h3>
        <ul>
          <li><strong>ConcurrentMapCache:</strong> Phù hợp cho ứng dụng đơn giản, không cần phân tán.</li>
          <li><strong>Caffeine:</strong> Tốt cho ứng dụng cần hiệu suất cao trong bộ nhớ.</li>
          <li><strong>Redis:</strong> Lý tưởng cho hệ thống phân tán, microservices.</li>
        </ul>

        <h3>2. Quản lý Cache Key</h3>
        <ul>
          <li>Sử dụng key đơn giản và duy nhất để tránh xung đột.</li>
          <li>Sử dụng <code>keyGenerator</code> tùy chỉnh nếu cần tạo key phức tạp.</li>
        </ul>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Custom Key Generator</div>
          <pre>
            <code>
{`import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Component("customKeyGenerator")
public class CustomKeyGenerator implements KeyGenerator {
    @Override
    public Object generate(Object target, Method method, Object... params) {
        return method.getName() + "_" + Arrays.toString(params);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>3. Quản lý Cache Eviction</h3>
        <ul>
          <li>Đặt thời gian hết hạn hợp lý (<code>expireAfterAccess</code>, <code>expireAfterWrite</code>).</li>
          <li>Sử dụng <code>@CacheEvict</code> để xóa cache khi dữ liệu thay đổi.</li>
        </ul>

        <h3>4. Giám sát và Debugging</h3>
        <p>
          Bật cache statistics và logging để theo dõi hiệu suất cache.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Cache Statistics</div>
          <pre>
            <code>
{`import com.github.benmanes.caffeine.cache.stats.CacheStats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cache")
public class CacheController {

    @Autowired
    private CacheManager cacheManager;

    @GetMapping("/stats")
    public String getCacheStats() {
        CaffeineCache cache = (CaffeineCache) cacheManager.getCache("users");
        CacheStats stats = cache.getNativeCache().stats();
        return "Cache Stats: " + stats.toString();
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>5. Testing Cache</h3>
        <p>
          Sử dụng Spring Boot Test để kiểm tra hành vi của cache.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Cache Test</div>
          <pre>
            <code>
{`import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cache.CacheManager;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class CacheTests {

    @Autowired
    private UserService userService;

    @Autowired
    private CacheManager cacheManager;

    @Test
    public void testCacheable() {
        User user = userService.getUserById(1L);
        assertNotNull(user);
        // Kiểm tra cache
        assertNotNull(cacheManager.getCache("users").get(1L));
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Real-world Example */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Ví dụ thực tế: Ứng dụng quản lý sản phẩm</h2>
        <p>
          Dưới đây là một ví dụ sử dụng caching để tối ưu hóa truy vấn danh sách sản phẩm trong một ứng dụng thương mại điện tử.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Product Service</div>
          <pre>
            <code>
{`import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Cacheable(value = "products", key = "#category")
    public List<Product> getProductsByCategory(String category) {
        // Giả lập truy vấn chậm từ database
        simulateSlowQuery();
        return productRepository.findByCategory(category);
    }

    private void simulateSlowQuery() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Trong ví dụ này, danh sách sản phẩm được lưu vào cache với key là <code>category</code>. Các truy vấn tiếp theo sẽ lấy dữ liệu từ cache thay vì database, giảm đáng kể thời gian phản hồi.
        </p>
      </motion.section>

      

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