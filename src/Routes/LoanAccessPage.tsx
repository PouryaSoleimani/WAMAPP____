import { BiChevronLeft } from "react-icons/bi"
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent"
import NavBarComponent from "../components/templates/NavBarComponent"
import { Link, useNavigate, useParams } from "react-router"
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
                    <h3 id="HEADER__TITLE" className="p-3 pl-0  text-lg w-full flex items-center justify-between"> مبلغ تسهیلات <BiChevronLeft onClick={goBackHandler} className='w-8 h-8 cursor-pointer' /> </h3>
                    <ul id="INNER" className='bg-[var(--inner-bg)]  w-full text-sm font-extralight  rounded-lg list-disc list-inside p-3 space-y-4 text-[var(--text-secondary)]'>
                        <li>شهریه یکساله</li>
                        <li>تعداد ترم</li>
                        <li>میزان سود</li>
                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در </li>
                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کارب</li>
                    </ul>
                </div>
                <Button
                    variant='contained'
                    color='success'
                    sx={{ width: "100%", margin: "2px auto", fontWeight: "bold", padding: "13px", ":hover": { backgroundColor: "darkgreen" } }}
                >
                    دریافت تسهیلات
                </Button>
            </div>
            <BottomNavBarComponent />

        </section>
    )
}

export default LoanAccessPage