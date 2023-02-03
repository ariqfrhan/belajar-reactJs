const Navbar = (props, {navValue}) =>{
    return(
        <div>
            <h1>{props.navHeading}</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">{!navValue ? "Contact" : navValue}</a></li>
                <li><a href="#">{props.navText}</a></li>
            </ul>
        </div>
    )
}
export default Navbar;