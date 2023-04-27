// import useStore from "../zustand/globalStore";
// import { StoreState } from "../types/store.type";
// import NftCard from "../components/NftCard";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useReducerPlus } from "../utils/hooks";
// import { shortenDisplayPrice } from "./collection-details";

// export default function practise2() {
//   const marketPlace = useStore((state: StoreState) => state.marketPlace);

//   const [state, update] = useReducerPlus({
//     data: [],
//     subResult1: "",
//     minResult: 0,
//     maxResult: 300,
//     sorted: true,
//   });

//   const Tcount = state.data.length;

//   type searchResult2 = {
//     search: string;
//     min: number;
//     max: number;
//   };

//   const { handleSubmit, register } = useForm<searchResult2>({
//     defaultValues: {
//       min: 0,
//       max: 300,
//     },
//   });

//   const OnSubmit = (submit: searchResult2) => {
//     update({ subResult1: submit.search });
//     update({ minResult: submit.min });
//     update({ maxResult: submit.max });
//     console.log(submit);
//   };

//   const filteredData = state.data.filter((e: any) =>
//     e.token?.name.toLowerCase().includes(state.subResult1?.toLocaleLowerCase())
//   );

//   const Fcount = filteredData.length;

//   const PriceData = filteredData.filter(
//     (e: any) => e.priceCEEK >= state.minResult && e.priceCEEK <= state.maxResult
//   );

//   const Pcount = PriceData.length;

//   const AscendPrice = () => {
//     const data1 = state.data;

//     const AscendData = (data1 = []) => {
//       const sorted = (a: any, b: any) => {
//         return a.priceCEEK - b.priceCEEK || a?.token?.id - b?.token?.id;
//       };

//       data1.sort(sorted);
//     };

//     AscendData(data1);
//     update({ data: data1 || [] });
//     update({ sorted: !state.sorted });

//     //console.log(data1);
//     // console.log("button has been clicked");
//   };

//   const DescendPrice = () => {
//     const data1 = state.data;

//     const DescendData = (data1 = []) => {
//       const sorted = (a: any, b: any) => {
//         return a.priceCEEK - b.priceCEEK || a?.token?.id - b?.token?.id;
//       };

//       data1.sort(sorted);
//     };

//     DescendData(data1);
//     update({ data: data1.reverse() || [] });
//     update({ sorted: !state.sorted });

//     // console.log(data1);
//     // console.log("button has been clicked");
//   };

//   // const popularSorting = () => {
//   //   const data1 = state.data;

//   //   const popularData = (data1 = []) => {
//   //     const sorted = (a: any, b: any) => {
//   //       return a?.popularity?.likes - b?.popularity?.likes;
//   //     };

//   //     data1.sort(sorted);
//   //   };

//   //   popularData(data1);
//   //   update({ data: data1.reverse() || [] });
//   //   // update({ sorted: !state.sorted });

//   //   console.log(data1.length);
//   //   console.log("button popular has been clicked");
//   // };

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
//               <h1>Sorting Based on Search and in-between ceekPrice</h1>
//             </div>
//             <form onSubmit={handleSubmit(OnSubmit)}>
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
//                   <input
//                     className="w-full text-center font-bold text-xl bg-gradient-to-r from-[#14215d] to-[#73e8f4] border-[#5C4EFF] border-2 text-white rounded-lg "
//                     placeholder="min"
//                     {...register("min")}
//                   />
//                   <p className="text-[#14215d] font-bold text-xl mr-1 ml-1">
//                     TO
//                   </p>
//                   <input
//                     className="w-full  text-center font-bold text-xl bg-gradient-to-r from-[#14215d] to-[#73e8f4] border-[#5C4EFF] border-2 text-white rounded-lg "
//                     placeholder="max"
//                     {...register("max")}
//                   />
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
//             <div className="m-1 flex flex-row justify-center items-center">
//               {state.sorted ? (
//                 <button
//                   className="bg-gradient-to-r from-[#73e8f4] to-[#14215d] rounded-lg text-white w-56 h-10 font-bold"
//                   onClick={AscendPrice}
//                 >
//                   Low To High CeekPrice
//                 </button>
//               ) : (
//                 <button
//                   className="bg-gradient-to-r from-[#14215d] to-[#73e8f4] rounded-lg text-white w-56 text-sm h-10 font-bold"
//                   onClick={DescendPrice}
//                 >
//                   High To Low CeekPrice
//                 </button>
//               )}
//               {/* <button
//                 onClick={popularSorting}
//                 className="bg-gradient-to-r from-[#14215d] to-[#73e8f4] rounded-lg text-white w-56 text-sm h-10 font-bold"
//               >
//                 popular
//               </button> */}
//             </div>
//           </div>

//           <div className="m-3 flex flex-col flex-wrap">
//             <h1 className=" text-[#14215d]  text-xl font-bold">
//               {`Total NFT's  ${Tcount}`}
//             </h1>
//             <h1 className=" text-[#14215d]  text-xl font-bold">
//               {`Total NFT's fetched under CeekPrice Category ${Pcount}`}
//             </h1>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full p-10 gap-6 bg-gradient-to-r from-[#14215d] to-[#73e8f4] ">
//           {PriceData.map((e: any) => (
//             <NftCard item={e} key={e.id} isLoading={false} openItem={true} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function practise() {
  return <div>practise1.2</div>;
}
