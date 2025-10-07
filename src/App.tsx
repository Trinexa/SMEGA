import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import Proposal from './pages/Proposal';
import Admin from './pages/Admin/Admin';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminCaseStudies from './pages/Admin/AdminCaseStudies';
import AdminProposals from './pages/Admin/AdminProposals';
import AdminSetup from './pages/Admin/AdminSetup';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminMessages from './pages/Admin/AdminMessages';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="case-studies" element={<CaseStudies />} />
              <Route path="tools" element={<Tools />} />
              <Route path="contact" element={<Contact />} />
              <Route path="proposal" element={<Proposal />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/setup" element={<AdminSetup />} />
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<Admin />} />
              <Route path="case-studies" element={<AdminCaseStudies />} />
              <Route path="proposals" element={<AdminProposals />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="messages" element={<AdminMessages />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;