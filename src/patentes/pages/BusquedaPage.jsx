import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPatentes } from '../../store/slices/patentes/thunks';
import { Navbar } from '../components/Navbar';
import { BusquedaScreen } from '../components/BusquedaScreen';

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


        {
            !patentes.length && <h3 className='text-muted'>No se encontraron resultados!</h3>
        }
        {
            patentes.map((patente) => (
                <BusquedaScreen key={patente.patente} {...patente}/>
            ))
        }
    </div>
         
    }
    </>
    

  )
}
