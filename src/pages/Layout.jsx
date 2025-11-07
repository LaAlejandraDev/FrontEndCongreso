import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm"
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
          borderBottom: "3px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div className="d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuRE-N00AjIygpPbj3-p0WxlIE9K1zXyMYMYxcOcFNSRxmo2e0XbFN1B0BJvJf92Wxxs&usqp=CAU"
              alt="Logo Congreso TIC"
              className="rounded-circle me-3"
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            />
            <NavLink
              to="/"
              className="navbar-brand fw-bold d-flex align-items-center"
              style={{
                fontSize: "1.4rem",
                background: "linear-gradient(135deg, #ffffff 0%, #ecf0f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Congreso TIC
            </NavLink>
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            style={{
              padding: "4px 8px",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${open ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link rounded px-3 ${
                      isActive
                        ? "active fw-semibold text-white"
                        : "text-light opacity-75"
                    }`
                  }
                  style={({ isActive }) => ({
                    transition: "all 0.3s ease",
                    background: isActive
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255, 255, 255, 0.2)"
                      : "1px solid transparent",
                  })}
                  onClick={() => setOpen(false)}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.classList.contains("active")) {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.opacity = "1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.classList.contains("active")) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.opacity = "0.75";
                    }
                  }}
                >
                  <i className="bi bi-house me-2"></i>
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item mx-1">
                <NavLink
                  to="/participantes"
                  className={({ isActive }) =>
                    `nav-link rounded px-3 ${
                      isActive
                        ? "active fw-semibold text-white"
                        : "text-light opacity-75"
                    }`
                  }
                  style={({ isActive }) => ({
                    transition: "all 0.3s ease",
                    background: isActive
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255, 255, 255, 0.2)"
                      : "1px solid transparent",
                  })}
                  onClick={() => setOpen(false)}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.classList.contains("active")) {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.opacity = "1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.classList.contains("active")) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.opacity = "0.75";
                    }
                  }}
                >
                  <i className="bi bi-people me-2"></i>
                  Participantes
                </NavLink>
              </li>

              <li className="nav-item mx-1">
                <NavLink
                  to="/registro"
                  className={({ isActive }) =>
                    `nav-link rounded px-3 ${
                      isActive
                        ? "active fw-semibold text-white"
                        : "text-light opacity-75"
                    }`
                  }
                  style={({ isActive }) => ({
                    transition: "all 0.3s ease",
                    background: isActive
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255, 255, 255, 0.2)"
                      : "1px solid transparent",
                  })}
                  onClick={() => setOpen(false)}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.classList.contains("active")) {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.opacity = "1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.classList.contains("active")) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.opacity = "0.75";
                    }
                  }}
                >
                  <i className="bi bi-person-plus me-2"></i>
                  Registro
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="min-vh-100 py-4"
        style={{
          background:
            "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <Outlet />
        </div>
      </div>

      <footer
        className="text-center py-4 mt-5"
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
          borderTop: "3px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaom2MFucJ7DhUulhsdcpL_Jbv5VaZots_A&s"
                alt="Logo Tecnología"
                className="rounded me-3"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
              <span
                className="text-white-50 fw-semibold"
                style={{ fontSize: "0.9rem" }}
              >
                Congreso TIC 2024
              </span>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <p className="text-white-50 mb-0 small">
                Innovación y Transformación Digital
              </p>
            </div>

            <div className="col-md-4">
              <p className="text-white-50 mb-0 small">
                &copy; 2024 Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
