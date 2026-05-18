import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'

import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Service } from './pages/service/Service'
import { Contact } from './pages/contact/Contact'

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/about',
    element: <About />
  }, {
    path: '/services',
    element: <Service />
  }, {
    path: '/contact',
    element: <Contact />
  }
])

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
