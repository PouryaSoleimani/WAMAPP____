// ^ ROUTER _________________________________________________________________________________________________________
import { createBrowserRouter } from "react-router-dom";
import  HomePage  from "./src/Routes/HomePage";
import CreditPage from "./src/Routes/CreditPage";
import SpecialLoansPage from "./src/Routes/SpecialLoansPage";
import NationalLoansPage from "./src/Routes/NationalLoansPage";
import RegionalLoansPage from "./src/Routes/RegionalLoansPage";
import SingleLoanPage from "./src/Routes/SingleLoanPage";



export const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/credits', element: <CreditPage /> },
	{ path: '/special-loans', element: <SpecialLoansPage /> },
	{ path: '/national-loans', element: <NationalLoansPage /> },
	{ path: '/regional-loans', element: <RegionalLoansPage /> },
	{ path: '/single-loan-page/:id', element: <SingleLoanPage /> }
])