import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="blur-bg">
      <Link to={"/"}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </header>
  );
};

export default memo(Header);
