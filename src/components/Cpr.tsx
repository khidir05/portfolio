const Cpr = () => {
  return (
    <footer className="w-full py-10 flex items-center justify-center text-center">
      <p className="text-sm text-textDark font-bodyFont tracking-wide">
        Built by{" "}
        <a
          href="https://github.com/noorjsdivs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <span className="font-semibold text-textGreen hover:underline duration-300">
            NoorMuhammad
          </span>
        </a>
        . This project uses a template based on an existing design, with my own
        modifications.
      </p>
    </footer>
  );
};

export default Cpr;