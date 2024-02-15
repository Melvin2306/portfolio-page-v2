import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/page-title";
import { FloatingHeader } from "@/components/floating-header";
import { ScrollArea } from "@/components/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <FloatingHeader scrollTitle="Melvin Rinkleff" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <div className="p-6">
            <p>
              Moin 👋
              <br />
              I´m Melvin, a software engineering student at CODE University of
              Applied Sciences and software engineering working student at car
              byte based in Berlin, Germany.
            </p>
            <p>
              I develop web applications in Next.js as a Full-Stack Software
              Engineer at car byte. Previously, I worked in various roles in the
              energy sector and earned a B.A. in Business Administration.
            </p>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
