export default function practise_1() {
  return (
    <div className="bg-white h-screen p-10">
      <div className="bg-black rounded-3xl m-3 h-1/4 p-4">
        <div className=" relative bg-gradient-to-b from-[#7381fa] via-white to-[#f472b6] rounded-3xl m-3 h-screen flex flex-col justify-center items-center">
          <div className=" flex justify-center items-center">
            <h1 className="text-white text-7xl font-bold font-serif absolute top-10">
              Welcome to Sample Ecommerce Website
            </h1>

            <p className="text-white text-2xl font-bold">
              Your online store's appearance can have a big impact sales.
              Unleash your inner designer with our free, curated list of
              high-impact articles.
            </p>
          </div>
          <div className="m-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtf4c5UhAQfbLI252O3cWVmIEY5CJcOfxjqQ&usqp=CAU"
              className="drop-shadow-2xl  rounded-lg    h-44"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-black text-5xl font-bold  font-serif">
              Hurry Up...! Don't Waste Your Time
            </h1>

            <div className=" bg-gradient-to-br  from-[#f472b6] via-white to-[#7381fa] mt-5 w-full px-10 flex flex-row justify-center items-center py-5 drop-shadow-2xl">
              <p className="text-black font-serif text-2xl font-bold">
                Get Discount of 75% on all Big Brand
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-around w-full mt-24 font-serif">
            <a href="/practise6/">
              <div className="flex justify-center items-center w-64 py-2 rounded-xl bg-gradient-to-bl font-bold from-[#7381fa] via-white to-[#f472b6] drop-shadow-2xl">
                Go Back
              </div>
            </a>

            <a href="/practise6/practise.2/">
              <div className="flex justify-center py-2 items-center bg-gradient-to-br font-bold from-[#7381fa] via-white to-[#f472b6] w-64 rounded-lg drop-shadow-2xl">
                Gallery
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
