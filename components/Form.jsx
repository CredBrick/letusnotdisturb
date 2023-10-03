"use client";
import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      {isSubmitted ? (
        <p className="mt-10 mb-10 text-xl text-white text-center">Thank you</p>
      ) : (
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdRYijKFU-MgeVaglUPdBONtL-xChr4kv00dczbpFUWLaQwVQ/formResponse"
          method="POST"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-md mx-auto text-white mt-10"
          onSubmit={handleSubmit}
        >
          {/* name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="entry.1572579735"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
              required
            />
          </div>

          {/* email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              name="entry.596873953"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
              required
            />
          </div>

          {/* subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              name="entry.765077961"
              id="subject"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Subject of the message"
              required
            />
          </div>

          {/* message */}
          <div className="mb-4 py-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              type="text"
              name="entry.1785264626"
              id="message"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
              required
            />
          </div>

          {/* phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-bold mb-2">
              Phone
            </label>
            <input
              type="text"
              name="entry.1404902922"
              id="phone"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* submit */}
          <div className="mb-6 text-center">
            <Button label="Submit" type="submit" />
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
