import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';   // ✅ import navbar
import Footer from '../components/Footer';   // ✅ import footer
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(storedApps);
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...applications];
    updated[index].status = newStatus;
    setApplications(updated);
    localStorage.setItem('applications', JSON.stringify(updated));
  };

  const approved = applications.filter(app => app.status === 'Approved').length;
  const pending = applications.filter(app => app.status === 'Pending').length;

  return (
    <>
      <Navbar /> {/* ✅ NAVBAR */}

      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>

        <div className="stats-summary">
          <div className="stat-box">Total: {applications.length}</div>
          <div className="stat-box">Approved: {approved}</div>
          <div className="stat-box">Pending: {pending}</div>
        </div>

        <div className="applications-section">
          <h2>Applications</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Program</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={index}>
                  <td>{app.firstName} {app.lastName}</td>
                  <td>{app.email}</td>
                  <td>{app.primary}</td>
                  <td>{app.status}</td>
                  <td>{app.date}</td>
                  <td>
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer /> {/* ✅ FOOTER */}
    </>
  );
};

export default AdminDashboard;
