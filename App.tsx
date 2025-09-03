

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import LibraryPage from './pages/LibraryPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import { UserProvider, useUser } from './contexts/UserContext';
import { UnishelfLogo } from './components/Icons';

const FullScreenLoader: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
        <UnishelfLogo className="h-12 w-12 text-indigo-500 animate-pulse" />
        <p className="mt-4 text-lg">Loading UniShelf...</p>
    </div>
);

const AppContent: React.FC = () => {
    const { user, isLoading, error } = useUser();

    if (isLoading) {
        return <FullScreenLoader />;
    }
    
    if (error && !user) {
        return (
             <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 dark:bg-slate-900 text-red-600 dark:text-red-400 p-4 text-center">
                <h2 className="text-2xl font-bold">Application Error</h2>
                <p className="mt-2">Could not load user data. Please try again later.</p>
                <p className="mt-1 text-sm text-slate-500 max-w-md">Error: {error}</p>
            </div>
        );
    }
    
    if (!user) {
        return (
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
        );
    }

    return (
        <Layout user={user}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/auth" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
    );
}

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

export default App;