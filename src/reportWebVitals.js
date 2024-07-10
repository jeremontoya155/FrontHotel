<<<<<<< HEAD
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
=======
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
>>>>>>> 09e75ab43f5ffa1fdd0dcae933d5cc38652e3921

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
