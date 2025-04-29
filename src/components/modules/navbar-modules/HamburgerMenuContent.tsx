import { FaMoneyBill } from "react-icons/fa";
import SingleAccordion from "./SingleAccordion";



const HamburgerMenuContent = () => {


    return (
        <div dir="rtl" className="flex flex-col gap-4">
            <SingleAccordion title="تسهیلات" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." icon={FaMoneyBill} />
            <SingleAccordion title="تسهیلات" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." icon={FaMoneyBill} />
            <SingleAccordion title="تسهیلات" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." icon={FaMoneyBill} />
            <SingleAccordion title="تسهیلات" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." icon={FaMoneyBill} />
            <SingleAccordion title="تسهیلات" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." icon={FaMoneyBill} />
        </div>
    )
}

export default HamburgerMenuContent
