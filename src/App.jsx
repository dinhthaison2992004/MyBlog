import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import JavaLaGi from "./components/post/Java_la_gi"; 
import RestApiSpringBoot from "./components/post/RestApiSpringBoot";
import SpringBootCloudDeployment from "./components/post/SpringBootCloudDeployment";
import SpringSecurityBlog from "./components/post/SpringSecurityBlog";
import JavaCollectionsBlog from "./components/post/JavaCollectionsBlog";
import SpringBootCachingBlog from "./components/post/SpringBootCachingBlog";
import JavaBasicsBlog from "./components/post/JavaBasicsBlog";
import SpringBootPaymentIntegrationBlog from "./components/post/SpringBootPaymentIntegrationBlog";
import SpringBootTestingBlog from "./components/post/SpringBootTestingBlog";
const App = () => {
  return (
    <>
      <style>{`
        .app-container {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #0f172a 100%);
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .app-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(3px);
          z-index: 0;
        }

        .app-container > * {
          position: relative;
          z-index: 1;
        }

        .app-main {
          flex-grow: 1;
        }
      `}</style>

      <Router>
        <div className="app-container">
          {/* ✅ Thanh điều hướng luôn hiển thị */}
          <Navbar />

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />

              {/* ✅ Đường dẫn riêng cho từng bài viết */}
              <Route path="/java-la-gi" element={<JavaLaGi />} />
              <Route path="/rest-api-spring-boot" element={<RestApiSpringBoot />} /> {/* ✅ thêm route */}
              <Route path="/spring-boot-cloud-deployment" element={<SpringBootCloudDeployment />} /> {/* ✅ thêm route */}
              <Route path="spring-security-jwt" element={<SpringSecurityBlog />} /> {/* ✅ thêm route */}
              <Route path="/java-collections" element={<JavaCollectionsBlog />} /> {/* ✅ thêm route */}
              <Route path="/spring-boot-caching" element={<SpringBootCachingBlog />} /> {/* ✅ thêm route */}
              <Route path="java-basics" element={<JavaBasicsBlog/>} /> {/* Ví dụ thêm route */}
             <Route path="/spring-boot-payment-integration" element={<SpringBootPaymentIntegrationBlog/>} /> {/* Ví dụ thêm route */}
              <Route path="/spring-boot-testing" element={<SpringBootTestingBlog/>} /> {/* Ví dụ thêm route */}
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;
