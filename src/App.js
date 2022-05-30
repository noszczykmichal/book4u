import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AllBooks from "./pages/AllBooks";
import FavoriteBooks from "./pages/FavoriteBooks";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllBooks/>}/>
        <Route path="/favorite-books" element={<FavoriteBooks/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
