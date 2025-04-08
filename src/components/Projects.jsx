 // This component is on Tyler's current projects that he is working on

const Projects = () => {
    return (
        <>
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Black Jack Game (Java)</h3>
                    <p>(Currently in development) The project is a simulated game of black jack that is handled like in the casinos.
                        Most Online Black Jack games are randomized through just a standard deck of cards and you count simulate counting cards.
                        I've implemented a way of having 6-8 decks that are shuffled, which is called a "shoe" at a casino. This game will help people
                        that are trying to learn how to count cards. 
                    </p>
                </li>
                <li>
                    <h3>Salamander Tracking (Java)</h3>
                    <p>(Currently in development) This project was brought to us as a class from a professor that studies salamander phermones at Ohio State University.
                        The professor and their students are trying to collect data of what a salamander is doing in a 10"x10" box with 2 Test Scents. They're trying to 
                        to collect the data with cameras and tracking frameworks to record data every minute, utlizing graph searches.
                    </p>
                </li>
            </ul>
        </>
    )
}

export default Projects;