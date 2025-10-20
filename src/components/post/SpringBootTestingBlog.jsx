import React from "react";
import { motion } from "framer-motion";

export default function SpringBootTestingBlog() {
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
        <h1>Testing trong Spring Boot</h1>
        <p>
          Bởi <span>Đinh Sơn</span> | 21/10/2025 | 12 phút đọc
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
          src="https://images.unsplash.com/photo-1618401471353-7f7b268e6d3e?auto=format&fit=crop&w=1200&q=80"
          alt="Spring Boot Testing"
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
        <h2>Giới thiệu về Testing trong Spring Boot</h2>
        <p>
          Testing là một phần quan trọng trong phát triển ứng dụng Spring Boot để đảm bảo chất lượng mã nguồn, giảm lỗi, và tăng độ tin cậy. Spring Boot cung cấp các công cụ mạnh mẽ như <strong>Spring Boot Test</strong>, <strong>JUnit</strong>, và <strong>Mockito</strong> để hỗ trợ viết unit test, integration test, và end-to-end test.
        </p>
        <p>
          Trong bài viết này, chúng ta sẽ tìm hiểu:
        </p>
        <ul>
          <li>Các loại testing: Unit test, integration test, và end-to-end test.</li>
          <li>Cách sử dụng JUnit và Mockito trong Spring Boot.</li>
          <li>Cách viết integration test với <code>@SpringBootTest</code> và <code>TestRestTemplate</code>.</li>
          <li>Best practices để viết test hiệu quả và dễ bảo trì.</li>
          <li>Ví dụ thực tế về testing REST API trong Spring Boot.</li>
        </ul>
        <p>
          Bài viết này dành cho cả người mới bắt đầu và các lập trình viên muốn nâng cao kỹ năng testing trong Spring Boot.
        </p>
      </motion.section>

      {/* Types of Testing */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Các loại Testing trong Spring Boot</h2>
        <p>
          Có ba loại testing chính trong Spring Boot:
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Loại Test</th>
                <th>Mục đích</th>
                <th>Công cụ</th>
                <th>Phạm vi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Unit Test</strong></td>
                <td>Kiểm tra logic của từng method/class riêng lẻ</td>
                <td>JUnit, Mockito</td>
                <td>Một đơn vị mã nguồn (method, service)</td>
              </tr>
              <tr>
                <td><strong>Integration Test</strong></td>
                <td>Kiểm tra sự tích hợp giữa các thành phần (database, API)</td>
                <td>SpringBootTest, TestRestTemplate</td>
                <td>Toàn bộ ứng dụng hoặc một module</td>
              </tr>
              <tr>
                <td><strong>End-to-End Test</strong></td>
                <td>Kiểm tra toàn bộ luồng từ UI đến backend</td>
                <td>RestAssured, Selenium</td>
                <td>Full application flow</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Mỗi loại test có mục đích và phạm vi khác nhau, nhưng tất cả đều cần thiết để đảm bảo ứng dụng hoạt động đúng.
        </p>
      </motion.section>

      {/* Project Setup */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Thiết lập dự án cho Testing</h2>
        <p>
          Để bắt đầu testing, bạn cần thêm các dependencies cần thiết vào dự án Spring Boot.
        </p>

        <h3>Bước 1: Thêm Dependencies</h3>
        <p>
          Trong <code>pom.xml</code>, thêm các dependencies cho JUnit, Mockito, và Spring Boot Test.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Maven POM.xml - Test Dependencies</div>
          <pre>
            <code>
{`<dependencies>
    <!-- Spring Boot Starter Test -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>

    <!-- JUnit Jupiter -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <scope>test</scope>
    </dependency>

    <!-- Mockito -->
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-core</artifactId>
        <scope>test</scope>
    </dependency>

    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
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
          Cấu hình cơ sở dữ liệu H2 cho testing trong <code>application-test.properties</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">application-test.properties</div>
          <pre>
            <code>
{`spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.h2.console.enabled=true
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Tạo Entity và Repository</h3>
        <p>
          Tạo một entity <code>User</code> và repository để sử dụng trong các ví dụ test.
        </p>
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

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Unit Testing */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Unit Testing với JUnit và Mockito</h2>
        <p>
          Unit test tập trung vào việc kiểm tra từng method hoặc class riêng lẻ, sử dụng Mockito để mock các dependency.
        </p>

        <h3>Ví dụ: Unit Test cho UserService</h3>
        <p>
          Tạo <code>UserService</code> để xử lý logic nghiệp vụ.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserService</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username already exists");
        }
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <p>
          Viết unit test cho <code>UserService</code> sử dụng JUnit và Mockito.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserServiceTest</div>
          <pre>
            <code>
{`import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    public void testCreateUser_Success() {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        user.setFullName("Test User");

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.empty());
        when(userRepository.save(user)).thenReturn(user);

        User createdUser = userService.createUser(user);

        assertNotNull(createdUser);
        assertEquals("testuser", createdUser.getUsername());
        verify(userRepository, times(1)).findByUsername("testuser");
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void testCreateUser_UsernameExists() {
        User user = new User();
        user.setUsername("testuser");

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(user));

        IllegalArgumentException exception = assertThrows(
                IllegalArgumentException.class,
                () -> userService.createUser(user)
        );

        assertEquals("Username already exists", exception.getMessage());
        verify(userRepository, times(1)).findByUsername("testuser");
        verify(userRepository, never()).save(any());
    }

    @Test
    public void testGetUserById_NotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        IllegalArgumentException exception = assertThrows(
                IllegalArgumentException.class,
                () -> userService.getUserById(1L)
        );

        assertEquals("User not found", exception.getMessage());
        verify(userRepository, times(1)).findById(1L);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Best Practices cho Unit Test</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Mock Dependencies:</strong> Sử dụng Mockito để mock các đối tượng như repository, service.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Test One Thing:</strong> Mỗi test chỉ kiểm tra một kịch bản (success, failure, edge cases).
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Use Assertions:</strong> Sử dụng các assert method như <code>assertEquals</code>, <code>assertThrows</code>.
          </div>
        </div>
      </motion.section>

      {/* Integration Testing */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Integration Testing với @SpringBootTest</h2>
        <p>
          Integration test kiểm tra sự tương tác giữa các thành phần như controller, service, và database.
        </p>

        <h3>Ví dụ: Integration Test cho REST API</h3>
        <p>
          Tạo một <code>UserController</code> để xử lý REST API.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserController</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <p>
          Viết integration test sử dụng <code>@SpringBootTest</code> và <code>TestRestTemplate</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserControllerIntegrationTest</div>
          <pre>
            <code>
{`import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testCreateUser_Success() {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        user.setFullName("Test User");

        ResponseEntity<User> response = restTemplate.postForEntity(
                "/api/users", user, User.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("testuser", response.getBody().getUsername());
    }

    @Test
    public void testGetUser_NotFound() {
        ResponseEntity<String> response = restTemplate.getForEntity(
                "/api/users/999", String.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Testing với MockMvc</h3>
        <p>
          Sử dụng <code>MockMvc</code> để test REST API mà không cần chạy toàn bộ server.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserControllerMockMvcTest</div>
          <pre>
            <code>
{`import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
public class UserControllerMockMvcTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    public void testCreateUser_Success() throws Exception {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        user.setFullName("Test User");

        when(userService.createUser(any(User.class))).thenReturn(user);

        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"testuser\",\"email\":\"test@example.com\",\"fullName\":\"Test User\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.username").value("testuser"));
    }

    @Test
    public void testGetUser_NotFound() throws Exception {
        when(userService.getUserById(999L))
                .thenThrow(new IllegalArgumentException("User not found"));

        mockMvc.perform(get("/api/users/999"))
                .andExpect(status().isNotFound());
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* End-to-End Testing */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>End-to-End Testing</h2>
        <p>
          End-to-end test kiểm tra toàn bộ luồng ứng dụng từ client đến server. Chúng ta sẽ sử dụng <code>RestAssured</code> để test API.
        </p>

        <h3>Thêm Dependency cho RestAssured</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Maven POM.xml - RestAssured</div>
          <pre>
            <code>
{`<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.4.0</version>
    <scope>test</scope>
</dependency>
`}
            </code>
          </pre>
        </motion.div>

        <h3>Ví dụ: End-to-End Test với RestAssured</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserApiEndToEndTest</div>
          <pre>
            <code>
{`import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserApiEndToEndTest {

    @LocalServerPort
    private int port;

    @BeforeEach
    public void setup() {
        RestAssured.port = port;
    }

    @Test
    public void testCreateUserEndToEnd() {
        given()
                .contentType("application/json")
                .body("{\"username\":\"testuser\",\"email\":\"test@example.com\",\"fullName\":\"Test User\"}")
        .when()
                .post("/api/users")
        .then()
                .statusCode(200)
                .body("username", equalTo("testuser"))
                .body("email", equalTo("test@example.com"));
    }

    @Test
    public void testGetUserNotFoundEndToEnd() {
        given()
                .when()
                .get("/api/users/999")
                .then()
                .statusCode(404);
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
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Best Practices cho Testing trong Spring Boot</h2>
        <p>
          Để viết test hiệu quả và dễ bảo trì, hãy tuân theo các best practices sau:
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Test Isolation:</strong> Mỗi test nên độc lập, không phụ thuộc vào trạng thái của test khác.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Mock External Services:</strong> Sử dụng Mockito để mock các dịch vụ bên ngoài như API, database.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Use Profiles:</strong> Sử dụng Spring Profiles (<code>test</code>) để cấu hình riêng cho testing.
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <strong>Test Coverage:</strong> Sử dụng công cụ như JaCoCo để đo độ bao phủ của test (ít nhất 80%).
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <strong>Clear Naming:</strong> Đặt tên test rõ ràng, ví dụ: <code>testCreateUser_Success</code>, <code>testGetUser_NotFound</code>.
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Test Profile Example</div>
          <pre>
            <code>
{`@SpringBootTest
@ActiveProfiles("test")
public class ProfileBasedTest {

    @Autowired
    private UserService userService;

    @Test
    public void testWithTestProfile() {
        // Test logic with test-specific configuration
        User user = new User();
        user.setUsername("testuser");
        userService.createUser(user);
        // Assertions
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
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Ví dụ thực tế: Testing REST API cho User Management</h2>
        <p>
          Dưới đây là một ví dụ hoàn chỉnh về cách test một REST API quản lý user.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - UserApiIntegrationTest</div>
          <pre>
            <code>
{`import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserApiIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    public void setup() {
        userRepository.deleteAll();
    }

    @Test
    public void testUserApiFlow() {
        // Create User
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        user.setFullName("Test User");

        ResponseEntity<User> createResponse = restTemplate.postForEntity(
                "/api/users", user, User.class);

        assertEquals(HttpStatus.OK, createResponse.getStatusCode());
        assertNotNull(createResponse.getBody());
        Long userId = createResponse.getBody().getId();

        // Get User
        ResponseEntity<User> getResponse = restTemplate.getForEntity(
                "/api/users/" + userId, User.class);

        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
        assertEquals("testuser", getResponse.getBody().getUsername());
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Ví dụ này kiểm tra toàn bộ luồng tạo và lấy thông tin user, đảm bảo tích hợp giữa controller, service, và repository hoạt động đúng.
        </p>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="cta-section"
      >
        <h2>🚀 Kết luận: Tăng chất lượng mã nguồn với Testing</h2>
        <p>
          Testing trong Spring Boot giúp bạn xây dựng ứng dụng đáng tin cậy và dễ bảo trì. Từ unit test với JUnit và Mockito, integration test với <code>@SpringBootTest</code>, đến end-to-end test với RestAssured, mỗi loại test đều đóng vai trò quan trọng trong việc đảm bảo chất lượng mã nguồn.
        </p>
        <p>
          Bắt đầu với các test đơn giản, sử dụng best practices như mock dependencies, clear naming, và test isolation. Khi dự án phát triển, hãy mở rộng test coverage và sử dụng công cụ như JaCoCo để đo lường hiệu quả.
        </p>
        <p>
          Nếu bạn cần hỗ trợ viết test phức tạp hơn hoặc tối ưu hóa quy trình CI/CD với testing, hãy liên hệ để được tư vấn chi tiết. Chúc bạn thành công trên hành trình phát triển ứng dụng Spring Boot!
        </p>
        <a href="/contact">👋 Liên hệ tư vấn miễn phí</a>
      </motion.section>

      <motion.img
        src="https://images.unsplash.com/photo-1618401471353-7f7b268e6d3e?auto=format&fit=crop&w=800&q=80"
        alt="Testing Success"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
    </div>
  );
}