import Link from 'next/link';
import Image from 'next/image';

import { NavigationLink } from '@/components/side-menu-link';
import { PROFILES, LINKS } from '@/lib/constants';
import { ModeToggle } from '@/components/ui/theme-toggle';

export const MenuContent = () => {
  return (
    <div className="flex w-full flex-col text-base">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <Image
            src="/public/me.png"
            alt="Melvin Rinkleff"
            width={50}
            height={50}
            loading="lazy"
            className="rounded-full border shadow-sm mr-1"
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight ">
              Melvin Rinkleff
            </span>
            <span className="">Software Engineer</span>
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
      <div className="flex flex-col gap-2 text-sm my-2">
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
      </div>
      <hr />
      <div className="flex text-base gap-2 my-2 items-center">
        <ModeToggle />
        <div>
          <p>made with 🫶 in Berlin</p>
        </div>
      </div>
    </div>
  );
};
