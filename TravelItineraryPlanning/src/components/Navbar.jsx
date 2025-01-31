function Navbar() {

    return (
        <>
            <nav id="navCont">
                <div className="left">
                    <a href="#">Home</a>
                    <a href="#">Service</a>
                    <a href="#">Products</a>
                    <a href="#">All Destinations</a>
                </div>
                <div className="right">
                    <input placeholder="search" type="text" />
                    <button>Sign Up</button>
                    <button>LogIn</button>
                </div>
            </nav>
        </>
    )

}

export default Navbar