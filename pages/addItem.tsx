import React, { FormEvent, useState } from "react";
import Header from "@/components/Header";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { Description } from "@ethersproject/properties";
import Router from "next/router";
//import { toast } from "react-toastify/dist/core";
type Props = {};

export default function addItem({}: Props) {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_COLLECTION_CONTRACT,
    "nft-collection"
  );
  console.log(contract);

  const address = useAddress();

  const [preview, setPreview] = useState<string>();
  const [pic, setPic] = useState<File>();

  const changeFile = (e: any) => {
    if (e.target.files?.[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
      setPic(e.target.files[0]);
    }
  };

  const addNftItem = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contract || !address) return;

    if (!pic) {
      //toast.error("please choose an Image");
      alert("please choose a file");
      return;
    }
    const submitData = e.target as typeof e.target & {
      name: string;
      description: { value: string };
    };
    const metaData = {
      name: submitData.name,
      description: submitData.description.value,
      image: pic,
    };

    try {
      const tx = await contract.mintTo(address, metaData);
      const nft = await tx.data();
      console.log(nft);
      Router.push("/listNFT");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Header />
      <div className="h-full bg-white drop-shadow-2xl w-full p-5 flex flex-col justify-start ">
        <h1 className="text-[#132769] font-serif text-4xl font-bold">
          Add an Item to the Marketplace
        </h1>
        <p className="text-2xl font-bold text-[#132769]">Item Details</p>
        <p className="text-xl font-bold text-[#132769]">
          By adding item to the your are essentially miniting and items to the
          collection and where you can make an offer for your NFT or you can
          place it in the marketplace for the sale
        </p>
        <form onSubmit={addNftItem}>
          <div className="w-full h-full grid grid-cols-4 gap-2 mt-4">
            <div className=" col-span-1 h-full w-full bg-gray-100 drop-shadow-2xl border-4 border-[#be123c] p-4 flex justify-center items-center">
              <div className="p-10 flex justify-center items-center">
                <img
                  src={
                    preview ||
                    "data:image/jpeg;base64,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nmVB7BazHf6i2w5Jx37omPQpVsVh8COPPdN2l9m9PWSy1gFve2oibv2toBPr16wM3e0mnXO0vZg48FTsM+m/G385WdoduPqKzXXUaEtPdm21kyofgsiKWUnac+MjGQSrDg3N9ump2rY1atjwqxBc/BVPJ69APOV/aNbawqKq3VV3fpLFNdY3cFlrbFjOPLIVSCfFgkELTsSzdp6GIAJqryB0B2jIHwzLCR9Jp1qrSteFRVVcnJwowMnzPEkQEREBERAREQEREBERAREQEREBKjVaSytmt06htxzZQSAth82QnhLPn4W88HxC3iBVJrK7UyhwrbjZkFWQLgMrqeVfgLg4OM+kxW3+NKSMbqHwPMBbF6/HDr+M9a7s0s4upIrsG3ORmu0L0Wxfh1Vh4lIHUZU1Gs16Jh7W+h21biLLuarC5wyd6MIysFXABDAhPCNu0h1cqe0+yRad9dj0WeEF0ZhuUHO11BAbzAJ5XJwRk5i6H2kW7IWm1yApDVqLdPZnP1eoU7GxjzKnkcSb9M1De5pdn87ei/1feQIaezVZ296TbtIIDlrOQc5LWl29OhHSWlGhqrG1K0Uc8BFGd3vE4HJPn6yP3Oqb3ra6x6JUzuPlY7bf3J5HZAOO9vvuI9bTWPvWkIrfeDAmarXVVDNtiVj1d1UfmZD/AIZU5FNV15GPdqKKfiLLdiN9zGSdN2dTUc11IhPUqihj8yBkyZAq9+rfotVA8ixa1vvRdgB+TGYPZRf66+2zz2h+6QfDFW0svwYtLWIEXSaGqkEVVpWDydqBcn1OOp+MlREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z"
                  }
                  className="h-64 w-64"
                />
              </div>
            </div>
            <div className=" col-span-3 h-full w-full bg-gray-100  border-4 border-[#be123c] p-4 drop-shadow-2xl">
              <div className="p-10 flex flex-col justify-center items-start">
                <div className="flex flex-col mb-2 w-full">
                  <label className="text-xl font-bold font-serif  text-[#132769]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none py-2  px-2 rounded-md border-2  border-[#132769] "
                    placeholder="Enter The Name Of The NFT"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col mb-2 w-full">
                  <label className="text-xl font-bold font-serif  text-[#132769]">
                    Description
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none py-2 px-2 rounded-md border-2  border-[#132769] "
                    placeholder="Enter The Description Of The NFT"
                    name="description"
                    id="description"
                  />
                </div>
                <div className="flex flex-col mb-2 ">
                  <label className="text-xl font-bold font-serif  text-[#132769]">
                    Image Of The Item
                  </label>
                  <input
                    type="file"
                    className="outline-none px-8 py-4 rounded-md bg-[#be123c] font-bold  text-white"
                    placeholder="Choose File"
                    onChange={changeFile}
                  />
                </div>
                <div className="grid grid-cols-2 w-full  place-content-end place-items-end">
                  <div className=" col-start-2 ">
                    <button
                      className="bg-[#be123c]  py-4 px-10 text-xl font-bold rounded-xl text-white"
                      type="submit"
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
