import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import LibraryPage from './pages/LibraryPage';
import InstitutionalModePage from './pages/InstitutionalModePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ProfilePage from './pages/ProfilePage';
import { UserProvider, useUser } from './contexts/UserContext';
import { UnishelfLogo } from './components/Icons';

const AppContent: React.FC = () => {
    const { user, isLoading, error } = useUser();

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
                <UnishelfLogo className="h-12 w-12 text-indigo-500 animate-pulse" />
                <p className="mt-4 text-lg">Loading UniShelf...</p>
            </div>
        );
    }

    if (error || !user) {
        return (
             <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-red-400 p-4 text-center">
                <h2 className="text-2xl font-bold">Failed to Load Application</h2>
                <p className="mt-2">Could not connect to the database. Please check your connection or contact support.</p>
                <p className="mt-1 text-sm text-slate-500 max-w-md">Error: {error}</p>
            </div>
        );
    }

    return (
        <Layout user={user}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/institutional" element={<InstitutionalModePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
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