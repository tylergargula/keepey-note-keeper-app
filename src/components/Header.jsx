import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Header() {
  return (
    <header>
      <h1>
        <FontAwesomeIcon icon={faNoteSticky} /> Keepey
      </h1>
    </header>
  );
}

export default Header;
