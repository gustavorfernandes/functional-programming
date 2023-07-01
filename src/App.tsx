import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<div>Hello world!</div>} />
      </Routes>
    </BrowserRouter>
  );
}
