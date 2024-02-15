"use client";

import React from "react";
import { Projects } from "@/components/projects";
import { FloatingHeader } from "@/components/floating-header";
import { ScrollArea } from "@/components/scroll-area";

function Projects_Page() {
  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <FloatingHeader scrollTitle="Projects - Melvin Rinkleff" />
      <div className="content-wrapper">
        <div className="content">
          {" "}
          <div className="p-6">
            <Projects />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default Projects_Page;
