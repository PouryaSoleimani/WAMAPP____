import { BsRocketTakeoffFill } from "react-icons/bs"; 
import React from 'react'
import CreditsCategorySingleBox from './CreditsCategorySingleBox';

const CreditsCategoryBoxWrapper = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const cards = [
    {id :1 , title: 'Card 1', description: 'Description 1' , icon: BsRocketTakeoffFill },
    { id: 2, title: 'Card 2', description: 'Description 2', icon: BsRocketTakeoffFill },
    { id: 3, title: 'Card 3', description: 'Description 3', icon: BsRocketTakeoffFill },
    { id: 4, title: 'Card 4', description: 'Description 4', icon: BsRocketTakeoffFill },
    { id: 5, title: 'Card 5', description: 'Description 5', icon: BsRocketTakeoffFill },
    { id: 6, title: 'Card 6', description: 'Description 6', icon: BsRocketTakeoffFill },
    { id: 7, title: 'Card 7', description: 'Description 7', icon: BsRocketTakeoffFill },
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

