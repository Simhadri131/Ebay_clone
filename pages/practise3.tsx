export default function Practise8() {
  return (
    <div className="grid grid-cols-1 place-content-between place-items-center h-full lg:h-screen bg-gradient-to-tr from-gray-200 to-white  w-full p-4">
      <div className="grid grid-cols-2 p-4 m-2">
        <div className="grid grid-cols-1 place-content-center place-items-start">
          <div className="flex justify-start items-center">
            {" "}
            <svg
              width="32px"
              height="32px"
              viewBox="0 -51 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="-2.77777778%"
                  y1="32%"
                  x2="100%"
                  y2="67.5555556%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#2298BD" offset="0%"></stop>
                  <stop stop-color="#0ED7B5" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                  fill="url(#linearGradient-1)"
                ></path>
              </g>
            </svg>
            <h1 className="font-serif font-bold text-black text-2xl">
              Tailwind
            </h1>
            <p className="text-black  font-bold text-0 border-4 border-black px-1  rounded-md m-1">
              UI
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-1 p-6 hidden ">
          <div className="grid grid-cols-6 gap-3 place-content-center place-items-center">
            <div className="font-bold font-serif text-lg text-black">
              Components
            </div>
            <div className="font-bold font-serif text-lg text-black flex justify-center items-start">
              <p>Templates</p>
              <p className="bg-blue-300  rounded-xl px-3 text-white m-1">New</p>
            </div>
            <div className="font-bold font-serif text-lg text-black">
              Documentation
            </div>
            <div className="flex flex-col justify-start items-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 -0.24 28.423 28.423"
                id="_02_-_Search_Button"
                data-name="02 - Search Button"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Path_215"
                  data-name="Path 215"
                  d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z"
                  transform="translate(-2.31 -2.547)"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_216"
                  data-name="Path 216"
                  d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z"
                  transform="translate(-2.31 -2.547)"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className="font-bold font-serif text-lg text-black">
              <button>Sign in</button>
            </div>
            <div className="font-bold font-serif text-lg text-white  flex  justify-center items-center bg-black py-4 px-2 rounded-lg">
              <button>Get all-access</button>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0063 7.31853C12.326 7.03878 12.812 7.07117 13.0917 7.39089L16.6815 11.4935C16.9352 11.7835 16.9352 12.2165 16.6815 12.5065L13.0917 16.6091C12.812 16.9288 12.326 16.9612 12.0063 16.6815C11.6866 16.4017 11.6542 15.9157 11.9339 15.596L14.4074 12.7692H7.89744C7.4726 12.7692 7.12821 12.4248 7.12821 12C7.12821 11.5752 7.4726 11.2308 7.89744 11.2308H14.4074L11.9339 8.40398C11.6542 8.08426 11.6866 7.59829 12.0063 7.31853Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 w-full h-full p-4 m-2">
        <div className="grid md:col-span-2  lg:mr-4 ">
          <div className=" flex flex-col justify-between items-start">
            <p className="text-right text-blue-500 font-bold text-xl lg:text-2xl font-serif">
              By the makers of Tailwind CSS
            </p>
            <h1 className=" text-2xl lg:text-6xl font-bold font-serif ">
              Beautiful UI Components <br />
              Crafted with Tailwind CSS.
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center m-3">
                <svg
                  width="40px"
                  height="40px"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    stroke="gray"
                    stroke-width="2"
                    d="M3,2 L21,2 L21,18 L12,22 L3,18 L3,2 Z M17,6 L8,6 L8,11 L16,11 L16,16 L12,17.5 L8,16 L8,14"
                  />
                </svg>
                <h1 className="text-gray-600 font-bold font-serif ml-2 text-sm lg:text-xl">
                  HTML
                </h1>
              </div>
              <div className="flex justify-center items-center m-3">
                <svg
                  width="40px"
                  height="40px"
                  fill="gray"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z" />
                </svg>

                <h1 className="text-gray-600 font-bold font-serif ml-2 text-sm lg:text-xl">
                  React
                </h1>
              </div>
              <div className="flex justify-center items-center m-3">
                <svg
                  width="40px"
                  height="40px"
                  fill="gray"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z" />
                </svg>
                <h1 className="text-gray-600 font-bold font-serif ml-2 text-sm lg:text-xl">
                  Vue
                </h1>
              </div>
            </div>
            <p className="font-bold text-gray-600 font-serif text-md lg:text-lg">
              Beautifully designed, expertly crafted components that follow all
              accessibility best practices and are easy to customize.Interactive
              examples for React and Vue powered by Headless UI, plus vanilla
              HTML if you’d rather write any necessary JS yourself.Every example
              is fully responsive and carefully designed and implemented to look
              great at any screen size.
            </p>
            <div className="flex justify-start items-center">
              <a href="https://tailwindui.com/components/preview">
                <div className="h-14 w-52 bg-gray-900 text-white flex justify-center items-center font-bold text-lg  rounded-2xl m-2">
                  <button>Live Preview</button>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0063 7.31853C12.326 7.03878 12.812 7.07117 13.0917 7.39089L16.6815 11.4935C16.9352 11.7835 16.9352 12.2165 16.6815 12.5065L13.0917 16.6091C12.812 16.9288 12.326 16.9612 12.0063 16.6815C11.6866 16.4017 11.6542 15.9157 11.9339 15.596L14.4074 12.7692H7.89744C7.4726 12.7692 7.12821 12.4248 7.12821 12C7.12821 11.5752 7.4726 11.2308 7.89744 11.2308H14.4074L11.9339 8.40398C11.6542 8.08426 11.6866 7.59829 12.0063 7.31853Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
              <a href="https://tailwindui.com/documentation">
                <div className="h-14 w-52  bg-transparent border-2 border-black text-white flex justify-center items-center m-2 font-bold text-lg  rounded-2xl">
                  <button className="text-black">Documentation</button>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0063 7.31853C12.326 7.03878 12.812 7.07117 13.0917 7.39089L16.6815 11.4935C16.9352 11.7835 16.9352 12.2165 16.6815 12.5065L13.0917 16.6091C12.812 16.9288 12.326 16.9612 12.0063 16.6815C11.6866 16.4017 11.6542 15.9157 11.9339 15.596L14.4074 12.7692H7.89744C7.4726 12.7692 7.12821 12.4248 7.12821 12C7.12821 11.5752 7.4726 11.2308 7.89744 11.2308H14.4074L11.9339 8.40398C11.6542 8.08426 11.6866 7.59829 12.0063 7.31853Z"
                      fill="#030D45"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl p-4  ">
          <div className="bg-white  w-full flex flex-col justify-start p-5 rounded-xl  lg:-mt-8 lg:-ml-8">
            <div className="flex justify-center items-center w-full">
              <svg
                width="22px"
                height="22px"
                viewBox="0 -0.24 28.423 28.423"
                id="_02_-_Search_Button"
                data-name="02 - Search Button"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Path_215"
                  data-name="Path 215"
                  d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z"
                  transform="translate(-2.31 -2.547)"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_216"
                  data-name="Path 216"
                  d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z"
                  transform="translate(-2.31 -2.547)"
                  fill-rule="evenodd"
                />
              </svg>

              <input
                type="search"
                className="border-b-1 border-gray-300 w-full text-xl lg:text-2xl m-2 text-gray-300"
                placeholder="search projects..."
              />
            </div>
            <hr className="w-full text-gray-400 m-2" />
            <h1 className="text-xl lg:text-2xl text-gray-400 font-bold ">
              Recent Searches
            </h1>
            <div className="flex  justify-start items-center w-full p-2 hover:bg-[#1d4ed8] rounded-lg text-gray-600 hover:text-white">
              <div>
                {" "}
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="gray"
                  id="magicoon-Regular"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:stroke-white"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <title>file</title>
                  <g id="file-Regular">
                    <path
                      id="file-Regular-2"
                      data-name="file-Regular"
                      d="M19.237,7.177,14.823,2.763a1.736,1.736,0,0,0-1.237-.513H9A4.756,4.756,0,0,0,4.25,7V17A4.756,4.756,0,0,0,9,21.75h6A4.756,4.756,0,0,0,19.75,17V8.414A1.736,1.736,0,0,0,19.237,7.177ZM14.75,4.811,17.189,7.25H16.5A1.752,1.752,0,0,1,14.75,5.5ZM15,20.25H9A3.254,3.254,0,0,1,5.75,17V7A3.254,3.254,0,0,1,9,3.75h4.25V5.5A3.254,3.254,0,0,0,16.5,8.75h1.75V17A3.254,3.254,0,0,1,15,20.25Z"
                    />
                  </g>
                </svg>
              </div>
              <h1 className=" text-lg lg:text-xl  ml-2  ">
                Tailwind Labs/Website redesign
              </h1>
            </div>
            <div className="flex justify-start items-center w-full p-2 hover:bg-[#1d4ed8]  rounded-lg text-gray-600 hover:text-white ">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="gray"
                id="magicoon-Regular"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-white"
              >
                <defs>
                  <style></style>
                </defs>
                <title>file</title>
                <g id="file-Regular">
                  <path
                    id="file-Regular-2"
                    data-name="file-Regular"
                    d="M19.237,7.177,14.823,2.763a1.736,1.736,0,0,0-1.237-.513H9A4.756,4.756,0,0,0,4.25,7V17A4.756,4.756,0,0,0,9,21.75h6A4.756,4.756,0,0,0,19.75,17V8.414A1.736,1.736,0,0,0,19.237,7.177ZM14.75,4.811,17.189,7.25H16.5A1.752,1.752,0,0,1,14.75,5.5ZM15,20.25H9A3.254,3.254,0,0,1,5.75,17V7A3.254,3.254,0,0,1,9,3.75h4.25V5.5A3.254,3.254,0,0,0,16.5,8.75h1.75V17A3.254,3.254,0,0,1,15,20.25Z"
                  />
                </g>
              </svg>
              <h1 className=" text-lg lg:text-xl  ml-2 ">
                Laraval LLC/Conference Branding
              </h1>
            </div>
            <hr className="w-full text-gray-400 m-2" />
            <div className="flex  justify-start items-center w-full p-2 hover:bg-[#1d4ed8]  rounded-lg text-gray-600 hover:text-white">
              <svg
                width="28px"
                height="28px"
                fill="gray"
                viewBox="-64 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-white"
              >
                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" />
              </svg>
              <h1 className=" text-lg lg:text-xl  ml-2 ">Add New File</h1>
            </div>
            <div className="flex  justify-start items-center w-full p-2 hover:bg-[#1d4ed8]  rounded-lg text-gray-600 hover:text-white">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="gray"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-white"
              >
                <path
                  fill="none"
                  stroke="gray"
                  stroke-width="2"
                  d="M2,10 L2,6 L2,2 L10,2 L13,6 L22,6 L22,10 L2,10 Z M2,10 L22,10 L22,22 L2,22 L2,10 Z"
                />
              </svg>
              <h1 className=" text-lg lg:text-xl  ml-2 ">Add New Folder</h1>
            </div>
            <div className="flex  justify-start items-center w-full p-2 hover:bg-[#1d4ed8]  rounded-lg text-gray-600 hover:text-white">
              <svg
                width="24px"
                height="24px"
                viewBox="-32 0 512 512"
                fill="gray"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-white"
              >
                <path d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z" />
              </svg>
              <h1 className=" text-lg lg:text-xl  ml-2 ">Add Hashtag</h1>
            </div>
            <div className="flex  justify-start items-center w-full p-2 hover:bg-[#1d4ed8]  rounded-lg text-gray-600 hover:text-white">
              <svg
                width="24px"
                height="24px"
                fill="gray"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-white"
              >
                <g id="Lager_38" data-name="Lager 38" transform="translate(-2)">
                  <rect
                    id="Rectangle_16"
                    data-name="Rectangle 16"
                    width="4"
                    height="4"
                    rx="1.98"
                    transform="translate(18 10)"
                    fill="gray"
                    className="hover:stroke-white"
                  />
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M32,0"
                    fill="gray"
                    className="hover:stroke-white"
                  />
                  <path
                    id="Path_46"
                    data-name="Path 46"
                    d="M25.906,6.094l-.465,10.234a1,1,0,0,1-.292.661l-7.5,7.5a1,1,0,0,1-1.414,0L7.507,15.769a1,1,0,0,1,0-1.414l7.5-7.5a1,1,0,0,1,.661-.292l10.234-.465M27.934,2l-.1,0-13.51.614a2,2,0,0,0-1.323.584L2.606,13.6a2.068,2.068,0,0,0,0,2.925l12.87,12.87a2.068,2.068,0,0,0,2.925,0L28.8,19a2,2,0,0,0,.584-1.323L30,4.162A2.068,2.068,0,0,0,27.934,2Z"
                    fill="gray"
                    className="hover:stroke-white"
                  />
                </g>
              </svg>
              <h1 className=" text-lg lg:text-xl  ml-2 ">Add Label</h1>
            </div>
          </div>
          <div className="mt-4 grid w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className=" flex justify-center items-center m-4 p-4  border-2 border-gray-400 rounded-md">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#1d4ed8] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                </label>
              </div>
              <div className="flex justify-between items-center m-4 p-4 border-2 border-gray-400 rounded-md">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12.2565C20 15.7437 19.4904 21.077 19.4904 21.2821C19.4904 21.4872 19.2866 21.7949 19.0828 21.8975C18.9809 22.0001 18.879 22.0001 18.6752 22.0001C18.5732 22.0001 18.4713 22.0001 18.2675 21.8975L12.051 18.6154C11.949 18.6154 11.8471 18.6154 11.8471 18.6154L5.63057 21.8975C5.42675 22.0001 5.12102 22.0001 4.9172 21.8975C4.71338 21.7949 4.50955 21.5898 4.50955 21.2821C4.50955 21.077 4 15.7437 4 12.2565C4.10191 10.0001 4.30573 7.0257 4.50955 4.87186C4.61146 3.53852 5.63057 2.51288 6.95541 2.30775C8.38217 2.20519 10.4204 2.00006 12.051 2.00006C13.6815 2.00006 15.7197 2.20519 17.1465 2.30775C18.4713 2.41032 19.4904 3.53852 19.5924 4.87186C19.7962 7.0257 20 10.0001 20 12.2565Z"
                    fill="#030D45"
                  />
                </svg>
                <h1 className="font-bold text-black">Bookmark</h1>
                <p className="font-bold text-black">12k</p>
              </div>
              <div className="flex justify-center items-center m-4 p-4  border-2 border-gray-400 rounded-md">
                <button className="bg-[#1d4ed8] rounded-lg text-white font-bold w-56 h-10">
                  Button A
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl p-4 ">
          <div className="flex flex-col h-full justify-between items-center ">
            <div className="bg-white w-full flex-col justify-center items-center p-5 border-2 border-gray-300 rounded-lg ">
              <div className="flex justify-start items-start">
                <div>
                  <img
                    src="https://tailwindui.com/img/avatar-3.jpg"
                    className="h-14 w-14 rounded-full"
                  />
                </div>
                <div className="flex flex-col ml-3 font-bold font-serif ">
                  <h1 className="text-black text-lg lg:text-xl">
                    Emily selman
                  </h1>
                  <p className="text-gray-400 text-lg lg:text-xl">
                    sent you an inivite to connect
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center">
                <button className="bg-[#1d4ed8] w-32 h-10 px-2 m-4 rounded-lg text-white font-bold">
                  Accept
                </button>
                <button className="border-2 w-32 h-10 text-black rounded-lg font-bold m-4 px-2">
                  Decline
                </button>
              </div>
            </div>
            <hr className="w-full text-gray-400 m-1 border-2" />
            <div className="bg-white m-6 w-full flex flex-col justify-around p-5 lg:-mb-8 lg:-mr-8 ">
              <div className="flex justify-between  items-center">
                <div className="flex justify-start items-start m-2">
                  <div>
                    <img
                      src="https://tailwindui.com/img/avatar-1.jpg"
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ml-3 font-bold font-serif ">
                    <h1 className="text-black text-lg lg:text-xl">
                      Leonard krasher
                    </h1>
                    <p className="text-gray-400 text-lg lg:text-xl">
                      @leonardKrasher
                    </p>
                  </div>
                </div>
                <div className="py-2 px-3 border-2 border-gray-400 rounded-lg">
                  <button>View</button>
                </div>
              </div>
              <hr className="w-full text-gray-400 m-1 border-2" />
              <div className="flex justify-between  items-center">
                <div className="flex justify-start items-start m-2">
                  <div>
                    <img
                      src="https://tailwindui.com/img/avatar-2.jpg"
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ml-3 font-bold font-serif ">
                    <h1 className="text-black text-lg lg:text-xl">
                      Floyd Miles
                    </h1>
                    <p className="text-gray-400 text-lg lg:text-xl">
                      @floydmiles
                    </p>
                  </div>
                </div>
                <div className="py-2 px-3 border-2 border-gray-400 rounded-lg">
                  <button>View</button>
                </div>
              </div>
              <div className="w-full h-10 border-2 border-gray-400 m-2 flex justify-center items-center rounded-xl">
                <button className="py-2 font-bold text-lg lg:text-xl">
                  View all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 p-4 m-2 w-full h-full">
        <div className="grid md:grid-cols-3 grid-cols-1  gap-1">
          <div className="flex flex-row justify-start items-start   rounded-lg p-5">
            <svg
              width="72px"
              height="72px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>ionicons-v5_logos</title>
              <polygon points="179.9 388 179.9 388 103.74 256 179.9 388" />
              <polygon
                points="179.9 388 332.11 388 408.26 256 332.11 124 179.9 124 103.74 256 179.9 388"
                fill="white"
              />
              <polygon
                points="103.74 256 179.9 124 179.9 124 103.74 256"
                fill="white"
              />
              <polygon points="496 256 376 48 239.74 48 195.9 124 332.11 124 408.26 256 332.11 388 195.9 388 239.74 464 376 464 496 256" />
              <polygon points="179.9 388 103.74 256 179.9 124 179.9 124 223.74 48 136 48 16 256 136 464 223.74 464 179.9 388 179.9 388" />
            </svg>
            <div className="ml-3 flex flex-col justify-start ">
              <h1 className="text-black font-bold text-xl lg:text-2xl font-serif mb-1">
                500+ Components
              </h1>
              <p className="text-gray-500 font-bold text-xl lg:text-2xl font-serif">
                Beautifully designed, expertly crafted components that follow
                all accessibility best practices and are easy to customize.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start   rounded-lg p-5">
            <svg
              width="72px"
              height="72px"
              viewBox="0 0 24 24"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style></style>
                <clipPath id="clip-path">
                  <rect x="-0.15" y="0.06" width="24" height="24" />
                </clipPath>
              </defs>
              <title>box-code</title>
              <g>
                <path d="M8.46,14.51a.74.74,0,0,1-.53-.22L6.12,12.48a.74.74,0,0,1,0-1.06l2-2a.75.75,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L7.71,12,9,13.23a.75.75,0,0,1,0,1.06A.74.74,0,0,1,8.46,14.51Z" />
                <path d="M15.54,14.51a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L16.29,12l-1.43-1.43a.75.75,0,0,1,0-1.06.75.75,0,0,1,1.06,0l2,2a.74.74,0,0,1,0,1.06l-1.81,1.81A.74.74,0,0,1,15.54,14.51Z" />
                <path d="M11,15.44a.63.63,0,0,1-.26,0,.74.74,0,0,1-.44-1L12.34,8.8a.75.75,0,0,1,1-.44.74.74,0,0,1,.44,1L11.66,15A.77.77,0,0,1,11,15.44Z" />
                <path d="M17.25,22.75H6.75a4,4,0,0,1-4-4V5.25a4,4,0,0,1,4-4h10.5a4,4,0,0,1,4,4v13.5A4,4,0,0,1,17.25,22.75Zm-10.5-20a2.5,2.5,0,0,0-2.5,2.5v13.5a2.5,2.5,0,0,0,2.5,2.5h10.5a2.5,2.5,0,0,0,2.5-2.5V5.25a2.5,2.5,0,0,0-2.5-2.5Z" />
              </g>
            </svg>
            <div className="ml-3 flex flex-col justify-start ">
              <h1 className="text-black font-bold text-xl lg:text-2xl font-serif mb-1">
                React, Vue, and HTML
              </h1>
              <p className="text-gray-500 font-bold text-xl lg:text-2xl font-serif">
                Interactive examples for React and Vue powered by Headless UI,
                plus vanilla HTML if you’d rather write any necessary JS
                yourself.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start   rounded-lg p-5">
            <svg
              width="72px"
              height="72px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6 48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z" />
            </svg>
            <div className="ml-3 flex flex-col justify-start ">
              <h1 className="text-black font-bold text-xl lg:text-2xl font-serif mb-1">
                Fully Responsive
              </h1>
              <p className="text-gray-500 font-bold text-xl lg:text-2xl font-serif">
                Every example is fully responsive and carefully designed and
                implemented to look great at any screen size
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
