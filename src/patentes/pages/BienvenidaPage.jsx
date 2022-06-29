import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import '../styles/style.css';

export const BienvenidaPage = () => {

  const [formValue, setFormValue] = useState({
    patente: '',
  });


  const onInputChange = ({target}) => {
    setFormValue({
      ...formValue,
      [target.name] : target.value
    })
  }

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/busqueda/${formValue.patente.toUpperCase()}`);
  }


  return (
    <>
      <Navbar/>
      <div className="principal">
        <div className="container">
          <div className="text-center text-light pt-5">
            <h1>Buscador de patentes vehiculares</h1>
            <p>Marca, Modelo, Rut Propietario y mucho más</p>
          </div>
          <div className="abs-center">
          <form className="p-3 form" onSubmit={onSubmit}>
          <p className="text-light">Ingresa la patente</p>
            <div className="input-group ">
              <input type="text"
                    name="patente"
                    id="patente"
                    value={formValue.patente}
                    className="form-control text-uppercase fs-2 text-muted"
                    onChange={onInputChange} />

              <button type="submit" 
                      className="btn btn-success from-control btn-lg "
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>

  )
}
