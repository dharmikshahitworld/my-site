import React from 'react'
import { Outlet } from 'react-router-dom'
// import Dashboard from '../components/dashboard'
import { Navigation } from '../components/layout'
import '../custom.scss'

export const Root: React.FC<object> = () => {
  return (
    <div>
      <Navigation />
      {/* <Dashboard /> */}
      <Outlet />
    </div>
  )
}
