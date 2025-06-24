import { createRoot } from 'react-dom/client';
import APP from './App.jsx';

const root = createRoot(document.querySelector('#root'));
root.render(
    <APP />,
);
