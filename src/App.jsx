import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import Discover from './pages/Discover';
import Deploy from './pages/Deploy';
import Develop from './pages/Develop';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle GitHub Pages redirect for SPA routing
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get('/');
    if (redirect) {
      navigate(redirect.replace(/~and~/g, '&'), { replace: true });
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/develop" element={<Develop />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AppContent />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App