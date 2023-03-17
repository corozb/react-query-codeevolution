import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import './App.css'
import appRoutes from './routes/appRoutes'

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <nav>
            <ul>
              {appRoutes.map((link) => {
                if (link.title) {
                  return (
                    <li key={link.path}>
                      <Link to={link.path}>{link.title}</Link>
                    </li>
                  )
                }
              })}
            </ul>
          </nav>
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
