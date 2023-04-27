import Header from "@/components/Header";
import {
  useContract,
  useListing,
  useAddress,
  useNetwork,
  useOffers,
  useMakeBid,
  useCancelListing,
  useMakeOffer,
  useBuyNow,
  useAcceptDirectListingOffer,
  useNetworkMismatch,
  MediaRenderer,
  useOwnedNFTs,
  useCreateAuctionListing,
  useCreateDirectListing,
} from "@thirdweb-dev/react";
import {
  ChainId,
  ListingType,
  NATIVE_TOKENS,
  NATIVE_TOKEN_ADDRESS,
} from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import network from "@/utils/network";
import { ethers } from "ethers";
import { toast } from "react-toastify";
//import { off } from "process";

export default function listingPage() {
  const router = useRouter();
  const address = useAddress();
  const { listingId } = router.query as { listingId: string };
  const [, switchNetwork] = useNetwork();
  const networkMisMatch = useNetworkMismatch();

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );
  const [minBid, setMinBid] = useState<{
    displayValue: string;
    Symbol: string;
  }>({
    displayValue: "Loading",
    Symbol: "Bids..!",
  });

  const [bidAmount, setBidAmount] = useState("");

  const { data: listing, isLoading: loadingListings } = useListing(
    contract,
    listingId
  );

  const { mutate: buyNow } = useBuyNow(contract);
  const { mutate: makeBid } = useMakeBid(contract);
  const { mutate: makeOffer } = useMakeOffer(contract);
  const { data: offers } = useOffers(contract, listingId);
  const { mutate: acceptOffer } = useAcceptDirectListingOffer(contract);
  const { mutate: cancelListing } = useCancelListing(contract);

  console.log(offers);

  useEffect(() => {
    if (!listingId || !contract || !listing) return;

    if (listing.type === ListingType.Auction) {
      fetchMiniBidAmount();
    }
  }, [listingId, contract, listing]);

  const fetchMiniBidAmount = async () => {
    if (!listingId || !contract) return;
    const { displayValue, symbol } = await contract.auction.getMinimumNextBid(
      listingId
    );
    setMinBid({
      displayValue: displayValue,
      Symbol: symbol,
    });
  };

  const buyNFt = async () => {
    if (networkMisMatch) {
      switchNetwork && switchNetwork(network);
      return;
    }

    if (!listingId || !contract || !listing) return;

    if (listing.sellerAddress !== address) {
      await buyNow(
        {
          id: listingId,
          buyAmount: 1,
          type: listing.type,
        },
        {
          onSuccess(data, variables, context) {
            toast.success("Congratulations..! you bought successfully");
            console.log("Success", data, variables, context);
            // console.log(address);
            // console.log(listing.sellerAddress);
            router.replace("/listNFT");
          },
          onError(error, variables, context) {
            toast.error("Oops..? You Can't Buy The NFT, something went Wrong");
            console.log("Error", error, variables, context);
          },
        }
      );
    } else {
      toast.warning("You Can't Buy Your Own NFT");
    }
  };

  const accept = async (addressOfOfferor: string) => {
    // The price you are willing to bid for a single token of the listing
    // const addressOfOfferor = address;
    if (listing?.sellerAddress === address) {
      await acceptOffer(
        {
          listingId,
          addressOfOfferor,
        },
        {
          onSuccess(data, variables, context) {
            toast.success("offer has been accepted");
            console.log("Accepted offerData", data, variables, context);
            router.push("/listNFT");
          },
          onError(error, variables, context) {
            toast.error("offer has  not been accepted");
            console.log(error, variables, context);
          },
        }
      );
    } else {
      toast.warning(
        "you are not the owner pf this NFT ,You can't accept it..!"
      );
    }
  };

  const cancelListNFT = async () => {
    if (listing?.sellerAddress === address) {
      const responseData = await contract?.direct.cancelListing(listingId);
      try {
        if (responseData?.receipt) {
          toast.success("This NFT has been removed from the marketplace");
          router.push("/");
        }
      } catch (e) {
        toast.error("something went wrong");
      }
    } else {
      toast.warning("You are not owner of this NFT to cancel");
    }

    // if (listing?.sellerAddress === address) {
    //   const id=listingId
    //   const responseData = await contract?.direct.cancelListing({listingId});
    //   try {
    //     if (responseData?.receipt) {
    //       toast.success("This NFT has been removed from the marketplace");
    //       router.push("/");
    //     }
    //   } catch (e) {
    //     toast.error("something went wrong");
    //   }
    // } else {
    //   toast.warning("You are not owner of this NFT to cancel");
    // }
  };

  const createBidOrOffer = async () => {
    try {
      if (networkMisMatch) {
        switchNetwork && switchNetwork(network);
        return;
      }

      if (listing?.type === ListingType.Direct) {
        if (
          listing?.buyoutPrice.toString() ===
          ethers.utils.parseEther(bidAmount).toString()
        ) {
          console.log("buying NFT is under Process");
          buyNFt();
          return;
        }

        console.log("Make offer is getting active");

        // const listingId = 0;
        // // The price you are willing to offer per token
        // const pricePerToken = bidAmount;
        // // // The quantity of tokens you want to receive for this offer
        // const quantity = 1;
        // // // The address of the currency you are making the offer in (must be ERC-20)
        // const currencyContractAddress =
        //   NATIVE_TOKENS[ChainId.Mumbai].wrapped.address;

        // await makeOffer(
        //   listingId,
        //   quantity,
        //   currencyContractAddress,
        //   pricePerToken
        // );

        // The price you are willing to offer per token
        // const pricePerToken = bidAmount;
        // // The quantity of tokens you want to receive for this offer
        // const quantity = 1;
        // // The address of the currency you are making the offer in (must be ERC-20)
        // const currencyContractAddress =
        //   NATIVE_TOKENS[ChainId.Mumbai].wrapped.address;

        // await contract?.direct.makeOffer(
        //   listingId,
        //   quantity,
        //   currencyContractAddress,
        //   pricePerToken
        // );
        if (listing.sellerAddress !== address) {
          await makeOffer(
            {
              pricePerToken: bidAmount,
              quantity: 1,
              listingId,
            },
            {
              onSuccess(data, variables, context) {
                toast.success(
                  "Congratulations..! your offer for this NFT has been done"
                );

                console.log("SUCCESS", data, variables, context);
                setBidAmount("");
                console.log(data);
              },
              onError(error, variables, context) {
                toast.error(
                  "Oops..? You can't offer The NFT,something went wrong"
                );
                console.log("ERROR", error, variables, context);
              },
            }
          );
        } else {
          toast.warning("You are owner of this NFT You can't Make an offer");
        }
      }

      if (listing?.type === ListingType.Auction) {
        console.log("make bid is under progress");
        if (listing.sellerAddress !== address) {
          await makeBid(
            {
              listingId,
              bid: bidAmount,
            },
            {
              onSuccess(data, variables, context) {
                toast.success(
                  "Congratulations..! your bid for this NFT is successfull"
                );
                console.log("SUCCESS", data, variables, context);
                setBidAmount("");
                console.log(data);
              },
              onError(error, variables, context) {
                toast.error(
                  "Oops..? You can't Bid for this NFT, something went wrong"
                );
                console.log("ERROR", error, variables, context);
              },
            }
          );
        } else {
          toast.warning("You Can't Bid For Your Own NFT");
        }
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  console.log(listing);

  return (
    <div>
      <Header />
      {loadingListings === false ? (
        <div className="h-full px-24 w-full grid grid-cols-2  bg-gray-100 drop-shadow-2xl">
          <div className="h-3/4   bg-gradient-to-tr from-[#be123c] via-gray-100 to-[#132769] col-span-1 items-center   place-content-center place-items-center  ">
            <div className="flex h-full flex-row justify-center items-center  p-10">
              <MediaRenderer
                src={listing?.asset?.image}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="h-3/4 col-span-1 flex flex-col justify-between w-full bg-gray-100 p-10 ">
            <div className="flex flex-col bg-gray-100 justify-start ">
              <h1 className="text-4xl text-[#132769]   font-bold">
                {listing?.asset.name}
              </h1>
              <p className="text-2xl   font-bold text-[#132769] ">
                {listing?.asset?.description}
              </p>
              <div className="flex flex-row  justify-start items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#132769"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                    fill="#132769"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                    fill="#132769"
                  />
                </svg>

                <p className="text-sm p-2  font-bold text-[#132769] ">{`Seller: ${listing?.sellerAddress}`}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xl font-bold text-[#132769] ">
                    ListingType
                  </p>
                  {listing?.type === 0 ? (
                    <p className="text-xl font-bold text-[#132769]  font-serif">
                      Direct Listing
                    </p>
                  ) : (
                    <p className="text-xl font-bold text-[#132769] ">
                      Auction Listing
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xl font-bold text-[#132769] ">
                    Buy It Now Price
                  </p>
                  <p className="text-4xl font-bold text-[#132769] ">
                    {listing?.buyoutCurrencyValuePerToken?.displayValue}{" "}
                    {listing?.buyoutCurrencyValuePerToken?.symbol}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2  w-full ">
                <div className="col-span-2   w-full flex justify-end mt-2   ">
                  <button
                    className="font-bold text-white border-4 border-[#132769] bg-[#132769] w-64 py-2 rounded-lg"
                    onClick={buyNFt}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <hr className="border-2 border-dotted border-[#132769] w-full mt-2 " />
            {listing?.type === 0 && (
              <div className=" col-span-1 w-full flex justify-center m-1 ">
                <button
                  className="font-bold border-4 text-xl border-[#be123c] bg-white text-[#132769] w-full py-1 rounded-lg"
                  onClick={cancelListNFT}
                >
                  Cancel Listing
                </button>
              </div>
            )}
            <hr className="border-2 border-dotted border-[#be123c] w-full  mb-2" />
            <div className="grid grid-cols-1">
              {listing?.type === ListingType.Direct ? (
                <h1 className="text-xl font-bold text-[#be123c] ">
                  Make an Offer
                </h1>
              ) : (
                <h1 className="text-xl font-bold text-[#be123c] ">
                  Bid on this Auction
                </h1>
              )}
              {listing?.type === ListingType.Auction && (
                <div>
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl font-bold text-[#be123c] ">
                      Current Minimum Bid:
                    </h1>
                    <p className="text-4xl font-bold text-[#be123c] ">
                      {minBid?.displayValue + " " + minBid?.Symbol}
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl font-bold text-[#be123c] ">
                      Time Remaining:
                    </h1>
                    <p className="text-xl font-bold text-[#be123c] ">
                      {/* {listing?.endTimeInEpochSeconds.toString()} */}
                      <Countdown
                        date={
                          Number(listing?.endTimeInEpochSeconds.toString()) *
                          1000
                        }
                      />
                    </p>
                  </div>
                </div>
              )}
              {listing?.type === ListingType.Direct && offers && (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-xl font-bold text-[#be123c] ">
                      Total Offers made for this NFT :
                    </h1>
                    <h1 className="text-xl font-bold text-[#be123c] ">
                      {offers.length} Offers
                    </h1>
                  </div>

                  <div className="flex w-full flex-col justify-center items-center my-2  h-full">
                    {offers?.map((offer) => (
                      <div className="flex mb-1  w-full justify-between items-center">
                        <div className="flex flex-row  justify-start items-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#be123c"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                              fill="#be123c"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                              fill="#be123c"
                            />
                          </svg>
                          <p className="text-sm p-2  font-bold text-[#be123c] ">
                            {offer?.offeror.slice(0, 5) +
                              "..." +
                              offer?.offeror.slice(-5)}
                          </p>
                        </div>
                        <p className="text-sm p-2  font-bold text-[#be123c] ">
                          {`${ethers.utils.formatEther(
                            offer.totalOfferAmount
                          )} MATIC`}
                        </p>
                        <button
                          onClick={() => accept(offer.offeror)}
                          className="font-bold text-[#be123c] border-4   border-[#132769] px-8 py-2 rounded-lg"
                        >
                          Accept Offer
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {listing?.type === ListingType.Auction && offers && (
                <>
                  <div className="flex w-full   justify-between items-center mb-2">
                    <h1 className="text-xl font-bold text-[#be123c] ">
                      Total Bids for this NFT :
                    </h1>
                    <h1 className="text-xl font-bold text-[#be123c] ">
                      {offers.length} Bids
                    </h1>
                  </div>
                  <div className="flex w-full flex-col justify-center items-center my-2  h-full">
                    {offers?.map((e) => (
                      <div className="flex mb-1  w-full justify-between items-center">
                        <div className="flex flex-row  justify-start items-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#be123c"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                              fill="#be123c"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                              fill="#be123c"
                            />
                          </svg>
                          <p className="text-sm p-2  font-bold text-[#be123c] ">
                            {e?.offeror.slice(0, 5) +
                              "..." +
                              e?.offeror.slice(-5)}
                          </p>
                        </div>
                        <p className="text-sm p-2  font-bold text-[#be123c] ">
                          {`${ethers.utils.formatEther(
                            e.totalOfferAmount
                          )} MATIC`}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="flex flex-row justify-between items-center">
                <input
                  type="text"
                  className="w-full border-4 text-[#be123c] font-bold border-[#be123c] rounded-md bg-white py-2"
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder={
                    listing?.type === ListingType.Direct
                      ? "Enter an Offer"
                      : `   ${
                          minBid?.displayValue + " " + minBid?.Symbol
                        } or more`
                  }
                />
                <div className="grid grid-cols-2 w-full ">
                  <div className=" grid col-start-2  w-full place-content-end   ">
                    <button
                      onClick={createBidOrOffer}
                      className="font-bold text-white border-4 border-[#be123c] bg-[#be123c] w-64 py-2 rounded-lg"
                    >
                      {listing?.type === ListingType.Direct
                        ? " Make Offer"
                        : "Make Bid"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen text-[#132769] font-bold text-2xl flex flex-col  justify-center items-center">
          <h1> Please Hold On...! The NFT's Details Will Be Listed Soon...!</h1>
          <svg
            width="214px"
            height="214px"
            viewBox="0 0 24 24"
            id="magicoon-Filled"
            fill="#be123c"
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
