// // export default function () {
// //   return (
// //     <div className="bg-black h-screen w-full p-10">
// //       <div className="h-screen background-image: url({}) "></div>
// //     </div>
// //   );
// // }

import { getEnvironmentData } from "worker_threads";

// // import React, { useState } from "react";

// // interface Props {}
// // interface FormData {
// //   email: string;
// //   password: string;
// // }

// // const SignIn: React.FC<Props> = () => {
// //   const [formData, setFormData] = useState<FormData>({
// //     email: "",
// //     password: "",
// //   });

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     // Code to handle form submission here
// //   };

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         Email:
// //         <input
// //           type="email"
// //           name="email"
// //           value={formData.email}
// //           onChange={handleChange}
// //         />
// //       </label>
// //       <br />
// //       <label>
// //         Password:
// //         <input
// //           type="password"
// //           name="password"
// //           value={formData.password}
// //           onChange={handleChange}
// //         />
// //       </label>
// //       <br />
// //       <button type="submit">Sign In</button>
// //     </form>
// //   );
// // };

// // export default SignIn;

// export default function practiseFile() {
//   return (
//     <div className="bg-[url(https://assets-global.website-files.com/5e593fb060cf87bbaf75dd20/5fbda3633872cb78a5059145_template_mktplace_hero-p-1080.jpeg)] h-screen bg-cover  ">
//       qeagdw
//     </div>
//   );
// }

// export default function practise9() {
//   console.log("data called");
//   function getData(data: any) {
//     console.log("getData function has been called");
//     return (
//       // <div className="grid grid-cols-5 border-2 hover:scale-105 border-gray-500 place-content-start items-start gap-3 p-5 hover:bg-black">
//       //   <div className="col-span-2">
//       //     <div className=" grid grid-cols-3 place-content-start place-items-center">
//       //       <svg
//       //         width="22px"
//       //         height="22px"
//       //         viewBox="-32 0 512 512"
//       //         fill="white"
//       //         xmlns="http://www.w3.org/2000/svg"
//       //       >
//       //         <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//       //       </svg>
//       //       <div className="w-14 h-14">
//       //         {" "}
//       //         <img
//       //           src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgALAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAcBAv/EADIQAAIBAgQEBAUDBQEAAAAAAAECAwQRAAUSIQYTMVEiQWGRFHGBwfAjQrEVJDJSYgf/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQAAv/EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREiExQf/aAAwDAQACEQMRAD8AUKWCZlPNhhVehAjA6fTGqGhmrJhHSwl3PRUX07YJUFGZIAvUffBrIcwyLKa4PVZhAkhUo291F+7DYe+JnY0niK1VHrWZ8ryGZKZGqstgkJLLGkpcSSP0XYEDSCRe/kDiyo4bkQq9TCBpF7BQAD9MNEf609LWQjmxi7RNHJrj3uNVxt0JwLzni1YXOX0aw1NRq/WnDWijHbfqfzfE0LpuXaHyrgvBUrssGgsiDr7YFmOWM6eVEQOmpb46LIVr6DmuinwbSrGVVj52/PfCVWroqCov7Yrja36IlVH1HtTlOdVtABlSKadoy8xL6ff7W7455WLMkxid9b3sdO98dpyaqan4aqz8S9Oscet5I1DMFHUAHz/Nsc84hNBQ55HHTTNPCi2aZjvJcC7elzvb1wuFj0NlS+s1/wDnedJTRVuVZxJJHk1Qn9yyswaAi/iW1ze9gRY3x9GjheqiEFZMlFFNeNfFF8Qn7XIYBrkG9/puDfGjKOFK/iHKZZssy+R4ZaoM7cxEDhQdrMwPU36HoMMGeZfFnVNFSU8oFXGpR1UtqR1/yTSd7r2F9txcY039DUkun2UR0uXUlZAaerrqmaeB2eOSUvHCR0v2vv13+46pmbnHpgnw5TUlDl1RCaqokrIWKTqXVomJAOpdr7XA6+XsGrZYxUN4jjhMbi0ZuHa+GmpZHnI5apeQAXuLdLYQ8wfKfipnp4ZJasnw8w7KPI9j89zjyDOrI0Jsqt1PfGKqlhgqEPIuZFYKRIB5X7HvhkYYJss5DnwjxG9NV0tClZMhcMNEZ0x6v+tjuRcbb4r4fzSljz3MZM25bxTM8hRvEYpwSNSnzuLj1FsAKhIqSdUoaqBZEROY3MCgN+6zdhvuQD/OB1LNarikmaPSNzKIwbi/r1Pt88Hgjnmx7qa+gpqSVqSmEEErAiPfwt56fQ7YTqrMEeYsL2+WKs0zpZ5JQkfLXUTYDYfIYBSVTFrh7emAoHbn0UmV42KlrkdjfF0deSQpKLa/jkJIufOwF+wxMTFGaS6z3+pFSVVjsdmCFrjb/Yg4qaulYW5ktgfCAwUAeosf5xMTGzDelBqGI8Ts1+t98aY6aR0WQSQgPuA06g/UXxMTGaDyZ//Z"
//       //           className="h-full w-full"
//       //         />
//       //       </div>

//       //       <div className="flex flex-col justify-start items-center m-1 font-bold font-serif">
//       //         <h1 className="text-white text-xl">The RRR</h1>
//       //         <p className="text-gray-400 text-md">Jr.NTR/RAM CHARAN</p>
//       //       </div>
//       //     </div>
//       //   </div>

//       //   <div className="flex justify-start items-center">
//       //     <h1 className="text-gray-400 font-bold text-xl">The Amazing Track</h1>
//       //   </div>
//       //   <div className="flex justify-start items-center">
//       //     <h1 className="text-gray-400 font-bold text-xl">435k</h1>
//       //   </div>
//       //   <div className="">
//       //     <div className="flex flex-row justify-between items-center">
//       //       <h1 className="text-gray-400 font-bold">4.35PM</h1>
//       //       <svg
//       //         width="18px"
//       //         height="18px"
//       //         fill="white"
//       //         viewBox="0 0 512 512"
//       //         xmlns="http://www.w3.org/2000/svg"
//       //       >
//       //         <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
//       //       </svg>
//       //       <svg
//       //         width="18px"
//       //         height="18px"
//       //         fill="white"
//       //         viewBox="0 0 512 512"
//       //         xmlns="http://www.w3.org/2000/svg"
//       //       >
//       //         <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
//       //       </svg>
//       //       <svg
//       //         width="18px"
//       //         height="18px"
//       //         viewBox="0 0 512 512"
//       //         fill="white"
//       //         xmlns="http://www.w3.org/2000/svg"
//       //       >
//       //         <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
//       //       </svg>
//       //     </div>
//       //   </div>
//       // </div>

//       data.map((e: any) => {
//         <div>
//           <div className="grid grid-cols-5 border-2 hover:scale-105 border-gray-500 place-content-start items-start gap-3 p-5 hover:bg-black">
//             <div className="col-span-2">
//               <div className=" grid grid-cols-3 place-content-start place-items-center">
//                 <svg
//                   width="22px"
//                   height="22px"
//                   viewBox="-32 0 512 512"
//                   fill="white"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//                 </svg>
//                 <div className="w-14 h-14">
//                   {" "}
//                   <img src={e.image} className="h-full w-full" />
//                 </div>

