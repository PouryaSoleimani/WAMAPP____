import React from 'react'
import CreditsCategorySingleBox from './CreditsCategorySingleBox';

const CreditsCategoryBoxWrapper = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const cards = [
    {id :1 , title: 'وام تخصصی', desc : "هر کالایی که بخوای بخری با هر نیازی که داری ما بهت وام میدیم" , isShowVamapp : true  ,isShowCountryComps: false , path:"/special-loans"},
    { id: 2, title: 'معرفی وام های کشوری', desc: "شرکت های معتبر وام دهی در کشور",  isShowVamapp : false , isShowCountryComps : true, path:"/national-loans" },
    { id: 3, title: '  معرفی وام های استانی', desc: "وام دهندگان محلی در استان شما", isShowVamapp : false , isShowCountryComps: false, path:"/regional-loans" },
  ];
  
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <CreditsCategorySingleBox key={card.id} card={card} index={index} selectedCard={selectedCard} setSelectedCard={setSelectedCard} isShowVamapp={card.isShowVamapp} />
      ))}
    </div>
  )
}

export default CreditsCategoryBoxWrapper

