import React from 'react'

export const BusquedaScreen = ({anioVehiculo, marcaVehiculo, modeloVehiculo,nombreApellidoPropietario,numeroMotorVehiculo,patente,rutPropietario,tipoVehiculo}) => {
  return (
    <div className="card mt-5 mb-3">
            <div className="card-header bg-primary text-white">
            <div className="float-start"><p className='h4'>{patente}</p></div>
                <div className="float-end"><i className="fas fa-caret-down h4"></i></div>
            </div>
            <div className="card-body">
            <div className="row">
                <div className="col-sm pb-3">
                <i className="fa-regular fa-file text-primary"></i>  <strong>Patente:</strong> {patente}
                </div>
                <div className="col-sm pb-3">
                <i className="fa-regular fa-address-card text-primary"></i><strong> Rut:</strong> {rutPropietario}
                </div>
            </div>
            <div className="row">
                <div className="col-sm pb-3">
                <i className="fas fa-car text-primary"></i> <strong>Tipo:</strong> {tipoVehiculo}
                </div>
                <div className="col-sm pb-3">
                    <i className="fa-regular fa-user text-primary"></i> <strong>Nombre:</strong> {nombreApellidoPropietario}
                </div>
            </div>
            <div className="row">
                <div className="col-sm pb-3">
                <i className="fas fa-cogs text-primary"></i> <strong>N° Motor:</strong> {numeroMotorVehiculo}
                </div>
                <div className="col-sm pb-3">
                <i className="fa-regular fa-calendar-check text-primary"></i> <strong>Año:</strong> {anioVehiculo}
                </div>
            </div>
            <div className="row">
                <div className="col-sm pb-3">
                <i className="fas fa-copyright text-primary"></i> <strong>Marca:</strong> {marcaVehiculo}
                </div>
                <div className="col-sm pb-3">
                <i className="fas fa-caret-square-up text-primary"></i> <strong>Modelo:</strong> {modeloVehiculo}
                </div>
            </div>
            </div>
            <div className="card-footer">
            <div className="float-end col-12 col-sm-5">
                <div className="input-group ">
                <input type="text" className='form-control' placeholder='Correo Elctrónico'/>
                <button className='btn btn-primary'>Enviar</button>
                </div>
            </div>
            </div>
        </div>
  )
}
