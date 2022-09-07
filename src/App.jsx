import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import MapContainer from './components/mapContainer';
import './Style/App.less';
import { HorizontalNavbar } from './components/horizontalNavbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HorizontalNavbar />
        <Routes>
          <Route exact path='/' element={<MapContainer />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;