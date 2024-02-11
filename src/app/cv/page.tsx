import React from "react";
import { PageTitle } from "@/components/page-title";
import { FloatingHeader } from "@/components/floating-header";
import { ScrollArea } from "@/components/scroll-area";

export default function CV() {
  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <FloatingHeader scrollTitle="CV - Melvin Rinkleff" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="CV" />
          <div>
            <p>page</p>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
