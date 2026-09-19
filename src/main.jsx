import AOS from 'aos';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "@fontsource/outfit";
import "@fontsource/roboto";
import 'aos/dist/aos.css';

AOS.init({
  once: true
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
