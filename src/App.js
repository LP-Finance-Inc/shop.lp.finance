import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import SnackbarProviderMessage from "./components/SnackbarProviderMessage";
import Snackbar from "./helper/Snackbar";
import Shop from "./components/Shop";
import Layout from "./components/Layout";

const App = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <SnackbarProviderMessage>
            <Snackbar />
            <Layout>
              <Routes>
                <Route path="/" element={<Shop />} />
              </Routes>
            </Layout>
          </SnackbarProviderMessage>
        </>
      )}
    </>
  );
};

export default App;
