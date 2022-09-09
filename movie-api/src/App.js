import './App.css';
import Header from './components/Header/Header'
import MainNavigation from './components/MainNavigation';
import {Container} from '@mui/material'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' component={Trending}  exact />
            <Route path='/movies' component={Movies}   />
            <Route path='/series' component={Series}   />
            <Route path='/search' component={Search}  />
          </Switch>
        </Container>
      </div>
      <MainNavigation/>
    </BrowserRouter>
  );
}

export default App;
