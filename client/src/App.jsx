import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
// import { Profile } from "./pages/Profile"

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
            {/* <Route 
              path="/profile"
              element={<Profile />} 
            /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
