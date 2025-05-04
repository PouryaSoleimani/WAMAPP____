import { BsRocketTakeoffFill } from "react-icons/bs"; 
import React from 'react'
import CreditsCategorySingleBox from './CreditsCategorySingleBox';

const CreditsCategoryBoxWrapper = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const cards = [
    {id :1 , title: 'تسهیلات آموزش  و تحصیل', icon: BsRocketTakeoffFill },
    { id: 2, title: 'تسهیلات دوم', icon: BsRocketTakeoffFill },
    { id: 3, title: 'تسهیلات سوم', icon: BsRocketTakeoffFill },
    { id: 4, title: 'تسهیلات چهارم', icon: BsRocketTakeoffFill },
    { id: 5, title: 'تسهیلات پنجم', icon: BsRocketTakeoffFill },
    { id: 6, title: 'تسهیلات ششم', icon: BsRocketTakeoffFill },
    { id: 7, title: 'تسهیلات هفتم', icon: BsRocketTakeoffFill },
  ];
  
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <CreditsCategorySingleBox key={card.id} card={card} index={index} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      ))}
    </div>
  )
}

export default CreditsCategoryBoxWrapper

