// ^ HOME PAGE ==================================================================================================================================================
import { Link } from "react-router";
import HeaderButtonsTopComponent from "../components/modules/header-modules/HeaderButtonsTopComponent";
import HeaderTitleComponent from "../components/modules/header-modules/HeaderTitleComponent";
import CategoryFlexSection from "../components/templates/CategoryFlexSection";
import CategoryGridSection from "../components/templates/CategoryGridSection";
import FooterComponent from "../components/templates/FooterComponent";
import NavBarComponent from "../components/templates/NavBarComponent";

function HomePage() {
      return (
            <>
                  <NavBarComponent />
                  <main className="mx-auto relative inset-0 text-center z-10 h-auto mt-[54px] p-2 bg-[var(--home-bg)]" dir="rtl">
                        <Link to="/credits">
                        <HeaderTitleComponent textSize="3xl" title="دریافت اعتبار خرید کالا" />
                        </Link>
                        <HeaderButtonsTopComponent />
                        <CategoryFlexSection />
                        <CategoryGridSection />
                  </main>
                  <FooterComponent />
            </>
      );
}

export default HomePage;
