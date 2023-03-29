import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/projects" component={ Projects } />
      </Switch>
    </CssBaseline>
  );
}
export default App;
