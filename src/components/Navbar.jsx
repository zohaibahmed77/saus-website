import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Shaikh Ayaz University</span>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-buttons">
            <button className="admin-btn" onClick={() => navigate('/admin')}>Admin</button>
            <button className="apply-btn" onClick={() => navigate('/admissions')}>Apply Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
