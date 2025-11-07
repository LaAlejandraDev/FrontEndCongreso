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

    fetch("http://localhost:3000/api/registro", {
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
    <div className="container py-4" style={{ maxWidth: "420px" }}>
      <h4 className="text-center mb-3 fw-bold">Registro de Participante</h4>

      <form onSubmit={guardar} className="card p-3 shadow-sm">
        <label className="form-label mt-2">Nombre:</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          onChange={handleChange}
          required
        />

        <label className="form-label mt-2">Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          className="form-control"
          onChange={handleChange}
          required
        />

        <label className="form-label mt-2">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleChange}
          required
        />

        <label className="form-label mt-2">Twitter:</label>
        <input
          type="text"
          name="twitter"
          className="form-control"
          onChange={handleChange}
          placeholder="@usuario"
        />

        <label className="form-label mt-2">Ocupación:</label>
        <input
          type="text"
          name="ocupacion"
          className="form-control"
          onChange={handleChange}
        />

        {/* Avatares */}
        <div className="text-center mt-4">
          <div className="d-flex justify-content-center gap-4">
            {avatars.map((url, index) => (
              <label
                key={index}
                className="text-center"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={url}
                  alt={`Avatar ${index + 1}`}
                  className="rounded-circle border"
                  style={{
                    width: "65px",
                    height: "65px",
                    objectFit: "cover",
                    border:
                      form.avatar === url
                        ? "3px solid #00b894"
                        : "2px solid #ccc",
                  }}
                />
                <div>
                  <input
                    type="radio"
                    name="avatar"
                    value={url}
                    checked={form.avatar === url}
                    onChange={handleChange}
                    className="form-check-input mt-2"
                  />
                  <span className="ms-1 small">Avatar {index + 1}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Términos */}
        <div className="form-check mt-4">
          <input
            type="checkbox"
            name="terminos"
            className="form-check-input"
            onChange={handleChange}
          />
          <label className="form-check-label small ms-2">
            Leí y acepto los términos y condiciones
          </label>
        </div>

        {/* Botón Guardar */}
        <button
          type="submit"
          className="btn w-100 mt-4 py-2 fw-bold"
          style={{ background: "#00b894", color: "white" }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