//                 <div className="flex flex-col justify-start items-center m-1 font-bold font-serif">
//                   <h1 className="text-white text-xl">dgw</h1>
//                   <p className="text-gray-400 text-md">{e.description}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-start items-center">
//               <h1 className="text-gray-400 font-bold text-xl">
//                 The Amazing Track
//               </h1>
//             </div>
//             <div className="flex justify-start items-center">
//               <h1 className="text-gray-400 font-bold text-xl">435k</h1>
//             </div>
//             <div className="">
//               <div className="flex flex-row justify-between items-center">
//                 <h1 className="text-gray-400 font-bold">{e.time}</h1>
//                 <svg
//                   width="18px"
//                   height="18px"
//                   fill="white"
//                   viewBox="0 0 512 512"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
//                 </svg>
//                 <svg
//                   width="18px"
//                   height="18px"
//                   fill="white"
//                   viewBox="0 0 512 512"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
//                 </svg>
//                 <svg
//                   width="18px"
//                   height="18px"
//                   viewBox="0 0 512 512"
//                   fill="white"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>;
//       })
//     );
//   }

//   const dataMusic = [
//     {
//       image:
//         "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgALAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAcBAv/EADIQAAIBAgQEBAUDBQEAAAAAAAECAwQRAAUSIQYTMVEiQWGRFHGBwfAjQrEVJDJSYgf/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQAAv/EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREiExQf/aAAwDAQACEQMRAD8AUKWCZlPNhhVehAjA6fTGqGhmrJhHSwl3PRUX07YJUFGZIAvUffBrIcwyLKa4PVZhAkhUo291F+7DYe+JnY0niK1VHrWZ8ryGZKZGqstgkJLLGkpcSSP0XYEDSCRe/kDiyo4bkQq9TCBpF7BQAD9MNEf609LWQjmxi7RNHJrj3uNVxt0JwLzni1YXOX0aw1NRq/WnDWijHbfqfzfE0LpuXaHyrgvBUrssGgsiDr7YFmOWM6eVEQOmpb46LIVr6DmuinwbSrGVVj52/PfCVWroqCov7Yrja36IlVH1HtTlOdVtABlSKadoy8xL6ff7W7455WLMkxid9b3sdO98dpyaqan4aqz8S9Oscet5I1DMFHUAHz/Nsc84hNBQ55HHTTNPCi2aZjvJcC7elzvb1wuFj0NlS+s1/wDnedJTRVuVZxJJHk1Qn9yyswaAi/iW1ze9gRY3x9GjheqiEFZMlFFNeNfFF8Qn7XIYBrkG9/puDfGjKOFK/iHKZZssy+R4ZaoM7cxEDhQdrMwPU36HoMMGeZfFnVNFSU8oFXGpR1UtqR1/yTSd7r2F9txcY039DUkun2UR0uXUlZAaerrqmaeB2eOSUvHCR0v2vv13+46pmbnHpgnw5TUlDl1RCaqokrIWKTqXVomJAOpdr7XA6+XsGrZYxUN4jjhMbi0ZuHa+GmpZHnI5apeQAXuLdLYQ8wfKfipnp4ZJasnw8w7KPI9j89zjyDOrI0Jsqt1PfGKqlhgqEPIuZFYKRIB5X7HvhkYYJss5DnwjxG9NV0tClZMhcMNEZ0x6v+tjuRcbb4r4fzSljz3MZM25bxTM8hRvEYpwSNSnzuLj1FsAKhIqSdUoaqBZEROY3MCgN+6zdhvuQD/OB1LNarikmaPSNzKIwbi/r1Pt88Hgjnmx7qa+gpqSVqSmEEErAiPfwt56fQ7YTqrMEeYsL2+WKs0zpZ5JQkfLXUTYDYfIYBSVTFrh7emAoHbn0UmV42KlrkdjfF0deSQpKLa/jkJIufOwF+wxMTFGaS6z3+pFSVVjsdmCFrjb/Yg4qaulYW5ktgfCAwUAeosf5xMTGzDelBqGI8Ts1+t98aY6aR0WQSQgPuA06g/UXxMTGaDyZ//Z",
//       name: "The New",
//       time: "2.3444",
//       description: "rfoijfihr",
//       subDescription: "fio2hoh",
//     },
//     {
//       image:
//         "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgALAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAcBAv/EADIQAAIBAgQEBAUDBQEAAAAAAAECAwQRAAUSIQYTMVEiQWGRFHGBwfAjQrEVJDJSYgf/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQAAv/EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREiExQf/aAAwDAQACEQMRAD8AUKWCZlPNhhVehAjA6fTGqGhmrJhHSwl3PRUX07YJUFGZIAvUffBrIcwyLKa4PVZhAkhUo291F+7DYe+JnY0niK1VHrWZ8ryGZKZGqstgkJLLGkpcSSP0XYEDSCRe/kDiyo4bkQq9TCBpF7BQAD9MNEf609LWQjmxi7RNHJrj3uNVxt0JwLzni1YXOX0aw1NRq/WnDWijHbfqfzfE0LpuXaHyrgvBUrssGgsiDr7YFmOWM6eVEQOmpb46LIVr6DmuinwbSrGVVj52/PfCVWroqCov7Yrja36IlVH1HtTlOdVtABlSKadoy8xL6ff7W7455WLMkxid9b3sdO98dpyaqan4aqz8S9Oscet5I1DMFHUAHz/Nsc84hNBQ55HHTTNPCi2aZjvJcC7elzvb1wuFj0NlS+s1/wDnedJTRVuVZxJJHk1Qn9yyswaAi/iW1ze9gRY3x9GjheqiEFZMlFFNeNfFF8Qn7XIYBrkG9/puDfGjKOFK/iHKZZssy+R4ZaoM7cxEDhQdrMwPU36HoMMGeZfFnVNFSU8oFXGpR1UtqR1/yTSd7r2F9txcY039DUkun2UR0uXUlZAaerrqmaeB2eOSUvHCR0v2vv13+46pmbnHpgnw5TUlDl1RCaqokrIWKTqXVomJAOpdr7XA6+XsGrZYxUN4jjhMbi0ZuHa+GmpZHnI5apeQAXuLdLYQ8wfKfipnp4ZJasnw8w7KPI9j89zjyDOrI0Jsqt1PfGKqlhgqEPIuZFYKRIB5X7HvhkYYJss5DnwjxG9NV0tClZMhcMNEZ0x6v+tjuRcbb4r4fzSljz3MZM25bxTM8hRvEYpwSNSnzuLj1FsAKhIqSdUoaqBZEROY3MCgN+6zdhvuQD/OB1LNarikmaPSNzKIwbi/r1Pt88Hgjnmx7qa+gpqSVqSmEEErAiPfwt56fQ7YTqrMEeYsL2+WKs0zpZ5JQkfLXUTYDYfIYBSVTFrh7emAoHbn0UmV42KlrkdjfF0deSQpKLa/jkJIufOwF+wxMTFGaS6z3+pFSVVjsdmCFrjb/Yg4qaulYW5ktgfCAwUAeosf5xMTGzDelBqGI8Ts1+t98aY6aR0WQSQgPuA06g/UXxMTGaDyZ//Z",
//       name: "The New2",
//       time: "2.3444",
//       description: "rfoijfihr",
//       subDescription: "fio2hoh",
//     },
//     {
//       image:
//         "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgALAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAcBAv/EADIQAAIBAgQEBAUDBQEAAAAAAAECAwQRAAUSIQYTMVEiQWGRFHGBwfAjQrEVJDJSYgf/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQAAv/EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREiExQf/aAAwDAQACEQMRAD8AUKWCZlPNhhVehAjA6fTGqGhmrJhHSwl3PRUX07YJUFGZIAvUffBrIcwyLKa4PVZhAkhUo291F+7DYe+JnY0niK1VHrWZ8ryGZKZGqstgkJLLGkpcSSP0XYEDSCRe/kDiyo4bkQq9TCBpF7BQAD9MNEf609LWQjmxi7RNHJrj3uNVxt0JwLzni1YXOX0aw1NRq/WnDWijHbfqfzfE0LpuXaHyrgvBUrssGgsiDr7YFmOWM6eVEQOmpb46LIVr6DmuinwbSrGVVj52/PfCVWroqCov7Yrja36IlVH1HtTlOdVtABlSKadoy8xL6ff7W7455WLMkxid9b3sdO98dpyaqan4aqz8S9Oscet5I1DMFHUAHz/Nsc84hNBQ55HHTTNPCi2aZjvJcC7elzvb1wuFj0NlS+s1/wDnedJTRVuVZxJJHk1Qn9yyswaAi/iW1ze9gRY3x9GjheqiEFZMlFFNeNfFF8Qn7XIYBrkG9/puDfGjKOFK/iHKZZssy+R4ZaoM7cxEDhQdrMwPU36HoMMGeZfFnVNFSU8oFXGpR1UtqR1/yTSd7r2F9txcY039DUkun2UR0uXUlZAaerrqmaeB2eOSUvHCR0v2vv13+46pmbnHpgnw5TUlDl1RCaqokrIWKTqXVomJAOpdr7XA6+XsGrZYxUN4jjhMbi0ZuHa+GmpZHnI5apeQAXuLdLYQ8wfKfipnp4ZJasnw8w7KPI9j89zjyDOrI0Jsqt1PfGKqlhgqEPIuZFYKRIB5X7HvhkYYJss5DnwjxG9NV0tClZMhcMNEZ0x6v+tjuRcbb4r4fzSljz3MZM25bxTM8hRvEYpwSNSnzuLj1FsAKhIqSdUoaqBZEROY3MCgN+6zdhvuQD/OB1LNarikmaPSNzKIwbi/r1Pt88Hgjnmx7qa+gpqSVqSmEEErAiPfwt56fQ7YTqrMEeYsL2+WKs0zpZ5JQkfLXUTYDYfIYBSVTFrh7emAoHbn0UmV42KlrkdjfF0deSQpKLa/jkJIufOwF+wxMTFGaS6z3+pFSVVjsdmCFrjb/Yg4qaulYW5ktgfCAwUAeosf5xMTGzDelBqGI8Ts1+t98aY6aR0WQSQgPuA06g/UXxMTGaDyZ//Z",
//       name: "The New3",
//       time: "2.3444",
//       description: "rfoijfihr",
//       subDescription: "fio2hoh",
//     },
//   ];
//   return (
//     <div className="bg-blue-300 h-screen w-full p-10 flex  justify-center items-center ">
//       <div className="bg-black w-full h-full p-2  ">
//         <div className="grid grid-cols-5 w-full h-full gap-1">
//           <div className="col-span-1  bg-gradient-to-tr from-gray-900  to-[#1e3a8a] w-full h-full">
//             <div className="flex flex-col justify-center items-center">
//               <div className="flex flex-col justify-center items-center p-4 w-full ">
//                 <div className="flex flex-col  mb-3 w-full justify-center items-center p-4">
//                   <h1 className="font-bold font-serif text-md lg:text-2xl text-white ">
//                     Spofity
//                   </h1>
//                   <div className="bg-blue-700 py-1 px-24 flex  rounded-xl justify-around items-center font-bold text-md lg:text-xl text-white">
//                     <svg
//                       width="24px"
//                       height="24px"
//                       viewBox="0 0 24 24"
//                       fill="white"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
//                     </svg>
//                     <button>WEB APP</button>
//                   </div>
//                 </div>
//                 <div className="flex flex-col bg-transparent  w-full justify-start items-start p-4">
//                   <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                     <svg
//                       width="32px"
//                       height="32px"
//                       viewBox="0 0 24 24"
//                       id="magicoon-Regular"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="gray"
//                       className="hover:stroke-white"
//                     >
//                       <defs>
//                         <style></style>
//                       </defs>
//                       <title>home</title>
//                       <g id="home-Regular">
//                         <path
//                           id="home-Regular-2"
//                           data-name="home-Regular"
//                           d="M19.978,7.313l-5-4.019a4.783,4.783,0,0,0-5.956,0l-5,4.019a4.722,4.722,0,0,0-1.772,3.7V17A4.753,4.753,0,0,0,7,21.746H9.75V17a2.25,2.25,0,0,1,4.5,0v4.745H17A4.753,4.753,0,0,0,21.75,17V11.009A4.722,4.722,0,0,0,19.978,7.313ZM20.25,17A3.251,3.251,0,0,1,17,20.246H15.75V17a3.75,3.75,0,0,0-7.5,0v3.245H7A3.251,3.251,0,0,1,3.75,17V11.009A3.228,3.228,0,0,1,4.961,8.482l5-4.019a3.277,3.277,0,0,1,4.078,0l5,4.019a3.228,3.228,0,0,1,1.211,2.527Z"
//                         />
//                       </g>
//                     </svg>
//                     <h1 className="p-3 ">HOME</h1>
//                   </div>
//                   <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                     <svg
//                       width="32px"
//                       height="32px"
//                       viewBox="0 0 512 512"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect
//                         width="208"
//                         height="32"
//                         x="256"
//                         y="152"
//                         fill="gray"
//                         className="hover:stroke-white"
//                       />
//                       <rect
//                         width="288"
//                         height="32"
//                         x="176"
//                         y="256"
//                         fill="gray"
//                         className="hover:stroke-white"
//                       />
//                       <rect
//                         width="288"
//                         height="32"
//                         x="176"
//                         y="360"
//                         fill="gray"
//                         className="hover:stroke-white"
//                       />
//                       <polygon
//                         fill="white"
//                         points="192 152 128 152 128 88 96 88 96 152 32 152 32 184 96 184 96 248 128 248 128 184 192 184 192 152"
//                         className="hover:stroke-white"
//                       />
//                     </svg>

