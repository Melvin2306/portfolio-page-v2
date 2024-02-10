import { cn } from "@/lib/utils";
import { SCROLL_AREA_ID } from "@/lib/constants";

interface ScrollAreaProps {
  hasScrollTitle?: boolean;
  className?: string;
  [key: string]: any; // For the rest of the props that might be passed to the div
}

export const ScrollArea = ({
  hasScrollTitle = false,
  className,
  ...rest
}: ScrollAreaProps) => (
  <div
    id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
    className={cn("scrollable-area relative w-full", className)}
    {...rest}
  />
);
