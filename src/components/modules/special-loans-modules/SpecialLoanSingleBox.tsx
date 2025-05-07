import { BsRocketTakeoffFill } from "react-icons/bs"; 
import { FaChevronLeft } from 'react-icons/fa'
import { Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'

interface CardProps {
	id: number
	title: string
	desc: string
	path: string
}
interface SpecialLoanSingleBoxProps {
	card: CardProps
	index: number
	selectedCard: number
	setSelectedCard: (index: number) => void
}

const SpecialLoanSingleBox: React.FC<SpecialLoanSingleBoxProps> = ({ card, index, selectedCard, setSelectedCard }) => {
	return (
		<Card
			key={card.id}
			sx={{
				width: '100%',
				height: 'auto',
				margin: '10px 1.5px',
				borderRadius: '8px',
				boxShadow: 2,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				border: 'none'
			}}>
			<CardActionArea
				onClick={() => setSelectedCard(index)}
				data-active={selectedCard === index ? '' : undefined}
				sx={{
					backgroundColor: selectedCard === index ? 'var(--inner-box-hover)' : 'var(--inner-box-bg)',
					height: '100%',
					borderRadius: 4,
					color: selectedCard === index ? 'var(--text-primary)' : 'var(--text-primary)',
					transition: 'background-color 0.3s ease',
					'&:hover': { backgroundColor: selectedCard === index ? 'var(--inner-box-hover)' : 'var(--inner-box-hover)' }
				}}>
				<CardContent
					sx={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
						borderRadius: '25px',
						padding: '20px 10px',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
					<div id="TOP" className="flex items-center justify-between w-full">
						<h3 className="font-bold flex items-center gap-3 text-xl "><BsRocketTakeoffFill /> {card.title}</h3>
						<FaChevronLeft />
					</div>

					<div className="flex flex-col items-stretch justify-between w-full ">
						<div className="flex w-full items-center justify-between gap-4 text-justify">
							<p className="w-[70%] text-justify text-[var(--text-secondary)] text-md">{card.desc}</p>
						</div>
						<div className="flex w-full items-center justify-center bg-white py-1  rounded-3xl mt-4 ">
							<p>1 تا 10 میلیون تومان</p>
						</div>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default SpecialLoanSingleBox
