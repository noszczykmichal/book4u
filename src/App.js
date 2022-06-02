import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

const AllBooks = React.lazy(() => import("./pages/AllBooks"));
const FavoriteBooks = React.lazy(() => import("./pages/FavoriteBooks"));

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" exact element={<AllBooks />} />
          <Route path="/favorite-books" element={<FavoriteBooks />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