//                     <h1 className="p-3 ">Recently Played</h1>
//                   </div>
//                   <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                     <svg
//                       width="32px"
//                       height="32px"
//                       viewBox="0 0 20 20"
//                       fill="gray"
//                       className="hover:stroke-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z" />
//                     </svg>
//                     <h1 className="p-3 ">Collections</h1>
//                   </div>
//                   <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                     <svg
//                       width="32px"
//                       height="32px"
//                       viewBox="0 0 24 24"
//                       fill="gray"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M22 17.5L18.5 20V15L22 17.5Z"
//                         fill="gray"
//                         stroke="gray"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M2 5L20 5"
//                         stroke="gray"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M2 11L20 11"
//                         stroke="gray"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M2 17L14 17"
//                         stroke="gray"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>

//                     <h1 className="p-3 ">Playlists</h1>
//                   </div>
//                   <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                     <svg
//                       width="32px"
//                       height="32px"
//                       fill="white"
//                       viewBox="-1.4 0 30 30"
//                       id="_22_-_Stopwatch"
//                       data-name="22 - Stopwatch"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         id="Path_265"
//                         data-name="Path 265"
//                         d="M16,3.8A13.6,13.6,0,1,0,29.6,17.4,13.606,13.606,0,0,0,16,3.8Zm0,2A11.6,11.6,0,1,1,4.4,17.4,11.606,11.606,0,0,1,16,5.8Z"
//                         transform="translate(-2.4 -1)"
//                         fill-rule="evenodd"
//                       />
//                       <path
//                         id="Path_266"
//                         data-name="Path 266"
//                         d="M19.1,3.4A2.4,2.4,0,0,0,16.7,1H15.3a2.4,2.4,0,0,0-2.4,2.4v0a2.4,2.4,0,0,0,2.4,2.4h1.4a2.4,2.4,0,0,0,2.4-2.4v0Zm-2,0v0a.4.4,0,0,1-.4.4H15.3a.4.4,0,0,1-.4-.4v0a.4.4,0,0,1,.4-.4h1.4A.4.4,0,0,1,17.1,3.4Z"
//                         transform="translate(-2.4 -1)"
//                         fill-rule="evenodd"
//                       />
//                       <path
//                         id="Path_267"
//                         data-name="Path 267"
//                         d="M17,18.18V8.38a1,1,0,0,0-2,0v9.8a1,1,0,0,0,2,0Z"
//                         transform="translate(-2.4 -1)"
//                         fill-rule="evenodd"
//                       />
//                       <path
//                         id="Path_268"
//                         data-name="Path 268"
//                         d="M16,19.18h5.6a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2Z"
//                         transform="translate(-2.4 -1)"
//                         fill-rule="evenodd"
//                       />
//                     </svg>
//                     <h1 className="p-3 ">Subscription</h1>
//                   </div>
//                   <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                     <svg
//                       width="32px"
//                       height="32px"
//                       viewBox="0 0 21 21"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g
//                         fill="black"
//                         fill-rule="evenodd"
//                         stroke="gray"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         transform="translate(3 3)"
//                       >
//                         <path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682" />
//                         <path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z" />
//                         <path d="m12.5 2.5.953 1" />
//                       </g>
//                     </svg>
//                     <h1 className="p-3 ">Create Playlist</h1>
//                   </div>
//                   <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                     <svg
//                       width="32px"
//                       height="32px"
//                       viewBox="0 0 24 24"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       aria-labelledby="favouriteIconTitle"
//                       stroke="gray"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       fill="none"
//                       color="#000000"
//                     >
//                       {" "}
//                       <title id="favouriteIconTitle">Favourite</title>{" "}
//                       <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" />{" "}
//                     </svg>
//                     <h1 className="p-3 ">My Favourite</h1>
//                   </div>
//                 </div>
//                 <hr className="border-3 border-gray-500 w-full" />
//               </div>

