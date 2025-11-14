// "use client";

// import React, { useState } from "react";

// export default function Footeru() {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle subscription logic here
//     console.log("Subscribe email:", email);
//   };

//   return (
//     <div className="max-width">
//       <div className="bg-[url('/images/footer-logo.webp')] bg-cover bg-center bg-no-repeat h-[550px] mt-25 relative">
//         <h2 className="lg:text-[188px] text-5xl uppercase text-white lg:tracking-[7.5px] tracking-wide lg:px-6 text-center absolute lg:-top-10 lg:right-14 -top-2 px-5">
//           Flying Safari
//         </h2>

//         {/* Subscribe Section */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center px-4">
//             <p className="text-white text-lg md:text-xl mb-2">
//               Subscribe for latest update & offers
//             </p>
//             <form
//               onSubmit={handleSubscribe}
//               className="flex sm:flex-row items-center justify-center gap-4 border  border-white/40  bg:#FFF80 backdrop-blur-[10.9px] rounded-full"
//             >
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email Address"
//                 required
//                 className="px-6 py-3 rounded-full w-full sm:w-80 text-white focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <button
//                 type="submit"
//                 className="md:px-8 md:py-3 px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
