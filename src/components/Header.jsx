function Header() {
    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper">
            <a href="#!" className="brand-logo">React shop</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header;