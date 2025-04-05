import { Outlet, Route, Routes } from "react-router-dom";
import { Auth, Home, Order } from "./pages";
import { Footer, Navigation } from "./components";

const Layout = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/place-order" element={<Order />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
