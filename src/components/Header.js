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
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default Header;
