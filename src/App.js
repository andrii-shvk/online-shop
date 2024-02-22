import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart/index";
import ShopContextProvider from "./context/shop-context";
import { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop";
import { PageLoader } from "./ui/pageLoader";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<PageLoader />}>
                <Shop />
              </Suspense>
            } />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Cart />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
