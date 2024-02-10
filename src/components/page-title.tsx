import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

export const PageTitle = ({
  title,
  subtitle,
  className,
  ...rest
}: {
  title: string;
  subtitle?: string; // Make subtitle optional
  className?: string;
  [x: string]: any; // For the rest of the props
}) => {
  return (
    <div className={cn("mb-6", className)}>
      <Balancer as="h1" {...rest}>
        {title}
      </Balancer>
      {subtitle}
    </div>
  );
};
