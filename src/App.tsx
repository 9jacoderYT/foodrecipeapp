import React from "react";
import Homepage from "./pages/homepage";
import IMG from "./assets/9jacoder.jpg";
function App() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-3 w-[95%] bg-[#fffef5]">
        <Homepage />
      </div>

      <footer className="text-center text-3xl mt-20 ">
        <img src={IMG} className="w-12 h-12 rounded-full mx-auto" alt="logo" />
        <a href="https://www.youtube.com/@9jaCoder">Youtube - 9jaCoder</a>
      </footer>
    </>
  );
}

export default App;
