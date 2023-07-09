import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout';

import { HighOrderComponent } from './components/high-order-component';
import { PureFunctionalComponent } from './components/pure-functional-component';
import { RecursiveComponent } from './components/recursive-component';

import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Layout />} />

        <Route index path="/hight-order-component" element={<HighOrderComponent />} />
        <Route index path="/pure-functional-component" element={<PureFunctionalComponent />} />
        <Route index path="/recursive-component" element={<RecursiveComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
