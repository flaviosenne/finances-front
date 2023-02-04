import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

import GlobalStyles from './styles/GlobalStyles';



function App() {
  return (
    <>

      <RouterProvider router={routes} />
      <GlobalStyles />
    </>
  );
}

export default App;
