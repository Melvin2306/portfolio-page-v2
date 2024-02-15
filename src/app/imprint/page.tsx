"use client";

import React from "react";
import Link from "next/link";
import { Projects } from "@/components/projects";
import { FloatingHeader } from "@/components/floating-header";
import { ScrollArea } from "@/components/scroll-area";

function Imprint() {
  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <FloatingHeader scrollTitle="Projects - Melvin Rinkleff" />
      <div className="content-wrapper">
        <div className="content">
          {" "}
          <div className="p-6">
            <div className="mb-20">
              <h2 className="text-2xl font-bold">Imprint</h2>{" "}
              <h2> Melvin Rinkleff </h2>
              <p> Kornradenstraße 2A </p>
              <p> 30419 Hannover</p>
              <p> Germany </p>
              <p>
                {" "}
                Email:{" "}
                <Link href="mailto:moin@melvinrinkleff.de">
                  moin@melvinrinkleff.de
                </Link>
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default Imprint;
