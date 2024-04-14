import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AllBooks from "./pages/AllBooks";
import Preloader from "./components/ui/Preloader";

const FavoriteBooks = React.lazy(() => import("./pages/FavoriteBooks"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" exact element={<AllBooks />} />
          <Route path="/favorite-books" element={<FavoriteBooks />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
