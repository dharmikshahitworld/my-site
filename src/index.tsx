import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './routes/root'
import { ErrorPage } from './routes/error'
import { HomePage } from './routes/home'
import Dashboard from './components/dashboard'
import { routes } from './types'

const { index, home, about, services, portfolio, testimonial, contact } = routes

const router = createBrowserRouter([
  {
    path: index,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: home,
        element: <HomePage />,
      },
      {
        path: about,
        element: <h1>About</h1>,
      },
      {
        path: services,
        element: <h1>Services</h1>,
      },
      {
        path: portfolio,
        element: <h1>Portfolio</h1>,
      },
      {
        path: testimonial,
        element: <h1>Testimonial</h1>,
      },
      {
        path: contact,
        element: <h1>Contact</h1>,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
