export default function Header () {

    const images = [
        "./images/LI-In-Bug.png",
        "./images/GitHub.png"
    ]

    return (
        <div className="header">
            <div id="pageTitle">
                <h1>Brett Markland-Sanchez</h1>
                <h2>Web Development Portfolio</h2>
            </div>
            <div id="icons">
                <div id="linkedIn" className="link">
                    <a href="https://www.linkedin.com/in/brettmarkland-sanchez/" target="_blank" rel="noreferrer">
                        <img src={images[0]} alt="LinkedIn Profile Link"/>
                    </a>
                </div>
                <div id="gitHub" className="link">
                    <a href="https://github.com/BrettMarkland-Sanchez" target="_blank" rel="noreferrer">
                        <img src={images[1]} alt="LinkedIn Profile Link"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

