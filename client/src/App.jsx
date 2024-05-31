import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"

function App() {

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route 
              path="/"
              element={<Home />} 
            />
            <Route 
              path="/signin"
              element={<Signin />} 
            />
            <Route 
              path="/signup"
              element={<Signup />} 
            />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
