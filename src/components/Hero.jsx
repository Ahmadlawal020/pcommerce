// const Hero = () => {
//   return (
//     <section
//       className="relative h-[70vh]  w-full bg-cover bg-center"
//       // className="relative h-[70vh] md:h-screen w-full bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url(https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=3)",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
//         <div className="text-white max-w-xl space-y-6">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             GET FUEL DELIVERED TO YOU <br /> ANYTIME, ANYWHERE
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200">
//             Experience the convenience of getting fuel delivered to your
//             doorstep — it's that easy.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded shadow transition">
//               Order Fuel Now
//             </button>
//             <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded border border-white transition">
//               How It Works
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=3)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="text-white max-w-xl space-y-4 sm:space-y-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            GET FUEL DELIVERED TO YOU <br className="hidden xs:block" />{" "}
            ANYTIME, ANYWHERE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Experience the convenience of getting fuel delivered to your
            doorstep — it's that easy.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded shadow transition text-sm sm:text-base">
              Order Fuel Now
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded border border-white transition text-sm sm:text-base">
              How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
