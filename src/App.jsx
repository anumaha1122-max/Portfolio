import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import ContactFloating from './components/ContactFloating.jsx';
export default function App(){return <div className="min-h-screen bg-darkBg text-whiteText"><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:slug" element={<ProjectDetails/>}/></Routes></main><Footer/><ContactFloating/></div>}
