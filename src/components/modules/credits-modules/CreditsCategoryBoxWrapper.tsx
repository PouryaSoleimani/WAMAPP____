import React from 'react'
import CreditsCategorySingleBox from './CreditsCategorySingleBox';
import { BiHome, BiWalletAlt } from 'react-icons/bi';
import { RiGlobalLine } from 'react-icons/ri';

const CreditsCategoryBoxWrapper = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);

  const cards = [
    { id: 1, title: 'وام تخصصی', desc: "هر کالایی که بخوای بخری با هر نیازی که داری ما بهت وام میدیم", isShowCountryComps: false, path: "/special-loans", icon: BiWalletAlt, tooltipdesc:"وام های ویژه وام اپ", tooltip:"وام های ویژه وام اپ" },
    { id: 2, title: 'معرفی وام های کشوری', desc: "شرکت های معتبر وام دهی در کشور", isShowCountryComps: true, path: "/national-loans", icon :RiGlobalLine, tooltipdesc:"وام های کشوری", tooltip:"وام های کشوری" },
    { id: 3, title: '  معرفی وام های استانی', desc: "وام دهندگان محلی در استان شما", isShowCountryComps: false, path: "/regional-loans", icon: BiHome, tooltipdesc:"وام های استانی", tooltip:"وام های استانی" },
  ];
  
  return (
    <div className="flex flex-wrap justify-center  h-[78dvh] mb-10">
      {cards.map((card, index) => (
        <CreditsCategorySingleBox key={card.id} card={card} index={index} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      ))}
    </div>
  )
}

export default CreditsCategoryBoxWrapper