//               <div className="flex flex-col justify-start items-start p-4 w-full ">
//                 <h1 className="text-white font-bold font-serif text-xl pl-5">
//                   My playlist #1
//                 </h1>
//                 <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                   <h1 className="p-3 ">Christmas Track</h1>
//                 </div>
//                 <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                   <h1 className="p-3 ">Other Remix</h1>
//                 </div>
//                 <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                   <h1 className="p-3 ">Dj Remix</h1>
//                 </div>
//                 <hr className="border-3 border-gray-500 w-full" />
//               </div>
//               <div className="flex flex-col bg-transparent  w-full justify-start items-start p-4">
//                 <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                   <svg
//                     width="32px"
//                     height="32px"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fill="black"
//                       stroke="gray"
//                       stroke-width="2"
//                       d="M12,9 L12,0 M15,12 L24,12 M0,12 L9,12 M12,24 L12,15 M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M3.5,8.5 L1,7.5 M20.5,15.5 L23,16.5 M3,3 L5.5,5.5 M3,3 L5.5,5.5 M18,18 L20.5,20.5 M20.5,3 L18,5.5 M5.5,18 L3,20.5 M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M20.5,8.5 L23,7.5 M15.5,3.5 L16.5,1 M15.5,20.5 L16.5,23 M8.5,20.5 L7.5,23 M3.5,15.5 L1,16.5 M8.5,3.5 L7.5,1"
//                     />
//                   </svg>

//                   <h1 className="p-3 ">Settings</h1>
//                 </div>
//                 <div className=" hover:bg-black py-1 pr-1 pl-3 hover:py-1 hover:w-full  hover:pl-3 rounded-lg text-gray-500 hover:text-white font-bold foont-serif text-md lg:text-2xl flex flex-row justify-center items-center ">
//                   <svg
//                     width="32px"
//                     height="32px"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fill="none"
//                       stroke="white"
//                       stroke-width="2"
//                       d="M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17"
//                     />
//                   </svg>

//                   <h1 className="p-3 ">Log-out</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-4 bg-gray-900  w-full overflow-auto ">
//             <div className="py-4 bg-gray-900 w-full   grid grid-cols-2 sticky top-0">
//               <div>
//                 <svg
//                   width="44px"
//                   height="44px"
//                   viewBox="0 0 24 24"
//                   fill="gray"
//                   id="magicoon-Regular"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <defs>
//                     <style></style>
//                   </defs>
//                   <title>chevron-left</title>
//                   <g id="chevron-left-Regular">
//                     <path
//                       id="chevron-left-Regular-2"
//                       data-name="chevron-left-Regular"
//                       d="M16.53,20.47a.75.75,0,1,1-1.06,1.06l-9-9a.749.749,0,0,1,0-1.06l9-9a.75.75,0,0,1,1.06,1.06L8.061,12Z"
//                     />
//                   </g>
//                 </svg>
//               </div>
//               <div className="grid grid-cols-1 place-content-center place-items-center">
//                 <div className="grid grid-cols-2  gap-4">
//                   <div className="grid-cols-1 flex flex-row justify-center items-center  ">
//                     <input
//                       type="search"
//                       className=" border-none text-lg font-bold py-2 bg-gray-900 "
//                       placeholder="what's Your wish..?"
//                     />
//                     <svg
//                       width="24px"
//                       height="24px"
//                       viewBox="0 0 24 24"
//                       fill="gray"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M11.5122 4.43902C7.60446 4.43902 4.43902 7.60283 4.43902 11.5026C4.43902 15.4024 7.60446 18.5662 11.5122 18.5662C13.4618 18.5662 15.225 17.7801 16.5055 16.5055C17.7918 15.2251 18.5854 13.4574 18.5854 11.5026C18.5854 7.60283 15.4199 4.43902 11.5122 4.43902ZM2 11.5026C2 6.25314 6.26008 2 11.5122 2C16.7643 2 21.0244 6.25314 21.0244 11.5026C21.0244 13.6919 20.2822 15.7095 19.0374 17.3157L21.6423 19.9177C22.1188 20.3936 22.1193 21.1658 21.6433 21.6423C21.1673 22.1188 20.3952 22.1193 19.9187 21.6433L17.3094 19.037C15.7048 20.2706 13.6935 21.0052 11.5122 21.0052C6.26008 21.0052 2 16.7521 2 11.5026Z"
//                         fill="gray"
//                       />
//                     </svg>
//                   </div>

