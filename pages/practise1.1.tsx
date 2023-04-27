// import useStore from "../zustand/globalStore";
// import { StoreState } from "../types/store.type";
// import NftCard from "../components/NftCard";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useReducerPlus } from "../utils/hooks";

// export default function practise1() {
//   const marketPlace = useStore((state: StoreState) => state.marketPlace);

//   const [state, update] = useReducerPlus({
//     data: [],
//     subResult1: "",
//     subResult2: "",
//     subResult3: "",
//   });

//   const Tcount = state.data.length;

//   //console.log(state.data[0]);
//   //state.data.map((e: any) => console.log(e?.token?.name));
//   //state.data.map((e: any) => console.log(e?.saleType));
//   // state.data.map((e: any) => console.log(e?.auctionEndDate));

//   type searchResult = {
//     search: string;
//     saleType: string;
//     auctionEndDate: any;
//   };

//   const { handleSubmit, register } = useForm<searchResult>();

//   const OnSubmit = (submit: searchResult) => {
//     update({ subResult1: submit.search });
//     update({ subResult2: submit.saleType });
//     update({ subResult3: submit.auctionEndDate });
//     console.log(submit);
//   };

//   const filteredData = state.data.filter((e: any) =>
//     e.token?.name.toLowerCase().includes(state.subResult1?.toLocaleLowerCase())
//   );

//   const Fcount = filteredData.length;

//   const reFilteredData = filteredData.filter((e: any) =>
//     e.saleType.includes(state.subResult2)
//   );

//   const Rcount = reFilteredData.length;

//   const liveAuctionData = reFilteredData.filter(
//     (e: any) =>
//       e.auctionEndDate > new Date().toISOString() || e.auctionEndDate === ""
//   );

//   const Lcount = liveAuctionData.length;

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
//             <div className="text-[#14215d] font-bold text-xl text-center mb-1">
//               <h1>Sorting Based on Search , Direct-sale and Auction</h1>
//             </div>
//             <form onSubmit={handleSubmit(OnSubmit)}>
//               <div
//                 className="border-[#14215d] border-2 flex items-center rounded-lg
//             bg-white bg-opacity-30 "
//               >
//                 <input
//                   type="search"
//                   className="rounded-lg  border-none outline-none w-full p-2 placeholder-[#14215d] text-[#14215d] font-bold text-xl bg-transparent"
//                   placeholder="search NFT by name...!"
//                   {...register("search")}
//                 />

//                 <div className="w-[25%] mr-2 ">
//                   <select
//                     {...register("saleType")}
//                     className="w-full font-bold    text-xl bg-gradient-to-r from-[#14215d] to-[#73e8f4] border-[#5C4EFF] border-2 text-white rounded-lg "
//                   >
//                     <option
//                       value="direct-sale"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       Direct-Sale NFT
//                     </option>
//                     <option
//                       value="on-auction"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       Auctioned NFT
//                     </option>
//                     <option
//                       value="limted-auction"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       Limited-Auction NFT
//                     </option>
//                     <option
//                       value="unlimited-auction"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       Unlimited-Auction NFT
//                     </option>
//                   </select>
//                 </div>

//                 <div className="w-[25%] mr-2">
//                   <select
//                     {...register("auctionEndDate")}
//                     placeholder="select"
//                     className="w-full font-bold text-xl bg-gradient-to-r from-[#14215d] to-[#73e8f4] border-[#5C4EFF] border-2 text-white rounded-lg "
//                   >
//                     <option value="ALL" className="bg-blue-800  text-white p-2">
//                       ALL
//                     </option>

//                     <option
//                       value="auctionEndDate"
//                       className="bg-blue-800  text-white p-2"
//                     >
//                       Live-Auction
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
//               NFT's based on Listing will be loaded
//             </h1>
//             <h1 className=" text-[#14215d]  text-xl font-bold">
//               {`Total NFT's  ${Tcount}`}
//             </h1>
//             {state.subResult2 === "direct-sale" &&
//               state.subResult3 === "auctionEndDate" && (
//                 <h1 className=" text-red-500  text-xl font-bold">
//                   Direct Listing Won't be Auction
//                 </h1>
//               )}

//             {state.subResult2 === "direct-sale" &&
//               state.subResult3 !== "auctionEndDate" && (
//                 <h1 className=" text-[#14215d]  text-xl font-bold">
//                   {`${Rcount} NFT's has been filtered`}
//                 </h1>
//               )}
//             {state.subResult2 === "limted-auction" &&
//               state.subResult3 === "auctionEndDate" && (
//                 <h1 className=" text-[#14215d]  text-xl font-bold">
//                   {`${Lcount} NFT's has been Active in limited-Auction`}
//                 </h1>
//               )}
//             {state.subResult2 === "on-auction" &&
//               state.subResult3 !== "auctionEndDate" && (
//                 <h1 className=" text-[#14215d]  text-xl font-bold">
//                   {`${Rcount} NFT's was in Auction `}
//                 </h1>
//               )}
//             {state.subResult2 === "on-auction" &&
//               state.subResult3 === "auctionEndDate" && (
//                 <h1 className=" text-[#14215d]  text-xl font-bold">
//                   {`${Lcount} NFT's was in Live-Auction `}
//                 </h1>
//               )}
//             {state.subResult2 === "limted-auction" &&
//               state.subResult3 !== "auctionEndDate" && (
//                 <h1 className=" text-[#14215d]  text-xl font-bold">
//                   {`${Rcount} NFT's has been filtered`}
//                 </h1>
//               )}
//             {state.subResult2 === "unlimited-auction" &&
//               state.subResult3 !== "auctionEndDate" && (
//                 <h1 className=" text-[#14215d]  text-xl font-bold">
//                   {`${Rcount} NFT's has been filtered`}
//                 </h1>
//               )}

//             {state.subResult2 === "unlimited-auction" &&
//               state.subResult3 === "auctionEndDate" && (
//                 <h1 className="text-[#14215d] text-xl font-bold">{`${Lcount} NFT's has been Active in Unlimited-Auction`}</h1>
//               )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full p-10 gap-6 bg-gradient-to-r from-[#14215d] to-[#73e8f4] ">
//           {state.subResult3 !== "auctionEndDate"
//             ? reFilteredData.map((e: any) => (
//                 <NftCard
//                   item={e}
//                   key={e.id}
//                   isLoading={false}
//                   openItem={true}
//                 />
//               ))
//             : liveAuctionData.map((e: any) => (
//                 <NftCard
//                   item={e}
//                   key={e.id}
//                   isLoading={false}
//                   openItem={true}
//                 />
//               ))}
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function practise() {
  return <div>practise1.1</div>;
}
