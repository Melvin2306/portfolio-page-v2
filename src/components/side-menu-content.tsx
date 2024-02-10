import Link from "next/link";
import Image from "next/image";

import { NavigationLink } from "@/components/side-menu-link";
import { PROFILES, LINKS } from "@/lib/constants";
import { ModeToggle } from "@/components/ui/theme-toggle";

export const MenuContent = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <Image
            src="/public/me.png"
            alt="Melvin Rinkleff"
            width={40}
            height={40}
            loading="lazy"
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight ">
              Melvin Rinkleff
            </span>
            <span className="">Software Engineering Student</span>
          </div>
        </Link>
        <div className="flex flex-col gap-1  mb-2">
          {LINKS.map((link, linkIndex) => (
            <NavigationLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
              shortcutNumber={linkIndex + 1}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 text-sm mt-2">
        <span className="px-2 text-xs font-medium leading-relaxed ">
          Online
        </span>
        <div className="flex flex-col gap-1 ">
          {Object.values(PROFILES).map((profile) => (
            <NavigationLink
              key={profile.url}
              href={profile.url}
              label={profile.title}
              icon={profile.icon}
            />
          ))}
        </div>
        <ModeToggle />
        <div className="footer grid grid-row ">
          <p>Built with</p>
          <a href="https://nextjs.org/">
            <Image
              className="relative dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={56}
              height={11.84}
              priority
            />
          </a>
          <p>Deployed on</p>
          <a href="https://vercel.com">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={64}
              height={15.36}
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
};
