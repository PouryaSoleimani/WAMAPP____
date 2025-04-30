import { FaBitcoin, FaLaughWink, FaMoneyBill, FaNewspaper } from "react-icons/fa";
import { BsFileMusicFill, BsPeopleFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";
import FooterAccordion from '../modules/footer-modules/FooterAccordion';

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
    <div className='text-[var(--text-primary)] bg-[var(--home-bg)] flex flex-col items-center justify-center max-w-screen'>

          <div dir="rtl" className="w-full  px-4 justify-between m-0 max-w-[500px]  flex flex-col gap-4">
              {FooterItemsData.map(item => (
                  <FooterAccordion key={item.id} title={item.title} desc={item.desc} icon={item.icon} />
              ))}
          </div>
          <div id='FOOTER__COPYRIGHT' className='flex flex-col items-center justify-center w-full h-full p-4' dir='ltr'>
            <p className='text-xs'>© 2025 Vamapp. All rights reserved.</p>
            <p className='text-xs'>Developed by Vamapp Team</p>
            <p className='text-xs'>Contact us: support@vamapp.com</p>
        </div>
    </div>
  )
}

export default FooterComponent