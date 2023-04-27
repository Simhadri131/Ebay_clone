export default function practise_3() {
  return (
    <div className="bg-white h-screen p-10">
      <div className="bg-gradient-to-bl font-bold from-[#7381fa] via-white to-[#f472b6] drop-shadow-2xl rounded-3xl m-3 h-1/4 p-4 relative">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-black font-serif font-bold text-xl">
            WELCOME TO THE YOUR ITEMS
          </h1>
        </div>

        <div className="flex flex-row justify-around w-full mt-24 relative top-0 font-serif ">
          <a href="/practise6/practise.2/">
            <div className="flex justify-center items-center w-64 py-2 rounded-xl bg-gradient-to-bl font-bold from-[#7381fa] via-white to-[#f472b6] drop-shadow-2xl">
              Gallery
            </div>
          </a>

          <a href="/practise6/practise.4/">
            <div className="flex justify-center py-2 items-center bg-gradient-to-br font-bold from-[#7381fa] via-white to-[#f472b6] w-64 rounded-lg drop-shadow-2xl">
              Collections
            </div>
          </a>
        </div>
        <div className="bg-gradient-to-b from-[#7381fa] via-white to-[#f472b6] rounded-3xl m-3 h-screen flex flex-col justify-center items-center flex-wrap p-5">
          <h1 className="text-4xl text-black font-bold font-serif">Oops...?</h1>
          <h1 className="text-2xl text-black font-bold">
            You haven't bought any Thing...!
          </h1>
        </div>
      </div>
    </div>
  );
}
