import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Tech from './pages/Tech';
import Clothes from './pages/Clothes';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path="/Tech" exact element={<Tech />} />
        <Route path="/Clothes" exact element={<Clothes />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
