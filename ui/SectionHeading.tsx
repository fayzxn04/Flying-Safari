import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="section-container">
      <p className="small-heading">{title}</p>
      <h2 className="big-heading max-w-[420px] mt-3 text-white opacity-100">
        {subtitle}
      </h2>
    </div>
  );
}
