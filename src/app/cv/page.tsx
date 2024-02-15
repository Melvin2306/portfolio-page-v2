"use client";

import React, { useState } from "react";
import { PageTitle } from "@/components/page-title";
import { FloatingHeader } from "@/components/floating-header";
import { ScrollArea } from "@/components/scroll-area";
import { Experience } from "@/components/cv/experience";
import { Education } from "@/components/cv/education";
import { Switch } from "@/components/ui/switch";

export default function CV() {
  const data = {
    name: "Melvin Rinkleff",
    position: "Student Software Engineering",
    email: "melvin.rinkleff@gmx.de",
    phone: "+49 1590 1188669",
  };

  const [showExperience, setShowExperience] = useState(true);

  const toggleExperience = () => {
    setShowExperience(!showExperience);
  };

  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <FloatingHeader scrollTitle="CV - Melvin Rinkleff" />
      <div className="content-wrapper">
        <div className="content">
          {" "}
          <div>
            <div className="p-6">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-4xl font-bold">{data.name}</h1>
                  <p className="text-2xl font-semibold">{data.position}</p>
                </div>
                <div>
                  <p className="text-xl">
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </p>
                  <p className="text-xl">
                    <a href={`tel:${data.phone}`}>{data.phone}</a>
                  </p>
                </div>
              </div>
              <div className=" flex flex-row gap-3">
                <p>Experience</p>
                <Switch onCheckedChange={toggleExperience} />
                <p>Education</p>
              </div>
              {showExperience ? <Experience /> : <Education />}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
