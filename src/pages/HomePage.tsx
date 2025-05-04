// ^ HOME PAGE ==================================================================================================================================================
import HeaderButtonsTopComponent from "../components/modules/header-modules/HeaderButtonsTopComponent";
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent";
import CategoryFlexSection from "../components/templates/CategoryFlexSection";
import CategoryGridSection from "../components/templates/CategoryGridSection";

function HomePage() {
      return (
            <main className="mx-auto relative inset-0 text-center z-10 h-auto mt-[55px] p-2" dir="rtl">
                  <HeaderTitleComponent />
                  <HeaderButtonsTopComponent />
                  <CategoryFlexSection />
                  <CategoryGridSection />
            </main>
      );
}

export default HomePage;
