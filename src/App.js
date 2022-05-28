import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AllBooks from "./pages/AllBooks";
import FavoriteBooks from "./pages/FavoriteBooks";
import FindBook from "./pages/FindBook";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllBooks/>}/>
        <Route path="/favorite-books" element={<FavoriteBooks/>}/>
        <Route path="/find-book" element={<FindBook/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
