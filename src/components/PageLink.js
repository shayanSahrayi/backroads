const PageLinkComponet = ({link,item}) => {
      const {id,href,text}={...link}
     
    return (
        <li key={id}>
            <a href={href} className={item}> {text} </a>
        </li>
    );
}

export default PageLinkComponet;