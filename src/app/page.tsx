import Hero from '../components/Hero';
import Project from '../components/project';
import Extention from '../components/Extention';
import Costomise from '../components/Costomise';
import Plan from '../components/Plan';
import Everywhere from '../components/Everywhere';
import Data from '../components/Data';
import Sponsers from '../components/Sponsers';
import Favorite from '../components/Favorite';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

 // Ensure the path is corre // Ensure the path is correct

const Home = () => {
    return (
        <div>
            <Hero />
            <Project />
            <Extention/>
            <Costomise/>
            <Plan/>
            <Everywhere/>
            <Data/>
            <Sponsers/>
            <Favorite/>
            <Clients/>
            <Footer/>
             {/* Correctly render the Project component here */}
            {/* Other components or content */}
        </div>
    );
};

export default Home;

