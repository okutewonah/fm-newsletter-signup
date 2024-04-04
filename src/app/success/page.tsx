"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default () => {
  const searchParams = useSearchParams();
  console.log("from success page:", searchParams.get("email"));
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-dark-slate-grey">
      <div className="w-[420px] h-[420px] bg-white grid rounded-3xl p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6A3A" />
              <stop offset="100%" stopColor="#FF527B" />
            </linearGradient>
          </defs>
          <g fill="none">
            <circle cx="32" cy="32" r="32" fill="url(#a)" />
            <path
              stroke="#FFF"
              strokeWidth="4"
              d="m18.286 34.686 8.334 7.98 19.094-18.285"
            />
          </g>
        </svg>
        <h1 className=" text-[2.5rem] font-bold">Thanks for subscribing</h1>
        <p className="text-[0.85rem]">
          A confirmation email has been sent to
          <span className="font-bold"> {searchParams.get("email")}</span>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <Link
          href="/"
          className="w-full h-12 py-3 text-center text-white bg-dark-slate-grey rounded-[5px] border-none hover:bg-tomato"
        >
          Dismiss message
        </Link>
      </div>
    </main>
  );
};
