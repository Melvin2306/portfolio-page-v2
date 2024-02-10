import React from "react"; // Import React for type definitions
import { useInView } from "react-intersection-observer";

interface ShowInViewProps {
  children: React.ReactNode; // Explicitly type the children prop
  rootMargin?: string;
  triggerOnce?: boolean;
  [key: string]: any; // For any other props that might be passed
}

export const ShowInView = ({
  children,
  rootMargin = "0px",
  triggerOnce = true,
  ...rest
}: ShowInViewProps) => {
  const { ref, inView } = useInView({
    rootMargin,
    triggerOnce,
  });

  return (
    <div ref={ref} data-role="intersection-observer" {...rest}>
      {inView && children}
    </div>
  );
};
