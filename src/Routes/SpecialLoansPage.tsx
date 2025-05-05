import NavBarComponent from '../components/templates/NavBarComponent'
import FooterComponent from '../components/templates/FooterComponent'
import HeaderTitleComponent from '../components/modules/header-modules/HeaderTitleComponent'
import FilterDropDownCities from '../components/modules/special-loans-modules/FilterDropDownCities'
import FilterDropDownSubjects from '../components/modules/special-loans-modules/FilterDropDownSubject'
import FilterDropDownGuarantee from '../components/modules/special-loans-modules/FilterDropDownGuarantee'

const SpecialLoansPage = () => {
  return (
    <>
      <NavBarComponent />
      <section className="mx-auto relative inset-0 text-center z-10 h-auto mt-[54px] p-2 bg-[var(--inner-bg)]" dir="rtl">
        <HeaderTitleComponent title="وام های تخصصی" />
        <FilterDropDownCities/>
        <FilterDropDownSubjects/>
        <FilterDropDownGuarantee/>
      </section>
      <FooterComponent />
    </>
  )
}

export default SpecialLoansPage