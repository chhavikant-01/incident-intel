import './App.css';
import Feed from './components/Feed';
import Layout from './components/Layout';
import ReportWithDatePicker from './components/Report';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Feed2 from './components/Feed2';
import Post from './components/Post';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Feed2 />} />
            <Route path="/report" element={<ReportWithDatePicker />} />
            <Route path="/post/:postId" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
