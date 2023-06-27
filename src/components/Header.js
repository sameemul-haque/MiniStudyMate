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
      <h1 style={{ textTransform: "uppercase" }}>
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
      title: "FAQs",
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
                      if (item.title === "FAQs") {
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
        <h1>FAQs</h1>
        <br />
        <div className="faqbox">
          <p>
            <FaIcons.FaRegQuestionCircle />
            &nbsp; Is there a cost to use StudyMate ?
          </p>
          <br />
          <p>
            <FaIcons.FaHandPointRight />
            &nbsp; No, StudyMate is completely free. Users can use it once they
            log in.
          </p>
          <br />
        </div>
        <div className="faqbox">
          <p>
            <FaIcons.FaRegQuestionCircle />
            &nbsp; Can I access StudyMate on my mobile device ?
          </p>
          <br />
          <p>
            <FaIcons.FaHandPointRight />
            &nbsp; Yes, StudyMate can be accessed on all web browsers on any
            device that have an Internet connection.
          </p>
          <br />
        </div>
        <div className="faqbox">
          <p>
            <FaIcons.FaRegQuestionCircle />
            &nbsp; Can I use StudyMate offline ?
          </p>
          <br />
          <p>
            <FaIcons.FaHandPointRight />
            &nbsp; No, StudyMate requires an active internet connection.
          </p>
          <br />
        </div>
        <div className="faqbox">
          <p>
            <FaIcons.FaRegQuestionCircle />
            &nbsp; How can I search for specific study materials or subjects on
            StudyMate ?
          </p>
          <br />
          <p>
            <FaIcons.FaHandPointRight />
            &nbsp; The user can access the materials once he selects the
            university and enters subject code, he can access youtube lectures
            related to the topics, textbooks and reference books etc.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}
export default Header;
