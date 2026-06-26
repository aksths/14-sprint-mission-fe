import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductList from './pages/Products/ProductList/ProductList';

function Main() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
            <Route path="items">
              <Route index element={<Products />} />
              <Route path="list" element={<ProductList />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main;
