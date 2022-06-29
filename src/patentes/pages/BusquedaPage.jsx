import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPatentes } from '../../store/slices/patentes/thunks';
import { Navbar } from '../components/Navbar';

export const BusquedaPage = () => {
  const {patente} = useParams();
  const dispatch = useDispatch();
  const {loading, patentes} = useSelector(state => state.patentes )


  useEffect(() => {
    dispatch(getPatentes(patente))
  }, [])

  return (

    <>
    <Navbar/>
    {loading ? 
    <div className='abs-center'>
        <div className="spinner-border text-success" style={{width: "5rem", height: "5rem"}} role="status" >
            <span className="sr-only">Loading...</span>
        </div> 
    </div>
  
    : 
    <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Patente</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Año</th>
                    <th scope="col">N° Motor</th>
                    <th scope="col">Rut</th>
                    <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patentes.map(({anioVehiculo, marcaVehiculo, modeloVehiculo,nombreApellidoPropietario,numeroMotorVehiculo,patente,rutPropietario,tipoVehiculo}) => (
                            <tr key={patente}>
                                <td>
                                    {patente}
                                </td>
                                <td>
                                    {tipoVehiculo}
                                </td>
                                <td>
                                    {marcaVehiculo}
                                </td>
                                <td>
                                    {modeloVehiculo}
                                </td>
                                <td>
                                    {anioVehiculo}
                                </td>
                                <td>
                                    {numeroMotorVehiculo}
                                </td>
                                <td>
                                    {rutPropietario}
                                </td>
                                <td>
                                    {nombreApellidoPropietario}
                                </td>
                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
        </div>
       
        
    }
    </>
    

  )
}
