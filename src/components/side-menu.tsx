"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RadioIcon } from "lucide-react";

import { ScrollArea } from "@/components/scroll-area";
import { Button } from "@/components/ui/button";
import { useKeyPress } from "@/hooks/useKeyPress";
import { cn } from "@/lib/utils";

export const SideMenu = ({
  children,
  title,
  href,
  isInner,
}: {
  children: React.ReactNode;
  title?: string; // Make optional
  href?: string; // Make optional
  isInner?: boolean; // Make optional
}) => {
  const router = useRouter();
  useKeyPress(onKeyPress, [
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
  ]);

  function onKeyPress(event: KeyboardEvent) {
    event.preventDefault();

    if (event.code === "Digit1") {
      router.push("/");
    } else if (event.code === "Digit2") {
      router.push("/cv");
    } else if (event.code === "Digit3") {
      router.push("/projects");
    } else if (event.code === "Digit4") {
      router.push("/stack");
    } else if (event.code === "Digit5") {
      router.push("/workspace");
    } else if (event.code === "Digit6") {
      router.push("/imprint");
    }
  }

  return (
    <ScrollArea
      className={cn(
        "hidden lg:flex lg:flex-col lg:border-r",
        isInner ? "lg:w-80 xl:w-96" : "lg:w-60 xl:w-72",
      )}
    >
      <div className=" p-3">{children}</div>
    </ScrollArea>
  );
};
