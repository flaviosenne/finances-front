import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';



function App() {
  return (
    <>
      <Header />
        <RouterProvider router={routes} />
        <GlobalStyles/>
      <Footer />
    </>
  );
}

export default App;
