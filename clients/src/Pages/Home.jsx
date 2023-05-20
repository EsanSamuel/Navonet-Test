import React from "react";

import {
  Button,
  Navbar,
  Text,
  Card,
  Service,
  Center,
  Card2,
  Api,
} from "../components";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>

      <div className="p-10">
        <Text />

        <Card />

        <Service />

        <Center />

        <Card2 />
        <Api />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
