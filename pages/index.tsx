import {
  useActiveListings,
  MediaRenderer,
  useContract,
} from "@thirdweb-dev/react";
//import { Main } from "next/document";
import Link from "next/link";

import Header from "../components/Header";

export default function Home() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(contract);

  console.log(listings);
  return (
    <div className="text-3xl font-bold ">
      <Header />
      {!loadingListings ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-1/2 gap-2 place-content-center place-items-center ">
          {listings?.map((e) => (
            <Link
              href={`listing/${e.id}`}
              className={`${
                e.type === 0
                  ? "border-4 drop-shadow-2xl   bg-gradient-to-b  from-[#be123c] via-gray-100 to-gray-100 border-black h-5/6 p-8 rounded-2xl hover:p-14 flex  flex-col justify-center items-center w-5/6  hover:bg-white"
                  : "border-4 drop-shadow-2xl   bg-gradient-to-b from-[#132769] via-gray-100 to-gray-100 border-black h-5/6 p-8 rounded-2xl hover:p-14 flex  flex-col justify-center items-center w-5/6  hover:bg-white"
              }`}
            >
              <div
                key={e.id}
                className="h-full flex flex-col justify-center items-center "
              >
                <MediaRenderer src={e.asset.image} className="h-3/4 mb-2" />

                <p className=" font-bold text-black text-md">{e.asset.name}</p>
                <p className="font-bold text-xl text-black">
                  {e.asset.description}
                </p>
                <div className="flex justify-between items-center w-full text-xl font-bold  text-black">
                  <p>price:</p>
                  <p>
                    {e.buyoutCurrencyValuePerToken.displayValue}

                    {e.buyoutCurrencyValuePerToken.symbol}
                  </p>
                </div>
                <div className="grid grid-cols-1 place-content-center ">
                  <div className="   text-black font-bold text-xl   m-2 h-10 ">
                    {e.type === 0 ? (
                      <div className="flex justify-around font-bold text-white items-center w-44 border-2 border-white bg-[#132769] py-2 px-6 rounded-lg">
                        <button>Buy Now</button>
                        <svg
                          width="20px"
                          height="20px"
                          fill="white"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.06 1.941c-.586-.586-1.144-.033-3.041.879C9.944 5.259 1.1 10.216 1.1 10.216L8.699 11.3l1.085 7.599s4.958-8.843 7.396-13.916c.912-1.898 1.465-2.456.88-3.042zm-1.824 1.955l-5.519 10.247-.561-4.655 6.08-5.592z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex justify-around items-center w-44 border-2 border-white bg-[#be123c] font-bold text-white py-2 px-6 rounded-lg">
                        <button>Auction</button>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby="timeIconTitle"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          color="#000000"
                        >
                          {" "}
                          <title id="timeIconTitle">Time</title>{" "}
                          <circle cx="12" cy="12" r="10" />{" "}
                          <polyline points="12 5 12 12 16 16" />{" "}
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full h-screen text-[#132769] font-bold text-2xl flex flex-col  justify-center items-center">
          <h1> Please Hold On...!The NFT's Are Going To Be Listed..!</h1>
          <svg
            width="214px"
            height="214px"
            viewBox="0 0 24 24"
            fill="#be123c"
            id="magicoon-Filled"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style></style>
            </defs>
            <title>clock</title>
            <g id="clock-Filled">
              <path
                id="clock-Filled-2"
                data-name="clock-Filled"
                d="M12,2.5A9.5,9.5,0,1,0,21.5,12,9.509,9.509,0,0,0,12,2.5ZM16,13H12a1,1,0,0,1-1-1V7a1,1,0,0,1,2,0v4h3a1,1,0,0,1,0,2Z"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
