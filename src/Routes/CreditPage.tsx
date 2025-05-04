import { Box } from "@mui/material"
import CreditsCategoryBox from "../components/modules/credits-modules/CreditsCategoryBox"
import NavBarComponent from "../components/templates/NavBarComponent"
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent"
import FooterComponent from "../components/templates/FooterComponent"


const CreditPage = () => {
  return (
    <section className="mx-auto relative inset-0 text-center z-10 h-auto mt-[55px] p-2" dir="rtl">
    <NavBarComponent/>
    <HeaderTitleComponent title="دریافت اعتبار خرید کالا" />
    <Box className="w-full h-full pt-16 px-2">
      <CreditsCategoryBox />
    </Box>
    <FooterComponent/>
    </section>
  )
}

export default CreditPage