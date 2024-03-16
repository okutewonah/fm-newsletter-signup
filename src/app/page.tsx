"use client";
import Image from "next/image";
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

    console.log("[v]:email \n..\t", email);
    router.push(`/success?email=${email}`);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-dark-slate-grey">
      <div className="w-[800px] h-[620px] bg-white grid grid-cols-2 p-[0.75rem] rounded-2xl">
        <div className="flex flex-col m-[1.5rem]">
          <h1 className=" text-[3rem] text-dark-slate-grey font-bold my-[1.5rem] mx-0">
            Stay updated!
          </h1>
          <p className="text-[0.85rem]">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="p-0">
            <li className="bg-[url('/assets/images/icon-list.svg')] bg-no-repeat py-[0.5rem] px-[2rem] text-[0.8rem]">
              Product discovery and building what matters
            </li>
            <li className="bg-[url('/assets/images/icon-list.svg')] bg-no-repeat py-[0.5rem] px-[2rem] text-[0.8rem]">
              Measuring to ensure updates are a success
            </li>
            <li className="bg-[url('/assets/images/icon-list.svg')] bg-no-repeat py-[0.5rem] px-[2rem] text-[0.8rem]">
              And much more!
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              className="w-full border rounded pl-[1rem] h-[3rem]"
              type="email"
              name="email"
              id="email"
              value={`${email}`}
              placeholder="email@company.com"
              onChange={handleChange}
            />
            <button className="bg-dark-slate-grey text-white w-full h-[3rem]">
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
