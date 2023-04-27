export default function practise10() {
  return (
    <div className="bg-green-500 h-screen w-full">
      <div className="bg-white h-full m-4 border-8 border-black relative">
        <div className=" w-full grid grid-cols-4 p-5 h-1/5">
          <div className="col-span-1 border-2 border-black py-8 font-bold text-black text-4xl  p-5 grid place-content-center place-items-center">
            <div className="flex flex-col justify-center items-center">
              LOGO
            </div>
          </div>
          <div className=" col-span-3 py-8 font-bold text-black text-2xl text-center  p-5 border-2 border-black">
            <div className="flex flex-col justify-end items-end">
              <div className=" py-2 px-2 w-full flex justify-end items-center">
                <div className="border-2 border-black px-2 py-2">
                  {" "}
                  Social Media Links
                </div>
              </div>
              <div className="border-2 m-2 border-black py-2 px-full w-full flex justify-center items-center">
                Primary Naviagation
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1  border-2 border-black p-5 h-4/5  ">
          <div className="w-full font-bold text-4xl border-2 border-black py-4 p-5 ">
            <h1>Hero Image</h1>
            <p>Image SlideShow/video/Big Image and Text</p>
          </div>
          <div className="grid grid-cols-1 w-full h-full mt-5  font-bold text-xl">
            <div className="grid grid-cols-3 gap-6 h-64 ">
              <div className="bg-white  w-full flex flex-col justify-center items-center border-2 border-black ">
                <h1>First Teaser....</h1>
                <p>More info to deeper content</p>
              </div>
              <div className="bg-white w-full flex flex-col justify-center items-center border-2 border-black">
                <h1>Second Teaser....</h1>
                <p>More info to deeper content</p>
              </div>
              <div className="bg-white  w-full flex flex-col justify-center items-center border-2 border-black">
                <h1>Third Teaser....</h1>
                <p>More info to deeper content</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 bg-white absolute bottom-0 p-5">
          <div className="border-2 border-black p-5 flex justify-between items-center h-full font-bold text-2xl">
            <div>Footer Section</div>
            <div className="border-2 border-black px-12 py-4">
              Social media Links
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
