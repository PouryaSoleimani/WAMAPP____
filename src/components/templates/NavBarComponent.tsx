import { useState, useEffect } from "react";
import { Around } from "@theme-toggles/react";
import "@theme-toggles/react/css/Around.css";
import LanguageToggleComponent from "../modules/header-modules/LanguageToggleComponent";
import HamburgerMenu from "../modules/navbar-modules/HamburgerMenu";


const NavBarComponent = () => {

  const getInitialTheme = (): boolean => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleToggle = () => setIsDark((prev) => !prev);

  return (
    <div className="w-full z-50 fixed top-0 left-0 right-0 bg-[var(--home-bg)] flex flex-wrap items-center justify-between flex-row-reverse pl-2">
      <div id="NAVBAR___LEFT" className="w-1/3 h-full flex items-center justify-end"    >
        <img src="/logo.png" alt="vamapp-logo" className="w-20" />
      </div>
      <div id="NAVBAR___RIGHT" className="w-2/3 h-full flex items-stretch justify-start pr-3 gap-1"  >
        <HamburgerMenu />
        <LanguageToggleComponent />

        <div onClick={handleToggle} className="m-0 p-0  w-fit h-fit translate-y-1">
          <Around
            duration={750}
            placeholder="Toggle"
            className="mx-2 w-12 h-12 text-2xl text-[var(--text-primary)]"
            toggled={isDark}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;