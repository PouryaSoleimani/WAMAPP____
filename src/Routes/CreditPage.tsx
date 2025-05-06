import CreditsCategoryBox from "../components/modules/credits-modules/CreditsCategoryBoxWrapper"
import NavBarComponent from "../components/templates/NavBarComponent"
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent"
import BottomNavBarComponent from "../components/modules/bottom-navbar/BottomNavbarComponent"


const CreditPage = () => {
  return (
    <>
      <NavBarComponent />
      <section className="mx-auto relative inset-0 text-center z-10 mt-[54px] p-2 bg-[var(--inner-bg)] h-full" dir="rtl">
        <HeaderTitleComponent title="لیست وام دهندگان" />
          <CreditsCategoryBox />
          <BottomNavBarComponent/>
      </section>
    </>
  )
}

export default CreditPage