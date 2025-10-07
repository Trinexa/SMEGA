import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  FileText, 
  Users, 
  Star, 
  TrendingUp, 
  Calendar,
  LogOut,
  Settings,
  Eye,
  UserCog,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

const Admin: React.FC = () => {
  const { signOut, user } = useAuth();
  const [stats, setStats] = useState({
    totalProposals: 0,
    pendingProposals: 0,
    totalCaseStudies: 0,
    featuredCaseStudies: 0,
    totalMessages: 0,
    newMessages: 0
  });
  const [recentProposals, setRecentProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch proposals stats
      const { data: proposals, error: proposalsError } = await supabase
        .from('proposals')
        .select('*')
        .order('created_at', { ascending: false });

      if (proposalsError) throw proposalsError;

      // Fetch case studies stats
      const { data: caseStudies, error: caseStudiesError } = await supabase
        .from('case_studies')
        .select('*');

      if (caseStudiesError) throw caseStudiesError;

      // Fetch messages stats
      const { data: messages, error: messagesError } = await supabase
        .from('contact_messages')
        .select('*');

      if (messagesError) throw messagesError;

      setStats({
        totalProposals: proposals?.length || 0,
        pendingProposals: proposals?.filter(p => p.status === 'pending').length || 0,
        totalCaseStudies: caseStudies?.length || 0,
        featuredCaseStudies: caseStudies?.filter(cs => cs.featured).length || 0,
        totalMessages: messages?.length || 0,
        newMessages: messages?.filter(m => m.status === 'new').length || 0
      });

      setRecentProposals(proposals?.slice(0, 5) || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>View Site</span>
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Proposals</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalProposals}</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                <p className="text-3xl font-bold text-gray-900">{stats.pendingProposals}</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Case Studies</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalCaseStudies}</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Customer Messages</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalMessages}</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Messages</p>
                <p className="text-3xl font-bold text-gray-900">{stats.newMessages}</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/admin/case-studies"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-teal-100 p-3 rounded-full group-hover:bg-teal-200 transition-colors">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Manage Case Studies</h3>
                <p className="text-gray-600">Add, edit, and organize your portfolio</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/proposals"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-teal-100 p-3 rounded-full group-hover:bg-teal-200 transition-colors">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Review Proposals</h3>
                <p className="text-gray-600">Manage incoming project requests</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/users"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-teal-100 p-3 rounded-full group-hover:bg-teal-200 transition-colors">
                <UserCog className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Manage Admin Users</h3>
                <p className="text-gray-600">Add and manage admin accounts</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/messages"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-teal-100 p-3 rounded-full group-hover:bg-teal-200 transition-colors">
                <MessageSquare className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Customer Messages</h3>
                <p className="text-gray-600">View and respond to contact form messages</p>
                {stats.newMessages > 0 && (
                  <span className="inline-block mt-1 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                    {stats.newMessages} new
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Proposals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Recent Proposals</h2>
              <Link
                to="/admin/proposals"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View All
              </Link>
            </div>
          </div>
          
          <div className="p-6">
            {recentProposals.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No proposals yet</p>
            ) : (
              <div className="space-y-4">
                {recentProposals.map((proposal) => (
                  <div
                    key={proposal.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{proposal.company_name}</h3>
                      <p className="text-sm text-gray-600">{proposal.contact_name} • {proposal.email}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(proposal.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                        {proposal.status}
                      </span>
                      <span className="text-sm font-medium text-gray-700">{proposal.budget_range}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;