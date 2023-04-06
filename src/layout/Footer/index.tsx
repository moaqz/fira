import { Github } from "@/components/Icons";

function Footer() {
  return (
    <div className="fixed bottom-0 mb-6 mt-6 flex w-full justify-center text-brand-subtext">
      <a
        href="https://github.com/techwithmat/fira"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 transition-colors duration-100 hover:text-white"
      >
        <Github />
        Made using Tailwind & Next.js
      </a>
    </div>
  );
}

export default Footer;