//                   <div className="grid-cols-1 flex flex-row justify-around items-center ">
//                     <svg
//                       width="24px"
//                       height="24px"
//                       viewBox="-4.22 0 30 30"
//                       fill="gray"
//                       id="_07_-_Notification"
//                       data-name="07 - Notification"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         id="Path_227"
//                         data-name="Path 227"
//                         d="M26.778,24.182v-9c0-7.393-4.864-12-10.778-12s-10.778,4.607-10.778,12v9a3,3,0,0,0,3,3H23.778a3,3,0,0,0,3-3Zm-2-9v9a1,1,0,0,1-1,1H8.222a1,1,0,0,1-1-1v-9c0-6.1,3.9-10,8.778-10S24.778,9.083,24.778,15.182Z"
//                         transform="translate(-5.222 -1)"
//                         fill-rule="evenodd"
//                       />
//                       <path
//                         id="Path_228"
//                         data-name="Path 228"
//                         d="M17,4.182V2a1,1,0,0,0-2,0V4.182a1,1,0,0,0,2,0Z"
//                         transform="translate(-5.222 -1)"
//                         fill-rule="evenodd"
//                       />
//                       <path
//                         id="Path_229"
//                         data-name="Path 229"
//                         d="M16,25.182a2.909,2.909,0,1,0,2.909,2.909A2.91,2.91,0,0,0,16,25.182Zm0,2a.909.909,0,1,1-.909.909A.909.909,0,0,1,16,27.182Z"
//                         transform="translate(-5.222 -1)"
//                         fill-rule="evenodd"
//                       />
//                     </svg>
//                     <div>
//                       <img
//                         src="https://tailwindui.com/img/avatar-1.jpg"
//                         className="h-10 w-10 rounded-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-[url(https://www.bleepstatic.com/content/hl-images/2020/08/19/spotify-header-lg.jpg)] bg-cover  h-2/3 p-6 ">
//               <div className="flex flex-col justify-between h-full">
//                 <div className="flex flex-col justify-between items-start p-10 font-serif font-bold ">
//                   <h1 className="text-3xl text-white ">The Voice Of Soul</h1>
//                   <p className="text-xl text-white  font-sans ">
//                     42M monthly listeners
//                   </p>
//                   <button className="bg-black py-2 px-10 text-md text-white hover:scale-105 m-3">
//                     Follow
//                   </button>
//                 </div>
//                 <div>
//                   <div className="flex flex-row justify-between items-center ">
//                     <div className="flex justify-between items-center w-1/5 hover:scale-105">
//                       <svg
//                         width="55px"
//                         height="55px"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fill="blue"
//                           stroke="blye"
//                           stroke-width="2"
//                           d="M3,22.0000002 L21,12 L3,2 L3,22.0000002 Z M5,19 L17.5999998,11.9999999 L5,5 L5,19 Z M7,16 L14.1999999,12 L7,8 L7,16 Z M9,13 L10.8,12 L9,11 L9,13 Z"
//                         />
//                       </svg>
//                       <svg
//                         width="32px"
//                         height="32px"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fill="none"
//                           stroke="white"
//                           stroke-width="2"
//                           d="M19,13 L19,23 L1,23 L1,5 L1,5 L11,5 M14,1 L23,1 L23,10 M10,14 L22.9999998,1 L10,14 Z"
//                         />
//                       </svg>
//                       <svg
//                         width="32px"
//                         height="32px"
//                         viewBox="-32 0 512 512"
//                         fill="white"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" />
//                       </svg>
//                     </div>
//                     <div className="flex justify-between items-center w-1/5 hover:scale-105">
//                       <div>
//                         <img
//                           src="https://tailwindui.com/img/avatar-1.jpg"
//                           className="h-10 w-10 rounded-full "
//                         />
//                       </div>
//                       <p className="text-white font-bold text-xl m-4">
//                         54k Followers
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-5 place-content-start items-start gap-3 p-5 ">
//               <div className="col-span-2 ">
//                 <h1 className="font-bold text-white text-3xl"># Title</h1>
//               </div>
//               <div className="">
//                 <svg
//                   width="24px"
//                   height="24px"
//                   viewBox="0 0 512 512"
//                   fill="white"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" />
//                 </svg>
//               </div>
//               <div className="">
//                 <svg
//                   width="24px"
//                   height="24px"
//                   viewBox="0 -32 576 576"
//                   fill="white"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
//                 </svg>
//               </div>
//               <div className="">
//                 <svg
//                   width="24px"
//                   height="24px"
//                   viewBox="0 0 512 512"
//                   fill="white"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
//                 </svg>
//               </div>
//             </div>
//             <div className="grid grid-cols-5 border-2 hover:scale-105 border-gray-500 place-content-start items-start gap-3 p-5 hover:bg-black">
//               <div className="col-span-2">
//                 <div className=" grid grid-cols-3 place-content-start place-items-center">
//                   <svg
//                     width="22px"
//                     height="22px"
//                     viewBox="-32 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//                   </svg>
//                   <div className="w-14 h-14">
//                     {" "}
//                     <img
//                       src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgALAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAcBAv/EADIQAAIBAgQEBAUDBQEAAAAAAAECAwQRAAUSIQYTMVEiQWGRFHGBwfAjQrEVJDJSYgf/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQAAv/EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREiExQf/aAAwDAQACEQMRAD8AUKWCZlPNhhVehAjA6fTGqGhmrJhHSwl3PRUX07YJUFGZIAvUffBrIcwyLKa4PVZhAkhUo291F+7DYe+JnY0niK1VHrWZ8ryGZKZGqstgkJLLGkpcSSP0XYEDSCRe/kDiyo4bkQq9TCBpF7BQAD9MNEf609LWQjmxi7RNHJrj3uNVxt0JwLzni1YXOX0aw1NRq/WnDWijHbfqfzfE0LpuXaHyrgvBUrssGgsiDr7YFmOWM6eVEQOmpb46LIVr6DmuinwbSrGVVj52/PfCVWroqCov7Yrja36IlVH1HtTlOdVtABlSKadoy8xL6ff7W7455WLMkxid9b3sdO98dpyaqan4aqz8S9Oscet5I1DMFHUAHz/Nsc84hNBQ55HHTTNPCi2aZjvJcC7elzvb1wuFj0NlS+s1/wDnedJTRVuVZxJJHk1Qn9yyswaAi/iW1ze9gRY3x9GjheqiEFZMlFFNeNfFF8Qn7XIYBrkG9/puDfGjKOFK/iHKZZssy+R4ZaoM7cxEDhQdrMwPU36HoMMGeZfFnVNFSU8oFXGpR1UtqR1/yTSd7r2F9txcY039DUkun2UR0uXUlZAaerrqmaeB2eOSUvHCR0v2vv13+46pmbnHpgnw5TUlDl1RCaqokrIWKTqXVomJAOpdr7XA6+XsGrZYxUN4jjhMbi0ZuHa+GmpZHnI5apeQAXuLdLYQ8wfKfipnp4ZJasnw8w7KPI9j89zjyDOrI0Jsqt1PfGKqlhgqEPIuZFYKRIB5X7HvhkYYJss5DnwjxG9NV0tClZMhcMNEZ0x6v+tjuRcbb4r4fzSljz3MZM25bxTM8hRvEYpwSNSnzuLj1FsAKhIqSdUoaqBZEROY3MCgN+6zdhvuQD/OB1LNarikmaPSNzKIwbi/r1Pt88Hgjnmx7qa+gpqSVqSmEEErAiPfwt56fQ7YTqrMEeYsL2+WKs0zpZ5JQkfLXUTYDYfIYBSVTFrh7emAoHbn0UmV42KlrkdjfF0deSQpKLa/jkJIufOwF+wxMTFGaS6z3+pFSVVjsdmCFrjb/Yg4qaulYW5ktgfCAwUAeosf5xMTGzDelBqGI8Ts1+t98aY6aR0WQSQgPuA06g/UXxMTGaDyZ//Z"
//                       className="h-full w-full"
//                     />
//                   </div>

