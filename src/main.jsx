import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Feature } from './routes/Feature'
import { Token } from './routes/Token'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/features', element: <Feature /> },
  { path: '/token', element: <Token /> },


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
