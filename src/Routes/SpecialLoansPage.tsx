import NavBarComponent from '../components/templates/NavBarComponent'
import HeaderTitleComponent from '../components/modules/header-modules/HeaderTitleComponent'
import FilterDropDownCities from '../components/modules/special-loans-modules/FilterDropDownCities'
import FilterDropDownSubjects from '../components/modules/special-loans-modules/FilterDropDownSubject'
import FilterDropDownGuarantee from '../components/modules/special-loans-modules/FilterDropDownGuarantee'
import BottomNavBarComponent from '../components/modules/bottom-navbar/BottomNavbarComponent'
import SpecialLoanSingleBox from '../components/modules/special-loans-modules/SpecialLoanSingleBox'
import { BiHome, BiWalletAlt } from 'react-icons/bi'
import { RiGlobalLine } from 'react-icons/ri'
import React from 'react'

  const cards = [
    { id: 11, title: 'وام تخصصی', desc: "هر کالایی که بخوای بخری با هر نیازی که داری ما بهت وام میدیم", isShowCountryComps: false, path: "/special-loans", icon: BiWalletAlt, tooltipdesc:"وام های ویژه وام اپ", tooltip:"وام های ویژه وام اپ" },
    { id: 12, title: 'معرفی وام های کشوری', desc: "شرکت های معتبر وام دهی در کشور", isShowCountryComps: true, path: "/national-loans", icon :RiGlobalLine, tooltipdesc:"وام های کشوری", tooltip:"وام های کشوری" },
    { id: 13, title: '  معرفی وام های استانی', desc: "وام دهندگان محلی در استان شما", isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 14, title: '  معرفی وام های استانی', desc: "وام دهندگان محلی در استان شما", isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 15, title: '  معرفی وام های استانی', desc: "وام دهندگان محلی در استان شما", isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 16, title: '  معرفی وام های استانی', desc: "وام دهندگان محلی در استان شما", isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 17, title: '  معرفی وام های استانی', desc: "وام دهندگان محلی در استان شما", isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
  ];
const SpecialLoansPage = () => {

    const [selectedCard, setSelectedCard] = React.useState(0)


  return (
		<>
			<NavBarComponent />
			<section className="mx-auto relative inset-0 text-center z-10 mt-[54px] p-2 bg-[var(--inner-bg)]" dir="rtl">
				<HeaderTitleComponent title="وام های تخصصی" />
				<FilterDropDownCities />
				<FilterDropDownSubjects />
				<FilterDropDownGuarantee />
			</section>
			<section className='p-3 mb-12 h-dvh'>
				{cards.map((card, index) => (
					<SpecialLoanSingleBox key={card.id} card={card} index={index} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
				))}
			</section>
			<BottomNavBarComponent />
		</>
	)
}

export default SpecialLoansPage