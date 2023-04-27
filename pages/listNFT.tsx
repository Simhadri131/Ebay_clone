import Header from "@/components/Header";
import React, { FormEvent, useState } from "react";
import {
  ChainId,
  ListingType,
  NFT,
  NATIVE_TOKENS,
  NATIVE_TOKEN_ADDRESS,
} from "@thirdweb-dev/sdk";
import {
  useContract,
  useAddress,
  useNetwork,
  useNetworkMismatch,
  MediaRenderer,
  useOwnedNFTs,
  useCreateAuctionListing,
  useCreateDirectListing,
} from "@thirdweb-dev/react";
import network from "@/utils/network";
import Router, { useRouter } from "next/router";

type Props = {};

function listNFT({}: Props) {
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );
  const { contract: CollectionContract } = useContract(
    process.env.NEXT_PUBLIC_COLLECTION_CONTRACT,
    "nft-collection"
  );

  const ownedNFT = useOwnedNFTs(CollectionContract, address);
  // console.log(ownedNFT);

  const [selected, setSelected] = useState<NFT>();
  //  console.log(selected);

  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const {
    mutate: createDirectListing,
    isLoading: isLoadingDirect,
    error: errorDirect,
  } = useCreateDirectListing(contract);

  const {
    mutate: createAuctionListing,
    isLoading: isLoadingAuction,
    error: errorAuction,
  } = useCreateAuctionListing(contract);

  const submitListing = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (networkMismatch) {
      switchNetwork && switchNetwork(network);
      return;
    }
    if (!selected) return;
    const submitData = e.target as typeof e.target & {
      elements: {
        listingType: { value: string };
        price: { value: string };
      };
    };

    const { listingType, price } = submitData.elements;

    if (listingType.value === "directListing") {
      createDirectListing(
        {
          assetContractAddress: process.env.NEXT_PUBLIC_COLLECTION_CONTRACT!,
          tokenId: selected.metadata.id,
          currencyContractAddress: NATIVE_TOKEN_ADDRESS,
          listingDurationInSeconds: 60 * 24 * 60 * 7,
          quantity: 1,
          buyoutPricePerToken: price.value,
          startTimestamp: new Date(),
        },
        {
          onSuccess(data, variable, context) {
            console.log(data, variable, context);
            router.push("/");
          },
          onError(error, variable, context) {
            console.log(error, variable, context);
          },
        }
      );
      //console.log("direct Listing");
    }

    if (listingType.value === "auctionListing") {
      createAuctionListing(
        {
          assetContractAddress: process.env.NEXT_PUBLIC_COLLECTION_CONTRACT!,
          tokenId: selected.metadata.id,
          currencyContractAddress: NATIVE_TOKEN_ADDRESS,
          listingDurationInSeconds: 60 * 24 * 60 * 7,
          quantity: 1,
          buyoutPricePerToken: price.value,
          startTimestamp: new Date(),
          reservePricePerToken: 0,
        },
        {
          onSuccess(data, variables, context) {
            console.log("Success:", data, variables, context);
            router.push("/");
          },
          onError(error, variables, context) {
            console.log("Error:", error, variables, context);
          },
        }
      );
      //console.log("Auction listing");
    }
    console.log("create listing button has been clicked");
  };
  return (
    <div>
      <Header />
      <div className="bg-gray-100 drop-shadow-2xl h-full w-full p-10 ">
        <h1 className="font-bold text-4xl font-serif text-[#132769]">
          Welcome To The Listing Page! Where You Can List IT To The
          Marketplace...!
        </h1>
        <p className="text-[#132769] font-bold text-xl ">
          Select an Item would you like to sell
        </p>
        <p className="text-sm text-[#132769] font-bold font-serif">
          Below you will find an NFT that you can wisg to place in Marketplace
        </p>

        <div className="grid grid-cols-1 w-full mt-2 py-8 bg-white">
          <div className="grid grid-cols-5 py-2 px-6 gap-3 overflow-auto ">
            {ownedNFT.data?.map(
              (e: any) =>
                e?.metadata?.image && (
                  <div
                    className={` p-5 h-3/4 flex flex-col justify-between rounded-lg items-center ${
                      e?.metadata?.id === selected?.metadata?.id
                        ? `border-4 drop-shadow-2xl   bg-gradient-to-br from-[#be123c] via-white to-[#132769] border-black text-black `
                        : "bg-white border-4 drop-shadow-md text-[#132769] border-[#be123c]"
                    }`}
                    key={e?.metadata?.id}
                    onClick={() => setSelected(e)}
                  >
                    <MediaRenderer
                      src={e.metadata?.image}
                      className="h-2/3 mb-3"
                    />
                    <p className="font-bold text-2xl ">{e.metadata?.name}</p>
                    <p className="font-bold text-xl ">
                      {e.metadata?.description}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
        {selected && (
          <form onSubmit={submitListing}>
            <div className="flex flex-col">
              <div className="w-full flex flex-col   px-10 py-2 bg-gray-200 ">
                <div className="flex justify-between items-center">
                  <label className="text-2xl font-bold text-[#132769]">
                    Direct Listing/Fixed
                  </label>
                  <input
                    type="radio"
                    name="listingType"
                    className="h-6 w-6"
                    value="directListing"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col   px-10 py-4 bg-gray-200 ">
                <div className="flex justify-between items-center">
                  <label className="text-2xl font-bold text-[#132769]">
                    Auction
                  </label>
                  <input
                    type="radio"
                    className="w-6 h-6 bg-red-500 text-red-500"
                    name="listingType"
                    value="auctionListing"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col   px-10 py-4 bg-gray-200 ">
                <div className="grid grid-cols-2">
                  <label className="text-2xl font-bold text-[#132769]">
                    Price
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    name="price"
                    className="w-full py-4 px-6 border-2 border-[#be123c]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full py-4 px-10 flex justify-center items-center border-2 border-[#be123c] bg-[#132769] rounded-lg mt-5 font-bold text-white">
              <button type="submit">Create Listing</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default listNFT;
