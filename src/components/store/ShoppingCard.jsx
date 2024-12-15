import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function ShoppingCard() {
  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <div className="container">
            <h3>Carro de compras</h3>
            <br />
            <p className="alert alert-warning d-none">
              Parece que el carro esta vacio
              <Link to={"/"}>Ve a la tienda para comprar</Link>.
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </>
  );
}

export default ShoppingCard;
