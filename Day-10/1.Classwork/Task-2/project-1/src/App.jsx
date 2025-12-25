import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Footer from "./components/Shared/Footer/footer"
import Header from "./components/Shared/Header/Header"
import About from "./pages/AboutPage/About"
function App() {
  return (
    <>
      <header />

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<About />}>


          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
