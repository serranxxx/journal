import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppProvider } from './context/AppProvider'

export const JournalApp = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