//                   <div className="flex flex-col justify-start items-center m-1 font-bold font-serif">
//                     <h1 className="text-white text-xl">The RRR</h1>
//                     <p className="text-gray-400 text-md">Jr.NTR/RAM CHARAN</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">
//                   The Amazing Track
//                 </h1>
//               </div>
//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">435k</h1>
//               </div>
//               <div className="">
//                 <div className="flex flex-row justify-between items-center">
//                   <h1 className="text-gray-400 font-bold">4.35PM</h1>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     viewBox="0 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-5 border-2 hover:scale-105 border-gray-500 place-content-start items-start gap-3 p-5 hover:bg-black ">
//               <div className="col-span-2">
//                 <div className=" grid grid-cols-3 place-content-start place-items-center">
//                   <svg
//                     width="22px"
//                     height="22px"
//                     viewBox="-32 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
//                   </svg>
//                   <div className="w-14 h-14">
//                     {" "}
//                     <img
//                       src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAwUGAgQHAf/EADMQAAIBAwMCBAQDCQEAAAAAAAECAwAEEQUSITFBEyJRYRRxgZEGMsEVIyVCUrHR4fAH/8QAGAEBAQEBAQAAAAAAAAAAAAAAAwIEBQH/xAAiEQEAAgIBAgcAAAAAAAAAAAABAAIDIREiMRITFEFCUZH/2gAMAwEAAhEDEQA/AEQ6dh4LaCSM8NI6s/mVAMlgO/NPtUSVJ4CdoRinmHf9ad+H9Qjvddu7q6iUxShUhDR4aFOm3GOAevrzzW1HpzafbCOSZpmd3czMmNxJPQen+KLPb9l4OB1OcX6B3lMF1BKsZ5cvsLZAOcHnvUl/53dNpOtS/GCRba4i2MyoWUNnKk4HswHzpjXUNhPdabLZQFXkLq0ko3HI8p7YFZ2N8RChhhhiQMc+G2QevGcfrW/1Fr6SA4qh33OmzWsci+ZScnP5yKKokd3u6jGB3frRRzzwyP03SdcktJNWl1QWlzlfDs888jIyvPUYwOvJ6Va9Uuf4rbWiRBWDss0vXxOG2D2qv30o+LvYY2lk/EkNwnwxzwq7uGPGMYz3z5vrViPjXEUU2oxRx36YEuwggtjqMdjmueik6PTTsSH1vRZ9UEMlrpks0xjwrxxZz/Ljdj29abN+FZ7ext0haJriMeeNRgMe/Pfmrho0ko08RQvtIdgTnn14+9LhvbcXj2zklk6nP/etb8FencwZr82nPTbTxOyvE4ZOGBByKKuevWy3kazwITLGceXgsp9a9qraZI8yuavc6XFDJrS/utQW1CyMq5Mm0AcfT+wqM03WL25WIBlkYlc+GN+3OCQeBjitfTpluIY5XRZFB27GwQfb5VP3eqRaY8sdhdIgnQPboRuZSDyo6kDByB2wanyq0TntL8++WrwR1tqOsJkR7RuUZAwPNtOcYbpkL/usjNq88dxL4caybPKcKS35cgnOf6vt906UsyxsJrlkbHBU53Z+db95vXTLoLM0hdDtT0+X0NOWA1CRXcm4VESrGGBZQASDyT60VT59DuJbmGYiK3jZASHcKw49Bk5orM5V9orjqfKc/s557InyHw0kAb1z19e4qb0/U7eLUU1SQF5GxGVOPcZ9+KKKWqruHaoV5PuMaX9nSHaGWMsSAGyFqQttemiGVwCRwcc/ftRRU2ZVSCX9xdSE84AySzV7RRRisvwk/9k="
//                       className="h-full w-full"
//                     />
//                   </div>

