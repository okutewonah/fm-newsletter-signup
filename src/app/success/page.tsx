"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default () => {
  const searchParams = useSearchParams();
  console.log("from success page:", searchParams.get("email"));
  return (
    <body className="bg-white md:bg-dark-slate-grey">
      <main className="md:min-h-screen md:flex md:justify-center md:items-center">
        <div className="py-10 px-9 h-full mt-36 mx-auto flex flex-col justify-between space-y-48 md:bg-white md:justify-center md:w-[400px] md:h-[400px] md:rounded-2xl md:mt-0 md:space-y-0">
          <div>
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
            <h1 className="text-4xl font-extrabold pt-6 pb-3">
              Thanks for subscribing
            </h1>
            <p className="py-3">
              A confirmation email has been sent to
              <span className="font-extrabold">
                {" "}
                {searchParams.get("email")}
              </span>
              . Please open it and click the button inside to confirm your
              subscription.
            </p>
          </div>

          <div>
            <button className="bg-charcoal-grey py-3 w-full rounded-lg text-white hover:bg-tomato">
              <Link href="/">Dismiss message</Link>
            </button>
          </div>
        </div>
      </main>
    </body>
  );
};
