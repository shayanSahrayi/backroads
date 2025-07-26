import { PageLink, SocialLink } from "../data";
import PageLinkComponet from "./PageLink";
import SocialLinkComponent from "./SocialLink";
const Navbar = () => {
  return <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {PageLink.map((link) => {
            return (
              <PageLinkComponet item={'nav-link'} link={link} />
            );
          })}
        </ul>

        <ul className="nav-icons">

          {SocialLink.map((link) => {
            return (
              <SocialLinkComponent link={link} item={'nav-icon'}/>
            );
          })}
        </ul>
      </div>
    </nav>

  </>
}

export default Navbar;