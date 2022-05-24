import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BooksSearch from "./pages/BooksSearch";
import FavoriteBooks from "./pages/FavoriteBooks";

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
