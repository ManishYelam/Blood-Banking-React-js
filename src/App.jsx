import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from './components/NavBar/Navbar';

const App = () => {

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default App;

