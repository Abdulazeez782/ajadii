import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import ProjectsSection from "./components/ProjectsSection"
import TechStack from "./components/TechStack"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ModellingPortfolio from "./pages/ModellingPortfolio"
import ScrollToSection from "./components/ScrollToSection"
import ScrollToTop from "./components/ScrollToTop"


function App() {

  return (
    <>
      <Router>
        <ScrollToSection />
        <ScrollToTop />
        <Nav /> 

        <Routes>
          <Route path="/" element={
            <>                           
              <Hero />
              <ProjectsSection />
              <TechStack />
              <Footer />             
            </>
          }/>

          <Route path="/modelling-portfolio" element={
            <>              
              <ModellingPortfolio />              
            </>
          }/>
        </Routes>
        
            
      </Router>      
    </>
  )
}

export default App
