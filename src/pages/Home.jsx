import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center vh-100 position-relative"
      style={{
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
        overflow: "hidden",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              "radial-gradient(circle at 10% 20%, rgba(108, 117, 125, 0.05) 0%, transparent 50%)",
          }}
        ></div>
        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              "radial-gradient(circle at 90% 80%, rgba(73, 80, 87, 0.03) 0%, transparent 50%)",
          }}
        ></div>
      </div>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ pointerEvents: "none" }}
      >
        <div className="position-absolute top-50 start-0 w-100 border-top border-1 border-secondary border-opacity-10"></div>
        <div className="position-absolute start-50 top-0 h-100 border-start border-1 border-secondary border-opacity-10"></div>
      </div>

      <div className="position-relative z-1">
        <div
          className="bg-white rounded-4 shadow-lg p-5 mx-3 border"
          style={{
            maxWidth: "520px",
            borderColor: "rgba(0, 0, 0, 0.08) !important",
            boxShadow:
              "0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04) !important",
          }}
        >
          <div className="d-flex justify-content-center align-items-center mb-4 gap-4">
            <div className="position-relative">
              <div
                className="rounded-3 p-2"
                style={{
                  background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuRE-N00AjIygpPbj3-p0WxlIE9K1zXyMYMYxcOcFNSRxmo2e0XbFN1B0BJvJf92Wxxs&usqp=CAU"
                  alt="Logo TIC"
                  className="rounded-2"
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                    border: "2px solid rgba(108, 117, 125, 0.1)",
                  }}
                />
              </div>
            </div>

            <div className="position-relative">
              <div
                className="rounded-3 p-2"
                style={{
                  background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaom2MFucJ7DhUulhsdcpL_Jbv5VaZots_A&s"
                  alt="Tecnología"
                  className="rounded-2"
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                    border: "2px solid rgba(108, 117, 125, 0.1)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "3.5rem",
                background: "linear-gradient(135deg, #495057 0%, #6c757d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              TIC
            </h1>

            <h2 className="text-dark fs-3 fw-light mb-2 lh-sm">
              Congreso de Tecnologías
              <br />
              <span className="fw-semibold" style={{ color: "#495057" }}>
                de la Información
              </span>
            </h2>
          </div>

          <div
            className="mx-auto mb-4"
            style={{
              width: "80px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #adb5bd, transparent)",
            }}
          ></div>

          <p
            className="mb-4 px-3"
            style={{
              color: "#6c757d",
              fontSize: "1.05rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            Bienvenido al registro exclusivo del{" "}
            <strong style={{ color: "#495057" }}>
              Congreso en Tecnologías de la Información
            </strong>
            . Acceda al sistema para registrarse y consultar participantes del
            evento.
          </p>

          <button
            className="btn btn-lg fw-semibold px-5 py-3 rounded-3 shadow-sm"
            onClick={() => navigate("/participantes")}
            style={{
              background: "linear-gradient(135deg, #495057 0%, #6c757d 100%)",
              color: "#ffffff",
              border: "none",
              transition: "all 0.3s ease",
              fontSize: "1rem",
              letterSpacing: "0.5px",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 25px rgba(73, 80, 87, 0.25)";
              e.target.style.background =
                "linear-gradient(135deg, #40464d 0%, #5a6268 100%)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(73, 80, 87, 0.15)";
              e.target.style.background =
                "linear-gradient(135deg, #495057 0%, #6c757d 100%)";
            }}
          >
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Acceder al Sistema
          </button>
        </div>

        <div className="mt-4">
          <p
            className="small"
            style={{
              color: "#adb5bd",
              letterSpacing: "0.5px",
              fontWeight: "400",
            }}
          >
            Evento Tecnológico 2024 • Innovación y Transformación Digital
          </p>
        </div>
      </div>

      <div className="position-absolute bottom-0 start-0 w-100 text-center py-4">
        <div className="d-flex justify-content-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded-pill"
              style={{
                width: "6px",
                height: "6px",
                background: "#adb5bd",
                opacity: 0.4,
                animation: `pulse 3s infinite ${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
