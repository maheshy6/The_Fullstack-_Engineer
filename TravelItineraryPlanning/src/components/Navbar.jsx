function Navbar() {

    return (
        <>
            <nav id="navCont">
                <div className="left">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className="right">
                    <input placeholder="search" type="text" />
                </div>
            </nav>
        </>
    )

}

export default Navbar