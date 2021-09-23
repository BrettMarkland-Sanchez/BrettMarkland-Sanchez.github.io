export default function Projects () {

    const imgLinks = [
        {backgroundImage: `url('./images/code-quiz.png')`},
        {backgroundImage: `url('./images/work-day-scheduler.png')`},
        {backgroundImage: `url('./images/team-profile-generator.png')`},
        {backgroundImage: `url('./images/tech-blog.png')`},
        {backgroundImage: `url('./images/ps-event-planner.png')`},
        {backgroundImage: `url('./images/fos-coffee-shop.png')`}
    ]

    return (
        <div>
            <div className="flex" id="about">
            <div className="section"><h2>About</h2></div>
                <div id="profile">
                    <p>
                        <img id="photo" src="./images/Brett Profile Photo.png" alt="Brett Markland-Sanchez" />
                        Methodical Application Support Professional with 8+ years of combined IT industry experience and knowledge in deploying and supporting computer software, domains, application platforms, and knowledge bases. Graduated from the Army Signal Corps School with some college education and training in programming and web design. Accomplished in working with large enterprises of 1000+ employees using standard tools and frameworks such as ServiceNow, Atlassian Jira, Confluence, and SQL. Refined soft skills and professionalism with a background in legal assistance and white-glove customer service.
                    </p>
                </div>
            </div>
            <div className="flex" id="work">
                <div className="section"><h2>Work</h2></div>
                <div id="content">
                    <div className="card" style={imgLinks[0]}>
                        <h2>Code Quiz</h2>
                        <a href="https://brettmarkland-sanchez.github.io/code-quiz/" target="_blank" rel="noreferrer">Website</a>
                        <a href="https://github.com/BrettMarkland-Sanchez/code-quiz" target="_blank" rel="noreferrer">Repository</a>
                    </div>
                    <div className="card" style={imgLinks[1]}>
                        <h2>Work Day Scheduler</h2>
                        <a href="https://brettmarkland-sanchez.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Website</a>
                        <a href="https://github.com/BrettMarkland-Sanchez/work-day-scheduler" target="_blank" rel="noreferrer">Repository</a>
                    </div>
                    <div className="card" style={imgLinks[2]}>
                        <h2>Team Profile Generator</h2>
                        <a href="https://vimeo.com/581010451" target="_blank" rel="noreferrer">Demo Video</a>
                        <a href="https://github.com/BrettMarkland-Sanchez/team-profile-generator" target="_blank" rel="noreferrer">Repository</a>
                    </div>
                    <div className="card" style={imgLinks[3]}>
                        <h2>Tech Blog</h2>
                        <a href="https://bms-tech-blog.herokuapp.com/" target="_blank" rel="noreferrer">Website</a>
                        <a href="https://github.com/BrettMarkland-Sanchez/tech-blog" target="_blank" rel="noreferrer">Repository</a>
                    </div>
                    <div className="card" style={imgLinks[4]}>
                        <h2>PS Event Planner</h2>
                        <a href="https://brettmarkland-sanchez.github.io/ps-event-planner/" target="_blank" rel="noreferrer">Website</a>
                        <a href="https://github.com/BrettMarkland-Sanchez/ps-event-planner" target="_blank" rel="noreferrer">Repository</a>
                    </div>
                    <div className="card" style={imgLinks[5]}>
                        <h2>FOS Coffee Shop</h2>
                        <a href="https://fos-coffee-shop.herokuapp.com/" target="_blank" rel="noreferrer">Website</a>
                        <a href="https://github.com/BrettMarkland-Sanchez/fos-coffee-shop" target="_blank" rel="noreferrer">Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}