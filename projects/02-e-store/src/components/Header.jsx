function Header() {
    const hour = new Date().getHours();
    const openHours = 9;
    const closeHours = 21;
    const isOpen = hour >= openHours && hour <= closeHours;

    return (
        <header className="header">
            <h1>Electronic store</h1>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Catalog</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="working-hours">
                {isOpen ? (
                    <div>
                        We are currently open. Hours: {openHours}:00 -{' '}
                        {closeHours}:00
                    </div>
                ) : (
                    <div>
                        We are closed. Open from {openHours}:00 - {closeHours}
                        :00
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
