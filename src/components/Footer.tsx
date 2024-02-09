import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex justify-end mr-3 mt-2">
      <p>Built with</p>
      <a href="https://nextjs.org/">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={72}
          height={14.8}
          priority
        />
      </a>

      <p>Deployed on</p>
      <a href="https://vercel.com">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={80}
          height={19.2}
          priority
        />
      </a>
    </footer>
  );
}

export default Footer;
