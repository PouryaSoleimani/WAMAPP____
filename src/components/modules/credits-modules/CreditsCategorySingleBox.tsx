import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

interface CardProps {
  id: number;
  title: string;
  description: string;
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
    <Card key={card.id} sx={{ width: 300, height: '130px', margin: 2, borderRadius: 2, boxShadow: 3  ,display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
    <CardContent sx={{ height: '100%', display: 'flex' , flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4" component="div" sx={{ fontSize: 40 }}>
        {card.id}
      </Typography>
      <Typography variant="h5" component="div">
        {card.title}
      </Typography>
        <Typography variant="body2" color="text.secondary">  {card.description}</Typography>
    </CardContent>
  </CardActionArea>
      </Card>
  )
}

export default CreditsCategorySingleBox