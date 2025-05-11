import { BsRocketTakeoffFill } from "react-icons/bs"; 
import { FaChevronLeft } from 'react-icons/fa'
import { Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'
import { Link } from "react-router";

interface CardProps { id: number, title: string, path: string }
interface SpecialLoanSingleBoxProps { card: CardProps, index: number, selectedCard: number, setSelectedCard: (index: number) => void }

const SpecialLoanSingleBox: React.FC<SpecialLoanSingleBoxProps> = ({ card, index, selectedCard, setSelectedCard }) => {
	return (
		<Link to={`/single-loan-page/${card.id}`} >
			<Card key={card.id} sx={{ width: '100%', height: 'auto', margin: '12px 1.5px', borderRadius: '10px', backgroundColor: "var(--inner-box-bg)", boxShadow: 2, display: 'flex', padding: 0, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: 'none', transition: 'all 300ms ease', color: 'var(--text-primary)', scale: selectedCard === index ? '0.98' : '1' }}>
				<CardActionArea onClick={() => setSelectedCard(index)} data-active={selectedCard === index ? '' : undefined} sx={{ boxSizing: 'border-box', height: '100%', borderRadius: 2, color: selectedCard === index ? 'var(--text-primary)' : 'var(--text-primary)', transition: 'background-color 0.3s ease', '&:hover': { backgroundColor: selectedCard === index ? 'var(--inner-box-hover)' : 'var(--inner-box-hover)' } }}>
					<CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
						<div id="TOP" className="flex items-center justify-between w-full">
							<BsRocketTakeoffFill className="w-10 h-10 bg-[var(--gray)]  p-1 rounded-md" />
							<h3 className="font-extrabold flex items-center gap-3 text-lg">{card.title}</h3>
							<FaChevronLeft />
						</div>
						<div className="flex flex-col items-stretch justify-between w-full ">
							<div className="flex w-full items-center justify-between px-2 py-2.5 bg-[var(--gray)] rounded-md mt-4 ">
								<p>با اعتبار سنجی</p>
								<p>1 تا 10 میلیون تومان</p>
							</div>
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	)
}

export default SpecialLoanSingleBox
