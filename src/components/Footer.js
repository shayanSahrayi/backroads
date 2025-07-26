import { PageLink, SocialLink } from "../data";
import PageLinkComponet from "./PageLink";
import SocialLinkComponent from "./SocialLink";
const Footer = () => {
    return <>
        <footer className="section footer">
            <ul className="footer-links">
                {PageLink.map((link) => {
                    // footer-link
                    const { id, href, text } = link;
                    return (
                
                       <PageLinkComponet item={'footer-link'} link={link} />
                    );
                })}
            </ul>
            <ul className="footer-icons">
                {SocialLink.map((link) => {
                    const { id, href, icon } = link;
                    return (
                        <SocialLinkComponent link={link} item={'footer-icon'}/>

                    );
                })}

                
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    </>
}

export default Footer;