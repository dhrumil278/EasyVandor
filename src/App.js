import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Shop from './components/shop';
import Cart from './components/cart';
import './Style/App.less';
import { HorizontalNavbar } from './components/horizontalNavbar';
import EasyVandor from './pages/easyVandor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HorizontalNavbar />
        <Routes>
          <Route exact path='/' element={<EasyVandor />}>
            <Route exact path='shop' element={<Shop />} />
            <Route exact path='cart' element={<Cart />} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;