import { useState } from "react";
import { Icon } from "@iconify/react";
import { auth } from "../firebase-config";

function Header() {
  return (
    <header>
      <div className="logout-wrapper">
        <SignOut />
      </div>
      <h1>
        <Icon style={{ fontSize: 35 }} icon="game-icons:graduate-cap" />
        StudyMate
      </h1>
      <p id="head-caption">A Web-based Study Material Retrieval System</p>
    </header>
  );
}

function SignOut() {
  const [showDropdown, setShowDropdown] = useState(false);
  const userEmail = auth.currentUser?.email;

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    auth.currentUser && (
      <div>
        <div className="user-icon" onClick={handleDropdownToggle}>
          <Icon style={{ fontSize: 30 }} icon="line-md:account" />
        </div>
        {showDropdown && (
          <div className="user-info">
            <span>
              <Icon style={{ fontSize: 10 }} icon="logos:google-gmail" />{" "}
              {userEmail}
            </span>
            <button className="sign-out" onClick={handleSignOut}>
              <Icon style={{ fontSize: 20 }} icon="material-symbols:logout" />
              {" SIGN OUT"}
            </button>
          </div>
        )}
      </div>
    )
  );
}

export default Header;
