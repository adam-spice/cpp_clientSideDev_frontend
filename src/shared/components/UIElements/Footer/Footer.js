import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full text-center border-t border-grey p-4">
      <div className="flex justify-between px-4">
        <div className="font-lobster flex-1">&copy; The Scrapyard 2020</div>
        <div className="flex-2 flex justify-around">
          <div className="px-4">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="px-4">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="px-4">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
