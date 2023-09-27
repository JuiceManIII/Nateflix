import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <a href="#">
                <h1 className="text-logo">NATEFLIX</h1>
            </a>
            <a href="#">
                <h2 className="jumbotron-item">HOME</h2>
            </a>
            <a href="#">
                <h2 className="jumbotron-item">TV SHOWS</h2>
            </a>
            <a href="#">
                <h2 className="jumbotron-item">MOVIES</h2>
            </a>
            <a href="#">
                <h2 className="jumbotron-item">MY LIST</h2>
            </a>
            <a href="#" className="ml-auto">
                <FaSearch className="jumbotron-icon" />
            </a>
            <a href="#">
                <CgProfile className="jumbotron-icon pr-2" />
            </a>
        </div>
    );
};

export default Jumbotron;