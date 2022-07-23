import React, { Suspense } from "react";
import Layout from "./components/ui/Layout";
import Loading from "./components/ui/Loading";

const HomePage = React.lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <HomePage />
      </Layout>
    </Suspense>
  );
}
