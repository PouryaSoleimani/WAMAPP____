// ^ ROUTER _________________________________________________________________________________________________________
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import  HomePage  from "./src/pages/HomePage";

export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    // //^PRODUCTS
    // {
    //  path: '/products', element: <Products />, children: [
    //   { path: 'all', element: <AllProducts /> },
    //   { path: 'men', element: <MenProducts /> },
    //   { path: 'women', element: <WomenProducts /> },
    //   { path: 'kids', element: <KidsProducts /> },
    //   { path: 'sale', element: <SaleProducts /> },
    //   { path: 'jerseys', element: <KitsProducts /> },
    //   { path: 'productpage', element: <ProductPage /> },ّ
    //  ]
    // }
   ])