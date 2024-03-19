import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoArrowUp } from 'react-icons/go';
import Home from './pages/Home/Home';
import styles from './App.module.css';
import Header from './components/header/Header';
import Projects from './pages/Home/Projects';
import Footer from './components/footer./Footer';
import useScroll from './hooks/useScroll';
import Contact from './pages/Contact';
import Admin from './pages/Admin/Admin';
import CreateProject from './components/CreateProjectForm/CreateProject';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollToTop, handleScroll, elementPosition } = useScroll();

  useEffect(() => {
    if (elementPosition.bottom < 10) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  }, [elementPosition]);

  return (
    <main
      className={ styles.app }
      onScroll={ () => handleScroll('first-section') }
    >
      {
        showBackToTop && (
          <button
            className={ styles.backTopBtn }
            aria-label="Voltar para o topo"
            onClick={ () => scrollToTop() }
          >
            <GoArrowUp />
          </button>
        )
      }
      <Header />
      <Routes>
        <Route path="/projetos" element={ <Projects /> } />
        <Route path="/contato" element={ <Contact /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/admin/create-project" element={ <CreateProject /> } />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
