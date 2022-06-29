import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BienvenidaPage, BusquedaPage } from '../patentes'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<BienvenidaPage/>}/>
        <Route path='/busqueda/:patente' element={<BusquedaPage/>}/>
    </Routes>
  )
}
