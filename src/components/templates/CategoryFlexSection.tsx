import CategoryFlexBoxComponent from '../modules/categories-modules/CategoryFlexBoxComponent';

const categoryFlexBoxesData = [
    { id: 1, title: "شبکه ی سرگرمی" ,animationPath : "/public/animations/flex-box-2.json"},
    { id: 2, title: "فیلم و موزیک" ,animationPath : "./../../../public/animations/flex-box-1.json"},
];
const CategoryFlexSection = () => {



    return (
        <div className='flex  items-center justify-center gap-2 w-full px-2.5 m-0'>
            {categoryFlexBoxesData.map((item) => (
                <CategoryFlexBoxComponent key={item.id} {...item} />
            ))}
        </div>
    );
};

export default CategoryFlexSection;
