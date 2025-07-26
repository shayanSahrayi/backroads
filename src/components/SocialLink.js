const SocialLinkComponent = ({ link, item }) => {
    return (
        <li key={link.id}>
            <a href={link.href} rel="noreferrer" target="_blank" className="nav-icon"
            ><i className={link.icon}></i></a>
        </li>
    );
}
export default SocialLinkComponent;