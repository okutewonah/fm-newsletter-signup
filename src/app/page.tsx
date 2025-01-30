"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<String>("");
  const router = useRouter();
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // form.classList.add("validated");
    // if (!form.checkValidity()) {
    //   form.querySelectorAll(":invalid")[0].focus();
    //   return;
    // }

    // console.log("[v]:email \n..\t", email);
    router.push(`/success?email=${email}`);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-dark-slate-grey">
      <div className="w-[800px] h-[620px] bg-white grid grid-cols-2 p-[0.75rem] rounded-2xl">
        <div className="flex flex-col m-[1.5rem]">
          <h1 className=" text-[3rem] text-dark-slate-grey font-bold my-[1.5rem] mx-0">
            Stay updated!
          </h1>
          <p className="text-[0.85rem] my-3">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="p-0 flex flex-col mt-4">
            <li className="flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
              <p className="text-[0.8rem] mx-[1rem] my-auto">
                Product discovery and building what matters
              </p>
            </li>
            <li className="flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
              <p className="text-[0.8rem] mx-[1rem] my-auto">
                Measuring to ensure updates are a success
              </p>
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
              <p className="text-[0.8rem] mx-[1rem] my-auto">And much more!</p>
            </li>
          </ul>
          <form className="mt-[3rem]" onSubmit={handleSubmit} noValidate>
            <label className="text-xs font-semibold flex" htmlFor="email">
              Email address
              <span className="ml-auto hidden [.validated_&]:peer-invalid:block text-tomato">
                Valid email required
              </span>
            </label>
            <input
              className="peer w-full border rounded pl-[1rem] h-[3rem] cursor-pointer [.validated_&]:invalid:[&:not(:placeholder-shown):not(:focus)]:border-tomato"
              type="email"
              name="email"
              id="email"
              value={`${email}`}
              placeholder="email@company.com"
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <button className="bg-dark-slate-grey text-white w-full h-[3rem] mt-5 rounded hover:bg-tomato">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div>
          <img
            src="/assets/images/illustration-sign-up-desktop.svg"
            alt="illustration"
          />
        </div>
      </div>
    </main>
  );
}