//                   <div className="flex flex-col justify-start items-center m-1 font-bold font-serif">
//                     <h1 className="text-white text-xl">The JERSEY</h1>
//                     <p className="text-gray-400 text-md">NANI</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">
//                   The Mindblowing Track
//                 </h1>
//               </div>
//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">986k</h1>
//               </div>
//               <div className="">
//                 <div className="flex flex-row justify-between items-center">
//                   <h1 className="text-gray-400 font-bold">1.35PM</h1>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     viewBox="0 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-5 border-2 hover:scale-105 border-gray-500 place-content-start items-start gap-3 p-5 hover:bg-black ">
//               <div className="col-span-2">
//                 <div className="grid grid-cols-3 place-content-start place-items-center">
//                   <svg
//                     width="22px"
//                     height="22px"
//                     viewBox="-32 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//                   </svg>
//                   <img
//                     src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABQYHAgMEAf/EADIQAAIBAwMCBAMGBwAAAAAAAAECAwAEEQUSMSEiE0FRYQaBsRQjMsHh8BVCYnGRodH/xAAZAQEAAwEBAAAAAAAAAAAAAAADAgQFAAH/xAAkEQACAgEDAgcAAAAAAAAAAAABAgARAxMhMRJRBAUUMkFhsf/aAAwDAQACEQMRAD8Ax+P9Y1HQNbsrqxlfZNEQ0ZOUbB4x69earXXLr7RdtcKxIlJbr6nmrf8AjfTk1PSVmKhpLR/EA9V/mH5/KqYvA4mYuhGST1GK1XJAqYfg+hwGHImgnxXXC5PQfOu1rAvCXCkqGyTjgcZ/1WzTbOFkR5nYSbu1FH1NSS3awhtxHbstwZl+9AGcf0j35NQVLG8fLm6fbIo1ssTY5BAIIoqVpols7OJJURQezcDnHp0r2u0oPqRLBNwXhPiSKqEdRjOR8+lVb8VRQprkUEUbLEx3Lu5Iz+lSFNb7ASeOP71CNb1E3urrcg9isFT3C+f+c1bzUi7zP8vxZNYk8VOy1tZvEO54Y85ZFkI7vbPArqsLW4guY1Lfdbu5kHbkjy9/Kmuh21vqk8MEkeWXp7fOnmtR2mlxwb3UmN9yRg9CeBn60JQBuZabKx2qYz3S2myG3sonKr3tINxJ+lFYRazFEgKlIy3U7RzRXVAsyv5btriPwosrGfxP6+wpXeuvjKqDAjAWnNjC9xE7RmJdhVe9sZLHAxSyXSbrc0krwKDubq+c4IBAwOQTijzliO81sJRWI4jjR55Ek3wMQ0oRFIPXuIz+dO9SskkaeS5uIowScF24GajdrDJprM92UEcM3hlQ+W3YyMeWO6msf2W+xOWjkcHKpMKkrWIDqLscRXNaWG7H8U6eWAf+UV23a3UkmW0iyGODtzmij6T2ig/f5Ea3Eit4SSMsZ6uAeleNcKWDPeyI3XOFY4OeefYUUVHITUtIoua7dmuJ4oVndlcdwOQB7c9fwr+xWJmltG2k5UHoaKKiNkuemi/T8TemsXEa9JGwfeiiij1mktBO0//Z"
//                     className="h-14 w-14"
//                   />
//                   <div className="flex flex-col justify-start items-center m-1 font-bold font-serif">
//                     <h1 className="text-white text-xl">The AVATAR</h1>
//                     <p className="text-gray-400 text-md">Sam Worthington</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">
//                   The Cool Track
//                 </h1>
//               </div>
//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">54M</h1>
//               </div>
//               <div className="">
//                 <div className="flex flex-row justify-between items-center">
//                   <h1 className="text-gray-400 font-bold">10.35PM</h1>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     viewBox="0 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-5 border-2 hover:scale-105 border-gray-500 place-content-start items-start gap-3 p-5 hover:bg-black ">
//               <div className="col-span-2">
//                 <div className="grid grid-cols-3 place-content-start place-items-center">
//                   <svg
//                     width="22px"
//                     height="22px"
//                     viewBox="-32 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//                   </svg>
//                   <img
//                     src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBIgACEQEDEQH/xAAbAAADAQADAQAAAAAAAAAAAAAAAwUEAQIGB//EADAQAAIBAwIFAgQFBQAAAAAAAAECAwAEERIhEyIxQVEFwWGRofAUMnGB0RUjQlJy/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAGREBAQEBAQEAAAAAAAAAAAAAAAESEUEC/9oADAMBAAIRAxEAPwD5BDb6lyTgeaaoUN/aCaRtzbk1zJIEiACjJBxtXb06KOe6VGKqo/ybYDxRWUv6clzaRTR25UkhCyjl1YyAfvtWY+l3CFiELKBkkDIFWIlnhTg3E8C28bRl44cEEavPnp8R1qjPeoZuA0TKj45iAwIwpz06c3eplPHlRbNjlHTwKKu3620UoVIWIA7uQP2oqw8wY42t84zIh5iMnFdUVdJ4TMXx0C496YgC2ryjJfPNyg8vyqhFps7pXXSzEtrJ79N/qakk2UaC5tvxUYaPoDrOCT3G2apupnexknKx6MRSGQ7Kp6NjvjGNvAqVLfrFJwyjjBI2AYNudxmtEEjuxmjRhrYKgcA9vkOn0osK5f38DTExjTFk6DgZNFRPU3a3uXjXS2GPTbGd/eiqgZY1bRqQEHlyB3J8VsBVdKxOMouzAAHUNsDasEGTDw9h5YdfvYU3ha0UcdjucaVyTQxktvbSG3nWIxlWzIuvOffY+9cwqsEEb8UMR+XUdmcHdvhtS9EMMujhFjgksQf3FNjuyjHh2kPKP9Rk7/r+tHVZrr6vcr+KMiTRB3/PqO2x2x9+KKVdeqTrMU0qdPY74+FFMlTU9ZcAHVv/AM01ZyhVxgshBGVznFFFUD4r+QSmXREXI5iY856fxS5rk8NkEcI141ELgnBzk0UUZitfV9ZCx76PlRRRSl//2Q=="
//                     className="h-14 w-14"
//                   />
//                   <div className="flex flex-col justify-start items-center m-1 font-bold font-serif">
//                     <h1 className="text-white text-xl">The KGF@</h1>
//                     <p className="text-gray-400 text-md">YASH</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">
//                   The Historical Track
//                 </h1>
//               </div>
//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">540k</h1>
//               </div>
//               <div className="">
//                 <div className="flex flex-row justify-between items-center">
//                   <h1 className="text-gray-400 font-bold">3.15AM</h1>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     viewBox="0 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-5 border-2 hover:scale-105 border-gray-500 place-content-start items-start gap-3 p-5 hover:bg-black ">
//               <div className="col-span-2">
//                 <div className="grid grid-cols-3 place-content-start place-items-center">
//                   <svg
//                     width="22px"
//                     height="22px"
//                     viewBox="-32 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
//                   </svg>
//                   <img
//                     src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAEDBAUCB//EADEQAAIBAwMDAgQEBwEAAAAAAAECAwAEEQUSITFBYRNRBiKBkTJxscEUIyVCodHwFf/EABkBAAMBAQEAAAAAAAAAAAAAAAIEBQMAAf/EACURAAICAgECBgMAAAAAAAAAAAECAAMRIRIxgUFCYZGx8AQUIv/aAAwDAQACEQMRAD8A8ps5I4rfbLbB97HOHYErg8ce2T55ra0a2h1q4e1/hvTFhAJA0PLSJlRt/EM5LdSfyq9f6Vp97pmkzWcgjhmia3mBUfy5gd4JI67ixHjAq3pCm2sry+uLb+XhFlAU4VBvzkDzgfarLhkrJHlm6V5bfSZI0SxeGeWKIyrbMR6RLLIGJyVZcnAwDggkHnvWLcLZ26P/AE3K4X8Uree4Pvj7UbaLPpbnU7l53t5HAX5gu4IBnowOMYXkj3oa1UW0JuoZN+ydtyHHTvuHg8H7V1YrvTiRhsZzAtr47HSClw0bzM0MXpJxhAxbHHPJp66uIPTIKncjfhYd6VSnqZGKmZwk0iGadEE0qLbXEgRkjkUFMY5Kk8dRzRQ872+mQTXaQTHUGZdkZxzu4IB65AHc9BQloobUd0DHY4UD1F+XcAeGPkcc0UkC6EC6lLDDFEm1jcouSSevByD1x19+1PfkBwgbOvuo5ScicTSXNykE80Vrax3e85wMqVP6YDjH7U17Hp99FElnF6MsxaKSJnJWNhypwfC46f3DzUtzcz3F2rNGx0uEBUuGGSG4JbHGRx79DVWx0+5vraeewLXcYZmRyM/NuBKnuCR0zwePek6wzHRxjpN24FT4wNv7WS2uGW3behJPycj6U9bNzBI1y5FswibBQJGTjjn601VlrBAPIj0kptGR/DLizUXBEoljYFAhOcZ5P6cUSfENx/7UNhYW8DCOWRrhmz8yADbjn8j/AMKGNJlAi9OR3CtjOw4J+tEI1O0/h9klsQV+X14eH246Z9v9+aWvrxg5xrXxKNFi8MHvILbT8Qrazai/ouQjHAB25bgd+gUY8itXS3CX+pXXw9NJpotsiW13E5UMcjB7fLux4Irl/iC2nZzKshDYRkWKNVIz4UVS1HX7SCw9K0t2jdpCyvnkEnP15ApVKSW/oj3hhq1GoUazEmui3vtJsCZSu28hiBPpSjB7diCCD3pUKfCvxZJpRu5VuGV7gpvSQZClc9Pv/ilVhBcFACg95JYgEhekBre59MZZjweFq2LyOSRFkmdEJwzYJ2g8Hj8u1KlUYWMwwYcTXkasSl3Kx87gT5qM3iHhnZh2zk9sftTUqBLGU6nSAyqSScmlSpUz+y88xP/Z"
//                     className="h-14 w-14"
//                   />
//                   <div className="flex flex-col justify-start items-center m-1 font-bold font-serif">
//                     <h1 className="text-white text-xl">The AVENGERS</h1>
//                     <p className="text-gray-400 text-md">ROBERT DOWNEY</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">
//                   The Powerful Track
//                 </h1>
//               </div>
//               <div className="flex justify-start items-center">
//                 <h1 className="text-gray-400 font-bold text-xl">12M</h1>
//               </div>
//               <div className="">
//                 <div className="flex flex-row justify-between items-center">
//                   <h1 className="text-gray-400 font-bold">7.29PM</h1>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     fill="white"
//                     viewBox="0 0 512 512"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
//                   </svg>
//                   <svg
//                     width="18px"
//                     height="18px"
//                     viewBox="0 0 512 512"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             {getData(dataMusic)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

