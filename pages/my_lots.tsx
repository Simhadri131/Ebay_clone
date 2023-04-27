import React from "react";

type Props = {};

const dataField = [
  {
    image: "./svgs/ceek_logo_new.svg",
    wallet: "./svgs/Wallet.svg",
    pic: "./svgs/pic.svg",
    union: "./svgs/Union.svg",
    vector: "./svgs/Vector.svg",
    pen: "./svgs/pen.svg",
  },
  {
    image: "./svgs/ceek_logo_new.svg",
    wallet: "./svgs/wallet.svg",
    pic: "./svgs/pic.svg",
    union: "./svgs/Union.svg",
    vector: "./svgs/Vector.svg",
    pen: "./svgs/pen.svg",
  },
  {
    image: "./svgs/ceek_logo_new.svg",
    wallet: "./svgs/wallet.svg",
    pic: "./svgs/pic.svg",
    union: "./svgs/Union.svg",
    vector: "./svgs/Vector.svg",
    pen: "./svgs/pen.svg",
  },
  {
    image: "./svgs/ceek_logo_new.svg",
    wallet: "./svgs/Wallet.svg",
    pic: "./svgs/pic.svg",
    union: "./svgs/Union.svg",
    vector: "./svgs/Vector.svg",
    pen: "./svgs/pen.svg",
  },
  {
    image: "./svgs/ceek_logo_new.svg",
    wallet: "./svgs/wallet.svg",
    pic: "./svgs/pic.svg",
    union: "./svgs/Union.svg",
    vector: "./svgs/Vector.svg",
    pen: "./svgs/pen.svg",
  },
];

export default function my_lots({}: Props) {
  return (
    <div className="bg-black h-screen  w-full p-10">
      <table className="grid grid-cols-1 w-1108px h-55px px-6 rounded-lg bg-white drop-shadow-md ">
        <thead className="py-6 border-b-2 border-black w-full">
          <tr className=" grid grid-cols-8 bg-[#FAFAFA] rounded-md w-full text-left py-2 px-2">
            <th className=" col-span-2  ">
              <h1 className="text-[#3B5162] text-md  font-700  ">NAME</h1>
            </th>
            <th className=" col-span-1">
              <h1 className="text-[#3B5162] text-md  font-700  ">WALLET</h1>
            </th>
            <th className=" col-span-1">
              <h1 className="text-[#3B5162] text-md  font-700 ">TOKENID</h1>
            </th>
            <th className=" col-span-1">
              <h1 className="text-[#3B5162] text-md  font-700 ">TYPE</h1>
            </th>

            <th className=" col-span-1">
              <h1 className="text-[#3B5162] text-md  font-700 ">STATUS</h1>
            </th>
            <th className=" col-span-1">
              <h1 className="text-[#3B5162] text-md  font-700 ">PRICE</h1>
            </th>
            <th className=" col-span-1">
              <h1 className="text-[#3B5162] text-md  font-700 ">ACTION</h1>
            </th>
          </tr>
        </thead>

        {dataField.map((e) => (
          <tbody className="py-6 border-b-2 border-black">
            <tr className=" grid grid-cols-8  w-full text-left place-items-start place-content-center">
              <td className=" col-span-2 ">
                <div className="flex justify-start items-center">
                  <img src={e.image} className="mr-2 rounded-lg" />
                  <p className="text-[#3B5162] text-sm  font-700 font-bold ">
                    Ceek City - Metaverse
                  </p>
                </div>
              </td>
              <td className=" col-span-1 ">
                <div className="flex justify-start items-center">
                  <img src={e.wallet} />
                </div>
              </td>
              <td className=" col-span-1">
                <h1 className="text-[#3B5162] text-sm  font-700 font-bold pt-3 ">
                  799
                </h1>
              </td>
              <td className=" col-span-1">
                <h1 className="text-[#3B5162] text-sm  font-700 font-bold pt-3 ">
                  Parcel
                </h1>
              </td>

              <td className=" col-span-1">
                <h1 className="text-[#3B5162] text-sm  font-700 font-bold pt-3 ">
                  Unavailable
                </h1>
              </td>
              <td className=" col-span-1">
                <h1 className="text-[#3B5162] text-sm  font-700 font-bold pt-3 ">
                  $1500.0
                </h1>
              </td>
              <td className=" col-span-1">
                {/* <h1 className="text-[#3B5162] text-sm  font-700 font-bold pt-3 ">
                Action
              </h1> */}
                <div className="grid grid-cols-4 gap-2 pt-3">
                  <img src={e.union} />
                  <img src={e.vector} />
                  <img src={e.pen} />
                  <img src={e.pic} />
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
