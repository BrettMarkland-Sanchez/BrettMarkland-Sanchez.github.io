export default function Contact () {
    return (
        <div>
            <div className="flex" id="contact">
            <div className="section"><h2>Contact</h2></div>
                <div className="contactCard">
                    <a href="mailto:brett.marklandsanchez@gmail.com"><h3>✉ Brett.MarklandSanchez@gmail.com</h3></a>
                    <a href="tel:404-754-1929"><h3>☎ (404) 754-1929</h3></a>
                    <h3>‎Georgia Tech Research Institute</h3>
                    <h3>Smyrna, GA</h3>
                </div>
            </div>
            <div className="flex" id="resume">
                <div className="section"><h2>Resume</h2></div>
                <a id="download" href="./resume/BMS_LinkedIn_Resume.pdf" download="BMS Resume" target="_blank" className="btn blue waves-effect waves-light">Download</a>
            </div>
        </div>
    );
}