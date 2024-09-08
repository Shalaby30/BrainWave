import React from "react";
import brackets from "./../assets/svg/Brackets";

export default function Tagline({ className, children }) {
  return (
    <div className={`tagline flex items-center ${className} || ""`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">
        <p>{children}</p>
      </div>
      {brackets("right")}
    </div>
  );
}
