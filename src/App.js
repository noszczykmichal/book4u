import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import BooksSearch from "./components/pages/BooksSearch";
import FavoriteBooks from "./components/pages/FavoriteBooks";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<BooksSearch/>}/>
        <Route path="/favorite-books" element={<FavoriteBooks/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
