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
  const userEmail = auth.currentUser?.email;
  return (
    auth.currentUser && (
      <div className="user-info">
        <span>
          <Icon style={{ fontSize: 10 }} icon="logos:google-gmail" />{" "}
          {userEmail}
        </span>
        <button className="sign-out" onClick={() => auth.signOut()}>
          <Icon style={{ fontSize: 20 }} icon="material-symbols:logout" />
          {" SIGN OUT"}
        </button>
      </div>
    )
  );
}

export default Header;
