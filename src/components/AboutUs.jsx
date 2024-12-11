import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./FirstPage";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="image" style={{ margin: "50px 0" }}>
          <img
            src="https://i.ytimg.com/vi/-BK5fK8_X3Q/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="row" style={{ height: "400px", marginTop: "50px" }}>
          <div className="text-center col-lg-4 col-md-6 bg-danger">
            <h3>Mision</h3>
            <br />
            <p>
              Proveer a nuestros clientes con productos de ferretería de alta
              calidad, soluciones prácticas y asesoramiento experto, ayudándolos
              a construir, reparar y transformar sus proyectos con confianza y
              eficiencia.
            </p>
          </div>
          <div className="text-center col-lg-4 col-md-6 bg-secondary text-white">
            <h3>Vision</h3>
            <br />
            <p>
              Ser la ferretería líder en la comunidad, reconocida por nuestra
              amplia variedad de productos, atención personalizada y compromiso
              con la innovación, contribuyendo al desarrollo sostenible y al
              éxito de nuestros clientes.
            </p>
          </div>
          <div className="text-center col-lg-4 col-md-6 bg-danger">
            <h3>Valores</h3>
            <br />
            <ul>
              <li>
                <b>Calidad:</b> Ofrecemos productos confiables y duraderos para
                satisfacer las necesidades de nuestros clientes.
              </li>
              <li>
                <b>Servicio:</b> Nos dedicamos a brindar una experiencia
                excepcional, escuchando y apoyando a cada cliente con
                asesoramiento experto.
              </li>
              <li>
                <b>Responsabilidad:</b> Operamos de manera ética y sostenible,
                cuidando el impacto ambiental y social de nuestras operaciones.
              </li>
            </ul>
          </div>
          <hr style={{ margin: "50px 0" }} />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Quieres saber mas hacerca de nosotros?{" "}
                <span className="text-body-secondary">Conocenos!</span>
              </h2>
              <p className="lead">
                <br />
                <br />
                En <b>Ferreteria Silverio</b>, somos más que una simple tienda:
                somos su aliado en cada proyecto. Desde las reparaciones del
                hogar hasta las construcciones más ambiciosas, ofrecemos una
                amplia variedad de herramientas, materiales y asesoramiento
                especializado para que cada cliente encuentre exactamente lo que
                necesita.
                <br />
                <br />
                Nuestro compromiso es brindarle productos de la más alta
                calidad, desde marcas reconocidas hasta opciones innovadoras que
                garantizan durabilidad y eficiencia. Además, nuestro equipo de
                expertos está siempre disponible para ayudarlo a seleccionar las
                mejores soluciones para sus proyectos, sean grandes o pequeños.
              </p>
            </div>
            <div
              className="col-md-5 order-md-1"
              style={{ marginBottom: "50px" }}
            >
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                src="https://scontent.fsti4-2.fna.fbcdn.net/v/t39.30808-6/363822762_6599714413458150_6787571773752049264_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQaYOCvIQsy_80avmVIs7Pmmxl7UkOwgeabGXtSQ7CBwR4CZu0gmAbD1xxBe0gpNPMCCuW-Cp3UXUMjBxo7vzN&_nc_ohc=oBcWC6nb18sQ7kNvgE_P_Ao&_nc_zt=23&_nc_ht=scontent.fsti4-2.fna&_nc_gid=AMq2ObWhAis9OAZqiBsQgCj&oh=00_AYBbGvxzrXNUNDu7VCplwxFnZC3bFJ1ONlm0l6wR77xeAg&oe=675F629C"
                alt="Imagen de una ferretería"
              />
            </div>
          </div>
          <hr style={{ margin: "50px 0" }} />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Nuestro Equipo
              </h2>
              <p className="lead">
                En <b>Ferreteria Silverio</b>, nuestro equipo es el corazón de
                nuestro negocio. Cada uno de nuestros colaboradores está
                comprometido con ofrecerle una atención excepcional, combinando
                experiencia, conocimiento y una verdadera pasión por ayudar a
                nuestros clientes.
                <br />
                <br />
                Desde el momento en que ingresa a nuestra ferretería, encontrará
                a personas dispuestas a escuchar sus necesidades, asesorarlo
                sobre los mejores productos para su proyecto y guiarlo en cada
                paso del camino. Ya sea que esté buscando herramientas,
                materiales de construcción o soluciones especializadas, puede
                confiar en que nuestro equipo tiene las respuestas que necesita.
              </p>
            </div>
            <div
              className="col-md-5 order-md-1"
              style={{ marginBottom: "50px" }}
            >
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                src="https://i.ytimg.com/vi/-BK5fK8_X3Q/maxresdefault.jpg"
                alt="Imagen de una ferretería"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
