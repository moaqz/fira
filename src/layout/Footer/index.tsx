function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 my-4 w-full px-5 text-brand-subtext">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <p>Made using TailwindCSS & Next.js</p>
        <div className="flex items-center space-x-1">
          <p>Crafted by</p>
          <a
            href="https://github.com/techwithmat"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors duration-100 hover:text-white"
          >
            techwithmat
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
