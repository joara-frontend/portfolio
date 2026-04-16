import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
