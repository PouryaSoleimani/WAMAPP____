import NavBarComponent from "../components/templates/NavBarComponent"
import { useParams } from "react-router"
import { Button } from "@mui/material"
import BottomNavBarComponent from "../components/modules/bottom-navbar/BottomNavbarComponent"
import { cards } from "./../../db/db.json"


const LoanAccessPage = () => {

    const { id } = useParams()
    const SingleLoan = cards.find(card => card.id === Number(id))
    console.info(SingleLoan)


    return (
        <section className="bg-[var(--inner-bg)]">
            <NavBarComponent />
            <div id="MAIN" className="w-screen h-screen flex flex-col items-start justify-start gap-y-3 p-3 pt-16 text-[var(--text-primary)]">
                <div className="w-full  rounded-lg p-3.5 bg-[var(--grid-box)] shadow-sm shadow-zinc-800 mt-4">
                    <h3 id="HEADER__TITLE" className="p-3 rounded text-lg w-full flex items-center justify-between border VazirBold"> مبلغ <p>۴۰,۰۰۰,۰۰۰ ریال</p> </h3>
                    <ul id="INNER" className='bg-[var(--inner-bg) mt-3  w-full text-sm font-extralight  rounded-lg list-disc list-inside VazirLight p-3 space-y-4 bg-blue-200/70 text-blue-900'>
                        <li className="w-full flex items-center justify-between border-b pb-4">مبلغ تسهیلات <p className="VazirMedium">۴۰,۰۰۰,۰۰۰ ریال</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">میزان سود <p className="VazirMedium">۱۴ درصد</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">تعداد ماه <p className="VazirMedium">۱۲ ماه</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">مبلغ ماهانه <p className="VazirMedium">۱‍,۲۲۵,۰۰۰ ریال</p></li>
                        <li className="w-full flex items-center justify-between border-b pb-4">سود <p className="VazirMedium">۱‍,۲۲۵,۰۰۰  ریال</p></li>
                    </ul>
                        <p className="w-full flex items-center justify-between  pb-4 text-center text-sm VazirLight bg-pink-200/70 text-pink-900 p-3 my-2 rounded">در صورت تغییر تصمیم در تعداد باز‍برداخت اقساط ُ‌تصمیم شما قابل اجرا می باشد .</p>
                </div>
                <Button variant='contained' color='primary' sx={{ width: "100%", margin: "5px 0 0 0", padding: "13px", fontFamily: "Vazir Medium", fontSize: "16px" }} > اعتبار سنجی </Button>
                <Button variant='contained' color='success' sx={{ width: "100%", margin: "-4px 0 0 0", padding: "13px", fontFamily: "Vazir Medium", fontSize: "16px" }} > دریافت تسهیلات </Button>
            </div>
            <BottomNavBarComponent />

        </section>
    )
}

export default LoanAccessPage