// import useStore from "../zustand/globalStore";
// import { StoreState } from "../types/store.type";
// import NftCard from "../components/NftCard";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useReducerPlus } from "../utils/hooks";

// export default function practise3() {
//   const marketPlace = useStore((state: StoreState) => state.marketPlace);

//   const [state, update] = useReducerPlus({
//     data: [],
//     subResult1: "",
//     account: "",
//     userName: "User",
//   });

//   const Tcount = state.data.length;

//   type searchResult3 = {
//     search: string;
//     walletAddress: string;
//   };

//   const { handleSubmit, register } = useForm<searchResult3>();

//   const OnSubmit = (submit: searchResult3) => {
//     update({ subResult1: submit.search });
//     update({ account: submit.walletAddress });
//     console.log(submit);
//   };

//   const filteredData = state.data.filter((e: any) =>
//     e.token?.name.toLowerCase().includes(state.subResult1?.toLocaleLowerCase())
//   );

//   const Fcount = filteredData.length;

//   const AddressData = filteredData.filter((e: any) =>
//     e?.owner?.walletAddress.includes(state.account)
//   );

//   const Acount = AddressData.length;
//   const walletAddress = state.account;
//   //console.log(walletAddress);

//   useEffect(() => {
//     (async () => {
//       try {
//         const data: any = await listingData();
//         if (data.length > 0) {
//           update({ data: data || [] });
//         }
//       } catch (e: any) {
//         console.log("data not loaded yet..!");
//       }
//     })();
//   }, []);

//   const listingData = async () => {
//     const [result, resultError] = await marketPlace.getAllNewItems();
//     return result;
//   };

//   return (
//     <>
//       <div>
//         <div className="w-full p-5 flex justify-around  bg-white">
//           <div className="m-3 flex flex-wrap">
//             <img src="/images/Logo.svg" />
//           </div>

//           <div className="w-[60%]  m-3">
//             <form onSubmit={handleSubmit(OnSubmit)}>
//               <div className="text-[#14215d] font-bold text-xl text-center mb-1">
//                 <h1>Sorting Based on Search and Minter</h1>
//               </div>
//               <div
//                 className="border-[#14215d] border-2 flex items-center rounded-lg
//             bg-white bg-opacity-30 "
//               >
//                 <input
//                   type="search"
//                   className="rounded-lg  bborder-none outline-none w-full p-2 placeholder-[#14215d] text-[#14215d] font-bold text-xl bg-transparent"
//                   placeholder="search NFT by name...!"
//                   {...register("search")}
//                 />

//                 <div className="w-[25%] mr-2 flex  ">
//                   <select
//                     {...register("walletAddress")}
//                     className="w-full font-bold text-xl bg-gradient-to-r from-[#14215d] to-[#73e8f4] border-[#5C4EFF] border-2 text-white rounded-lg "
//                   >
//                     <option
//                       className="bg-blue-800  text-white p-2"
//                       disabled
//                       selected
//                     >
//                       ALL
//                     </option>

//                     <option
//                       value="0x492F220B1614EFd72D54C51244668709175570E2"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       USER_ID-1
//                     </option>
//                     <option
//                       value="0xcFFC807b388EF07D28E9b0cfa1Fd89F19a776958"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       USER_ID-2
//                     </option>

//                     <option
//                       value="0x4872ddb7f181452041D8B96996aA0dAe5285E215"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       USER_ID-3
//                     </option>
//                     <option
//                       value="0x13f4238e44f4b974F9069086d7290F1B7Ba422eE"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       USER_ID-4
//                     </option>
//                     <option
//                       value="0x2035a6bA22cc0dF78Ba7b0865942dEE860e7F717"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       USER_ID-5
//                     </option>
//                     <option
//                       value="0xa4d57fFAeE71c9e7366fE5cd550bD45776CF9576"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       USER_ID-6
//                     </option>
//                     <option
//                       value="0xa9E515DDe365d4f38f9DEa50622Eca1aF555a31b"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       USER_ID-7
//                     </option>
//                   </select>
//                 </div>
//                 <div className="mr-2">
//                   <button type="submit">
//                     <img
//                       src="/svg/searchicon.svg"
//                       className="m-auto w-8 bg-gradient-to-r from-[#14215d] to-[#73e8f4] rounded-lg"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>

//           <div className="m-3 flex flex-col flex-wrap">
//             <h1 className=" text-[#14215d]  text-xl font-bold">
//               {`Total NFT's  ${Tcount}`}
//             </h1>
//             <h1 className=" text-[#14215d]  text-xl font-bold">
//               {`Total NFT's fetched under User Category ${Acount}`}
//             </h1>
//             <h1 className=" text-[#14215d]  text-xl font-bold  ">
//               WalletAddress of the User <br />
//               <span className="text-white text-sm p-1 rounded-lg font-bold  bg-[#14215d]  ">
//                 {walletAddress}
//               </span>
//             </h1>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full p-10 gap-6 bg-gradient-to-r from-[#14215d] to-[#73e8f4] ">
//           {AddressData.map((e: any) => (
//             <NftCard item={e} key={e.id} isLoading={false} openItem={true} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function practise() {
  return <div>practise1.3</div>;
}