{
  /* <div class="flex h-screen flex-col justify-between bg-black relative">
  <div class="h-25 fixed w-full bg-gradient-to-br from-pink-600 to-blue-500">
    <div class="flex justify-between p-4 border-2 border-white">
      <h1 class="font-serif font-bold text-white">Movie Site@mana-Bomma</h1>
      <input
        type="search"
        placeholder="search for movie"
        class="rounded-md px-3 w-2/3"
      />
      <div>
        <img
          src="https://tailwindui.com/img/avatar-1.jpg"
          class="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  </div>
  <div class="grid w-full bg-red-500 h-full">
    <div class="grid  w-full grid-cols-4 bg-red-300 overflow-auto">
      <div class="col-span-1 mt-10 bg-gradient-to-b from-blue-500 to-pink-600 h-3/4">
        <div class="flex h-full w-full flex-col items-start justify-between p-10 font-serif font-bold">
          <div class="flex flex-col justify-start">
            <h1 class="font-sans text-2xl underline hover:text-white">Home</h1>

            <h1 class="w-full hover:text-white">Music</h1>
            <h1 class="w-full hover:text-white">Clips</h1>
            <h1 class="w-full hover:text-white">Movies</h1>
          </div>
          <div class="flex flex-col justify-start">
            <h1 class="font-sans text-2xl underline hover:text-white">
              Activities
            </h1>
            <h1 class="w-full hover:text-white">Subscribe</h1>
            <h1 class="w-full hover:text-white">options</h1>
            <h1 class="w-full hover:text-white">Downloads</h1>
          </div>
          <div class="flex flex-col justify-start">
            <h1 class="font-sans text-2xl underline hover:text-white">
              Support
            </h1>
            <h1 class="w-full hover:text-white">Contact</h1>
            <h1 class="w-full hover:text-white">Help?</h1>
            <h1 class="w-full hover:text-white">Call?</h1>
          </div>
        </div>
      </div>
      <div class="col-span-3 mt-14 h-3/4 bg-white p-5 overflow-auto">
        <div class="flex flex-col items-center justify-center font-bold">
          <h1 class="m font-serif">Welcome To This Site</h1>
        </div>
        <div class="font-serif">
          <p>
            This is a sample project which contains a sample data and all the
            data is static & under progress the total responsibility is taking
            care by @manabomma team
          </p>
        </div>
        <div class="grid h-10 grid-cols-4 place-content-center place-items-center gap-2 bg-gradient-to-tr from-blue-500 to-pink-500 p-5 text-white hover:bg-blue-900">
          <div class="w-full rounded-full border-2 border-white bg-black text-center hover:bg-green-800 hover:text-white">
            Movie
          </div>
          <div class="w-full rounded-full border-2 border-white bg-black text-center hover:bg-green-800 hover:text-white">
            DIrector
          </div>
          <div class="w-full rounded-full border-2 border-white bg-black text-center hover:bg-green-800 hover:text-white">
            Actors
          </div>
          <div class="w-full rounded-full border-2 border-white bg-black text-center hover:bg-green-800 hover:text-white">
            Released
          </div>
        </div>
        <div>
          <div class="m-1 mt-5 grid h-10 grid-cols-4 place-content-center place-items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-500 to-black p-5 hover:bg-blue-900">
            <div class="w-full text-center text-white">RRR</div>
            <div class="w-full text-center text-white">RAJAMOULI</div>
            <div class="w-full text-center text-white">RAM CHARAN</div>
            <div class="w-full text-center text-white">2022</div>
          </div>
          <div class="m-1 grid h-10 grid-cols-4 place-content-center place-items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-500 to-black p-5 hover:bg-blue-900">
            <div class="w-full text-center text-white">Dhamaka</div>
            <div class="w-full text-center text-white">Trinadha rao</div>
            <div class="w-full text-center text-white">Ravi Teja</div>
            <div class="w-full text-center text-white">2022</div>
          </div>
          <div class="m-1 grid h-10 grid-cols-4 place-content-center place-items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-500 to-black p-5 hover:bg-blue-900">
            <div class="w-full text-center text-white">f3</div>
            <div class="w-full text-center text-white">Anil ravipudi</div>
            <div class="w-full text-center text-white">Venkatesh</div>
            <div class="w-full text-center text-white">2022</div>
          </div>
        </div>
        <div class="mr-5 mt-5 w-full rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 p-5">
          <h1>REVIEWS About RRR</h1>
          <div class="grid h-full grid-cols-1">
            <div class="flex justify-between"></div>
            <div class="col-span-1 h-full rounded-xl border-2 border-white bg-black py-2 px-2 text-white hover:-mx-4">
              <h1>RRR is the most powerfull movie from the south India</h1>
            </div>
          </div>
        </div>
        <div class="mr-5 mt-5 w-full rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 p-5">
          <h1>REVIEWS About Dhamaka</h1>
          <div class="grid h-full grid-cols-1">
            <div class="col-span-1 h-full rounded-xl border-2 border-white bg-black py-2 px-2 text-white hover:-mx-4">
              Dhamaka is the most powerfull mass movie from the south India
            </div>
          </div>
        </div>
        <div class="mr-5 mt-5 w-full rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 p-5">
          <h1>REVIEWS About f3</h1>
          <div class="grid h-full grid-cols-1">
            <div class="col-span-1 h-full rounded-xl border-2 border-white bg-black py-2 px-2 text-white hover:-mx-4">
              f3 is the super comedy movie from the south India
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 bg-black mt-5 h-36 text-white px-2 w-full rounded-lg">
          <div class="bg-gradient-to-bl from-pink-500 to-blue-500  w-full m-1 text-sm px-1 border-2 border-white">
            {" "}
            <h1 class="text-black font-bold">
              The content which is present in this is not real.Please don't
              believe in the data which is present in the above please go
              through the link which is provided hear to know about genuial talk
              of the movie
              <span class="text-blue-900">
                <a href="https://www.google.co.in/">Click Here</a>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full border-2 border-white bg-gradient-to-b from-blue-500 to-pink-500 p-5 absolute bottom-0">
      <div class="flex flex-row items-center justify-between ">
        <div class="flex flex-col items-start justify-start font-serif font-bold">
          <div class="flex flex-row justify-between items-center ">
            <input
              type="email"
              class="rounded-md w-2/3 text-black px-1 text-sm py-1"
              placeholder="enter Your Email"
            />
            <button class="w-full hover:text-white text-sm -ml-5">
              send to mana-Bomma
            </button>
          </div>

          <h1 class="w-full hover:text-white">Support team of mana-Bomma</h1>
          <h1 class="w-full hover:text-white">Get Help from mana-Bomma</h1>
        </div>
        <div class="flex flex-col items-center justify-start font-serif font-bold">
          <h1 class="w-full hover:text-white">manabomma@gmail.com</h1>
          <h1 class="w-full hover:text-white">manabomma@yahoo.in</h1>
          <h1 class="w-full hover:text-white">manabomma@something.in</h1>
        </div>
        <div class="flex flex-col items-start justify-start font-serif font-bold">
          <h1 class="w-full hover:text-white">FaceBook</h1>
          <h1 class="w-full hover:text-white">Twitter</h1>
          <h1 class="w-full hover:text-white">Instagran</h1>
          <h1 class="w-full hover:text-white">Telegram</h1>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
