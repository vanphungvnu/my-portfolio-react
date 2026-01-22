import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="btn btn-main position-fixed"
        style={{
          bottom: "40px",
          right: "40px",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          zIndex: 999,
        }}
        title="Scroll to top"
      >
        ↑
      </button>
    )
  );
}
