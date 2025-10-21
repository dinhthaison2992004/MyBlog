import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Project from "./pages/Project";


import JavaLaGi from "./components/post/Java_la_gi"; 
import RestApiSpringBoot from "./components/post/RestApiSpringBoot";
import SpringBootCloudDeployment from "./components/post/SpringBootCloudDeployment";
import SpringSecurityBlog from "./components/post/SpringSecurityBlog";
import JavaCollectionsBlog from "./components/post/JavaCollectionsBlog";
import SpringBootCachingBlog from "./components/post/SpringBootCachingBlog";
import JavaBasicsBlog from "./components/post/JavaBasicsBlog";
import SpringBootPaymentIntegrationBlog from "./components/post/SpringBootPaymentIntegrationBlog";
import SpringBootTestingBlog from "./components/post/SpringBootTestingBlog";
import SpringBootOAuth2Blog from "./components/post/SpringBootOAuth2Blog";

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
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/project" element={<Project />} />

              {/* Routes cho từng bài viết */}
              <Route path="/java-la-gi" element={<JavaLaGi />} />
              <Route path="/rest-api-spring-boot" element={<RestApiSpringBoot />} />
              <Route path="/spring-boot-cloud-deployment" element={<SpringBootCloudDeployment />} />
              <Route path="/spring-security-jwt" element={<SpringSecurityBlog />} />
              <Route path="/java-collections" element={<JavaCollectionsBlog />} />
              <Route path="/spring-boot-caching" element={<SpringBootCachingBlog />} />
              <Route path="/java-basics" element={<JavaBasicsBlog />} />
              <Route path="/spring-boot-payment-integration" element={<SpringBootPaymentIntegrationBlog />} />
              <Route path="/spring-boot-testing" element={<SpringBootTestingBlog />} />
              <Route path="/spring-boot-oauth2" element={<SpringBootOAuth2Blog />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;
