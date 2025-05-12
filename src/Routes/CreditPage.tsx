import CreditsCategoryBox from "../components/modules/credits-modules/CreditsCategoryBoxWrapper"
import NavBarComponent from "../components/templates/NavBarComponent"
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent"
import BottomNavBarComponent from "../components/modules/bottom-navbar/BottomNavbarComponent"


const CreditPage = () => {
  return (
    <section className="flex flex-col h-screen w-full bg-[var(--inner-bg)]">
      <NavBarComponent />
      <div className="relative inset-0 text-center z-10 mt-[54px] p-2 h-[90vh]" dir="rtl">
        <span className="block mt-2">{""}</span>
        <HeaderTitleComponent textSize="2xl" title="لیست وام دهندگان" />
          <CreditsCategoryBox />
          <BottomNavBarComponent/>
      </div>
    </section>
  )
}

export default CreditPage