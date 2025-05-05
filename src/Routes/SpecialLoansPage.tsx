import NavBarComponent from '../components/templates/NavBarComponent'
import FooterComponent from '../components/templates/FooterComponent'
import HeaderTitleComponent from '../components/modules/header-modules/HeaderTitleComponent'
import FilterDropDown from '../components/modules/special-loans-modules/FilterDropDown'

const SpecialLoansPage = () => {
  return (
    <>
      <NavBarComponent />
      <section className="mx-auto relative inset-0 text-center z-10 h-auto mt-[54px] p-2 bg-[var(--inner-bg)]" dir="rtl">
        <HeaderTitleComponent title="وام های تخصصی" />
        <FilterDropDown/>
      </section>
      <FooterComponent />
    </>
  )
}

export default SpecialLoansPage