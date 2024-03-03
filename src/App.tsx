import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import styles from './App.module.css';
import Header from './components/Header/Header';

function App() {
  return (
    <main className={ styles.app }>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </main>
  );
}

export default App;
