import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function JavaCollectionsBlog() {
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
        <h1>Các Collection trong Java (List, Set, Map) – Khi nào nên dùng loại nào?</h1>
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
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
          alt="Java Collections"
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
        <h2>Giới thiệu về Java Collections Framework</h2>
        <p>
          Java Collections Framework là một phần quan trọng của Java, cung cấp các cấu trúc dữ liệu như <strong>List</strong>, <strong>Set</strong>, và <strong>Map</strong> để lưu trữ và quản lý dữ liệu một cách hiệu quả. Mỗi loại collection có đặc điểm riêng, phù hợp với các tình huống cụ thể trong lập trình.
        </p>
        <p>
          Trong bài viết này, chúng ta sẽ tìm hiểu về ba loại collection chính trong Java: List, Set, và Map. Bạn sẽ học cách:
        </p>
        <ul>
          <li>Hiểu đặc điểm và cách sử dụng của List, Set, và Map.</li>
          <li>So sánh các implementation phổ biến (ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap).</li>
          <li>Áp dụng chúng vào các tình huống thực tế với ví dụ mã nguồn.</li>
          <li>Best practices để chọn collection phù hợp và tối ưu hiệu suất.</li>
        </ul>
        <p>
          Bài viết sẽ cung cấp hướng dẫn chi tiết, các ví dụ thực tế, và bảng so sánh để giúp bạn quyết định khi nào nên sử dụng loại collection nào.
        </p>
      </motion.section>

      {/* Collections Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Tổng quan về List, Set, và Map</h2>
        <p>
          Java Collections Framework nằm trong gói <code>java.util</code> và cung cấp các interface và class để xử lý tập hợp dữ liệu. Dưới đây là đặc điểm chính của từng loại collection:
        </p>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Collection</th>
                <th>Mô tả</th>
                <th>Đặc điểm</th>
                <th>Implementation phổ biến</th>
                <th>Khi nào sử dụng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>List</strong></td>
                <td>Danh sách có thứ tự</td>
                <td>Cho phép trùng lặp, truy cập theo index</td>
                <td>ArrayList, LinkedList</td>
                <td>Lưu trữ dữ liệu có thứ tự, cần truy cập nhanh theo vị trí</td>
              </tr>
              <tr>
                <td><strong>Set</strong></td>
                <td>Tập hợp không trùng lặp</td>
                <td>Không cho phép phần tử trùng, không có index</td>
                <td>HashSet, TreeSet, LinkedHashSet</td>
                <td>Cần tập hợp dữ liệu duy nhất, không quan tâm thứ tự hoặc cần sắp xếp</td>
              </tr>
              <tr>
                <td><strong>Map</strong></td>
                <td>Bản đồ key-value</td>
                <td>Lưu trữ cặp key-value, key không trùng lặp</td>
                <td>HashMap, TreeMap, LinkedHashMap</td>
                <td>Cần ánh xạ dữ liệu, tra cứu nhanh theo key</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Hiểu rõ đặc điểm của từng loại collection sẽ giúp bạn chọn đúng cấu trúc dữ liệu cho ứng dụng của mình.
        </p>
        <motion.img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
          alt="Java Collections Diagram"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* List in Java */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>List trong Java</h2>
        <p>
          <strong>List</strong> là một collection có thứ tự, cho phép lưu trữ các phần tử trùng lặp và truy cập chúng thông qua chỉ số (index). Các implementation phổ biến bao gồm:
        </p>
        <ul>
          <li><strong>ArrayList:</strong> Dựa trên mảng động, hiệu quả cho truy cập ngẫu nhiên và thêm/xóa ở cuối danh sách.</li>
          <li><strong>LinkedList:</strong> Dựa trên danh sách liên kết đôi, hiệu quả cho thêm/xóa ở đầu hoặc giữa danh sách.</li>
        </ul>

        <h3>Ví dụ sử dụng ArrayList</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - ArrayList Example</div>
          <pre>
            <code>
{`import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Alice"); // Cho phép trùng lặp

        System.out.println("Names: " + names);
        System.out.println("First name: " + names.get(0));
        names.remove(1); // Xóa Bob
        System.out.println("After removal: " + names);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Khi nào sử dụng List?</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Cần thứ tự:</strong> Khi bạn cần duy trì thứ tự thêm vào của các phần tử.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Truy cập theo index:</strong> Khi cần truy cập nhanh phần tử tại vị trí cụ thể.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Cho phép trùng lặp:</strong> Khi dữ liệu có thể chứa các phần tử giống nhau.
          </div>
        </div>
        <p>
          <strong>ArrayList</strong> thường là lựa chọn mặc định do hiệu suất tốt trong hầu hết các trường hợp, trong khi <strong>LinkedList</strong> phù hợp hơn khi cần thao tác chèn/xóa thường xuyên ở giữa danh sách.
        </p>
      </motion.section>

      {/* Set in Java */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Set trong Java</h2>
        <p>
          <strong>Set</strong> là một collection không cho phép phần tử trùng lặp, không duy trì thứ tự (trừ <code>LinkedHashSet</code> và <code>TreeSet</code>). Các implementation phổ biến bao gồm:
        </p>
        <ul>
          <li><strong>HashSet:</strong> Dựa trên bảng băm, cung cấp hiệu suất O(1) cho thêm, xóa, và kiểm tra phần tử.</li>
          <li><strong>TreeSet:</strong> Dựa trên cây đỏ-đen, giữ các phần tử theo thứ tự (tự nhiên hoặc tùy chỉnh).</li>
          <li><strong>LinkedHashSet:</strong> Kết hợp bảng băm và danh sách liên kết, duy trì thứ tự thêm vào.</li>
        </ul>

        <h3>Ví dụ sử dụng HashSet</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - HashSet Example</div>
          <pre>
            <code>
{`import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> uniqueNames = new HashSet<>();
        uniqueNames.add("Alice");
        uniqueNames.add("Bob");
        uniqueNames.add("Alice"); // Không thêm vì trùng lặp

        System.out.println("Unique names: " + uniqueNames);
        System.out.println("Contains Bob? " + uniqueNames.contains("Bob"));
        uniqueNames.remove("Alice");
        System.out.println("After removal: " + uniqueNames);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Khi nào sử dụng Set?</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Đảm bảo không trùng lặp:</strong> Khi bạn cần một tập hợp các phần tử duy nhất.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Hiệu suất tìm kiếm:</strong> Khi cần kiểm tra sự tồn tại của phần tử nhanh chóng (HashSet).
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Sắp xếp tự động:</strong> Khi cần giữ các phần tử theo thứ tự (TreeSet).
          </div>
        </div>
        <p>
          <strong>HashSet</strong> là lựa chọn tốt nhất cho hiệu suất, <strong>TreeSet</strong> phù hợp khi cần sắp xếp, và <strong>LinkedHashSet</strong> khi cần duy trì thứ tự thêm vào.
        </p>
      </motion.section>

      {/* Map in Java */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Map trong Java</h2>
        <p>
          <strong>Map</strong> lưu trữ dữ liệu dưới dạng cặp key-value, với key không trùng lặp. Các implementation phổ biến bao gồm:
        </p>
        <ul>
          <li><strong>HashMap:</strong> Dựa trên bảng băm, cung cấp hiệu suất O(1) cho tra cứu, thêm, xóa.</li>
          <li><strong>TreeMap:</strong> Dựa trên cây đỏ-đen, giữ các key theo thứ tự.</li>
          <li><strong>LinkedHashMap:</strong> Kết hợp bảng băm và danh sách liên kết, duy trì thứ tự thêm vào.</li>
        </ul>

        <h3>Ví dụ sử dụng HashMap</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - HashMap Example</div>
          <pre>
            <code>
{`import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95);
        scores.put("Bob", 80);
        scores.put("Alice", 90); // Ghi đè giá trị cũ

        System.out.println("Scores: " + scores);
        System.out.println("Alice's score: " + scores.get("Alice"));
        scores.remove("Bob");
        System.out.println("After removal: " + scores);
    }
}
`}
            </code>
          </pre>
        </motion.div>

        <h3>Khi nào sử dụng Map?</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <strong>Ánh xạ key-value:</strong> Khi cần liên kết dữ liệu với một khóa duy nhất.
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>Tra cứu nhanh:</strong> Khi cần truy xuất giá trị nhanh dựa trên key.
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>Sắp xếp key:</strong> Khi cần giữ các key theo thứ tự (TreeMap).
          </div>
        </div>
        <p>
          <strong>HashMap</strong> là lựa chọn mặc định cho hiệu suất, <strong>TreeMap</strong> khi cần sắp xếp key, và <strong>LinkedHashMap</strong> khi cần duy trì thứ tự thêm vào.
        </p>
      </motion.section>

      {/* Performance Considerations */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Hiệu suất và Best Practices</h2>
        <p>
          Việc chọn đúng collection không chỉ dựa trên chức năng mà còn dựa trên hiệu suất và yêu cầu cụ thể của ứng dụng. Dưới đây là một số mẹo để tối ưu hóa:
        </p>

        <h3>1. Hiệu suất của các Implementation</h3>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Collection</th>
                <th>Thêm (Add)</th>
                <th>Xóa (Remove)</th>
                <th>Tra cứu (Get/Contains)</th>
                <th>Sắp xếp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ArrayList</strong></td>
                <td>O(1) (cuối), O(n) (giữa)</td>
                <td>O(n)</td>
                <td>O(1) (theo index)</td>
                <td>Không tự động</td>
              </tr>
              <tr>
                <td><strong>LinkedList</strong></td>
                <td>O(1) (đầu/cuối), O(n) (giữa)</td>
                <td>O(1) (đầu/cuối), O(n) (giữa)</td>
                <td>O(n)</td>
                <td>Không tự động</td>
              </tr>
              <tr>
                <td><strong>HashSet</strong></td>
                <td>O(1)</td>
                <td>O(1)</td>
                <td>O(1)</td>
                <td>Không tự động</td>
              </tr>
              <tr>
                <td><strong>TreeSet</strong></td>
                <td>O(log n)</td>
                <td>O(log n)</td>
                <td>O(log n)</td>
                <td>Tự động</td>
              </tr>
              <tr>
                <td><strong>HashMap</strong></td>
                <td>O(1)</td>
                <td>O(1)</td>
                <td>O(1)</td>
                <td>Không tự động</td>
              </tr>
              <tr>
                <td><strong>TreeMap</strong></td>
                <td>O(log n)</td>
                <td>O(log n)</td>
                <td>O(log n)</td>
                <td>Tự động (key)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. Best Practices</h3>
        <ul>
          <li><strong>Chọn đúng kích thước ban đầu:</strong> Với <code>ArrayList</code> và <code>HashMap</code>, chỉ định initial capacity để giảm chi phí resize.</li>
          <li><strong>Sử dụng generic types:</strong> Luôn sử dụng <code>List&lt;String&gt;</code>, <code>Map&lt;Integer, String&gt;</code> để đảm bảo type safety.</li>
          <li><strong>Thread-safety:</strong> Sử dụng <code>Collections.synchronizedList</code> hoặc <code>ConcurrentHashMap</code> trong môi trường đa luồng.</li>
          <li><strong>Immutable collections:</strong> Sử dụng <code>List.of</code>, <code>Set.of</code>, <code>Map.of</code> (Java 9+) cho dữ liệu không thay đổi.</li>
        </ul>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Initial Capacity Example</div>
          <pre>
            <code>
{`import java.util.ArrayList;
import java.util.HashMap;

public class CapacityExample {
    public static void main(String[] args) {
        // Initial capacity để giảm resize
        ArrayList<String> list = new ArrayList<>(100);
        HashMap<String, Integer> map = new HashMap<>(100, 0.75f);

        list.add("Example");
        map.put("Key", 1);

        // Immutable collection
        List<String> immutableList = List.of("A", "B", "C");
        // immutableList.add("D"); // Sẽ throw UnsupportedOperationException
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
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="section"
      >
        <h2>Ví dụ thực tế: Ứng dụng quản lý sinh viên</h2>
        <p>
          Dưới đây là một ví dụ thực tế sử dụng cả List, Set, và Map để quản lý danh sách sinh viên, điểm số, và các môn học duy nhất.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="code-card"
        >
          <div className="language-label">Java - Student Management</div>
          <pre>
            <code>
{`import java.util.*;

public class StudentManagement {
    public static void main(String[] args) {
        // List lưu danh sách sinh viên
        List<String> students = new ArrayList<>();
        students.add("Alice");
        students.add("Bob");
        students.add("Charlie");

        // Set lưu các môn học duy nhất
        Set<String> subjects = new HashSet<>();
        subjects.add("Math");
        subjects.add("Physics");
        subjects.add("Math"); // Không thêm vì trùng

        // Map lưu điểm số của sinh viên
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95);
        scores.put("Bob", 80);
        scores.put("Charlie", 90);

        // In thông tin
        System.out.println("Students: " + students);
        System.out.println("Unique subjects: " + subjects);
        System.out.println("Scores: " + scores);

        // Truy xuất điểm của Alice
        System.out.println("Alice's score: " + scores.get("Alice"));
    }
}
`}
            </code>
          </pre>
        </motion.div>
        <p>
          Trong ví dụ này, <code>ArrayList</code> được dùng để lưu danh sách sinh viên có thứ tự, <code>HashSet</code> đảm bảo các môn học không trùng lặp, và <code>HashMap</code> ánh xạ tên sinh viên với điểm số.
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