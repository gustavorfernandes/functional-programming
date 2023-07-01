import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout';
import { PureFunctionalComponent } from './components/pure-functional-component';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Layout />} />

        <Route index path="/pure-functional-component" element={<PureFunctionalComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
