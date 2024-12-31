const products = [
    { title: 'HOME', source: "#home", id: 1 },
    { title: 'PROJECTS', source: "#projects", id: 2 },
    { title: 'SAIBORG', source: "#saiborg", id: 3 },
    { title: 'ABOUT', source: "#about", id: 4 }
];

export default function Navbar() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                listStyle: 'none',
                color: 'darkgreen',
                margin: '10px'
            }}
        >
            <a
                href={product.source}
                style={{
                    textDecoration: 'none',
                    color: 'darkgreen'
                }}
            >
                {product.title}
            </a>
        </li>
    );

    return (
        <nav
            style={{
                    display: "flex", // Flex container
                    justifyContent: "space-between", // Space between logo and links
            }}
        >
            {/* Logo */}
            <img
                src="logoo.png"
                alt="Logo"
                style={{
                    width: "50px",
                    height: "50px",
                    padding: "10px"
                }}
            />

            {/* Navigation Links */}
            <div style={{
                marginRight: '30px'
            }}>
                <ul
                    style={{
                        display: "flex", // Flexbox for links
                        padding: '10px',
                        margin: '0',
                        listStyle: 'none',
                        gap: '20px'
                    }}
                >
                    {listItems}
                </ul>
            </div>
        </nav>
    );
};

