import './main.scss';
import { Outlet } from 'react-router';

const Main = () => {
	return (
		<main id="directory" className="sticky">
			<Outlet />
		</main>
	);
};

export default Main;
