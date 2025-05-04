import React from 'react'
import CreditsCategorySingleBox from './CreditsCategorySingleBox';

const CreditsCategoryBoxWrapper = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const cards = [
    {id :1 , title: 'Card 1', description: 'Description 1' },
    {id: 2, title: 'Card 2', description: 'Description 2' },
    {id: 3, title: 'Card 3', description: 'Description 3' },
  ];
  
  return (
    <>
      {cards.map((card, index) => (
        <CreditsCategorySingleBox key={card.id} card={card} index={index} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      ))}
    </>
  )
}

export default CreditsCategoryBoxWrapper