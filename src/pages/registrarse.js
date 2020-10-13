import React from "react";
class Registrarse extends React.Component {
  render() {
    return (
      <div className="container-fluid containerDos fondoInicio2">
        <div className="row">
          <div className="col-sm">
            <h1> OpenShop</h1>

            <br />

            <h2 className="register"> Registro </h2>
            <form>
              <label>
                <strong> Usuario : </strong>
                <input className="text" type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> E-mail : </strong>
                <input className="text" type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> Contraseña : </strong>
                <input className="text" type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> Contraseña : </strong>
                <input className="text" type="text" name="name" />
              </label>
            </form>

            <button className="button" type="button">
              <a href="inicia">Atrás</a>
            </button>

            <button className="button" type="button">
              <a href="inicia">Entrar</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Registrarse;
