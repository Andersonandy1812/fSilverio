import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Carousel />
        <TypesPage />
      </div>
    </div>
  );
}

export function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#c4c4c4" }}
      >
        <div className="container-fluid text-decoration-none">
          <Link className="navbar-brand text-danger" to={"/"}>
            Ferreteria <br /> Silverio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={"/store"}>
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to={"/aboutUs"}>
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Llaves
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Herramientas
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      todo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to={"/ContactMe"}>
                  Contactanos
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <div>
                <a href="#">
                  {" "}
                  <img
                    width="30"
                    height="30"
                    src="https://cdn-icons-png.freepik.com/512/3394/3394009.png"
                    alt=""
                  />
                </a>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/ShoppingCard"}>
                    carrito
                  </Link>
                </li>
              </div>
              <div className="MyAccount justify-content-center">
                <a href="#">
                  <img
                    width="30"
                    height="30"
                    className="justify-content-center"
                    src="https://cdn.icon-icons.com/icons2/1863/PNG/512/account-circle_119476.png"
                    alt=""
                  />
                </a>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mi cuenta
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          Perfil
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Editar perfil
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/LoginPage">
                          Cerrar sesion
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>{" "}
      </nav>
    </div>
  );
}
export function Carousel() {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6 pointer-event"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="active"
          aria-current="true"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            className="opacity-30"
            width="100%"
            height="100%"
            src="https://png.pngitem.com/pimgs/s/443-4437390_logos-de-ofertas-png-transparent-png.png"
            alt=""
          />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1 className="text-black">Ofertas especiales</h1>
              <p className="opacity-75 text-black">
                Tenemos ofertas especiales todos los dias en articulos
                seleccionados
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Conoce mas aqui
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            width="100%"
            height="100%"
            src="https://t4.ftcdn.net/jpg/03/90/11/51/360_F_390115184_pC62LQRe5VlME5w1I1XgUxm6TeKMlQ7Q.jpg"
            alt=""
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Ofertas especiales</h1>
              <p>Tenemos ofertas especiales todos los dias.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Conoce mas aqui
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="../public/img/Bathroom.png"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>
          </svg>
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Hola
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export function TypesPage() {
  return (
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-6 bd-placeholder-img rounded-circle">
        <a href="#">
          <img
            className="bd-placeholder-img rounded-circle"
            width="90"
            height="90"
            src="https://images.vexels.com/content/152334/preview/bathroom-sink-icon-c15acb.png"
            href="#"
            alt=""
          />
        </a>
        <a className="nav-link active" href="#">
          <h2 className="fw-normal" href="#">
            Baño
          </h2>
        </a>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6">
        <a href="#">
          <img
            className="bd-placeholder-img rounded-circle"
            width="90"
            height="90"
            src="https://static.vecteezy.com/system/resources/previews/009/400/893/non_2x/tool-clipart-design-illustration-free-png.png"
            href="#"
            alt=""
          />
        </a>
        <a className="nav-link active" href="#">
          <h2 className="fw-normal" href="#">
            Herramientas
          </h2>
        </a>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6">
        <a href="#">
          <img
            className="bd-placeholder-img rounded-circle"
            width="90"
            height="90"
            src="https://static.vecteezy.com/system/resources/previews/012/227/693/non_2x/plumbing-service-design-png.png"
            href="#"
            alt=""
          />
        </a>
        <a className="nav-link active" href="#">
          <h2 className="fw-normal" href="#">
            Plomeria
          </h2>
        </a>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6">
        <a href="#">
          <img
            className="bd-placeholder-img rounded-circle"
            width="90"
            height="90"
            src="https://static.vecteezy.com/system/resources/thumbnails/022/530/699/small_2x/the-builder-bricklayer-logo-icon-isolated-masonry-cartoon-style-png.png"
            href="#"
            alt=""
          />
        </a>
        <a className="nav-link active" href="#">
          <h2 className="fw-normal" href="#">
            Albañileria
          </h2>
        </a>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6">
        <svg
          className="bd-placeholder-img rounded-circle"
          width="90"
          height="90"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <h2 className="fw-normal">Otro</h2>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6">
        <svg
          className="bd-placeholder-img rounded-circle"
          width="90"
          height="90"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <h2 className="fw-normal">Otro</h2>
      </div>
    </div>
  );
}

export default FirstPage;
