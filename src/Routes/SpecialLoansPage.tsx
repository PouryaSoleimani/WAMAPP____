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
    { id: 11, title: 'تسهیلات آموزش  و تحصیل',  isShowCountryComps: false, path: "/special-loans", icon: BiWalletAlt, tooltipdesc:"وام های ویژه وام اپ", tooltip:"وام های ویژه وام اپ" },
    { id: 12, title: 'تسهیلات دوم', isShowCountryComps: true, path: "/national-loans", icon :RiGlobalLine, tooltipdesc:"وام های کشوری", tooltip:"وام های کشوری" },
    { id: 13, title: '  تسهیلات سوم', isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 14, title: '  تسهیلات چهارم', isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 15, title: '  تسهیلات پنجم', isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 16, title: '  تسهیلات ششم', isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
    { id: 17, title: '  تسهیلات هفتم', isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
  ];
  
const SpecialLoansPage = () => {

    const [selectedCard, setSelectedCard] = React.useState(0)


  return (
		<section className="bg-[var(--inner-bg)]">
			<NavBarComponent />
			<div className="mx-auto relative inset-0 text-center z-10 mt-[54px] p-2 " dir="rtl">
				<HeaderTitleComponent title="وام های تخصصی" />
				<FilterDropDownCities />
				<FilterDropDownSubjects />
				<FilterDropDownGuarantee />
			</div>
			<div className='pb-16 px-5 mt-2 flex flex-col gap-2'>
				{cards.map((card, index) => (
					<SpecialLoanSingleBox key={card.id} card={card} index={index} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
				))}
			</div>
			<BottomNavBarComponent />
		</section>
	)
}

export default SpecialLoansPage