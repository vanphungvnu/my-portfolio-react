export default function Footer() {
    return (
      <footer className="bg-main py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-white">
            Westminster, CA | U.S. Citizen | Authorized to work in the U.S. | Open
            to relocation
          </p>
          <div className="d-flex gap-3">
            <a
              href="https://github.com/vanphungvnu"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
  