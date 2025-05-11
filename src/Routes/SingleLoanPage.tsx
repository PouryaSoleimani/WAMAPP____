import React from 'react'
import { useParams } from 'react-router'
import {cards} from "./../../db/db.json"
import NavBarComponent from '../components/templates/NavBarComponent'
import BottomNavBarComponent from '../components/modules/bottom-navbar/BottomNavbarComponent'
import { BiChevronLeft } from 'react-icons/bi'
import { Button } from '@mui/material'


const SingleLoanPage = () => {
const {id} = useParams()
const SingleLoan = cards.find(card => card.id === Number(id))
console.info(SingleLoan)

  return (
		<section>
			<NavBarComponent />
			<div id="MAIN" className="w-screen h-screen flex items-start justify-center p-5 pt-20">
				<div className="w-full  bg-red-600/30 rounded-lg p-3">
				  <h3 id="HEADER__TITLE" className="p-3 pl-0 w-full flex items-center justify-between"> مبلغ تسهیلات <BiChevronLeft className='w-8 h-8' /> </h3>
				  <ul id="INNER" className='bg-blue-600/30 w-full  rounded-lg list-disc list-inside p-3 space-y-4'>
					  <li>شهریه یکساله</li>
					  <li>تعداد ترم</li>
					  <li>میزان سود</li>
					   <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در </li>
					  <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کارب</li>
				  </ul>
				  <Button variant='contained' color='primary' sx={{width : "100%" , margin : "10px 0 0 0" , fontWeight : "bold" , padding  : "10px"}}>دریافت تسهیلات</Button>
				</div>
			</div>
			<BottomNavBarComponent />
		</section>
  )
}

export default SingleLoanPage