import { BiChevronLeft } from "react-icons/bi"
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent"
import NavBarComponent from "../components/templates/NavBarComponent"
import { useNavigate, useParams } from "react-router"
import { Button } from "@mui/material"
import BottomNavBarComponent from "../components/modules/bottom-navbar/BottomNavbarComponent"
import {cards} from "./../../db/db.json"


const LoanAccessPage = ( ) => {

    const { id } = useParams()
    const SingleLoan = cards.find(card => card.id === Number(id))
    console.info(SingleLoan)
    const navigate = useNavigate()
    function goBackHandler() { navigate(-1) }


    return (
        <section className="bg-[var(--inner-bg)]">
            <NavBarComponent />
            <div id="MAIN" className="w-screen h-screen flex flex-col items-start justify-start gap-y-3 p-3 pt-16 text-[var(--text-primary)]">
                <HeaderTitleComponent title={SingleLoan?.title?.toString() || 'دریافت تسهیلات'} />
                <div className="w-full  rounded-lg p-3.5 bg-[var(--grid-box)] shadow-lg shadow-zinc-800 ">
                    <h3 id="HEADER__TITLE" className="p-3 rounded text-lg w-full flex items-center justify-between border"> مبلغ <p>40,000,000 ریال</p> </h3>
                    <ul id="INNER" className='bg-[var(--inner-bg)]  w-full text-sm font-extralight  rounded-lg list-disc list-inside p-3 space-y-4 text-[var(--text-secondary)]'>
                        <li className="w-full flex items-center justify-between border-b pb-4">مبلغ تسهیلات <p>40,000,000 ریال</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">میزان سود <p>14 درصد</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">مبلغ ماهانه <p>1,225,000 ریال</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">سود <p>1,225,000 ریال</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4 text-center">در صورت تغییر تصمیم در تعداد باز‍برداخت اقساط ُ‌تصمیم شما قابل اجرا می باشد .</li>
                    </ul>
                </div>
                <Button variant='contained' color='primary' sx={{ width: "100%", margin: "5px 0 0 0", fontWeight: "bold", padding: "13px", ":hover": { backgroundColor: "darkgreen" } }} >
                    اعتبار سنجی
                </Button>
                <Button variant='contained' color='success' sx={{ width: "100%", margin: "-4px 0 0 0", fontWeight: "bold", padding: "13px", ":hover": { backgroundColor: "darkgreen" } }} >
                    دریافت تسهیلات
                </Button>
            </div>
            <BottomNavBarComponent />

        </section>
    )
}

export default LoanAccessPage