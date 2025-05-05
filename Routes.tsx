// ^ ROUTER _________________________________________________________________________________________________________
import { createBrowserRouter } from "react-router-dom";
import  HomePage  from "./src/Routes/HomePage";
import CreditPage from "./src/Routes/CreditPage";
import SpecialLoansPage from "./src/Routes/SpecialLoansPage";



export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/credits', element: <CreditPage /> },
    { path: '/special-loans', element: <SpecialLoansPage /> },
])