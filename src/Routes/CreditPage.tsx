import CreditsCategoryBox from "../components/modules/credits-modules/CreditsCategoryBoxWrapper"
import NavBarComponent from "../components/templates/NavBarComponent"
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent"
import FooterComponent from "../components/templates/FooterComponent"


const CreditPage = () => {
  return (
    <>
      <NavBarComponent />
      <section className="mx-auto relative inset-0 text-center z-10 h-auto mt-[54px] p-2 bg-[var(--inner-bg)]" dir="rtl">
        <HeaderTitleComponent title="لیست وام دهندگان" />
          <CreditsCategoryBox />
      </section>
      <FooterComponent />
    </>
  )
}

export default CreditPage