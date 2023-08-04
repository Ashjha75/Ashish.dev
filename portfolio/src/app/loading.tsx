import React from "react";
const Loader = () => {
  return (
    <>
      <div className="z-10 fixed inset-0 flex justify-center items-center h-screen bg-[rgba(0,0,0,0.6)] overflow-hidden">
        <div className="bg-transparent w-20 h-20 rounded-full border-4  border-white border-l-transparent flex justify-center items-center animate-spin">
          <div className="bg-transparent w-10 h-10 rounded-full border-4  border-blue-400 border-l-transparent animate-spin  "></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
