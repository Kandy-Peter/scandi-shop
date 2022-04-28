import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Tech from './pages/Tech'
import Women from './pages/Women';
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path="/Tech" exact element={<Tech />} />
        <Route path="/Women" exact element={<Women />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
