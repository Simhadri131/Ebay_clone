import React, { useState } from "react";
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";

type Props = {};

function changeEvent(event: any) {
  console.log(event.target.value);
}

export default function Header({}: Props) {
  const [data, setData] = useState("");
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disConnect = useDisconnect();

  return (
    <div className="bg-gray-100 p-5 ">
      <div className="grid grid-cols-2">
        <div className="col-span-1 ">
          <div className="flex justify-start items-center ">
            {address ? (
              <button
                className="bg-[#132769] px-2 font-bold border-4 border-[#be123c] text-white text-sm w-44 py-4 rounded-lg m-2"
                onClick={disConnect}
              >
                {address.slice(0, 5) + "...." + address.slice(-5)}
              </button>
            ) : (
              <button
                className="bg-[#132769] px-2 font-bold text-white text-sm w-44 py-4 rounded-lg m-2"
                onClick={connectWithMetamask}
              >
                connect with Metamask
              </button>
            )}
            <p className="text-[#132769] font-bold text-sm">
              Sample ThirdWeb Project
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 text-[#132769] font-bold font-serif place-content-center text-sm ">
          <div>Ship to</div>
          <div>Sell</div>
          <div>WatchList</div>

          <div className="flex justify-around items-center">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="2"
                d="M4,19 L4,9 C4,4.582 7.582,1 12,1 C16.418,1 20,4.582 20,9 L20,19 M1,19 L23,19 M15,19 L15,20 C15,21.657 13.657,23 12,23 C10.343,23 9,21.657 9,20 L9,19"
              />
            </svg>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="2"
                d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center w-full">
        <div>
          <Link href="/">
            {" "}
            <img
              src="https://i.pinimg.com/originals/b2/68/df/b268df50ed6663904d98190368be7ea1.jpg"
              className="h-36 w-48 rounded-full"
            />
          </Link>
        </div>
        <div className="w-full border-4  border-[#132769] rounded-lg m-3 flex justify-between px-10 items-center">
          <input
            type="search"
            onChange={changeEvent}
            className="w-3/4 rounded-lg outline-none bg-gray-100 text-lg  m-3"
            placeholder="Search for AnyThing"
          />
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 4.5C7.52208 4.5 4.5 7.52208 4.5 11.25C4.5 14.9779 7.52208 18 11.25 18C12.8438 18 14.3085 17.4476 15.4633 16.5239L19.7197 20.7803C20.0126 21.0732 20.4874 21.0732 20.7803 20.7803C21.0732 20.4874 21.0732 20.0126 20.7803 19.7197L16.5239 15.4633C17.4476 14.3085 18 12.8438 18 11.25C18 7.52208 14.9779 4.5 11.25 4.5Z"
              fill="#132769"
            />
          </svg>
        </div>
        <Link href="/addItem">
          <div className="w-44 px-10 text-sm py-3 font-bold rounded-md border-4 border-[#be123c] text-white flex items-center justify-center m-2 bg-[#132769]">
            <button className=" outline-none ">Mint-NFT</button>
          </div>
        </Link>

        <Link href="/listNFT">
          <div className="w-44 px-10 text-sm py-3 text-[#132769]  rounded-md font-bold bg-white flex items-center justify-center m-2 border-4 border-[#132769] ">
            <button className="">List-NFT</button>
          </div>
        </Link>
      </div>
      <div className="flex justify-around items-center font-bold text-[#132769] text-sm ">
        <h1>Home</h1>
        <h1>Electronics</h1>
        <h1>Video Games</h1>
        <h1>Computers</h1>
        <h1>Home & Garden</h1>
        <h1>Health & Beauty</h1>
        <h1>Collections & Art</h1>
        <h1>Books</h1>
        <h1>Music</h1>
        <h1>Deals</h1>
        <h1>Other</h1>
        <h1>More</h1>
      </div>
    </div>
  );
}
