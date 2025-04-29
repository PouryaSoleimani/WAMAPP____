// ^ HOME PAGE ==================================================================================================================================================
import HeaderButtonsTopComponent from "./components/modules/header-modules/HeaderButtonsTopComponent";
import HeaderTitleComponent from "./components/modules/header-modules/HeaderTitleComponent";
import NavBarComponent from "./components/templates/NavBarComponent";
import CategoryFlexSection from "./components/templates/CategoryFlexSection";
import CategoryGridSection from "./components/templates/CategoryGridSection";

function App() {
    return (
        <div className="mx-auto relative inset-0 text-center z-10 h-auto mt-[55px]" dir="rtl"  >
            <NavBarComponent/>
            <HeaderTitleComponent />
            <HeaderButtonsTopComponent />
            <CategoryFlexSection />
            <CategoryGridSection />
        </div>
    );
}

export default App;
