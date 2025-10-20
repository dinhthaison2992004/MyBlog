import React from "react";
import { motion } from "framer-motion";

export default function SpringBootPaymentIntegrationBlog() {
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
        <h1>Tích hợp thanh toán (VNPAY, Stripe, PayPal) trong ứng dụng Spring Boot</h1>
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
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
          alt="Payment Integration"
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
        <h2>Giới thiệu về tích hợp thanh toán trong Spring Boot</h2>
        <p>
          Tích hợp thanh toán là một phần không thể thiếu trong hầu hết các ứng dụng thương mại điện tử và web hiện đại. Spring Boot, với hệ sinh thái mạnh mẽ, cung cấp nền tảng vững chắc để tích hợp các cổng thanh toán phổ biến như <strong>VNPAY</strong> (dành cho thị trường Việt Nam), <strong>Stripe</strong> (cổng thanh toán quốc tế hàng đầu), và <strong>PayPal</strong> (hệ thống thanh toán toàn cầu). 
        </p>
        <p>
          Trong bài viết này, chúng ta sẽ học cách:
        </p>
        <ul>
          <li>Cấu hình và tích hợp VNPAY cho thanh toán nội địa Việt Nam.</li>
          <li>Sử dụng Stripe API để xử lý thanh toán quốc tế với thẻ tín dụng.</li>
          <li>Tích hợp PayPal SDK cho thanh toán qua tài khoản PayPal.</li>
          <li>Xử lý webhook, xác thực thanh toán, và quản lý trạng thái đơn hàng.</li>
          <li>Best practices về bảo mật và xử lý lỗi trong thanh toán.</li>
        </ul>
        <p>
          Bài viết bao gồm mã nguồn thực tế, hướng dẫn từng bước, và các ví dụ hoàn chỉnh để bạn có thể áp dụng ngay vào dự án của mình.
        </p>
      </motion.section>

      {/* Payment Gateways Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tổng quan về các cổng thanh toán</h2>
        <p>
          Mỗi cổng thanh toán có điểm mạnh riêng, phù hợp với các thị trường và yêu cầu khác nhau.
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Cổng thanh toán</th>
                <th>Thị trường chính</th>
                <th>Ưu điểm</th>
                <th>Nhược điểm</th>
                <th>Phí giao dịch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>VNPAY</strong></td>
                <td>Việt Nam</td>
                <td>Hỗ trợ ngân hàng VN, QR code, dễ tích hợp, phí thấp</td>
                <td>Chỉ hỗ trợ thị trường VN, cần chứng nhận PCI DSS</td>
                <td>1.5-2% + phí cố định</td>
              </tr>
              <tr>
                <td><strong>Stripe</strong></td>
                <td>Quốc tế</td>
                <td>API mạnh mẽ, hỗ trợ 135+ currencies, dễ tích hợp, dashboard tốt</td>
                <td>Phí cao hơn, cần tuân thủ PCI, không hỗ trợ VN trực tiếp</td>
                <td>2.9% + 30¢ (USD)</td>
              </tr>
              <tr>
                <td><strong>PayPal</strong></td>
                <td>Quốc tế</td>
                <td>Thương hiệu mạnh, hỗ trợ 200+ countries, dễ sử dụng</td>
                <td>Phí cao, trải nghiệm người dùng phức tạp, tỷ lệ chuyển đổi thấp</td>
                <td>3.4% + 0.30 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Việc chọn cổng thanh toán phù hợp phụ thuộc vào thị trường mục tiêu, yêu cầu kỹ thuật, và ngân sách của dự án.
        </p>
        <motion.img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
          alt="Payment Gateways Comparison"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
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
          Trước khi tích hợp thanh toán, hãy tạo một dự án Spring Boot cơ bản sử dụng Spring Initializr.
        </p>

        <h3>Bước 1: Tạo Project</h3>
        <p>
          Trong Spring Initializr, chọn:
        </p>
        <ul>
          <li><strong>Project:</strong> Maven</li>
          <li><strong>Spring Boot:</strong> 3.x</li>
          <li><strong>Dependencies:</strong> Spring Web, Spring Data JPA, H2 Database, Lombok</li>
        </ul>

        <h3>Bước 2: Thêm Dependencies cho Payment</h3>
        <p>
          Thêm dependencies cho VNPAY, Stripe, và PayPal trong <code>pom.xml</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Maven POM.xml - Payment Dependencies</div>
          <pre>
            <code>
{`<dependencies>
    <!-- Spring Boot Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Stripe -->
    <dependency>
        <groupId>com.stripe</groupId>
        <artifactId>stripe-java</artifactId>
        <version>26.3.0</version>
    </dependency>
    
    <!-- PayPal -->
    <dependency>
        <groupId>com.paypal.sdk</groupId>
        <artifactId>rest-api-sdk</artifactId>
        <version>1.14.0</version>
    </dependency>
    
    <!-- VNPAY (Custom dependency) -->
    <dependency>
        <groupId>com.vnpt</groupId>
        <artifactId>vnpay-java-sdk</artifactId>
        <version>1.0.0</version>
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

        <h3>Bước 3: Cấu hình Database</h3>
        <p>
          Tạo entity <code>Order</code> để lưu thông tin đơn hàng.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Order Entity</div>
          <pre>
            <code>
{`import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "orders")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String orderCode;
    private Double amount;
    private String status;
    private String paymentMethod;
    private String transactionId;
    
    @Column(name = "user_id")
    private Long userId;
    
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    private LocalDateTime updatedAt;
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
          <div className="language-label">Java - OrderRepository</div>
          <pre>
            <code>
{`import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByOrderCode(String orderCode);
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 4: Cấu hình Application Properties</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">application.properties</div>
          <pre>
            <code>
{`# H2 Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update

# VNPAY Configuration
vnpay.vnp_pay_url=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
vnpay.vnp_tmn_code=YOUR_VNPAY_TMN_CODE
vnpay.vnp_hash_secret=YOUR_VNPAY_HASH_SECRET
vnpay.vnp_return_url=http://localhost:8080/payment/vnpay/callback

# Stripe Configuration
stripe.api.key=sk_test_your_stripe_secret_key
stripe.webhook.secret=whsec_your_stripe_webhook_secret

# PayPal Configuration
paypal.client.id=your_paypal_client_id
paypal.client.secret=your_paypal_client_secret
paypal.mode=sandbox
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* VNPAY Integration */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tích hợp VNPAY cho thị trường Việt Nam</h2>
        <p>
          VNPAY là cổng thanh toán phổ biến nhất tại Việt Nam, hỗ trợ thanh toán qua ngân hàng, ví điện tử, và QR code. Dưới đây là cách tích hợp VNPAY vào Spring Boot.
        </p>

        <h3>Bước 1: Tạo Payment Service cho VNPAY</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - VNPayService</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.*;

@Service
public class VNPayService {

    @Value("\${vnpay.vnp_pay_url}")
    private String vnp_PayUrl;

  @Value("\${vnpay.vnp_tmn_code}")
    private String vnp_TmnCode;

@Value("\${vnpay.vnp_hash_secret}")
    private String vnp_HashSecret;

@Value("\${vnpay.vnp_return_url}")
    private String vnp_ReturnUrl;

    @Transactional
    public String createPaymentUrl(Order order) {
        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String vnp_TxnRef = order.getOrderCode();
        String vnp_IpAddr = getClientIp(); // Implement this method
        String vnp_CreateDate = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        String vnp_Amount = String.valueOf(order.getAmount() * 100); // VNPAY uses smallest unit
        String vnp_CurrCode = "VND";
        String vnp_BankCode = "NCB"; // Default bank
        String vnp_Locale = "vn";

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", vnp_Amount);
        vnp_Params.put("vnp_CurrCode", vnp_CurrCode);
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", "other");
        vnp_Params.put("vnp_Locale", vnp_Locale);
        vnp_Params.put("vnp_ReturnUrl", vnp_ReturnUrl);
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        // Sort parameters
        List<Map.Entry<String, String>> params = new ArrayList<>(vnp_Params.entrySet());
        params.sort(Map.Entry.comparingByKey());

        // Build secure hash
        StringBuilder signData = new StringBuilder();
        for (Map.Entry<String, String> entry : params) {
            if (entry.getValue() != null && entry.getValue().length() > 0) {
                signData.append(entry.getKey()).append('=').append(entry.getValue()).append('&');
            }
        }
        signData = new StringBuilder(signData.substring(0, signData.length() - 1));

        String vnp_SecureHash = hmacSHA512(signData.toString(), vnp_HashSecret);
        vnp_Params.put("vnp_SecureHash", vnp_SecureHash);

        // Build URL
        StringBuilder query = new StringBuilder();
        for (Map.Entry<String, String> entry : params) {
            if (entry.getValue() != null && entry.getValue().length() > 0) {
                query.append(URLEncoder.encode(entry.getKey(), StandardCharsets.UTF_8))
                     .append('=')
                     .append(URLEncoder.encode(entry.getValue(), StandardCharsets.UTF_8))
                     .append('&');
            }
        }
        query = new StringBuilder(query.substring(0, query.length() - 1));
        return vnp_PayUrl + "?" + query;
    }

    public boolean verifyPayment(Map<String, String> vnp_Params) {
        String vnp_HashSecret = this.vnp_HashSecret;
        String vnp_SecureHash = vnp_Params.get("vnp_SecureHash");
        vnp_Params.remove("vnp_SecureHashType");
        vnp_Params.remove("vnp_SecureHash");

        // Sort parameters
        List<Map.Entry<String, String>> params = new ArrayList<>(vnp_Params.entrySet());
        params.sort(Map.Entry.comparingByKey());

        StringBuilder signData = new StringBuilder();
        for (Map.Entry<String, String> entry : params) {
            if (entry.getValue() != null && entry.getValue().length() > 0) {
                signData.append(entry.getKey()).append('=').append(entry.getValue()).append('&');
            }
        }
        signData = new StringBuilder(signData.substring(0, signData.length() - 1));

        String signed = hmacSHA512(signData.toString(), vnp_HashSecret);
        return signed.equals(vnp_SecureHash);
    }

    private String hmacSHA512(final String key, final String data) {
        try {
            Mac hmac512 = Mac.getInstance("HmacSHA512");
            byte[] hmacKeyBytes = key.getBytes(StandardCharsets.UTF_8);
            final SecretKeySpec secretKey = new SecretKeySpec(hmacKeyBytes, "HmacSHA512");
            hmac512.init(secretKey);
            byte[] dataBytes = data.getBytes(StandardCharsets.UTF_8);
            byte[] result = hmac512.doFinal(dataBytes);
            StringBuilder sb = new StringBuilder(2 * result.length);
            for (byte b : result) {
                sb.append(String.format("%02x", b & 0xFF));
            }
            return sb.toString();
        } catch (Exception ex) {
            throw new RuntimeException("Error while generating hmacSHA512", ex);
        }
    }

    private String getClientIp() {
        // Implement to get client IP
        return "127.0.0.1";
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Tạo VNPAY Controller</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - VNPayController</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/payment/vnpay")
public class VNPayController {

    @Autowired
    private VNPayService vnpayService;

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createPayment(@RequestBody PaymentRequest request) {
        Order order = new Order();
        order.setOrderCode("ORDER_" + System.currentTimeMillis());
        order.setAmount(request.getAmount());
        order.setStatus("PENDING");
        order.setPaymentMethod("VNPAY");
        order.setUserId(request.getUserId());
        Order savedOrder = orderService.save(order);

        String paymentUrl = vnpayService.createPaymentUrl(savedOrder);
        Map<String, String> response = new HashMap<>();
        response.put("paymentUrl", paymentUrl);
        response.put("orderId", savedOrder.getId().toString());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/callback")
    public ResponseEntity<String> vnpayCallback(@RequestParam Map<String, String> allParams) {
        if (vnpayService.verifyPayment(allParams)) {
            String vnp_ResponseCode = allParams.get("vnp_ResponseCode");
            if ("00".equals(vnp_ResponseCode)) {
                String orderCode = allParams.get("vnp_TxnRef");
                Order order = orderService.findByOrderCode(orderCode).orElseThrow();
                order.setStatus("PAID");
                order.setTransactionId(allParams.get("vnp_TransactionNo"));
                orderService.save(order);
                return ResponseEntity.ok("Thanh toán thành công!");
            } else {
                return ResponseEntity.badRequest().body("Thanh toán thất bại!");
            }
        } else {
            return ResponseEntity.badRequest().body("Chữ ký không hợp lệ!");
        }
    }
}

class PaymentRequest {
    private Double amount;
    private Long userId;

    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Frontend Integration</h3>
        <p>
          Trong frontend, redirect người dùng đến URL thanh toán VNPAY.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">JavaScript - Frontend VNPAY</div>
          <pre>
            <code>
{`// JavaScript Frontend
async function createVNPayPayment(amount, userId) {
    try {
        const response = await fetch('/api/payment/vnpay/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount, userId })
        });

        const data = await response.json();
        if (data.paymentUrl) {
            window.location.href = data.paymentUrl;
        }
    } catch (error) {
        console.error('Lỗi tạo thanh toán VNPAY:', error);
    }
}

// Gọi hàm khi người dùng click thanh toán
document.getElementById('vnpay-btn').addEventListener('click', () => {
    createVNPayPayment(100000, 123); // 100,000 VND cho user ID 123
});
`}
            </code>
          </pre>
        </motion.div>

        <h3>Xử lý Callback và Webhook</h3>
        <p>
          VNPAY sẽ redirect về URL callback sau khi thanh toán hoàn tất. Controller <code>/callback</code> xử lý kết quả và cập nhật trạng thái đơn hàng.
        </p>
      </motion.section>

      {/* Stripe Integration */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tích hợp Stripe cho thanh toán quốc tế</h2>
        <p>
          Stripe cung cấp API mạnh mẽ để xử lý thanh toán thẻ tín dụng và các phương thức thanh toán quốc tế khác. Dưới đây là cách tích hợp Stripe Checkout.
        </p>

        <h3>Bước 1: Tạo Stripe Service</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - StripeService</div>
          <pre>
            <code>
{`import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StripeService {

@Value("\${stripe.api.key}")
    private String stripeApiKey;

    public StripeService() {
        Stripe.apiKey = stripeApiKey;
    }

    @Transactional
    public String createPaymentIntent(Order order) {
        try {
            SessionCreateParams params = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}")
                .setCancelUrl("http://localhost:3000/cancel")
                .setPaymentMethodTypes(
                    SessionCreateParams.PaymentMethodTypes.builder()
                        .addAll(Arrays.asList(SessionCreateParams.PaymentMethodTypes.CARD))
                        .build()
                )
                .setLineItems(
                    Arrays.asList(
                        SessionCreateParams.LineItem.builder()
                            .setPriceData(
                                SessionCreateParams.LineItem.PriceData.builder()
                                    .setCurrency("usd")
                                    .setUnitAmount((long) (order.getAmount() * 100)) // USD cents
                                    .setProductData(
                                        SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                            .setName("Order #" + order.getOrderCode())
                                            .build()
                                    )
                                    .build()
                            )
                            .setQuantity(1L)
                            .build()
                    )
                )
                .build();

            Session session = Session.create(params);
            order.setTransactionId(session.getId());
            order.setStatus("PENDING");
            orderService.save(order);

            return session.getUrl();
        } catch (Exception e) {
            throw new RuntimeException("Lỗi tạo thanh toán Stripe: " + e.getMessage(), e);
        }
    }

    @PostMapping("/webhook")
    public ResponseEntity<String> handleStripeWebhook(@RequestBody String payload, 
                                                      @RequestHeader("Stripe-Signature") String signature) {
        try {
            Event event = Webhook.constructEvent(
                payload, signature, webhookSecret
            );

            if ("checkout.session.completed".equals(event.getType())) {
                CheckoutSession session = (CheckoutSession) event.getDataObjectDeserializer()
                    .getObject().get();

                String sessionId = session.getId();
                Order order = orderService.findByTransactionId(sessionId).orElseThrow();
                order.setStatus("PAID");
                orderService.save(order);

                // Gửi email xác nhận, cập nhật inventory, etc.
            }

            return ResponseEntity.ok().build();
        } catch (SignatureVerificationException e) {
            return ResponseEntity.badRequest().body("Invalid signature");
        } catch (Exception e) {
            return ResponseEntity.status(400).body("Webhook error: " + e.getMessage());
        }
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Tạo Stripe Controller</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - StripeController</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment/stripe")
public class StripeController {

    @Autowired
    private StripeService stripeService;

    @PostMapping("/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(@RequestBody PaymentRequest request) {
        Order order = new Order();
        order.setOrderCode("STRIPE_" + System.currentTimeMillis());
        order.setAmount(request.getAmount() * 25000); // Convert VND to USD
        order.setStatus("PENDING");
        order.setPaymentMethod("STRIPE");
        order.setUserId(request.getUserId());
        Order savedOrder = orderService.save(order);

        String checkoutUrl;
        try {
            checkoutUrl = stripeService.createPaymentIntent(savedOrder);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }

        Map<String, String> response = new HashMap<>();
        response.put("checkoutUrl", checkoutUrl);
        response.put("orderId", savedOrder.getId().toString());

        return ResponseEntity.ok(response);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Frontend Integration cho Stripe</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">JavaScript - Frontend Stripe</div>
          <pre>
            <code>
{`// JavaScript Frontend using Stripe.js
const stripe = Stripe('pk_test_your_stripe_publishable_key');

async function createStripePayment(amount, userId) {
    try {
        const response = await fetch('/api/payment/stripe/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                amount: amount / 25000, // Convert VND to USD
                userId 
            })
        });

        const data = await response.json();
        if (data.checkoutUrl) {
            window.location.href = data.checkoutUrl;
        }
    } catch (error) {
        console.error('Lỗi tạo thanh toán Stripe:', error);
    }
}

// Xử lý callback thành công
if (window.location.search.includes('session_id')) {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    
    // Verify payment on backend
    fetch('/api/payment/stripe/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId })
    }).then(response => {
        if (response.ok) {
            alert('Thanh toán thành công!');
            window.location.href = '/order-success';
        }
    });
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Xử lý Stripe Webhook</h3>
        <p>
          Stripe gửi webhook đến endpoint <code>/webhook</code> để thông báo sự kiện thanh toán. Controller xác thực signature và cập nhật trạng thái đơn hàng.
        </p>
      </motion.section>

      {/* PayPal Integration */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tích hợp PayPal cho thanh toán toàn cầu</h2>
        <p>
          PayPal hỗ trợ thanh toán qua tài khoản PayPal và thẻ tín dụng với phạm vi toàn cầu. Dưới đây là cách tích hợp PayPal REST API.
        </p>

        <h3>Bước 1: Tạo PayPal Service</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - PayPalService</div>
          <pre>
            <code>
{`import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class PayPalService {

@Value("\${paypal.client.id}")
    private String clientId;

@Value("\${paypal.client.secret}")
    private String clientSecret;

    @Value("\${paypal.mode}")
    private String mode;

    private APIContext apiContext;

    @PostConstruct
    public void init() {
        apiContext = new APIContext(clientId, clientSecret, mode);
    }

    @Transactional
    public String createPayment(Order order) throws PayPalRESTException {
        Amount amount = new Amount();
        amount.setCurrency("USD");
        amount.setTotal(String.format("%.2f", order.getAmount() / 25000.0)); // Convert VND to USD

        Transaction transaction = new Transaction();
        transaction.setDescription("Payment for Order #" + order.getOrderCode());
        transaction.setAmount(amount);

        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);

        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(new Payer());
        payment.setTransactions(transactions);

        Payment createdPayment = payment.create(apiContext);

        if (createdPayment.getState().equals("created")) {
            order.setTransactionId(createdPayment.getId());
            order.setStatus("PENDING");
            orderService.save(order);

            PaymentExecution paymentExecution = new PaymentExecution();
            paymentExecution.setPayerId(createdPayment.getPayer().getPaymentMethod());
            Payment executedPayment = createdPayment.execute(apiContext, paymentExecution);

            if (executedPayment.getState().equals("approved")) {
                order.setStatus("PAID");
                orderService.save(order);
                return executedPayment.getId();
            }
        }

        throw new RuntimeException("Payment failed");
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 2: Tạo PayPal Controller</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - PayPalController</div>
          <pre>
            <code>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment/paypal")
public class PayPalController {

    @Autowired
    private PayPalService payPalService;

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createPayPalPayment(@RequestBody PaymentRequest request) {
        Order order = new Order();
        order.setOrderCode("PAYPAL_" + System.currentTimeMillis());
        order.setAmount(request.getAmount());
        order.setStatus("PENDING");
        order.setPaymentMethod("PAYPAL");
        order.setUserId(request.getUserId());
        Order savedOrder = orderService.save(order);

        try {
            String paymentId = payPalService.createPayment(savedOrder);
            Map<String, String> response = new HashMap<>();
            response.put("paymentId", paymentId);
            response.put("orderId", savedOrder.getId().toString());
            response.put("approvalUrl", "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=" + paymentId);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/success")
    public ResponseEntity<String> paymentSuccess(@RequestParam("paymentId") String paymentId,
                                                 @RequestParam("PayerID") String payerId) {
        // Verify payment with PayPal
        try {
            Payment payment = new Payment();
            payment.setId(paymentId);
            Payment executedPayment = payment.execute(apiContext, new PaymentExecution().setPayerId(payerId));

            if (executedPayment.getState().equals("approved")) {
                Order order = orderService.findByTransactionId(paymentId).orElseThrow();
                order.setStatus("PAID");
                orderService.save(order);
                return ResponseEntity.ok("Thanh toán PayPal thành công!");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Xác thực thanh toán thất bại!");
        }
        return ResponseEntity.ok("Thanh toán thành công!");
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Bước 3: Frontend Integration cho PayPal</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">JavaScript - Frontend PayPal</div>
          <pre>
            <code>
{`// JavaScript Frontend
async function createPayPalPayment(amount, userId) {
    try {
        const response = await fetch('/api/payment/paypal/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount, userId })
        });

        const data = await response.json();
        if (data.approvalUrl) {
            window.location.href = data.approvalUrl;
        }
    } catch (error) {
        console.error('Lỗi tạo thanh toán PayPal:', error);
    }
}

// Xử lý callback thành công
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('paymentId') && urlParams.has('PayerID')) {
    const paymentId = urlParams.get('paymentId');
    const payerId = urlParams.get('PayerID');
    
window.location.href = '/api/payment/paypal/success?paymentId=' + paymentId + '&PayerID=' + payerId;

`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Best Practices cho tích hợp thanh toán</h2>
        <p>
          Tích hợp thanh toán yêu cầu chú ý đặc biệt đến bảo mật và trải nghiệm người dùng. Dưới đây là các best practices quan trọng:
        </p>

        <h3>1. Bảo mật thông tin thanh toán</h3>
        <ul>
          <li><strong>Không lưu thông tin thẻ:</strong> Sử dụng tokenization của Stripe/PayPal để tránh lưu thông tin thẻ.</li>
          <li><strong>HTTPS chỉ:</strong> Tất cả API endpoints thanh toán phải sử dụng HTTPS.</li>
          <li><strong>PCI DSS compliance:</strong> Tuân thủ chuẩn PCI DSS cho xử lý thẻ tín dụng.</li>
          <li><strong>Webhook verification:</strong> Luôn xác thực signature của webhook từ payment gateway.</li>
        </ul>

        <h3>2. Xử lý lỗi và retry</h3>
        <ul>
          <li><strong>Idempotency keys:</strong> Sử dụng idempotency key để tránh thanh toán trùng lặp.</li>
          <li><strong>Timeout handling:</strong> Implement timeout và retry logic cho API calls.</li>
          <li><strong>Error logging:</strong> Log tất cả lỗi thanh toán với đầy đủ thông tin để debug.</li>
        </ul>

        <h3>3. Trải nghiệm người dùng</h3>
        <ul>
          <li><strong>Loading states:</strong> Hiển thị loading khi xử lý thanh toán.</li>
          <li><strong>Error messages:</strong> Hiển thị thông báo lỗi rõ ràng, không leak thông tin nhạy cảm.</li>
          <li><strong>Success confirmation:</strong> Xác nhận thanh toán thành công và cập nhật UI ngay lập tức.</li>
          <li><strong>Multiple payment methods:</strong> Cho phép chọn phương thức thanh toán phù hợp.</li>
        </ul>

        <h3>4. Monitoring và analytics</h3>
        <ul>
          <li><strong>Payment metrics:</strong> Theo dõi tỷ lệ thành công, thời gian xử lý, lỗi phổ biến.</li>
          <li><strong>Fraud detection:</strong> Implement cơ chế phát hiện gian lận (Stripe Radar, PayPal Fraud Protection).</li>
          <li><strong>Refund processing:</strong> Xử lý hoàn tiền tự động và thông báo cho khách hàng.</li>
        </ul>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Idempotency Key</div>
          <pre>
            <code>
{`@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @PostMapping("/charge")
    public ResponseEntity<?> createCharge(@RequestBody ChargeRequest request, 
                                          @RequestHeader("Idempotency-Key") String idempotencyKey) {
        // Kiểm tra idempotency key trong cache/database
        if (isProcessed(idempotencyKey)) {
            return ResponseEntity.ok(getPreviousResponse(idempotencyKey));
        }

        try {
            // Xử lý thanh toán
            Charge charge = stripeService.createCharge(request);
            
            // Lưu response với idempotency key
            saveResponse(idempotencyKey, charge);
            
            return ResponseEntity.ok(charge);
        } catch (Exception e) {
            saveErrorResponse(idempotencyKey, e);
            return ResponseEntity.status(500).body("Payment failed");
        }
    }

    private boolean isProcessed(String idempotencyKey) {
        // Implement cache/database check
        return false;
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Testing Payment Integration */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Testing và triển khai thanh toán</h2>
        <p>
          Testing là bước quan trọng để đảm bảo hệ thống thanh toán hoạt động đúng. Dưới đây là cách test từng cổng thanh toán.
        </p>

        <h3>1. Testing VNPAY</h3>
        <ul>
          <li><strong>Sandbox mode:</strong> Sử dụng môi trường sandbox của VNPAY với test credentials.</li>
          <li><strong>Test cases:</strong> Success, failure, timeout, duplicate payment.</li>
          <li><strong>Callback verification:</strong> Test callback URL với Postman hoặc curl.</li>
        </ul>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Bash - Test VNPAY Callback</div>
          <pre>
            <code>
{`# Test VNPAY callback với curl
curl -X GET "http://localhost:8080/api/payment/vnpay/callback?vnp_Amount=1000000&vnp_ResponseCode=00&vnp_TxnRef=ORDER123&vnp_SecureHash=calculated_hash"

# Test với Postman
POST http://localhost:8080/api/payment/vnpay/callback
Headers: Content-Type: application/x-www-form-urlencoded
Body:
  vnp_Amount: 1000000
  vnp_ResponseCode: 00
  vnp_TxnRef: ORDER123
  vnp_SecureHash: your_calculated_hash
`}
            </code>
          </pre>
        </motion.div>

        <h3>2. Testing Stripe</h3>
        <ul>
          <li><strong>Test cards:</strong> Sử dụng test card numbers như <code>4242 4242 4242 4242</code> (success), <code>4000 0000 0000 0002</code> (declined).</li>
          <li><strong>Webhook testing:</strong> Sử dụng Stripe CLI để simulate webhook events.</li>
          <li><code>stripe listen --forward-to localhost:8080/api/payment/stripe/webhook</code></li>
        </ul>

        <h3>3. Testing PayPal</h3>
        <ul>
          <li><strong>Sandbox accounts:</strong> Tạo buyer/seller sandbox accounts trên PayPal Developer.</li>
          <li><strong>Test transactions:</strong> Sử dụng PayPal sandbox để test full payment flow.</li>
          <li><strong>IPN testing:</strong> Configure Instant Payment Notification (IPN) for testing.</li>
        </ul>

        <h3>4. Integration Testing với Spring Boot</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Payment Integration Test</div>
          <pre>
            <code>
{`import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PaymentIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testVNPayPaymentFlow() {
        PaymentRequest request = new PaymentRequest();
        request.setAmount(100000.0);
        request.setUserId(1L);

        ResponseEntity<Map> response = restTemplate.postForEntity(
            "/api/payment/vnpay/create", request, Map.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        Map<String, String> body = response.getBody();
        assertTrue(body.containsKey("paymentUrl"));
        assertTrue(body.get("paymentUrl").startsWith("https://sandbox.vnpayment.vn"));
    }

    @Test
    public void testStripePaymentCreation() {
        PaymentRequest request = new PaymentRequest();
        request.setAmount(100000.0);
        request.setUserId(1L);

        ResponseEntity<Map> response = restTemplate.postForEntity(
            "/api/payment/stripe/create-checkout-session", request, Map.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        Map<String, String> body = response.getBody();
        assertTrue(body.containsKey("checkoutUrl"));
        assertTrue(body.get("checkoutUrl").startsWith("https://checkout.stripe.com"));
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>5. Production Deployment Checklist</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>SSL Certificate:</strong> Đảm bảo tất cả endpoints sử dụng HTTPS.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Payment Gateway Production:</strong> Chuyển sang production credentials và URL.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Webhook Security:</strong> Configure webhook endpoints với authentication.
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <strong>Monitoring:</strong> Set up monitoring cho payment failures và timeouts.
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <strong>Compliance:</strong> Đảm bảo tuân thủ PCI DSS và GDPR cho dữ liệu thanh toán.
          </div>
        </div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
        className="cta-section"
      >
        <h2>🚀 Kết luận: Xây dựng hệ thống thanh toán hoàn chỉnh</h2>
        <p>
          Tích hợp thanh toán vào ứng dụng Spring Boot mở ra cơ hội thương mại hóa và mở rộng doanh thu cho dự án của bạn. Với VNPAY cho thị trường Việt Nam, Stripe cho thanh toán quốc tế, và PayPal cho phạm vi toàn cầu, bạn có thể tạo ra một hệ thống thanh toán đa dạng và linh hoạt.
        </p>
        <p>
          Hãy bắt đầu với môi trường sandbox để test kỹ lưỡng, sau đó triển khai production với các best practices về bảo mật và monitoring. Đừng quên xử lý lỗi một cách graceful và cung cấp trải nghiệm người dùng mượt mà cho khách hàng.
        </p>
        <p>
          Nếu bạn cần hỗ trợ thêm về tích hợp thanh toán, tối ưu hóa performance, hoặc xử lý các trường hợp edge case phức tạp, hãy liên hệ để được tư vấn chi tiết. Chúc bạn thành công với việc xây dựng hệ thống thanh toán mạnh mẽ và an toàn!
        </p>
        <a href="/contact">👋 Liên hệ tư vấn miễn phí</a>
      </motion.section>

      <motion.img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
        alt="Payment Success"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
    </div>
  );
}