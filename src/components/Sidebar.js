import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile.js";
import Suggestions from "./Suggestions.js";
import Footer from "./Footer.js";
import image from "../images/profile.jpg";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Sticky topOffset={-80}>
          <div className="sidebar">
            <Profile
              userName="rwitesh077"
              caption="Rwitesh Bera"
              urlText="Switch"
              iconSize="high"
              image={image}
            />

            <Suggestions />
            <Footer />
          </div>
        </Sticky>
      </div>
    </>
  );
}

export default Sidebar;
