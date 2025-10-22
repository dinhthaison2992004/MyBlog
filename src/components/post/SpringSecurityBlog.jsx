import React from "react";
import { motion } from "framer-motion";

export default function SpringSecurityBlog() {
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
        <h1>Spring Security: Xác thực và Phân quyền Người dùng với JWT và Role-based Access Control</h1>
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
          alt="Spring Security"
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
        <h2>Giới thiệu về Spring Security và JWT</h2>
        <p>
          Spring Security là một framework mạnh mẽ trong hệ sinh thái Spring, cung cấp các công cụ toàn diện để triển khai xác thực (authentication) và phân quyền (authorization) cho ứng dụng Java. Với sự phổ biến của các ứng dụng web và API hiện đại, việc sử dụng JSON Web Tokens (JWT) kết hợp với phân quyền dựa trên vai trò (role-based access control - RBAC) đã trở thành tiêu chuẩn để bảo mật các API RESTful.
        </p>
        <p>
          Trong bài viết này, chúng ta sẽ khám phá cách tích hợp Spring Security với JWT và RBAC để xây dựng một hệ thống xác thực an toàn và hiệu quả. Bạn sẽ học cách:
        </p>
        <ul>
          <li>Cấu hình Spring Security để xử lý đăng nhập và tạo JWT.</li>
          <li>Triển khai phân quyền dựa trên vai trò (USER, ADMIN).</li>
          <li>Bảo vệ các endpoint API với các chính sách bảo mật khác nhau.</li>
          <li>Xử lý refresh token và các best practices để tăng cường bảo mật.</li>
        </ul>
        <p>
          Bài viết sẽ bao gồm các ví dụ mã nguồn thực tế, hướng dẫn từng bước, và các mẹo để triển khai hệ thống bảo mật production-ready. Dù bạn là người mới bắt đầu với Spring Security hay muốn nâng cấp kiến thức về JWT, bài viết này sẽ cung cấp một hướng dẫn toàn diện.
        </p>
      </motion.section>

      {/* Spring Security Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tổng quan về Spring Security và JWT</h2>
        <p>
          Spring Security hoạt động dựa trên khái niệm <strong>filter chain</strong>, nơi các request được xử lý qua một chuỗi các filter để kiểm tra xác thực và phân quyền. JWT, mặt khác, là một token tự chứa (self-contained) bao gồm header, payload, và signature, cho phép xác minh danh tính người dùng mà không cần lưu trữ session trên server.
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tính năng</th>
                <th>Spring Security</th>
                <th>JWT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mục đích</strong></td>
                <td>Framework bảo mật toàn diện cho ứng dụng</td>
                <td>Token-based authentication cho API</td>
              </tr>
              <tr>
                <td><strong>State</strong></td>
                <td>Hỗ trợ cả stateful và stateless</td>
                <td>Stateless, không lưu session</td>
              </tr>
              <tr>
                <td><strong>Tích hợp</strong></td>
                <td>Tích hợp sâu với Spring ecosystem</td>
                <td>Cần custom filter cho Spring</td>
              </tr>
              <tr>
                <td><strong>Ứng dụng</strong></td>
                <td>Web app, API, microservices</td>
                <td>API RESTful, SPA, mobile apps</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Kết hợp Spring Security và JWT cho phép xây dựng hệ thống xác thực stateless, phù hợp với các ứng dụng phân tán và microservices.
        </p>
        
      </motion.section>

      {/* Setting Up Spring Security */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Cấu hình Spring Security với JWT</h2>
        <p>
          Để bắt đầu, chúng ta cần thêm các dependency cần thiết và cấu hình Spring Security để hỗ trợ JWT. Dưới đây là các bước chi tiết.
        </p>

        <h3>Bước 1: Thêm Dependencies</h3>
        <p>
          Thêm Spring Security và JJWT (Java JWT) vào file <code>pom.xml</code>.
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
    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <!-- JJWT -->
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>0.9.1</version>
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

        <h3>Bước 2: Cấu hình User Entity và Repository</h3>
        <p>
          Tạo entity <code>User</code> để lưu thông tin người dùng, bao gồm username, password, và roles.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - User Entity</div>
          <pre>
            <code>
{`@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    private Set<String> roles = new HashSet<>();

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public Set<String> getRoles() { return roles; }
    public void setRoles(Set<String> roles) { this.roles = roles; }
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
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Tạo JWT Utility Class</h3>
        <p>
          Tạo class <code>JwtUtil</code> để xử lý việc tạo và xác minh JWT.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - JwtUtil</div>
          <pre>
            <code>
{`@Component
public class JwtUtil {
    private static final String SECRET_KEY = "your-256-bit-secret-key-32-bytes-long";
    private static final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities());
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody()
                .getExpiration()
                .before(new Date());
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 4: Tạo JWT Authentication Filter</h3>
        <p>
          Tạo filter để xác minh JWT trong mỗi request.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - JwtAuthenticationFilter</div>
          <pre>
            <code>
{`public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        String header = request.getHeader("Authorization");
        String username = null;
        String jwt = null;

        if (header != null && header.startsWith("Bearer ")) {
            jwt = header.substring(7);
            try {
                username = jwtUtil.extractUsername(jwt);
            } catch (Exception e) {
                logger.error("Invalid JWT token", e);
            }
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtUtil.validateToken(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        chain.doFilter(request, response);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 5: Cấu hình Security Config</h3>
        <p>
          Cấu hình Spring Security để sử dụng JWT và phân quyền dựa trên vai trò.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - SecurityConfig</div>
          <pre>
            <code>
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public UserDetailsService userDetailsService(UserRepository userRepository) {
        return username -> {
            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
            return new org.springframework.security.core.userdetails.User(
                    user.getUsername(),
                    user.getPassword(),
                    user.getRoles().stream()
                            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                            .collect(Collectors.toList()));
        };
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 6: Tạo Authentication Controller</h3>
        <p>
          Tạo API endpoint để xử lý đăng nhập và tạo JWT.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - AuthController</div>
          <pre>
            <code>
{`@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
            String jwt = jwtUtil.generateToken(userDetails);
            return ResponseEntity.ok(new AuthResponse(jwt));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}

class AuthRequest {
    private String username;
    private String password;

    // Getters and setters
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

class AuthResponse {
    private String jwt;

    public AuthResponse(String jwt) { this.jwt = jwt; }
    public String getJwt() { return jwt; }
    public void setJwt(String jwt) { this.jwt = jwt; }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 7: Cấu hình Application Properties</h3>
        <p>
          Cấu hình database và các thuộc tính khác trong <code>application.properties</code>.
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

server.port=\${PORT:8080}
logging.level.org.springframework.security=DEBUG
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Role-based Authorization */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Phân quyền dựa trên Vai trò (Role-based Access Control)</h2>
        <p>
          Với RBAC, chúng ta có thể giới hạn quyền truy cập vào các endpoint dựa trên vai trò của người dùng (USER, ADMIN). Ví dụ:
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Sample Controller</div>
          <pre>
            <code>
{`@RestController
@RequestMapping("/api")
public class SampleController {

    @GetMapping("/user/hello")
    public String userHello() {
        return "Hello, User!";
    }

    @GetMapping("/admin/hello")
    public String adminHello() {
        return "Hello, Admin!";
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Trong cấu hình <code>SecurityConfig</code>, các endpoint <code>/api/user/**</code> yêu cầu vai trò USER hoặc ADMIN, trong khi <code>/api/admin/**</code> chỉ cho phép ADMIN.
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Đăng nhập:</strong> Gửi POST request tới <code>/api/auth/login</code> với username và password để nhận JWT.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Gửi Request:</strong> Thêm header <code>Authorization: Bearer your_jwt_token</code> khi gọi các endpoint bảo vệ.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Kiểm tra Vai trò:</strong> Spring Security tự động kiểm tra roles trong JWT để cho phép hoặc từ chối truy cập.
          </div>
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          alt="Role-based Access"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Refresh Token Implementation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Triển khai Refresh Token</h2>
        <p>
          Để tăng cường bảo mật, sử dụng refresh token để gia hạn JWT mà không yêu cầu người dùng đăng nhập lại.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Refresh Token Entity</div>
          <pre>
            <code>
{`@Entity
@Table(name = "refresh_tokens")
public class RefreshToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String token;

    @Column(nullable = false)
    private LocalDateTime expiryDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public LocalDateTime getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDateTime expiryDate) { this.expiryDate = expiryDate; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
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
          <div className="language-label">Java - Refresh Token Service</div>
          <pre>
            <code>
{`@Service
public class RefreshTokenService {

    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public RefreshToken createRefreshToken(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setToken(UUID.randomUUID().toString());
        refreshToken.setExpiryDate(LocalDateTime.now().plusDays(7));
        refreshToken.setUser(user);
        return refreshTokenRepository.save(refreshToken);
    }

    public String refreshJwtToken(String refreshToken) {
        RefreshToken token = refreshTokenRepository.findByToken(refreshToken)
                .orElseThrow(() -> new IllegalArgumentException("Invalid refresh token"));
        if (token.getExpiryDate().isBefore(LocalDateTime.now())) {
            refreshTokenRepository.delete(token);
            throw new IllegalArgumentException("Refresh token expired");
        }
        UserDetails userDetails = userDetailsService().loadUserByUsername(token.getUser().getUsername());
        return jwtUtil.generateToken(userDetails);
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> userRepository.findByUsername(username)
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getUsername(),
                        user.getPassword(),
                        user.getRoles().stream()
                                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                                .collect(Collectors.toList())))
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }
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
          <div className="language-label">Java - AuthController Refresh Endpoint</div>
          <pre>
            <code>
{`@PostMapping("/refresh")
public ResponseEntity<?> refreshToken(@RequestBody RefreshTokenRequest request) {
    try {
        String newJwt = refreshTokenService.refreshJwtToken(request.getRefreshToken());
        return ResponseEntity.ok(new AuthResponse(newJwt));
    } catch (IllegalArgumentException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }
}

class RefreshTokenRequest {
    private String refreshToken;

    public String getRefreshToken() { return refreshToken; }
    public void setRefreshToken(String refreshToken) { this.refreshToken = refreshToken; }
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
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Best Practices cho Spring Security với JWT</h2>
        <p>
          Để đảm bảo hệ thống bảo mật hoạt động hiệu quả và an toàn trong môi trường production, hãy áp dụng các best practices sau:
        </p>

        <h3>1. Bảo mật JWT</h3>
        <ul>
          <li><strong>Secure Secret Key:</strong> Lưu trữ khóa bí mật trong environment variables hoặc vault (e.g., AWS Secrets Manager).</li>
          <li><strong>Short-lived Tokens:</strong> Đặt thời gian hết hạn JWT ngắn (e.g., 1 giờ) và sử dụng refresh token.</li>
          <li><strong>HTTPS Only:</strong> Luôn sử dụng HTTPS để bảo vệ token trong quá trình truyền.</li>
          <li><strong>Validate Claims:</strong> Kiểm tra tất cả các claims trong JWT, bao gồm issuer và audience.</li>
        </ul>

        <h3>2. Quản lý Refresh Token</h3>
        <ul>
          <li><strong>Database Storage:</strong> Lưu refresh token trong database với thời gian hết hạn.</li>
          <li><strong>Revocation:</strong> Implement cơ chế thu hồi refresh token khi người dùng đăng xuất hoặc nghi ngờ bị xâm phạm.</li>
          <li><strong>Rotation:</strong> Tạo refresh token mới mỗi khi sử dụng để giảm nguy cơ lạm dụng.</li>
        </ul>

        <h3>3. Xử lý Lỗi và Logging</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Global Exception Handler</div>
          <pre>
            <code>
{`@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<String> handleAuthenticationException(AuthenticationException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: " + ex.getMessage());
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<String> handleAccessDeniedException(AccessDeniedException ex) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied: " + ex.getMessage());
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>4. Performance Optimization</h3>
        <ul>
          <li><strong>Stateless Design:</strong> Tránh lưu session trên server để hỗ trợ scaling ngang.</li>
          <li><strong>Caching User Details:</strong> Cache thông tin user (e.g., Redis) để giảm truy vấn database.</li>
          <li><strong>Rate Limiting:</strong> Áp dụng rate limiting cho endpoint đăng nhập để chống brute-force attacks.</li>
        </ul>

        <h3>5. Testing Security</h3>
        <p>
          Sử dụng Spring Security Test để kiểm tra các endpoint bảo mật.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Security Test</div>
          <pre>
            <code>
{`@SpringBootTest
@AutoConfigureMockMvc
public class SecurityTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testAccessAdminEndpoint() throws Exception {
        mockMvc.perform(get("/api/admin/hello")
                .header("Authorization", "Bearer invalid_token"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    public void testAdminAccessWithCorrectRole() throws Exception {
        mockMvc.perform(get("/api/admin/hello"))
                .andExpect(status().isOk())
                .andExpect(content().string("Hello, Admin!"));
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

     
    </div>
  );
}