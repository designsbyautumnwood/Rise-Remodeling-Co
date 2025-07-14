import { useEffect } from 'react';

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const criticalImages = [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
    
    // Add performance monitoring
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      console.log(`Page loaded in ${loadTime}ms`);
    }
    
    // Add smooth scrolling for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
      const smoothScrollTo = (element: Element) => {
        element.scrollIntoView({ behavior: 'smooth' });
      };
      // Add fallback for older browsers
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    // Add accessibility improvements
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };
    
    const handleMouseClick = () => {
      document.body.classList.remove('keyboard-navigation');
    };
    
    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('mousedown', handleMouseClick);
    
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('mousedown', handleMouseClick);
    };
  }, []);
  
  return null;
}