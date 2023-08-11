import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../layout/LayoutApp'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/journal/*" element ={<LayoutApp />} />
    </Routes>
  )
}
