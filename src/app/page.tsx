"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: "Valid email required" }),
});

export default () => {
  const [email, setEmail] = useState<String>("");
  const router = useRouter();
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <body className="bg-dark-slate-grey">
      <main className="flex justify-center md:min-h-screen flex-col items-center">
        <div className="flex flex-col md:flex-row-reverse md:h-[593px] md:w-[800px] md:rounded-3xl bg-white md:p-6">
          <div className="bg-[url(/assets/images/illustration-sign-up-mobile.svg)] bg-cover bg-no-repeat h-[284px] rounded-b-3xl md:bg-[url(/assets/images/illustration-sign-up-desktop.svg)] md:rounded-3xl md:h-auto md:flex-1"></div>
          <div className="md:flex-1 p-9">
            <div className="">
              <h1 className="pb-4 font-extrabold text-3xl text-charcoal-grey">
                Stay Updated!
              </h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div className="my-3">
              <div className="flex">
                <div className="mt-1">
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
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="">
                    Product discovery and building what matters
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="my-3">
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
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="my-2">
                    Measuring to ensure updates are a success
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="my-3">
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
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="my-3">And much more!</p>
                </div>
              </div>
            </div>
            <div>
              <form
                className="flex flex-col"
                onSubmit={handleSubmit((e: any) => {
                  // e.preventDefault();
                  // console.log(e);
                  router.push(`/success?email=${email}`);
                })}
                noValidate
              >
                <label
                  className="flex text-sm text-charcoal-grey font-bold"
                  htmlFor="email"
                >
                  Email address
                  {errors.email?.message && (
                    <span className="ml-auto text-tomato">
                      {errors.email?.message}
                    </span>
                  )}
                </label>
                <input
                  {...register("email")}
                  className="h-12 w-full bg-white border border-grey rounded-lg my-3 pl-3 focus:ring-1 focus:invalid:border-tomato focus:invalid:bg-tomato focus:invalid:bg-opacity-35 focus:invalid:ring-tomato focus:invalid:text-tomato"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                  required
                  onChange={handleChange}
                />
                <button className="h-12 bg-charcoal-grey text-white rounded-lg hover:bg-tomato">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* w-full border rounded pl-[1rem] h-[3rem] cursor-pointer focus:bg-white invalid:text-tomato invalid:bg-tomato/35 invalid:border-tomato */}
      </main>
    </body>
  );
};
