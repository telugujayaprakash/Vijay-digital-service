import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blogs = lazy(() => import("./pages/Blogs"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Service Pages
const SEOPage = lazy(() => import("./pages/SEOService"));
const SocialMediaPage = lazy(() => import("./pages/SocialMediaService"));
const EmailMarketingPage = lazy(() => import("./pages/EmailMarketingService"));
const PPCPage = lazy(() => import("./pages/PPCService"));
const ContentMarketingPage = lazy(() => import("./pages/ContentMarketingService"));
const BrandStrategyPage = lazy(() => import("./pages/BrandStrategyService"));
const YouTubePromotionPage = lazy(() => import("./pages/YouTubePromotionService"));
const WebDevelopmentPage = lazy(() => import("./pages/WebDevelopmentService"));
const ApplicationTestingPage = lazy(() => import("./pages/ApplicationTestingService"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent mx-auto"></div>
      <p className="text-gray-500 mt-2 text-sm">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <TooltipProvider>
    <Sonner />
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
          <Route path="/services/ppc" element={<PPCPage />} />
          <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
          <Route path="/services/brand-strategy" element={<BrandStrategyPage />} />
          <Route path="/services/youtube-promotion" element={<YouTubePromotionPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/application-testing" element={<ApplicationTestingPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
