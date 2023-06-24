import { useState } from "react";
import { auth } from "../firebase-config";
import "../css/header.css";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

function Header() {
  return (
    <header>
      <>
        <SignOut />
      </>
      <h1>
        <FaIcons.FaGraduationCap />
        StudyMate
      </h1>
      <p id="head-caption">A Web-based Study Material Retrieval System</p>
    </header>
  );
}

function SignOut() {
  const [sidebar, setSidebar] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const toggleHelp = () => setShowHelp(!showHelp);
  const showSidebar = () => setSidebar(!sidebar);

  const sidebarData = [
    {
      title: auth.currentUser?.email,
      icon: <FaIcons.FaUserCircle />,
      cName: "nav-text",
    },
    {
      title: "Help",
      icon: <FaIcons.FaQuestionCircle />,
      cName: "nav-text",
    },
    {
      title: "Signout",
      icon: <FaIcons.FaSignOutAlt />,
      cName: "nav-text",
    },
  ];

  return (
    auth.currentUser && (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar" onClick={showSidebar}>
            <div className="menu-bars">
              <FaIcons.FaBars />
            </div>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <div className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </div>
              </li>
              {sidebarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={item.cName}
                    onClick={() => {
                      if (item.title === "Signout") {
                        auth.signOut();
                      }
                      if (item.title === "Help") {
                        toggleHelp();
                      }
                    }}
                  >
                    <div>
                      {item.icon}
                      <span className="navbar-span">{item.title}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
        {showHelp && (
          <div className="help-popup">
            <UserHelp onClose={toggleHelp} />
          </div>
        )}
      </>
    )
  );
}

function UserHelp({ onClose }) {
  return (
    <>
      <div className="userhelp">
        <p className="close-button-help">
          <FaIcons.FaRegWindowClose
            className="close-button-btn"
            onClick={onClose}
          />
        </p>
        <h1>Help</h1>
      </div>
    </>
  );
}
export default Header;
