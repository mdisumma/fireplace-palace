import Link from "next/link";
import { useState } from "react";
import { ImageCard } from "../image/image";

function Navigation() {
  const [stateMenu, setStateMenu] = useState(null);

  // handler openMenu
  function openMenu() {
    setStateMenu(true);
  }

  // handler closeMenu
  function closeMenu() {
    setStateMenu(false);
  }

  return (
    <>
      <button className="menu-button" onClick={openMenu}>
        <ImageCard
          src="/images/menu-open-button.png"
          alt="any"
          width="35"
          height="30"
        />
      </button>

      {stateMenu && (
        <div className="navigation">
          <button className="menu-button" onClick={closeMenu}>
            <ImageCard
              src="/images/menu-close-button.png"
              alt="any"
              width="35"
              height="30"
            />
          </button>
          <Link className="navigation-link" onClick={closeMenu} href="/">
            {" "}
            Home{" "}
          </Link>
          <Link
            className="navigation-link"
            onClick={closeMenu}
            href="/founders"
          >
            {" "}
            Founders{" "}
          </Link>
          <Link className="navigation-link" onClick={closeMenu} href="/form">
            {" "}
            Form{" "}
          </Link>
        </div>
      )}
    </>
  );
}

export default Navigation; // import it to the header
