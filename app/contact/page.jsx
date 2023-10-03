import React from "react";
import Link from "next/link";
import Form from "@/components/Form";

const page = () => {
  return (
    <div>
      {/* heading */}
      <div className="mt-10">
        <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl px-[50px] md:px-[150px] lg:px-[200px] xl:px-[250px]">
          Please fill out the form below to get in touch with LetUsNotDisturb
          Team, inquire about a collaboration, or simply say hello.
        </h1>
      </div>

      {/* form */}
      <Form />

      {/* end of the form image and other pages */}
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5d435de878554d0001216799/1566240264922-KVFKMJYPJVBQK6ICAIY4/squarespace-pdx-185x.jpg"
          alt="Could not load the image"
          className="w-full h-auto px-10"
        />

        <div className="mt-[70px] flex flex-row items-center justify-center gap-2 text-xl text-white">
          {/* Lehza.in */}
          <Link href="/lehza-in" target="_blank" rel="noopener noreferrer">
            <p className="font-semibold underline">Lehza.in</p>
          </Link>

          <p className="font-semibold">&</p>

          {/* letusnotdisturb */}
          <Link
            href="/letusnotdisturb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-semibold underline">LetUsNotDisturb</p>
          </Link>
        </div>

        <p className="mt-8 mb-[100px] text-white text-3xl lg:text-4xl text-center">
          letusnotdisturb@gmail.com
        </p>
      </div>
    </div>
  );
};

export default page;
