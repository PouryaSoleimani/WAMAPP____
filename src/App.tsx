// ^ HOME PAGE ==================================================================================================================================================
import HeaderButtonsTopComponent from "./components/modules/header-modules/HeaderButtonsTopComponent";
import HeaderTitleComponent from "./components/modules/header-modules/HeaderTitleComponent";
import NavBarComponent from "./components/templates/NavBarComponent";
import CategoryFlexSection from "./components/templates/CategoryFlexSection";
import CategoryGridSection from "./components/templates/CategoryGridSection";
import FooterComponent from "./components/templates/FooterComponent";

function App() {
    return (
        <>
            <NavBarComponent />
            <main className="mx-auto relative inset-0 text-center z-10 h-auto mt-[55px] p-2" dir="rtl">
                <HeaderTitleComponent />
                <HeaderButtonsTopComponent />
                <CategoryFlexSection />
                <CategoryGridSection />
            </main>
            <FooterComponent/>
        </>
    );
}   

export default App;
