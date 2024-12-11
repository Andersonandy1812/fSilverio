import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./FirstPage";

function ContactMe() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3 style={{ margin: "50px 0" }}>Nuestras formas de contacto: </h3>
        <div className="row">
          <div className="col-lg-4">
            <h4>Llamandonos:</h4>
            <br />
            <p>
              <b>Al:</b> 849-999-9999
            </p>
          </div>
          <div className="col-lg-4">
            <h4>Envianos un email</h4>
            <br />
            <p>
              <b>Al: </b>FSilverio@gmail.com
            </p>
          </div>
          <div className="col-lg-4">
            <h4>Ve directamente a nosotros!</h4>
            <p>
              <b>Direccion:</b>
              <br />
              Santo Domingo
            </p>
          </div>
        </div>
        <hr style={{ margin: "50px 0" }} />
        <div className="flex align-items-center justify-content-center">
          <h3>Quires hacer una cotizacion?</h3>
        </div>
        <Cotizacion />
      </div>
    </>
  );
}

export function Cotizacion() {
  const email = "fsilverio@gmail.com"; // Cambia esto por tu correo electrónico
  const subject = "Hacer una cotizacion"; // Asunto del correo
  const body = "Hola, estoy interesado en hacer una cotizacion."; // Cuerpo del mensaje

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
      }}
    >
      hacer cotizacion
    </button>
  );
}

export default ContactMe;
