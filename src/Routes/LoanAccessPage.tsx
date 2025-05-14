import NavBarComponent from "../components/templates/NavBarComponent"
import { useParams } from "react-router"
import { Button } from "@mui/material"
import BottomNavBarComponent from "../components/modules/bottom-navbar/BottomNavbarComponent"
import { cards } from "./../../db/db.json"
import { BiPlus } from "react-icons/bi"


const LoanAccessPage = () => {

    const { id } = useParams()
    const SingleLoan = cards.find(card => card.id === Number(id))
    console.info(SingleLoan)


    return (
        <section className="bg-[var(--inner-bg)] h-auto overflow-y-auto">
            <NavBarComponent />
            <div id="MAIN" className="w-screen h-screen flex flex-col items-start justify-start gap-y-3 p-3 pt-16 text-[var(--text-primary)]">
                <div className="w-full  rounded-lg p-3.5 bg-[var(--grid-box)] shadow-sm shadow-zinc-800 mt-4">
                    <h3 id="HEADER__TITLE" className="p-3 rounded text-lg w-full flex items-center justify-between border VazirBold border-[var(--inner-box-hover)]"> مبلغ <p>۴۰,۰۰۰,۰۰۰ ریال</p> </h3>
                    <div className="bg-[var(--inner-bg)] p-2 mt-2 rounded-full flex gap-6 items-center VazirLight tracking-tight text-[var(--text-secondary)] cursor-pointer text-sm"><BiPlus className="bg-[var(--inner-box-bg)] rounded-full p-1 w-6 h-6 border border-zinc-400" />تعداد اقساط خود را از ۱ تا ۱۲ ماه انتخاب کنید</div>
                    <ul id="INNER" className='bg-[var(--inner-bg) mt-3  w-full text-sm font-extralight  rounded-lg list-disc list-inside VazirMedium p-3 space-y-4 bg-blue-200/70 text-[var(---blue-text)]'>
                        <li className="w-full flex items-center justify-between border-b pb-4">مبلغ تسهیلات <p>۴۰,۰۰۰,۰۰۰ ریال</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">میزان سود <p>۱۴ درصد</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">تعداد ماه <p>۱۲ ماه</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">مبلغ ماهانه <p>۱‍,۲۲۵,۰۰۰ ریال</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">سود <p>۱‍,۲۲۵,۰۰۰  ریال</p></li>
                    </ul>
                    <p className="w-full flex items-center justify-between  pb-4 text-center text-sm VazirLight bg-pink-200/70 text-pink-900 p-3 my-2 rounded">در صورت تغییر تصمیم در تعداد بازپرداخت اقساط ‌تصمیم شما قابل اجرا می باشد.</p>
                </div>
                <Button variant='contained' color='primary' sx={{ width: "100%", margin: "5px 0 0 0", padding: "13px", fontFamily: "Vazir Medium", fontSize: "16px" }} > اعتبار سنجی </Button>
                <Button variant='contained' color='success' sx={{ width: "100%", margin: "-4px 0 0 0", padding: "13px", fontFamily: "Vazir Medium", fontSize: "16px" }} > دریافت تسهیلات </Button>
            </div>
            <BottomNavBarComponent />

        </section>
    )
}

export default LoanAccessPage