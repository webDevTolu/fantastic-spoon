import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Loading from "./components/ui/Loading";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AddClient = React.lazy(() => import("./pages/AddClient"));
const Error404 = React.lazy(() => import("./pages/Error404"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}
