import React from "react";
import Form from "@/components/Form";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-white text-center text-xl md:text-3xl lg:text-5xl px-[100px] md:px-[300px] lg:px-[500px]">
          Please fill out the form below to get in touch with LetUsNotDisturb
          Team, inquire about a collaboration, or simply say hello.
        </h1>
      </div>

      <Form />

      
    </div>
        );
      };

export default page;
