import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Shop from './components/shop';
import Cart from './components/cart';
import Profile from './components/profile';
import AddShopItem from './components/addShopItem';
import './Style/App.less';
import { HorizontalNavbar } from './components/horizontalNavbar';
import EasyVandor from './pages/easyVandor';
import AddShop from './components/addShop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HorizontalNavbar />
        <Routes>
          <Route exact path='/' element={<EasyVandor />}>
            <Route exact path='shop' element={<Shop />} />
            <Route exact path='cart' element={<Cart />} />
            <Route exact path='profile' element={<Profile />} />
            <Route exact path='addShop' element={<AddShop />} />
            <Route exact path='addShopItem' element={<AddShopItem />} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;