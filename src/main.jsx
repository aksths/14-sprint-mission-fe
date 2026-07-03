import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Registration from './pages/Registration/Registration';

function Main() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="items" element={<Products />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main;
