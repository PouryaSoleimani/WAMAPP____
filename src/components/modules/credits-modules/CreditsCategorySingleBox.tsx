import { FaInfoCircle } from "react-icons/fa"; 
import { Button, Card, CardActionArea, CardContent, Fade, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router";
import { IconType } from 'react-icons';
import ClickAwayListener from '@mui/material/ClickAwayListener';

interface CardProps {
      id: number;
      title: string;
      desc: string;
      tooltip: string;
      path: string;
      icon: IconType
      tooltipdesc: string
}
interface CreditsCategorySingleBoxProps {
      card: CardProps;
      index: number;
      selectedCard: number;
      setSelectedCard: (index: number) => void;
}



const CreditsCategorySingleBox: React.FC<CreditsCategorySingleBoxProps> = ({ card, index, selectedCard, setSelectedCard }) => {
      const [open, setOpen] = useState(false);

      const handleTooltipToggle = () => { setOpen(prev => !prev) };
      const handleClickAway = () => { setOpen(false) };

      return (
		  <Card
			  key={card.id}
			  sx={{ width: '100%', height: '27%', gap: '10px', margin: '5px 1.5px', borderRadius: "10px", boxShadow: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: 'none', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(0.98)' } }}>
			  <CardActionArea
				  onClick={() => setSelectedCard(index)}
				  data-active={selectedCard === index ? '' : undefined}
				  sx={{
					  backgroundColor: 'var(--inner-box-bg)', 
					  height: '100%',
					  color: 'var(--text-primary)', 
					  boxSizing : "border-box",
					  border: selectedCard === index ? '3px solid transparent' : 'none', 
					  transition: 'border 0.1s ease',

				  }}>
				  <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '8px' }}>
					  <div className="flex flex-col items-start justify-start gap-2 basis-[90%]">
						  <div className="flex items-center justify-between w-full">
							  <div className="flex items-center justify-start w-full">
								  <h3 className="font-extrabold text-lg m-0 p-0 VazirBold">{card.title}</h3>
								  <ClickAwayListener onClickAway={handleClickAway}>
									  <Tooltip onClose={() => setOpen(false)} open={open} disableFocusListener disableHoverListener disableTouchListener title={<p>{card.tooltipdesc}</p>} slots={{ transition: Fade }} slotProps={{ popper: { disablePortal: true, modifiers: [{ name: 'offset', options: { offset: [0, -14] } }] } }} sx={{ '& .MuiTooltip-popupIndicator': { color: 'var(--text-secondary)' } }}>
										  <IconButton>
											  <FaInfoCircle onClick={handleTooltipToggle} className="w-4 h-4 text-[var(--text-secondary)]" />
										  </IconButton>
									  </Tooltip>
								  </ClickAwayListener>
							  </div>
									{React.createElement(card.icon, { className: 'w-12 h-12 ml-2 translate-y-2 text-[var(--text-primary)]' })}
								</div>
								<p className="text-sm font-bold tracking text-start w-[60%] text-[var(--text-secondary)]">{card.desc}</p>
							</div>

							<div className="flex w-full items-center justify-end basis-[10%]">
						  <Button component={Link} color="primary" variant="contained" to={card.path} sx={{ textDecoration: 'none', borderRadius: "8px", padding: '5px 10px', letterSpacing: '-0.5px', fontWeight: '600', fontFamily: 'Vazir', width: "100%" }}>
									درخواست وام
						  </Button>
							</div>
						</CardContent>
					</CardActionArea>
				</Card>
			)
};

export default CreditsCategorySingleBox;
