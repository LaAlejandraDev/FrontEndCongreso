import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Participantes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/listado")
      .then((res) => res.json())
      .then((data) => setLista(data));
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  const filtrados = lista.filter((p) =>
    `${p.nombre} ${p.apellidos}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-vh-100 py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold text-dark mb-2">
              Participantes Registrados
            </h2>
          </div>
          <Link
            className="btn btn-primary px-3"
            to="/registro"
            style={{ borderRadius: "8px" }}
          >
            <i className="bi bi-person-plus me-2"></i>
            Nuevo Registro
          </Link>
        </div>

        <div className="card border-0 shadow-sm mb-4 bg-white">
          <div className="card-body p-3">
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light"
                placeholder="Buscar participante por nombre o apellido..."
                value={search}
                onChange={handleSearchChange}
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>

        <div className="row g-4">
          {filtrados.length > 0 ? (
            filtrados.map((p) => (
              <div key={p.id} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="card border-0 h-100 position-relative"
                  style={{
                    borderRadius: "12px",
                    background: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.08)";
                  }}
                  onClick={() => (window.location.href = `/gafete/${p.id}`)}
                >
                  <div
                    className="position-absolute top-0 end-0 m-2 badge bg-light text-dark"
                    style={{ fontSize: "0.7rem" }}
                  >
                    ID: {p.id.toString()}
                  </div>

                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <img
                        src={p.avatar}
                        alt={p.nombre}
                        className="rounded-circle border border-3"
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "cover",
                          borderColor: "#e3f2fd !important",
                        }}
                      />
                    </div>

                    <h6 className="fw-bold text-dark mb-2">
                      {p.nombre} {p.apellidos}
                    </h6>
                    <p
                      className="text-muted mb-3 small"
                      style={{
                        lineHeight: "1.4",
                        minHeight: "40px",
                      }}
                    >
                      {p.ocupacion}
                    </p>

                    <div className="mb-3">
                      <a
                        href={`https://twitter.com/${p.twitter.replace(
                          "@",
                          ""
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none d-inline-flex align-items-center text-info"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bi bi-twitter me-2"></i>
                        <span className="small">{p.twitter}</span>
                      </a>
                    </div>

                    <button
                      className="btn btn-outline-primary btn-sm w-100"
                      style={{ borderRadius: "20px" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/gafete/${p.id}`;
                      }}
                    >
                      <i className="bi bi-person-badge me-1"></i>
                      Ver Credencial
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div
                className="card border-0 text-center py-5 bg-white"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <div className="text-muted mb-3">
                  <i
                    className="bi bi-people"
                    style={{ fontSize: "3.5rem", color: "#6c757d" }}
                  ></i>
                </div>
                <h5 className="text-dark mb-2">
                  No se encontraron participantes
                </h5>
                <p className="text-muted mb-4">
                  {search
                    ? `No hay resultados para "${search}"`
                    : "Aún no hay participantes registrados en el sistema"}
                </p>
                {search ? (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setSearchParams({})}
                  >
                    <i className="bi bi-arrow-counterclockwise me-2"></i>
                    Mostrar todos
                  </button>
                ) : (
                  <Link className="btn btn-primary" to="/registro">
                    <i className="bi bi-person-plus me-2"></i>
                    Registrar primer participante
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {filtrados.length > 0 && (
          <div className="text-center mt-5 pt-3">
            <p className="text-muted small border-top pt-3">
              Mostrando {filtrados.length} de {lista.length} participantes
              registrados
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
