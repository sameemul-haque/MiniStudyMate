import { Icon } from "@iconify/react";

function Header() {
  return (
    <header>
      <div className="logout-wrapper">
        {/* <nav>
          <a href="login.html">
            <Icon style={{ fontSize: 20 }} icon="material-symbols:logout" />{" "}
            LOGOUT
          </a>
        </nav> */}
      </div>
      <h1>
        <Icon style={{ fontSize: 35 }} icon="game-icons:graduate-cap" />
        StudyMate
      </h1>
      <p id="head-caption">A Web-based Study Material Retrieval System</p>
    </header>
  );
}

export default Header;
