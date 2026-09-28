export default function Images() {
    return (
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img
                id="wd-starship"
                width="400px"
                alt="Starship"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img
                id="wd-teslabot"
                src="/images/teslabot.jpg"
                height="200px"
                alt="Tesla Bot (Optimus) humanoid robot"
            />
            <br />
            Loading another remote image:
            <br />
            <img
                id="wd-ai-image"
                src="https://www.nasa.gov/wp-content/uploads/2023/03/pia25476-16.jpg"
                width="200px"
                alt="Jupiter's moon Europa captured by NASA's Galileo spacecraft"
            />
            <br />
            My image:
            <br />
            <img
                id="wd-your-image"
                src="/images/adventure.jpg"
                width="200px"
                alt="A photo from one of my adventure sports activities"
            />
        </div>
    );
}