import { MantineProvider } from "@mantine/core";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section7 from "./components/Section7/Section7";
import Section8 from "./components/Section8/Section8";
import Section9 from "./components/Section9/Section9";
import Section10 from "./components/Section10/Section10";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import React from "react";
import { getScrollPercentage } from "./helpers/common";

function App() {
  const handleScroll = () => {
    const percentage = getScrollPercentage();
    nprogress.set(percentage === 100 ? 99.99 : percentage);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Poppins,sans-serif",
      }}
    >
      <>
        <NavigationProgress color="#F39200" size={4} />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </>
    </MantineProvider>
  );
}

export default App;
