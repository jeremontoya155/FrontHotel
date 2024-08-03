import React, { useEffect } from 'react';

const BookingFrame = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript('https://frame2.hotelpms.io/BookingFrameClient//public/assets/booking-frame/js/iframe-resizer.min.js');
        await loadScript('https://frame2.hotelpms.io/BookingFrameClient//public/assets/booking-frame/js/main.js');
      } catch (error) {
        console.error('Failed to load scripts', error);
      }
    };

    loadScripts();

    return () => {
      const scriptTags = document.querySelectorAll('script[src*="frame2.hotelpms.io"]');
      scriptTags.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return (
    <iframe
      id="hw-booking-frame"
      src="https://frame2.hotelpms.io/BookingFrameClient//hotel/57CAA702094A2A3181514F814A13ADE1/9cfe8e1e-23e8-4648-91dc-830f7ef562f7/book/rooms?currency=ARS&language=es-ES&rp="
      frameBorder="0"
      allowTransparency="true"
      scrolling="no"
      style={{ width: '100%', height: '500px' }} // Agrega una altura específica para asegurar que se muestre correctamente
    ></iframe>
  );
};

export default BookingFrame;
