import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Gafete() {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);

  useEffect(() => {
    fetch(`https://backendcongreso-2.onrender.com/api/participante/${id}`)
      .then((res) => res.json())
      .then((data) => setPersona(data));
  }, [id]);

  if (!persona) return <h3 className="text-center mt-5">Cargando...</h3>;

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Gafete del Participante</h2>
      </div>

      <div className="d-flex gap-4 justify-content-center align-items-start flex-wrap">
        <div
          className="card shadow border-0 position-relative"
          style={{
            width: "320px",
            height: "480px",
            borderRadius: "15px",
            overflow: "hidden",
            background: "white",
          }}
        >
          <div
            style={{
              background: "#005f8f",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h4 className="fw-bold mb-1">CONGRESO TIC</h4>
            <div className="d-flex justify-content-center gap-3 mt-1">
              <span className="fw-bold">TECN</span>
              <span className="fw-bold">CIÓN</span>
            </div>
          </div>

          <div className="text-center px-3" style={{ marginTop: "-50px" }}>
            <img
              src={persona.avatar}
              className="rounded-circle border border-4 border-white shadow"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
              alt={persona.nombre}
            />

            <h5 className="fw-bold mt-3 mb-1">
              {persona.nombre} {persona.apellidos}
            </h5>
            <p className="text-muted mb-3">{persona.ocupacion}</p>

            <div
              className="mx-auto mt-4 d-flex align-items-center justify-content-center"
              style={{
                background: "#005f8f",
                color: "white",
                height: "40px",
                width: "120px",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              ID: {persona.id.toString().padStart(6, "0")}
            </div>
          </div>

          <div
            style={{
              background: "#005f8f",
              height: "60px",
              position: "absolute",
              bottom: "0",
              width: "100%",
            }}
          ></div>
        </div>

        <div
          className="card shadow border-0 d-flex flex-column"
          style={{
            width: "320px",
            height: "480px",
            borderRadius: "15px",
            overflow: "hidden",
            background: "white",
          }}
        >
          <div
            style={{
              background: "#005f8f",
              height: "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              padding: "10px",
            }}
          >
            <h5 className="fw-bold mb-1">INFORMACIÓN DE CONTACTO</h5>
            <p className="mb-0 small">CONGRESO TIC 2024</p>
          </div>

          <div className="flex-grow-1 p-4 d-flex flex-column">
            <h5 className="fw-bold text-center mb-4">
              {persona.nombre} {persona.apellidos}
            </h5>

            <div className="mb-3">
              <div className="mb-2">
                <p className="text-muted small mb-1">Email</p>
                <p className="fw-bold mb-2" style={{ fontSize: "0.9rem" }}>
                  {persona.email}
                </p>
              </div>

              <div className="mb-2">
                <p className="text-muted small mb-1">Ocupación</p>
                <p className="fw-bold mb-2" style={{ fontSize: "0.9rem" }}>
                  {persona.ocupacion}
                </p>
              </div>

              <div className="mb-3">
                <p className="text-muted small mb-1">Twitter</p>
                <p className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
                  @{persona.twitter}
                </p>
              </div>
            </div>

            <hr className="my-3" />

            <div className="text-center mt-2">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${persona.email}`}
                alt="QR Code"
                className="img-fluid"
              />
            </div>
          </div>

          <div
            style={{
              background: "#005f8f",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            VÁLIDO SOLO DURANTE EL CONGRESO
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/participantes" className="btn btn-secondary">
          Volver a Participantes
        </Link>
      </div>
    </div>
  );
}
