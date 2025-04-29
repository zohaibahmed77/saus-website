import './DashboardPage.css';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Send user back to home on logout (for now)
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <h1>Welcome to Your Dashboard!</h1>
        <p>Here you can apply for programs, check your status, and manage your profile. (Coming soon!)</p>
        <button className="dashboard-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
