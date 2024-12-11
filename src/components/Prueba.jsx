import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Prueba.css'

function Prueba(){
    return(
        <>
        <section className="vh-100 gradient-custom" style={{ borderRadius: ".5rem .5rem 0 "}}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                  <div className="card-body p-5 text-center">
        
                    <div className="mb-md-5 mt-md-4 pb-5">
        
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Por favor entre su usuario y contraseña</p>
        
                      <div data-mdb-input-init className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                      </div>
        
                      <div data-mdb-input-init className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                      </div>
        
                      <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Se te olvido la contraseña?</a></p>
        
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Entrar</button>
        
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                      </div>
        
                    </div>
        
                    <div>
                      <p className="mb-0">No tienes una cuenta?<a href="#!" className=" fw-bold ">Crea una</a>
                      </p>
                    </div>
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 

        </>

    
    )
}

export default Prueba