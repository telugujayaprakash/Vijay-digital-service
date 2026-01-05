import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Performance optimization: Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical images (hero images) - only the first one for LCP
  const heroImage = new Image();
  heroImage.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&auto=format&q=80';

  // Preload critical routes that users are likely to visit
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Preload services page as it's likely to be visited
      import('./pages/Services');
    }, { timeout: 2000 });
  }
};

// Initialize performance optimizations
preloadCriticalResources();


createRoot(document.getElementById("root")!).render(
  <App />
);
