import './app.scss';
import 'styles/utilities.scss';
import 'styles/reset.scss';
import 'styles/scrollbars.scss';
import 'styles/typography.scss';
import 'styles/variables.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Pages/Home';
import Directory from 'features/Directory/Directory';
import BusinessDetails from 'features/BusinessDetails/BusinessDetails';
import NotFound from 'components/Layout/NotFound/NotFound';

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />}>
							<Route path="/" element={<Directory />} />
							<Route path="business/:id" element={<BusinessDetails />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;
