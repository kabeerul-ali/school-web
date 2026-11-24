
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SchoolPage from "./pages/SchoolPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/school/delhi-public-school" replace />} />
        <Route path="/school/:slug" element={<SchoolPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
