import Link from "next/link";
import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        Powered by{" "}
        <a
          href="https://astreak.in"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Astreak{" "}
        </a>
        •{" "}
        <a
          href="https://forms.gle/r6rYUcqZWnKVvxbW7"
          target="_blank"
          rel="noreferrer"
          className="hover:underline transition underline-offset-2"
        >
          Feature request
        </a>
      </div>

      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://twitter.com/astreakOfficial"
          className="group"
          aria-label="Twitter"
        >
          <Icons.twitx className="mr-2 h-5 w-5" />
        </Link>
        <Link
          href="https://linkedin.com/company/astreakOfficial"
          className="group"
          aria-label="LinkedIn"
        >
          <Icons.linkedin className="mr-2 h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}
