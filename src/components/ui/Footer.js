import React from "react";
import "../../styles/footer.scss";

export const Footer = () => {
  return (
    <footer>
      Congress Members © {new Date().getFullYear()}. Built with 💜 by
      {` `}
      <a href="https://www.emilianolucero.ar">Emiliano Lucero</a>
    </footer>
  );
};
