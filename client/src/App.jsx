import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"

function App() {

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route 
              path="/"
              element={<Home />} 
            />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
