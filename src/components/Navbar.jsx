import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Bài viết", path: "/blog" },
    { name: "Dự án", path: "/project" },
    { name: "Giới thiệu", path: "/about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            MindStation
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="navbar-toggle-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Nav Links */}
          <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="navbar-action">
            <button
              className="theme-toggle"
              aria-label="Chuyển đổi giao diện sáng/tối"
            >
              <svg
                className="theme-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <style>
        {`
          .navbar {
            background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1), rgba(15, 23, 42, 0.1));
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            z-index: 50;
          }

          .navbar-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 68px;
          }

          .navbar-logo {
            font-size: 28px;
            font-weight: 800;
            color: #e0e7ff;
            text-decoration: none;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .navbar-logo:hover {
            color: #a78bfa;
            transform: scale(1.05);
          }

          .navbar-links {
            display: flex;
            gap: 32px;
            justify-content: center;
            flex: 1;
          }

          .navbar-link {
            font-size: 16px;
            font-weight: 600;
            color: #e0e7ff;
            text-decoration: none;
            position: relative;
            transition: color 0.3s ease;
          }

          .navbar-link:hover,
          .navbar-link.active {
            color: #a78bfa;
          }

          .navbar-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
            height: 3px;
            background: #a78bfa;
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease;
          }

          .navbar-link:hover::after,
          .navbar-link.active::after {
            transform: scaleX(1);
          }

          .navbar-action {
            display: flex;
            align-items: center;
          }

          .theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            color: #e0e7ff;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .theme-toggle:hover {
            color: #a78bfa;
            transform: scale(1.1);
          }

          .theme-toggle:focus {
            outline: 2px solid #a78bfa;
            outline-offset: 2px;
          }

          .theme-icon {
            width: 24px;
            height: 24px;
          }

          .navbar-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: #e0e7ff;
          }

          .navbar-toggle-icon {
            width: 28px;
            height: 28px;
          }

          @media (max-width: 768px) {
            .navbar-container {
              padding: 12px 16px;
              flex-wrap: wrap;
            }

            .navbar-logo {
              font-size: 24px;
            }

            .navbar-toggle {
              display: block;
            }

            .navbar-links {
              display: ${isMenuOpen ? "flex" : "none"};
              flex-direction: column;
              gap: 16px;
              width: 100%;
              padding: 16px 0;
              background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(167, 139, 250, 0.2), rgba(15, 23, 42, 0.2));
              backdrop-filter: blur(10px);
              position: absolute;
              top: 68px;
              left: 0;
              right: 0;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .navbar-links.open {
              display: flex;
            }

            .navbar-link {
              font-size: 18px;
              text-align: center;
            }

            .navbar-action {
              display: none;
            }
          }

          @media (max-width: 480px) {
            .navbar-logo {
              font-size: 20px;
            }

            .navbar-toggle-icon {
              width: 24px;
              height: 24px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;