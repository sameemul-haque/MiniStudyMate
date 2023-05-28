import { useState } from "react";
import { Icon } from "@iconify/react";
import { auth } from "../firebase-config";
import "../css/header.css";

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
  const [rotateDownIcon, setRotateDownIcon] = useState(false);
  const userEmail = auth.currentUser?.email;

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    setRotateDownIcon(!rotateDownIcon);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    auth.currentUser && (
      <div>
        <div className="user-icon" onClick={handleDropdownToggle}>
          <Icon style={{ fontSize: 30 }} icon="line-md:account" />
          <Icon
            className={rotateDownIcon ? "down-icon rotated" : "down-icon"}
            style={{
              position: "fixed",
              marginTop: 15,
              fontSize: 15,
            }}
            icon="mingcute:down-fill"
          />
        </div>
        {showDropdown && (
          <div className="user-info">
            <span>
              <Icon style={{ fontSize: 20 }} icon="mdi:gmail" /> {userEmail}
            </span>
            <span className="sign-out" onClick={handleSignOut}>
              <Icon style={{ fontSize: 20 }} icon="mdi:logout" />
              {"  "}
              {"SIGN OUT"}
            </span>
          </div>
        )}
      </div>
    )
  );
}

export default Header;
