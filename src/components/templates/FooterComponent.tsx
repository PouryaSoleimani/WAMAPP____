import { FaBitcoin, FaLaughWink, FaLinkedin, FaMoneyBill, FaNewspaper, FaTelegram } from "react-icons/fa";
import { BsFileMusicFill, BsPeopleFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { AiFillFacebook, AiFillHeart, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";
import FooterAccordion from '../modules/footer-modules/FooterAccordion';
import { FaSquareWhatsapp } from "react-icons/fa6";

const FooterComponent = () => {

const FooterItemsData = [
    { id : 1, title: "تسهیلات ", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: FaMoneyBill },
    { id: 2, title: " شبکه سرگرمی", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: FaLaughWink },
    { id: 3, title: "اجتماعی ", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: BsPeopleFill },
    { id: 4, title: "فیلم و موزیک ", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: BsFileMusicFill },
    { id: 5, title: " بازارهای مالی", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: FaBitcoin },
    { id: 6, title: "جدیدترین اخبار", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: FaNewspaper },
    { id: 7, title: "پیشنهادات ویژه", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: MdLocalOffer },
    { id: 8, title: "دسته بندی جدید", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: AiFillHeart }, 
    { id: 9, title: "آیتم جدید", desc: "loremloremloremloremlloremloremloremloermloremloremloremloremlorem", icon: HiTemplate }, 
]


  return (
    <div className='text-[var(--text-primary)] bg-[var(--menu-bg)]  flex flex-col items-stretch' dir='rtl'>
        <img src="/logo.png" alt="Footer Image" className="w-32 h-auto my-6 mx-auto" />


          <div dir="rtl" className="justify-between flex flex-col gap-y-4 gap-x-0 w-[95vw] mx-auto my-0 bg-[var(--menu-bg)]  ">
              {FooterItemsData.map(item => (
                  <FooterAccordion key={item.id} title={item.title} desc={item.desc} icon={item.icon} />
              ))}
          </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-3xl w-full h-full p-4">
        <FaLinkedin className="text-blue-500 hover:text-blue-700 duration-300 cursor-pointer" />
        <AiFillTwitterCircle className="text-blue-400 hover:text-blue-600 duration-300 cursor-pointer" />
        <AiFillFacebook className="text-blue-600 hover:text-blue-800 duration-300 cursor-pointer" />
        <AiFillInstagram className="text-pink-500 hover:text-pink-700 duration-300 cursor-pointer" />
        <FaSquareWhatsapp className="text-green-500 hover:text-green-700 duration-300 cursor-pointer" />
        <FaTelegram className="text-blue-400 hover:text-blue-600 duration-300 cursor-pointer" />
      </div>
          <div id='FOOTER__COPYRIGHT' className='flex flex-col items-center justify-center w-2/3 mx-auto h-full p-4' dir='ltr'>
        <p className='text-xs'>© 2025 Vamapp. All rights reserved.</p>
            <p className='text-xs'>Developed by Vamapp Team</p>
            <p className='text-xs'>Contact us: support@vamapp.com</p>
        </div>
    </div>
  )
}

export default FooterComponent