import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer"; 
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Test from "@/test-tailwind";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
      <div style={{ display: "none" }}>
        <Test />
      </div>
    </div>
    
  );
}

export default App

// function App() {
//   return (
//     <>
    
//     <div className="w-screen h-screen flex items-center justify-center bg-slate-900">

//       {/* <div className="header">header</div> */}
//       <div className="p-6 bg-slate-600 text-white rounded-4xl border border-slate-500 text-2xl">
//       <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">

//         I'm Using Tailwind v4.1! 
      
//         {/* <div className="left">left</div>
//         <div className="right">right</div> */}
     
//        </div>
//       </div>

//       {/* <div className="footer">footer</div> */}
//     </div>
//     </>
//   )
// }
// export default App