import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Tutorias = ({ agregarTutoria, tutores }) => {
    const [idTutoria, setIdTutoria] = useState("");
    const [tutorSeleccionado, setTutorSeleccionado] = useState("");
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  
    const guardarTutoria = (event) => {
      event.preventDefault();
  
      let tutoria = {
        idTutoria: idTutoria,
        tutor: tutorSeleccionado,
        asignatura: asignaturaSeleccionada,
        fechaSeleccionada: fechaSeleccionada        
      };
  
      agregarTutoria(tutoria);
  
      setIdTutoria("");
      setTutorSeleccionado("");
      setAsignaturaSeleccionada("");
      setFechaSeleccionada(null);
    };
  
    const manejarCambioFecha = (fecha) => {
        setFechaSeleccionada(fecha)
    };
  
    const manejarCambioTutor = (event) => {
      const tutorSeleccionado = event.target.value;
      setTutorSeleccionado(tutorSeleccionado);
  
      const tutorEncontrado = tutores.find(
        (tutor) => tutor.nombre === tutorSeleccionado
      );
      if (tutorEncontrado) {
        setAsignaturaSeleccionada(tutorEncontrado.asignatura);
      } else {
        setAsignaturaSeleccionada("");
      }
    };
  
    const manejarCambioAsignatura = (event) => {
      const asignaturaSeleccionada = event.target.value;
      setAsignaturaSeleccionada(asignaturaSeleccionada);
    };
  
    return (
      <>
        <form onSubmit={guardarTutoria}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Selecciona una fecha:</h1>
            <div style={{ marginTop: "10px" }}>
              <Calendar value={fechaSeleccionada} required onChange={manejarCambioFecha}/>
            </div>
            {fechaSeleccionada && (
              <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                Fecha seleccionada: {fechaSeleccionada.toLocaleDateString("es-ES")}
              </label>
            )}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="tutor">Nombre del tutor</label>
            <select
              className="form-control"
              name= "tutor"
              id="tutor"
              required value={tutorSeleccionado}
              onChange={manejarCambioTutor}
              
              
            >
              <option value="">--Seleccione--</option>
              {tutores.map((tutor) => (
                <option key={tutor.id} value={tutor.nombre}>
                  {tutor.nombre}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="asignatura">Asignatura</label>
            <select
              className="form-control"
              id="asignatura"
              value={asignaturaSeleccionada}
              onChange={manejarCambioAsignatura}
              required
            >
              <option value="">--Seleccione--</option>
              <option value={asignaturaSeleccionada}>{asignaturaSeleccionada}</option>
            </select>
          </div>
          <br />
          <br />
          <button type="submit" className="btn btn-success">
            Agendar Tutoría
          </button>
        </form>
      </>
    );
  };
  