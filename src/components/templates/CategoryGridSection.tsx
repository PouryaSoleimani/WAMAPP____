import CategoryGridBoxComponent from '../modules/categories-modules/CategoryGridBoxComponent'

const boxDatas = [
    { id: 1, title: "پزشکی", img: "/new-vectors/medical.png" },
    { id: 2, title: "بازار مالی", img: "/new-vectors/financial.png" },
    { id: 3, title: " تحصیل", img: "/new-vectors/education.png" },
    { id: 4, title: "فریلنسری", img: "/new-vectors/freelance.png" },
    { id: 5, title: "گردشگری", img: "/new-vectors/tourist.png" },
    { id: 6, title: "مد و فشن", img: "/new-vectors/fashion.png" },
    { id: 7, title: " لوازم ساختمان", img: "/new-vectors/construction.png" },
    { id: 8, title: "رستوران", img: "/new-vectors/restaurant.png" },
    { id: 9, title: "لوازم دیجیتال", img: "/new-vectors/digital.png" },
]   



const CategoryGridSection = () => {
    return (
        <div className='GRID__PARENT VazirBold'>
            {boxDatas.map((item) => (
                <CategoryGridBoxComponent key={item.id} {...item} />
            ))}
        </div>
    )
}

export default CategoryGridSection