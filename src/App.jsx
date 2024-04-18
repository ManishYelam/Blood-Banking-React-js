import { useState } from 'react';
// App.js
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from './components/NavBar/Navbar';

const App = () => {
  const [count, setCount] = useState(0)
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default App;

