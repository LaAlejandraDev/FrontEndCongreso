import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    twitter: "",
    ocupacion: "",
    avatar: "https://i.pravatar.cc/150?img=1",
    terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const guardar = (e) => {
    e.preventDefault();

    if (!form.terminos)
      return alert("Debes aceptar los términos y condiciones.");

    fetch("https://backendcongreso-2.onrender.com/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/participantes");
      });
  };

  const avatars = [
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=55",
    "https://i.pravatar.cc/150?img=35",
  ];

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-dark mb-3">Registrar Participante</h2>
              <p className="text-muted small">
                Completa el formulario para unirte al congreso
              </p>
            </div>

            <form
              onSubmit={guardar}
              className="card p-4 shadow-lg border-0 mx-auto"
              style={{
                borderRadius: "15px",
                maxWidth: "420px",
                width: "100%",
              }}
            >
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark small mb-2">
                  NOMBRE
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control shadow-sm"
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #e9ecef",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-dark small mb-2">
                  APELLIDOS
                </label>
                <input
                  type="text"
                  name="apellidos"
                  className="form-control shadow-sm"
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #e9ecef",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-dark small mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control shadow-sm"
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #e9ecef",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-dark small mb-2">
                  TWITTER
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted">
                    @
                  </span>
                  <input
                    type="text"
                    name="twitter"
                    className="form-control border-start-0 shadow-sm"
                    onChange={handleChange}
                    placeholder="usuario"
                    style={{
                      borderRadius: "0 8px 8px 0",
                      border: "1px solid #e9ecef",
                      padding: "10px 12px",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-dark small mb-2">
                  OCUPACIÓN
                </label>
                <input
                  type="text"
                  name="ocupacion"
                  className="form-control shadow-sm"
                  onChange={handleChange}
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #e9ecef",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold text-dark small mb-3 text-center d-block">
                  SELECCIONA TU AVATAR
                </label>
                <div className="d-flex justify-content-center gap-3">
                  {avatars.map((url, index) => (
                    <label
                      key={index}
                      className="text-center position-relative"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="radio"
                        name="avatar"
                        value={url}
                        checked={form.avatar === url}
                        onChange={handleChange}
                        className="position-absolute opacity-0"
                      />
                      <div
                        className="rounded-3 p-2 transition-all"
                        style={{
                          border:
                            form.avatar === url
                              ? "3px solid #667eea"
                              : "2px solid #e9ecef",
                          background:
                            form.avatar === url
                              ? "rgba(102, 126, 234, 0.1)"
                              : "transparent",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <img
                          src={url}
                          alt={`Avatar ${index + 1}`}
                          className="rounded-circle"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="mt-2">
                          <small
                            className={
                              form.avatar === url
                                ? "text-primary fw-bold"
                                : "text-muted"
                            }
                          >
                            Opción {index + 1}
                          </small>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="form-check text-center">
                  <input
                    type="checkbox"
                    name="terminos"
                    className="form-check-input"
                    onChange={handleChange}
                    style={{
                      width: "16px",
                      height: "16px",
                      marginTop: "0.2rem",
                    }}
                  />
                  <label className="form-check-label small text-dark ms-2">
                    Acepto los{" "}
                    <strong className="text-primary">
                      términos y condiciones
                    </strong>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn py-2 fw-bold border-0 shadow"
                  style={{
                    background:
                      "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    minWidth: "200px",
                  }}
                >
                  Registrar Participante
                </button>
              </div>

              <div className="text-center mt-3">
                <button
                  type="button"
                  className="btn btn-link text-muted text-decoration-none p-0 small"
                  onClick={() => navigate("/participantes")}
                >
                  Volver a participantes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
