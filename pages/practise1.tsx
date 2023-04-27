// export default function createPractise() {
//   return (
//     <div className="bg-white flex flex-col justify-center items-center h-screen ">
//       <div className="w-full  h-screen">
//         <div className="flex flex-wrap flex-row justify-between bg-white h-1/2 m-2 rounded-lg drop-shadow-xl">
//           <div className="w-1/2  flex flex-col p-5">
//             <div className=" flex flex-wrap">
//               <h1 className="font-bold text-black pl-5">Choose Collection</h1>
//               <div className="flex flex-row justify-center w-3/4 ">
//                 <div className="flex justify-center items-center w-64 h-44 border-4 rounded-xl border-gray-300 mr-6">
//                   <button className="text-black font-bold ">fixed</button>
//                 </div>
//                 <div className="flex justify-center items-center w-64 h-44 border-4  px-6 rounded-xl border-gray-300 ">
//                   <button className="text-black font-bold ">ceek</button>
//                 </div>
//               </div>
//             </div>
//             <h1 className="font-bold text-black pl-5">Upload File</h1>
//             <div className="mt-1 flex justify-center   ">
//               <div className=" w-3/4  flex justify-center items-center border-4 border-dashed border-gray-300 rounded-xl  ">
//                 <button className="py-14 ">
//                   <input type="file" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="w-1/2 p-10">
//             <h1 className="font-bold text-black pl-5">Preview</h1>
//             <div className="border-4 h-full rounded-lg  border-gray-300 flex justify-center items-center">
//               <h1>You file preview will be loaded here..!</h1>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row justify-between  h-1/3 m-2 ">
//           <div className="w-1/2  flex flex-col justify-start p-5  m-1 rounded-lg bg-white drop-shadow-xl  ">
//             <div className="flex flex-col h-1/3">
//               <label className="text-black font-bold mb-1">Title</label>
//               <input
//                 type="text"
//                 className="border-b-2 border-gray-300"
//                 placeholder="Title"
//               />
//             </div>
//             <div className="flex flex-col text-start h-2/3">
//               <label className="text-black font-bold mb-2 ">Description</label>
//               <input
//                 type="textarea"
//                 className="border-b-2 border-gray-300 h-2/3 "
//                 placeholder="Description"
//               />
//             </div>
//           </div>
//           <div className="w-1/2 flex flex-col p-5 m-1 rounded-lg bg-white drop-shadow-xl ">
//             <label className="text-black font-bold mb-2">Utility</label>
//             <select className="border-b-2 border-gray-300">
//               <option>Add The Utilities</option>
//               <option>speed</option>
//               <option>strength</option>
//               <option>ultra vision</option>
//               <option>flight</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-row justify-between  h-1/3 m-2 ">
//           <div className="w-1/2  flex flex-col justify-start p-5  m-1 bg-white rounded-lg drop-shadow-xl">
//             <div className="flex justify-between mb-1">
//               <h1 className="font-bold text-black">put on marketPlace</h1>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" className="sr-only peer" />
//                 <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             </div>
//             <div className="flex flex-row justify-center mt-1">
//               <div className="flex justify-center items-center h-44 w-44 border-4 m-4 rounded-lg border-gray-300 ">
//                 <button>FIxed</button>
//               </div>
//               <div className="flex justify-center items-center h-44 w-44 border-4 m-4 rounded-lg border-gray-300 ">
//                 <button>Limited</button>
//               </div>
//               <div className="flex justify-center items-center h-44 w-44 border-4 m-4 rounded-lg border-gray-300 ">
//                 <button>Unlimited</button>
//               </div>
//             </div>
//           </div>
//           <div className="w-1/2 flex flex-col p-5 m-1 bg-white rounded-lg drop-shadow-xl">
//             <h1 className="font-bold text-black">Price</h1>
//             <div className="flex justify-between">
//               <input
//                 type="number"
//                 className="border-b-2 border-gray-300 w-full"
//                 placeholder="price"
//               />
//               <p>CEEK</p>
//             </div>
//             <p className="font-bold text-black">
//               Service fee 2.5%. You will receive 0 CEEK $24
//             </p>
//             <p className="font-bold text-black">Total service charges 2.5%.</p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center mt-3 drop-shadow-lg">
//           <button className="h-10 w-56 font-bold  rounded-xl  bg-gradient-to-r from-gray-500 to-white  text-black">
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//signup
export default function Practise5() {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:gap-0 lg:gap-2">
        <div className="bg-white w-full  flex flex-col flex-wrap p-5">
          <div className="bg-white p-5 h-screen  flex flex-col justify-between rounded-lg">
            <h1 className="text-black text-center font-bold lg:text-2xl sm:text-sm font-serif">
              Sign-Up
            </h1>
            <div className="flex flex-col justify-around bg-white  drop-shadow-2xl rounded-lg m-1 p-1 h-1/4">
              <div className="flex flex-row font-serif justify-between items-center mb-1 ">
                <input
                  type="text"
                  className="bg-gray-300 px-5 py-5 mr-1 w-1/2 placeholder:text-white font-bold lg:text-xl sm:text-sm rounded-lg"
                  placeholder="User Name"
                />

                <input
                  type="text"
                  className="bg-gray-300 px-5 py-5 ml-1 w-1/2 placeholder:text-white font-bold lg:text-xl sm:text-sm rounded-lg"
                  placeholder="E-Mail"
                />
              </div>
              <div className="flex flex-row font-serif justify-between items-center mt-1">
                <input
                  type="text"
                  className="bg-gray-300 px-5 py-5 mr-1  w-1/2 placeholder:text-white font-bold lg:text-xl sm:text-sm rounded-lg"
                  placeholder="Password"
                />

                <input
                  type="text"
                  className="bg-gray-300 px-5 py-5 ml-1  w-1/2 placeholder:text-white font-bold lg:text-xl sm:text-sm rounded-lg"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between items-center bg-white drop-shadow-2xl rounded-lg m-1 p-3 h-3/6">
              <h1 className="text-black font-bold text-md font-serif text-sm lg:text-lg">
                Personal Details
              </h1>
              <div className="flex w-full flex-row justify-between items-center mb-1 font-serif">
                <div className="flex flex-col w-1/2 mr-1">
                  <label className=" text-black text-sm lg:text-xl font-bold">
                    Date-Of-Birth
                  </label>
                  <input
                    type="text"
                    className="bg-gray-300 w-full  px-5 py-5 placeholder:text-white font-bold lg:text-xl sm:text-sm rounded-lg"
                    placeholder="dd/mm/yyyy"
                  />
                </div>

                <div className="flex flex-col w-1/2 text-white ml-1 font-serif">
                  <label className=" text-black  font-bold text-sm lg:text-xl">
                    Select gender
                  </label>
                  <select className="bg-gray-300 w-full  px-5 py-5 ml-1  font-bold  rounded-lg">
                    <option className="text-white font-bold text-sm lg:text-lg">
                      Male
                    </option>
                    <option className="text-white font-bold text-sm lg:text-lg">
                      Female
                    </option>
                    <option className="text-white font-bold text-sm lg:text-lg">
                      Other
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex text-white rounded-lg w-full justify-between items-center mt-1">
                <select className="bg-gray-300 w-full py-5 mb-1 rounded-lg ">
                  <option className="text-white font-bold text-sm lg:text-lg">
                    select You Country
                  </option>
                  <option className="text-white font-bold text-sm lg:text-lg">
                    INDIA
                  </option>
                  <option className="text-white font-bold text-sm lg:text-lg">
                    USA
                  </option>
                  <option className="text-white font-bold text-sm lg:text-lg">
                    UK
                  </option>
                  <option className="text-white font-bold text-sm lg:text-lg">
                    CANADA
                  </option>
                </select>
              </div>
              <div className="mt-1 font-serif">
                <input type="checkbox" className="mr-1" />
                <label className=" text-black text-sm font-bold ">
                  I agree with the terms of use and privacy
                </label>
              </div>
              <div className="flex flex-col justify-between items-center mt-1 font-serif">
                <button className="bg-blue-500 rounded-xl w-56 h-10 text-white font-bold m-1 text-sm lg:text-lg">
                  Create Account
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center font-serif">
              <hr className="border-1 border-gray-500 w-2/6" />
              <p className="text-black font-bold text-sm m-1">
                Or Connect with
              </p>
              <hr className="border-1 border-gray-500 w-2/6" />
            </div>
            <div className="flex justify-around items-center m-1 p-1 font-serif">
              <button className="bg-blue-500 text-white font-bold w-56 h-10 rounded-xl text-sm lg:text-lg">
                Twitter
              </button>
              <button className="bg-blue-500 text-white font-bold w-56 h-10 rounded-xl text-sm lg:text-lg">
                Facebook
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white w-full flex flex-col  flex-wrap ">
          <div className="bg-white p-5 h-screen  flex flex-col font-serif  rounded-lg">
            <div className="flex flex-col justify-center items-center bg-white  drop-shadow-2xl rounded-lg m-1 p-1 h-full">
              <h1 className="text-black text-center font-bold text-sm lg:text-xl">
                Sign-In
              </h1>
              <div className="flex flex-row justify-between items-center mb-1  w-5/6">
                <div className="w-1/2 flex flex-row justify-around items-center bg-blue-500 text-white rounded-xl p-2  ">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      fill-rule="evenodd"
                      d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
                    />
                  </svg>
                  <button className=" font-bold  text-sm lg:text-lg">
                    Twitter
                  </button>
                </div>
                <div className="w-1/2 bg-blue-500 text-white flex flex-row justify-around rounded-xl items-center p-2 ">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19765 21.5H13.1976V13.4901H16.8018L17.1976 9.50977H13.1976V7.5C13.1976 6.94772 13.6454 6.5 14.1976 6.5H17.1976V2.5H14.1976C11.4362 2.5 9.19765 4.73858 9.19765 7.5V9.50977H7.19765L6.80176 13.4901H9.19765V21.5Z"
                      fill="white"
                    />
                  </svg>

                  <button className=" font-bold  text-sm lg:text-lg">
                    facebook
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between  rounded-lg m-1 p-1   w-full">
                <div className="flex flex-col justify-between items-center mb-1 ">
                  <input
                    type="text"
                    className="bg-gray-300 px-5 py-5 m-1 w-5/6 placeholder:text-white font-bold lg:text-xl sm:text-sm"
                    placeholder="User Name"
                  />

                  <input
                    type="text"
                    className="bg-gray-300 px-5 py-5 m-1 w-5/6 placeholder:text-white font-bold lg:text-xl sm:text-sm"
                    placeholder="E-Mail"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between items-center">
                <div className="m-5">
                  <div className="flex justify-center items-center">
                    <button className="text-blue-500 font-bold text-sm lg:text-lg">
                      forgotPassword?
                    </button>
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="text-black font-bold text-sm lg:text-lg">
                      No Account?
                    </p>
                    <button className="text-blue-500 font-bold text-sm lg:text-lg">
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="flex flex-row  items-center">
                  <button className="h-8 w-24  border-2 border-black rounded-xl font-bold text-sm lg:text-lg">
                    Log In
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center bg-white  drop-shadow-2xl rounded-lg m-1 p-1 h-1/2 ">
              <div className="bg-blue-400 grid grid-cols-3 grid-flow-row w-full  relative  h-1/2">
                <div className=" bg-green-900 py-6 w-44 -mt-8 absolute  left-0 top-0">
                  BLOCK_3
                </div>
                <div className="bg-pink-700  w-44  absolute right-0 bottom-0 py-4 -mb-4 ">
                  BLOCK_1
                </div>
                <div
                  className="bg-pink-700  w-36 h-36 absolute right-0 top-0 hover:invisible rounded-full text-center p-5  -mt-12
                 "
                >
                  BLOCK_2
                </div>
                <div
                  className="bg-pink-700  w-36 h-36 absolute left-0 bottom-0 hover:invisible rounded-full text-center p-5  -mb-12 z-1 
                 "
                >
                  BLOCK_4
                  <div className="w-full bg-black h-20 rounded-2xl text-center text-white absolute left-8 bottom-3">
                    HI I'm <br />
                    How Are You...!
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 11.796C14.7189 11.796 16.9231 9.60308 16.9231 6.89801C16.9231 4.19294 14.7189 2.00005 12 2.00005C9.28106 2.00005 7.07692 4.19294 7.07692 6.89801C7.07692 9.60308 9.28106 11.796 12 11.796Z"
                        fill="#030D45"
                      />
                      <path
                        d="M14.5641 13.8369H9.4359C6.46154 13.8369 4 16.2859 4 19.245C4 19.9593 4.30769 20.5716 4.92308 20.8777C5.84615 21.3879 7.89744 22.0001 12 22.0001C16.1026 22.0001 18.1538 21.3879 19.0769 20.8777C19.5897 20.5716 20 19.9593 20 19.245C20 16.1838 17.5385 13.8369 14.5641 13.8369Z"
                        fill="#030D45"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-black h-44 w-44 absolute right-2 top-10 rounded-t-none rounded-3xl"></div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="bg-white">
          <div className="bg-white w-full p-5 h-full   font-serif  rounded-lg ">
            <div className="w-full h-1/2 bg-white flex flex-col justify-between drop-shadow-2xl rounded-lg mb-1 ">
              <h1 className="text-black text-center font-bold  text-xl lg:text-2xl">
                Log In
              </h1>
              <div className="flex flex-col justify-between  rounded-lg m-1 p-1 h-1/2">
                <div className="flex flex-col justify-between items-center mb-1 ">
                  <input
                    type="text"
                    className="bg-gray-300 px-5 py-5 m-1 w-5/6 placeholder:text-white font-bold lg:text-xl sm:text-sm"
                    placeholder="UserName"
                  />

                  <input
                    type="text"
                    className="bg-gray-300 px-5 py-5 m-1 w-5/6 placeholder:text-white font-bold lg:text-xl sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mb-1 p-5">
                <button className="text-blue-500 font-bold text-sm lg:text-lg">
                  Forgot password?
                </button>
                <button className="h-8 w-24  border-2 border-black rounded-xl font-bold text-sm lg:text-lg">
                  Login
                </button>
                <div className="flex flex-row">
                  <p className="text-gray-500 font-bold text-sm lg:text-lg">
                    No Account?
                  </p>
                  <button className="text-blue-500 font-bold text-sm lg:text-lg">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-2 w-full items-center">
                <div className="w-1/2 flex bg-blue-300 text-white justify-around p-3 items-center">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      fill-rule="evenodd"
                      d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
                    />
                  </svg>
                  <button className="w-full h-10  font-bold text-sm lg:text-lg">
                    Connect With Twitter
                  </button>
                </div>
                <div className="w-1/2 flex justify-around  bg-blue-800 text-white p-3 items-center">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19765 21.5H13.1976V13.4901H16.8018L17.1976 9.50977H13.1976V7.5C13.1976 6.94772 13.6454 6.5 14.1976 6.5H17.1976V2.5H14.1976C11.4362 2.5 9.19765 4.73858 9.19765 7.5V9.50977H7.19765L6.80176 13.4901H9.19765V21.5Z"
                      fill="white"
                    />
                  </svg>
                  <button className="w-full h-10 font-bold text-sm lg:text-lg">
                    Connect With facebook
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 bg-white flex flex-col justify-center items-center  p-5">
              <div className="sm:w-full lg:w-2/3 bg-gray-700 flex flex-col p-10 justify-between items-center flex-wrap drop-shadow-2xl rounded-lg">
                <h1 className="text-lg md:text-2xl lg:text-5xl font-bold text-white ">
                  Connect
                </h1>
                <p className="font-400 lg:text-xl sm:text-sm text-white">
                  With
                </p>
                <div className="flex flex-col justify-center items-center w-full ">
                  <div className="bg-blue-400 w-3/4 m-1  flex justify-around items-center py-3 px-4 rounded-lg">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="white"
                        fill-rule="white"
                        d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
                      />
                    </svg>

                    <button className="font-bold text-whitetext-sm lg:text-lg text-white">
                      Twitter
                    </button>
                  </div>
                  <div className="bg-blue-800 w-3/4 m-1  flex justify-around items-center py-3 px-4 rounded-lg">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.19765 21.5H13.1976V13.4901H16.8018L17.1976 9.50977H13.1976V7.5C13.1976 6.94772 13.6454 6.5 14.1976 6.5H17.1976V2.5H14.1976C11.4362 2.5 9.19765 4.73858 9.19765 7.5V9.50977H7.19765L6.80176 13.4901H9.19765V21.5Z"
                        fill="white"
                      />
                    </svg>
                    <button className="font-bold text-whitetext-sm lg:text-lg text-white">
                      facebook
                    </button>
                  </div>
                  <div className="bg-orange-700 w-3/4 m-1  flex justify-around items-center py-3 px-4 rounded-lg">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="white"
                        fill-rule="evenodd"
                        d="M0.0202537528,11.2032618 C0.0858884305,7.29693926 3.69605513,3.87603603 7.62298049,4.00635861 C9.5045944,3.91939087 11.2733582,4.73384249 12.7144674,5.87784249 C12.0993693,6.57306829 11.4624794,7.24274571 10.7820061,7.86906829 C9.04956189,6.67810055 6.58579693,6.33771345 4.85335275,7.71345539 C2.37505996,9.41848765 2.26220982,13.4442941 4.64607169,15.2796489 C6.96429889,17.3722941 11.3459973,16.3333264 11.9865191,13.1291973 C10.534514,13.1075199 9.07861756,13.1291973 7.62661245,13.0822296 C7.62298049,12.2205522 7.61934853,11.3588747 7.62298049,10.4974554 C10.0504259,10.4902296 12.4778712,10.4863586 14.9089486,10.5046812 C15.0544863,12.532036 14.7852026,14.6897135 13.5332146,16.3658425 C11.6370729,19.0195199 7.83052098,19.7942296 4.86061667,18.6574554 C1.88007591,17.527907 -0.230870232,14.3962941 0.0202537528,11.2032618 M19.6437253,8.32145539 L21.8091508,8.32145539 C21.8127827,9.04197152 21.8164147,9.76610055 21.8236786,10.4863586 C22.5479949,10.4938425 23.2759431,10.4938425 24,10.5010683 L24,12.6551328 C23.2759431,12.6623586 22.5516269,12.6659715 21.8236786,12.6731973 C21.8164147,13.3970683 21.8127827,14.1175844 21.8091508,14.8381005 L19.6400933,14.8381005 C19.6328294,14.1175844 19.6328294,13.3970683 19.6255655,12.6768102 C18.9012492,12.6695844 18.1735604,12.6623586 17.4492441,12.6551328 L17.4492441,10.5010683 C18.1735604,10.4938425 18.8976172,10.4902296 19.6255655,10.4863586 C19.6291974,9.76248765 19.6364613,9.04197152 19.6437253,8.32145539"
                      />
                    </svg>

                    <button className="font-bold text-whitetext-sm lg:text-lg text-white">
                      google
                    </button>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-center items-center">
                  <hr className="border-1 border-gray-500 w-2/5" />
                  <p className="text-white font-bold text-sm m-1 ">Or</p>
                  <hr className="border-1 border-gray-500 w-2/5" />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <button className="text-white lg:text-xl sm:text-sm font-bold">
                    SIgn Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
