import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <p>this is a homepage</p>
            <Link to="/about-us">go to AboutUs page</Link>
        </>
    );
}

export default HomePage;