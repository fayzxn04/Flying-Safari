/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function ContactUs() {
  return (
    <div className="px-4 lg:px-20 py-4 lg:pt-15 grid md:grid-cols-2 bg-background">
      <div className="max-md:mb-10">
        <p className="uppercase text-secondary md:text-base lg:text-lg text-sm ">
          get in touch
        </p>
        <h2 className="lg:text-5xl md:text-3xl text-[28px] lg:max-w-[50%] mt-3">
          Let&apos;s Plan Your Next Adventure
        </h2>
        <div className="flex lg:gap-x-8 gap-x-4">
          <div>
            <p className="lg:mt-10 mt-6 text-lg">Call us</p>
            <p className="mt-6 text-sm text-dark-grey">+255 58954 58945</p>
            <p className="mt-6 text-lg">Social Network</p>
            <div className="flex gap-x-1 mt-6 size-10">
              <img src="/images/instagram.png" alt="logo" />
              <img src="/images/facebooks.png" alt="logo" />
              <img src="/images/linkedins.png" alt="logo" />
            </div>
          </div>
          <div className="space-y-6">
            <p className="lg:mt-10 mt-6 text-lg">Email</p>
            <p className="mt-6 text-sm text-dark-grey">Loreumipsum@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm mb-2">
              Full name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full name"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none text-sm"
              required
            />
          </div>

          {/* Email and Phone Number Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none"
                required
              />
            </div>

            {/* Phone Number */}
            {/* Write here */}
            <div>
              <label htmlFor="phone" className="block text-sm mb-2">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="8594621548"
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none  text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md font-medium transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
