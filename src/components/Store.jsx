import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./FirstPage";

function Store() {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-lg-3">
          <div className="Category">
            <span className="a-size-base a-color-base fw-bolder">
              Categorias
            </span>
            <ul className="list-group">
              <li>
                <input type="Checkbox" id="CheckboxCategory" />
                <label htmlFor="CheckboxCategory">Herramientas</label>
              </li>
              <li>
                <input type="Checkbox" id="CheckboxLlaves" />
                <label htmlFor="CheckboxLlaves">Llaves</label>
              </li>
            </ul>
          </div>
          <div className="Departamento">
            <span className="a-size-base a-color-base fw-bolder">
              Departamentos
            </span>
            <ul className="list-group">
              <li>
                <input type="Checkbox" id="CheckboxCategory" />
                <label htmlFor="CheckboxCategory">Hogar</label>
              </li>
              <li>
                <input type="Checkbox" id="CheckboxLlaves" />
                <label htmlFor="CheckboxLlaves">Baño</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <a href="" className="text-decoration-none g-3 row">
              <div className="card g-3" style={{ width: "18rem" }}>
                <img
                  src="https://www.gyptech.com.do/wp-content/uploads/Martillo-Fibra-16-e1664325878184.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Martillo truper</h5>
                  <p>Este es un martillo truper</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small>1,500.00$</small>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        Añadir
                      </button>
                      <button className="btn btn-sm btn-outline-success">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.gyptech.com.do/wp-content/uploads/Martillo-Fibra-16-e1664325878184.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Martillo truper</h5>
                  <p>Este es un martillo truper</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small>1,500.00$</small>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        Añadir
                      </button>
                      <button className="btn btn-sm btn-outline-success">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.gyptech.com.do/wp-content/uploads/Martillo-Fibra-16-e1664325878184.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Martillo truper</h5>
                  <p>Este es un martillo truper</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small>1,500.00$</small>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        Añadir
                      </button>
                      <button className="btn btn-sm btn-outline-success">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.gyptech.com.do/wp-content/uploads/Martillo-Fibra-16-e1664325878184.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Martillo truper</h5>
                  <p>Este es un martillo truper</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small>1,500.00$</small>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        Añadir
                      </button>
                      <button className="btn btn-sm btn-outline-success">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card g-3" style={{ width: "18rem" }}>
                <img
                  src="https://www.gyptech.com.do/wp-content/uploads/Martillo-Fibra-16-e1664325878184.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Martillo truper</h5>
                  <p>Este es un martillo truper</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small>1,500.00$</small>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        Añadir
                      </button>
                      <button className="btn btn-sm btn-outline-success">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="btn-toolbar mb-3 justify-content-md-center"
        role="toolbar"
        aria-label="Toolbar with button groups"
        style={{ marginTop: "20px" }}
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button
            type="button"
            className="btn btn-outline-info disable"
            disabled
          >
            anterior
          </button>
          <button type="button" className="btn btn-outline-secondary">
            1
          </button>
          <button type="button" className="btn btn-outline-secondary">
            2
          </button>
          <button type="button" className="btn btn-outline-info">
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
}

export default Store;
