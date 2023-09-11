import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../layout/LayoutApp'
import { WritingModule } from '../layout/WritingModule'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/journal/*" element ={<LayoutApp />} />
        <Route path="/journal/writing" element ={<WritingModule />} />
    </Routes>
  )
}
