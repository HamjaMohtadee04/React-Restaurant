
import './Nav.css'
const Nav = () => {
    return (
        <div className="banner">
        <div className="content">
          <h1>Welcome to Cyber Attack Detection</h1>
          <p>
            An innovative framework combining ontology and machine learning to safeguard systems.
          </p>
          <div className="buttons">
            <button onClick={() => window.location.href = '#explore'}>Explore Now</button>
            <button onClick={() => window.location.href = '#feedback'}>Our Feedback</button>
          </div>
        </div>
      </div>
    );
};

export default Nav;