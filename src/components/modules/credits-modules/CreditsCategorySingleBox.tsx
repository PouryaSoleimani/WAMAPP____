import { FaChevronLeft } from "react-icons/fa"; 
import { Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react';

interface CardProps {
  id: number;
  title: string;
  icon: React.ElementType ;
}
interface CreditsCategorySingleBoxProps {
  card: CardProps;
  index: number;
  selectedCard: number;
  setSelectedCard: (index: number) => void;
}
// COMPONENT ===============================================================================================================================================================================
const CreditsCategorySingleBox:React.FC<CreditsCategorySingleBoxProps> = ({ card, index, selectedCard, setSelectedCard }) => {
  return (
      <Card key={card.id} sx={{ width: "100%", height: '80px', margin: 2, borderRadius: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? '' : undefined}
              sx={{
                  backgroundColor: selectedCard === index ? 'primary.main' : 'background.paper',
                  height: '100%',
                  borderRadius: 2,
                  color: selectedCard === index ? 'white' : 'text.primary',
                  transition: 'background-color 0.3s ease',
                  '&:hover': { backgroundColor: selectedCard === index ? 'primary.dark' : 'action.hover', },
              }}
          >
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                      {React.createElement(card.icon, { style: { fontSize: '40px' , backgroundColor : "#cccccc9d" , padding : "6px" , borderRadius: '4px' } })}
                  </div>
                  <h3 className='font-bold text-md tracking-tight'>
                      {card.title}
                  </h3>
                  <FaChevronLeft />
              </CardContent>
          </CardActionArea>
      </Card>
  )
}

export default CreditsCategorySingleBox