"use client";

import { useState } from "react";
import { whyPoints } from "@/lib/content";
import AuditMock from "./AuditMock";

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function WhyTabs() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="tabs" role="tablist">
        {whyPoints.map((p, i) => (
          <button
            key={p.title}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={`tab${active === i ? " on" : ""}`}
            onClick={() => setActive(i)}
          >
            <span>{num(i)}</span>
            {p.title}
          </button>
        ))}
      </div>
      <div className="why-g">
        <div>
          {whyPoints.map((p, i) => (
            <div key={p.title} className={`pt${active === i ? " on" : ""}`}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
          <ul className="plist">
            {whyPoints.map((p, i) => (
              <li
                key={p.title}
                className={active === i ? "on" : undefined}
                onClick={() => setActive(i)}
              >
                <span>{num(i)}</span>
                {p.title}
              </li>
            ))}
          </ul>
        </div>
        <AuditMock />
      </div>
    </>
  );
}
