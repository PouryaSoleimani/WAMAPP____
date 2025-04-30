import { FaBitcoin, FaLaughWink, FaMoneyBill, FaNewspaper } from "react-icons/fa";
import SingleAccordion from "./MenuAccordion";
import { BsFileMusicFill, BsPeopleFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";

const MenuItemsData = [
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


const HamburgerMenuContent = () => {

    return (
        <div dir="rtl" className="flex flex-col gap-4 max-w-screen">
            {MenuItemsData.map(item => (
                <SingleAccordion key={item.id} title={item.title} desc={item.desc} icon={item.icon} />
            ))}
        </div>
    )
}

export default HamburgerMenuContent
