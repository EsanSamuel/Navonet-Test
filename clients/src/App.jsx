import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Auth, EthHome, Form, ApiPage, Transactions } from "./Pages";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/EthHome" element={<EthHome />} />
          <Route path="/form" element={<Form />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
      {/*<Footer />*/}
    </div>
  );
};

export default App;
