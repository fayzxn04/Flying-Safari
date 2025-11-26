"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";

const defaultFaq = [
  {
    question: "Do you provide safari bookings directly?",
    answer:
      "We inspire your safari journey by showcasing curated itineraries. For detailed planning, our team will connect you with trusted partners.",
  },
  {
    question: "Can I view safari prices on your website?",
    answer:
      "Our focus is to showcase safari experiences without pricing, so you can explore options before customizing your journey.",
  },
  {
    question: "Do you only operate in Tanzania?",
    answer:
      "Currently, our safari focus is Tanzania, with flight booking support for wider destinations.",
  },
  {
    question: "How can I get personalized help?",
    answer:
      "Simply fill in the contact form or reach us via email—we’ll guide you step by step.",
  },
  {
    question: "How can I contact your team directly?",
    answer:
      "You can reach us via the contact form, email, or phone. Our support team is available to assist you promptly.",
  },
  {
    question: "Is Flying Safari suitable for luxury travelers?",
    answer:
      "Absolutely. We showcase a range of itineraries, including premium fly-in safaris and exclusive lodge stays designed for luxury experiences.",
  },
  {
    question: "Is Flying Safari suitable for luxury travelers?",
    answer:
      "Absolutely. We showcase a range of itineraries, including premium fly-in safaris and exclusive lodge stays designed for luxury experiences.",
  },
  {
    question: "Is Flying Safari suitable for luxury travelers?",
    answer:
      "Absolutely. We showcase a range of itineraries, including premium fly-in safaris and exclusive lodge stays designed for luxury experiences.",
  },
  {
    question: "Is Flying Safari suitable for luxury travelers?",
    answer:
      "Absolutely. We showcase a range of itineraries, including premium fly-in safaris and exclusive lodge stays designed for luxury experiences.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid lg:grid-cols-2 justify-between px-4 lg:px-20 gap-8 lg:gap-12">
      <div className="max-lg:flex flex-col justify-center items-center">
        <p className="text-secondary text-lg">FAQ</p>
        <h2 className="mt-3 md:text-4xl lg:text-5xl text-[28px] max-w-[80%]">
          Answers to Your Top Queries
        </h2>
        <img
          src="/images/Faq-min.png"
          alt="Image"
          className="size-[330px] lg:h-[530px] lg:w-[505px] mt-6"
        />
      </div>
      <div className="flex flex-col">
        {defaultFaq.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-start text-left py-3 cursor-pointer"
            >
              <span className="text-base lg:text-lg font-medium pr-4">
                {faq.question}
              </span>
              <IconPlus
                className={`shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                size={24}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-3">
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>

            {index < defaultFaq.length - 1 && (
              <div className="mt-5 border-b border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
