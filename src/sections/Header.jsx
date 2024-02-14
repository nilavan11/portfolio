import { Link } from "react-router-dom";


function Header() {
    return (
      <header className='header'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='header-title'>
              <a href=''>NILA<span>VAN.</span></a>
            </div>
            <div className="nav">
              <ul>
                <li><Link to="/home" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/experience" className="nav-link">Education/Experience</Link></li>
                <li><Link to="/project" className="nav-link">Work</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }

  export default Header;