import React from "react";
import { motion } from "framer-motion";

export default function RestApiSpringBoot() {
  return (
    <div className="container">
      <style>
        {`
          .container {
            min-height: 100vh;
            padding: 4rem 1.5rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            color: #ffffff;
            background: transparent;
          }

          .header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .header h1 {
            font-size: 2.5rem;
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
            padding: 2rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .section h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1rem;
          }

          .section p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.7;
            margin-bottom: 1rem;
          }

          .section ul {
            list-style-type: disc;
            padding-left: 2rem;
            margin-bottom: 1rem;
          }

          .section li {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.7;
            margin-bottom: 0.5rem;
          }

          .section img {
            width: 100%;
            max-width: 600px;
            border-radius: 0.75rem;
            margin: 1.5rem auto;
            display: block;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          }

          .code-card {
            position: relative;
            background: rgba(30, 41, 59, 0.9);
            border-radius: 0.75rem;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            font-family: 'Fira Code', Consolas, monospace;
            font-size: 0.9rem;
            color: #e2e8f0;
          }

          .code-card .language-label {
            position: absolute;
            top: 0.5rem;
            left: 0.75rem;
            background: #4f46e5;
            color: #ffffff;
            padding: 0.25rem 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 600;
          }

          .code-card pre {
            margin: 1rem 0 0 0;
            white-space: pre-wrap;
            overflow-x: auto;
          }

          .code-card code {
            display: block;
            line-height: 1.6;
          }

          .code-card .keyword { color: #ff79c6; }
          .code-card .string { color: #f1fa8c; }
          .code-card .class { color: #8be9fd; }
          .code-card .method { color: #50fa7b; }
          .code-card .comment { color: #6272a4; }
          .code-card .annotation { color: #bd93f9; }
          .code-card .number { color: #bd93f9; }

          .cta-section {
            text-align: center;
            background: rgba(79, 70, 229, 0.8);
            border-radius: 1rem;
            padding: 3rem;
            margin-top: 3rem;
            box-shadow: 0 8px 30px rgba(79, 70, 229, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          .cta-section h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
          }

          .cta-section p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto 2rem;
            line-height: 1.6;
          }

          .cta-section a {
            background: #ffffff;
            color: #4f46e5;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
            transition: background 0.3s ease, transform 0.2s ease;
          }

          .cta-section a:hover {
            background: #eff6ff;
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .container { padding: 2rem 1rem; }
            .header h1 { font-size: 2rem; }
            .header p { font-size: 1rem; }
            .section h2 { font-size: 1.5rem; }
            .section p, .section li { font-size: 1rem; }
            .code-card { font-size: 0.85rem; }
            .cta-section h2 { font-size: 1.75rem; }
          }
        `}
      </style>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>Tạo RESTful API đơn giản với Spring Boot (GET, POST, PUT, DELETE)</h1>
        <p>
          Bởi <span>Đinh Sơn</span> | 10/10/2025 | 10 phút đọc
        </p>
      </motion.header>

      {/* Hình ảnh chính */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="main-image"
      >
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
          alt="Spring Boot REST API"
        />
      </motion.div>

      {/* Giới thiệu */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Giới thiệu về RESTful API và Spring Boot</h2>
        <p>
          REST (Representational State Transfer) là một phong cách kiến trúc để thiết kế các ứng dụng mạng, đặc biệt là các API (Application Programming Interface) cho phép các hệ thống giao tiếp với nhau qua giao thức HTTP. Một RESTful API sử dụng các phương thức HTTP chuẩn như <strong>GET</strong>, <strong>POST</strong>, <strong>PUT</strong>, và <strong>DELETE</strong> để thực hiện các thao tác CRUD (Create, Read, Update, Delete) trên các tài nguyên.
        </p>
        <p>
          <strong>Spring Boot</strong> là một framework mạnh mẽ của Java, giúp đơn giản hóa việc phát triển ứng dụng web và API bằng cách cung cấp cấu hình tự động, giảm thiểu mã boilerplate, và tích hợp dễ dàng với các công nghệ như Spring Data, Spring MVC. Trong bài viết này, chúng ta sẽ xây dựng một RESTful API đơn giản để quản lý danh sách người dùng (User) với đầy đủ các phương thức CRUD, sử dụng Spring Boot.
        </p>
      </motion.section>

      {/* Thiết lập dự án */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Thiết lập dự án Spring Boot</h2>
        <p>
          Để bắt đầu, bạn cần cài đặt môi trường phát triển Java (JDK 17 hoặc mới hơn), Maven, và một IDE như IntelliJ IDEA hoặc Eclipse. Sau đó, chúng ta sẽ sử dụng Spring Initializr để tạo dự án.
        </p>
        <ol>
          <li>Truy cập <a href="https://start.spring.io">Spring Initializr</a>.</li>
          <li>Chọn các thông tin sau:
            <ul>
              <li><strong>Project</strong>: Maven</li>
              <li><strong>Language</strong>: Java</li>
              <li><strong>Spring Boot</strong>: 3.x.x (phiên bản mới nhất)</li>
              <li><strong>Dependencies</strong>: Spring Web, Spring Data JPA, H2 Database (cho cơ sở dữ liệu in-memory), Lombok.</li>
            </ul>
          </li>
          <li>Tải dự án và giải nén, sau đó mở trong IDE.</li>
        </ol>
        <p>Dưới đây là cấu trúc thư mục cơ bản của dự án:</p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Directory Structure</div>
          <pre>
            <code>
{`src/
├── main/
│   ├── java/com/example/demo/
│   │   ├── DemoApplication.java
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── service/
│   ├── resources/
│   │   ├── application.properties
pom.xml
`}
            </code>
          </pre>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e756b6?auto=format&fit=crop&w=800&q=80"
          alt="Spring Boot Setup"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Tạo Model */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tạo Model cho User</h2>
        <p>
          Chúng ta sẽ tạo một lớp <code>User</code> để đại diện cho tài nguyên "người dùng". Lớp này sẽ có các trường như <code>id</code>, <code>name</code>, và <code>email</code>. Sử dụng Lombok để giảm mã boilerplate (getter, setter, constructor).
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Java</div>
          <pre>
            <code>
{`package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}
`}
            </code>
          </pre>
        </motion.div>
        <p><strong>Giải thích:</strong></p>
        <ul>
          <li><code>@Entity</code>: Đánh dấu lớp này là một entity, sẽ được ánh xạ vào bảng trong cơ sở dữ liệu.</li>
          <li><code>@Id</code> và <code>@GeneratedValue</code>: Định nghĩa trường <code>id</code> là khóa chính, tự động tăng.</li>
          <li><code>@Data</code>: Tự động tạo getter, setter, toString, equals, hashCode.</li>
          <li><code>@NoArgsConstructor</code> và <code>@AllArgsConstructor</code>: Tạo constructor không tham số và đầy đủ tham số.</li>
        </ul>
      </motion.section>

      {/* Tạo Repository */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tạo Repository để truy cập dữ liệu</h2>
        <p>
          Repository chịu trách nhiệm tương tác với cơ sở dữ liệu. Spring Data JPA cung cấp giao diện <code>JpaRepository</code> để thực hiện các thao tác CRUD cơ bản.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Java</div>
          <pre>
            <code>
{`package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
`}
            </code>
          </pre>
        </motion.div>
        <p><strong>Giải thích:</strong></p>
        <ul>
          <li><code>JpaRepository&lt;User, Long&gt;</code>: Cung cấp các phương thức CRUD chuẩn như <code>findAll()</code>, <code>findById()</code>, <code>save()</code>, <code>delete()</code>.</li>
          <li>Không cần triển khai các phương thức, Spring Data JPA tự động tạo mã thực thi.</li>
        </ul>
      </motion.section>

      {/* Tạo Service */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tạo Service để xử lý logic nghiệp vụ</h2>
        <p>
          Service chứa logic nghiệp vụ, gọi các phương thức từ Repository. Chúng ta sẽ tạo một lớp <code>UserService</code> để xử lý các thao tác CRUD.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Java</div>
          <pre>
            <code>
{`package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Lấy danh sách tất cả người dùng
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Lấy người dùng theo ID
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Tạo người dùng mới
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Cập nhật người dùng
    public Optional<User> updateUser(Long id, User userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            return userRepository.save(user);
        });
    }

    // Xóa người dùng
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p><strong>Giải thích:</strong></p>
        <ul>
          <li><code>@Service</code>: Đánh dấu lớp này là một Spring Bean, thuộc tầng service.</li>
          <li><code>@Autowired</code>: Tiêm phụ thuộc <code>UserRepository</code> vào service.</li>
          <li>Các phương thức tương ứng với các thao tác CRUD: lấy danh sách, lấy theo ID, tạo, cập nhật, xóa.</li>
        </ul>
      </motion.section>

      {/* Tạo Controller */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tạo Controller để xử lý yêu cầu HTTP</h2>
        <p>
          Controller chịu trách nhiệm xử lý các yêu cầu HTTP và trả về phản hồi. Chúng ta sẽ tạo một <code>UserController</code> với các endpoint RESTful cho GET, POST, PUT, và DELETE.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Java</div>
          <pre>
            <code>
{`package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // GET: Lấy danh sách tất cả người dùng
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // GET: Lấy người dùng theo ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // POST: Tạo người dùng mới
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // PUT: Cập nhật người dùng
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.updateUser(id, userDetails)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE: Xóa người dùng
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(user -> {
                    userService.deleteUser(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p><strong>Giải thích:</strong></p>
        <ul>
          <li><code>@RestController</code>: Đánh dấu lớp này là một REST controller, trả về dữ liệu JSON.</li>
          <li><code>@RequestMapping("/api/users")</code>: Định nghĩa URL gốc cho tất cả các endpoint.</li>
          <li><code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, <code>@DeleteMapping</code>: Xử lý các phương thức HTTP tương ứng.</li>
          <li><code>@PathVariable</code>: Lấy tham số ID từ URL.</li>
          <li><code>@RequestBody</code>: Chuyển đổi JSON từ yêu cầu thành đối tượng Java.</li>
          <li><code>ResponseEntity</code>: Quản lý mã trạng thái HTTP (200 OK, 404 Not Found, v.v.).</li>
        </ul>
        <motion.img
          src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80"
          alt="REST API Endpoints"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Cấu hình application.properties */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Cấu hình cơ sở dữ liệu (H2)</h2>
        <p>
          Chúng ta sử dụng H2 Database (cơ sở dữ liệu in-memory) để đơn giản hóa việc thử nghiệm. Cấu hình được đặt trong file <code>application.properties</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Properties</div>
          <pre>
            <code>
{`# H2 Database Configuration
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
`}
            </code>
          </pre>
        </motion.div>
        <p><strong>Giải thích:</strong></p>
        <ul>
          <li><code>spring.datasource.*</code>: Cấu hình kết nối đến H2 database.</li>
          <li><code>spring.h2.console.enabled=true</code>: Kích hoạt H2 console tại <code>/h2-console</code>.</li>
          <li><code>spring.jpa.hibernate.ddl-auto=update</code>: Tự động tạo/cập nhật bảng dựa trên các entity.</li>
        </ul>
      </motion.section>

      {/* Kiểm tra API */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Kiểm tra API với Postman hoặc cURL</h2>
        <p>
          Sau khi chạy ứng dụng (<code>mvn spring-boot:run</code>), bạn có thể kiểm tra các endpoint bằng Postman hoặc cURL. Dưới đây là các ví dụ:
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="code-card"
        >
          <div className="language-label">Bash</div>
          <pre>
            <code>
{`# GET: Lấy tất cả người dùng
curl http://localhost:8080/api/users

# GET: Lấy người dùng theo ID
curl http://localhost:8080/api/users/1

# POST: Tạo người dùng mới
curl -X POST http://localhost:8080/api/users \
-H "Content-Type: application/json" \
-d '{"name":"Nguyen Van A","email":"a@example.com"}'

# PUT: Cập nhật người dùng
curl -X PUT http://localhost:8080/api/users/1 \
-H "Content-Type: application/json" \
-d '{"name":"Nguyen Van B","email":"b@example.com"}'

# DELETE: Xóa người dùng
curl -X DELETE http://localhost:8080/api/users/1
`}
            </code>
          </pre>
        </motion.div>
        <p><strong>Lưu ý:</strong></p>
        <ul>
          <li>API chạy mặc định trên <code>http://localhost:8080</code>.</li>
          <li>Sử dụng Postman để dễ dàng kiểm tra và trực quan hóa kết quả.</li>
          <li>Kiểm tra H2 console tại <code>http://localhost:8080/h2-console</code> để xem dữ liệu trong cơ sở dữ liệu.</li>
        </ul>
        <motion.img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e756b6?auto=format&fit=crop&w=800&q=80"
          alt="Postman Testing"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Kết luận và CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
        className="cta-section"
      >
        <h2>Bắt đầu xây dựng RESTful API với Spring Boot ngay hôm nay! 🚀</h2>
        <p>
          Spring Boot giúp bạn xây dựng RESTful API mạnh mẽ và dễ dàng, từ các ứng dụng nhỏ đến các hệ thống doanh nghiệp lớn. Nếu bạn muốn tìm hiểu thêm về Spring Boot hoặc cần hướng dẫn chi tiết hơn, hãy liên hệ với tôi!
        </p>
        <a href="/contact">Liên hệ ngay</a>
      </motion.section>
    </div>
  );
}