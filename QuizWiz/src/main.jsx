import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./app"
import './assets/app.css'


const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Router>
       <App />
    </Router>
</React.StrictMode>
);
