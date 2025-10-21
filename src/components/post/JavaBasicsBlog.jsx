import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function JavaBasicsBlog() {
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
      behavior: "smooth"
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
        <h1>Giới thiệu về các kiểu dữ liệu, biến và vòng lặp trong Java</h1>
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
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
          alt="Java Basics"
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
        <h2>Giới thiệu về các khái niệm cơ bản trong Java</h2>
        <p>
          Java là một ngôn ngữ lập trình mạnh mẽ và phổ biến, được sử dụng rộng rãi trong nhiều loại ứng dụng. Để bắt đầu học Java, bạn cần nắm vững các khái niệm cơ bản như <strong>kiểu dữ liệu</strong>, <strong>biến</strong>, và <strong>vòng lặp</strong>. Những khái niệm này là nền tảng để xây dựng các chương trình Java hiệu quả.
        </p>
        <p>
          Trong bài viết này, chúng ta sẽ tìm hiểu:
        </p>
        <ul>
          <li>Các kiểu dữ liệu nguyên thủy và tham chiếu trong Java.</li>
          <li>Cách khai báo và sử dụng biến.</li>
          <li>Các loại vòng lặp (for, while, do-while) và cách áp dụng chúng.</li>
          <li>Ví dụ thực tế và best practices cho người mới bắt đầu.</li>
        </ul>
        <p>
          Bài viết được thiết kế dành cho người mới học Java, với các ví dụ mã nguồn dễ hiểu và các giải thích chi tiết.
        </p>
      </motion.section>

      {/* Data Types */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Các kiểu dữ liệu trong Java</h2>
        <p>
          Java có hai loại kiểu dữ liệu chính: <strong>nguyên thủy (primitive)</strong> và <strong>tham chiếu (reference)</strong>. Dưới đây là tổng quan về các kiểu dữ liệu:
        </p>

        <h3>1. Kiểu dữ liệu nguyên thủy</h3>
        <p>
          Java cung cấp 8 kiểu dữ liệu nguyên thủy, được sử dụng để lưu trữ các giá trị cơ bản:
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Kiểu dữ liệu</th>
                <th>Kích thước</th>
                <th>Giá trị mặc định</th>
                <th>Phạm vi</th>
                <th>Ví dụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>byte</code></td>
                <td>1 byte</td>
                <td>0</td>
                <td>-128 đến 127</td>
                <td><code>byte age = 25;</code></td>
              </tr>
              <tr>
                <td><code>short</code></td>
                <td>2 bytes</td>
                <td>0</td>
                <td>-32,768 đến 32,767</td>
                <td><code>short salary = 30000;</code></td>
              </tr>
              <tr>
                <td><code>int</code></td>
                <td>4 bytes</td>
                <td>0</td>
                <td>-2^31 đến 2^31-1</td>
                <td><code>int count = 100;</code></td>
              </tr>
              <tr>
                <td><code>long</code></td>
                <td>8 bytes</td>
                <td>0L</td>
                <td>-2^63 đến 2^63-1</td>
                <td><code>long distance = 123456789L;</code></td>
              </tr>
              <tr>
                <td><code>float</code></td>
                <td>4 bytes</td>
                <td>0.0f</td>
                <td>Số thực chính xác đơn</td>
                <td><code>float price = 19.99f;</code></td>
              </tr>
              <tr>
                <td><code>double</code></td>
                <td>8 bytes</td>
                <td>0.0d</td>
                <td>Số thực chính xác kép</td>
                <td><code>double pi = 3.14159;</code></td>
              </tr>
              <tr>
                <td><code>char</code></td>
                <td>2 bytes</td>
                <td>''</td>
                <td>Ký tự Unicode</td>
                <td><code>char letter = 'A';</code></td>
              </tr>
              <tr>
                <td><code>boolean</code></td>
                <td>1 bit</td>
                <td>false</td>
                <td>true/false</td>
                <td><code>boolean isActive = true;</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. Kiểu dữ liệu tham chiếu</h3>
        <p>
          Kiểu dữ liệu tham chiếu lưu trữ địa chỉ của các đối tượng, ví dụ: <code>String</code>, <code>Array</code>, hoặc các lớp tùy chỉnh. Giá trị mặc định là <code>null</code>.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Data Types Example</div>
          <pre>
            <code>
{`public class DataTypesExample {
    public static void main(String[] args) {
        // Kiểu nguyên thủy
        int age = 25;
        double salary = 50000.75;
        char grade = 'A';
        boolean isEmployed = true;

        // Kiểu tham chiếu
        String name = "Alice";
        int[] numbers = {1, 2, 3};

        System.out.println("Name: " + name + ", Age: " + age);
        System.out.println("Salary: " + salary + ", Grade: " + grade);
        System.out.println("Employed: " + isEmployed);
        System.out.println("Numbers: " + java.util.Arrays.toString(numbers));
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Variables */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Biến trong Java</h2>
        <p>
          Biến là nơi lưu trữ dữ liệu trong chương trình. Mỗi biến có một <strong>kiểu dữ liệu</strong> và một <strong>tên</strong>. Java có ba loại biến chính:
        </p>
        <ul>
          <li><strong>Biến instance:</strong> Thuộc về đối tượng, được khai báo trong lớp, có giá trị mặc định.</li>
          <li><strong>Biến static:</strong> Thuộc về lớp, được khai báo với từ khóa <code>static</code>, chia sẻ giữa các đối tượng.</li>
          <li><strong>Biến local:</strong> Được khai báo trong phương thức, không có giá trị mặc định, phải khởi tạo trước khi sử dụng.</li>
        </ul>

        <h3>Ví dụ về biến</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Variables Example</div>
          <pre>
            <code>
{`public class VariablesExample {
    // Biến instance
    int instanceVariable = 10;

    // Biến static
    static int staticVariable = 20;

    public static void main(String[] args) {
        // Biến local
        int localVariable = 30;

        VariablesExample example = new VariablesExample();
        System.out.println("Instance Variable: " + example.instanceVariable);
        System.out.println("Static Variable: " + staticVariable);
        System.out.println("Local Variable: " + localVariable);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Best Practices cho biến</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Đặt tên ý nghĩa:</strong> Sử dụng tên biến mô tả rõ ràng, ví dụ: <code>age</code>, <code>studentName</code>.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Khởi tạo biến local:</strong> Luôn khởi tạo giá trị cho biến local trước khi sử dụng.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Sử dụng final:</strong> Dùng từ khóa <code>final</code> cho biến không thay đổi giá trị.
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Final Variable</div>
          <pre>
            <code>
{`public class FinalVariableExample {
    public static void main(String[] args) {
        final double PI = 3.14159; // Hằng số
        System.out.println("PI: " + PI);
        // PI = 3.14; // Lỗi biên dịch: không thể thay đổi giá trị final
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Loops */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Vòng lặp trong Java</h2>
        <p>
          Vòng lặp cho phép thực thi một khối mã nhiều lần. Java cung cấp ba loại vòng lặp chính: <code>for</code>, <code>while</code>, và <code>do-while</code>.
        </p>

        <h3>1. Vòng lặp for</h3>
        <p>
          Vòng lặp <code>for</code> được sử dụng khi biết trước số lần lặp.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - For Loop</div>
          <pre>
            <code>
{`public class ForLoopExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Lần lặp thứ " + i);
        }
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>2. Vòng lặp while</h3>
        <p>
          Vòng lặp <code>while</code> thực thi khi điều kiện đúng, phù hợp khi số lần lặp không xác định.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - While Loop</div>
          <pre>
            <code>
{`public class WhileLoopExample {
    public static void main(String[] args) {
        int count = 1;
        while (count <= 5) {
            System.out.println("Lần lặp thứ " + count);
            count++;
        }
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>3. Vòng lặp do-while</h3>
        <p>
          Vòng lặp <code>do-while</code> đảm bảo khối mã được thực thi ít nhất một lần trước khi kiểm tra điều kiện.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Do-While Loop</div>
          <pre>
            <code>
{`public class DoWhileLoopExample {
    public static void main(String[] args) {
        int count = 1;
        do {
            System.out.println("Lần lặp thứ " + count);
            count++;
        } while (count <= 5);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>4. Vòng lặp for-each</h3>
        <p>
          Vòng lặp <code>for-each</code> được sử dụng để duyệt qua mảng hoặc collection.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - For-Each Loop</div>
          <pre>
            <code>
{`public class ForEachLoopExample {
    public static void main(String[] args) {
        String[] names = {"Alice", "Bob", "Charlie"};
        for (String name : names) {
            System.out.println("Name: " + name);
        }
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Khi nào sử dụng vòng lặp nào?</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>For:</strong> Khi biết trước số lần lặp, ví dụ: duyệt mảng, đếm từ 1 đến 10.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>While:</strong> Khi số lần lặp phụ thuộc vào điều kiện, ví dụ: đọc dữ liệu đến khi hết.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Do-While:</strong> Khi cần thực thi ít nhất một lần, ví dụ: hiển thị menu cho người dùng.
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <strong>For-Each:</strong> Khi duyệt qua mảng hoặc collection mà không cần chỉ số.
          </div>
        </div>
      </motion.section>

      {/* Real-world Example */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Ví dụ thực tế: Tính tổng điểm của sinh viên</h2>
        <p>
          Dưới đây là một ví dụ sử dụng các kiểu dữ liệu, biến, và vòng lặp để tính tổng điểm của một danh sách sinh viên.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Student Scores</div>
          <pre>
            <code>
{`public class StudentScores {
    public static void main(String[] args) {
        // Kiểu dữ liệu tham chiếu (mảng)
        double[] scores = {85.5, 90.0, 78.5, 92.0};
        // Biến local
        double total = 0.0;
        int count = 0;

        // Vòng lặp for-each
        for (double score : scores) {
            total += score;
            count++;
        }

        // Tính trung bình
        double average = total / count;

        // In kết quả
        System.out.println("Tổng điểm: " + total);
        System.out.println("Điểm trung bình: " + average);
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Trong ví dụ này, chúng ta sử dụng mảng (<code>double[]</code>) để lưu điểm, biến local (<code>total</code>, <code>count</code>) để tính toán, và vòng lặp <code>for-each</code> để duyệt qua mảng.
        </p>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Best Practices cho người mới bắt đầu</h2>
        <p>
          Để sử dụng kiểu dữ liệu, biến, và vòng lặp hiệu quả, hãy tuân theo các best practices sau:
        </p>
        <ul>
          <li><strong>Chọn kiểu dữ liệu phù hợp:</strong> Sử dụng <code>int</code> cho số nguyên nhỏ, <code>long</code> cho số lớn, <code>double</code> cho số thực chính xác.</li>
          <li><strong>Đặt tên biến rõ ràng:</strong> Sử dụng tên mô tả chức năng, ví dụ: <code>studentCount</code> thay vì <code>n</code>.</li>
          <li><strong>Tránh lặp vô hạn:</strong> Đảm bảo vòng lặp có điều kiện thoát, ví dụ: tăng biến đếm trong <code>while</code>.</li>
          <li><strong>Sử dụng for-each khi có thể:</strong> Vòng lặp <code>for-each</code> giúp mã ngắn gọn và dễ đọc khi duyệt collection.</li>
        </ul>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Avoiding Infinite Loop</div>
          <pre>
            <code>
{`public class AvoidInfiniteLoop {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) { // Điều kiện thoát
            System.out.println("Lần lặp thứ " + i);
            i++; // Tăng biến đếm
        }
        // Nếu quên i++, vòng lặp sẽ chạy vô hạn
    }
}
`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="cta-section"
      >
        <h2>🚀 Kết luận: Nắm vững nền tảng Java</h2>
        <p>
          Các kiểu dữ liệu, biến, và vòng lặp là những khối xây dựng cơ bản của lập trình Java. Hiểu rõ cách sử dụng chúng sẽ giúp bạn viết mã hiệu quả và dễ đọc. Bắt đầu với các kiểu dữ liệu nguyên thủy như <code>int</code>, <code>double</code>, sử dụng biến với tên ý nghĩa, và chọn vòng lặp phù hợp với nhu cầu của bạn.
        </p>
        <p>
          Nếu bạn muốn học thêm về Java hoặc cần hỗ trợ xây dựng các chương trình phức tạp hơn, hãy tiếp tục theo dõi blog hoặc liên hệ để được tư vấn chi tiết. Chúc bạn thành công trên hành trình học lập trình Java!
        </p>
        <a href="/contact">👋 Liên hệ tư vấn miễn phí</a>
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