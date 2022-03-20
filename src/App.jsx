import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Pages/Home';
import DirectoryList from 'features/DirectoryList/DirectoryList';
import Business from 'features/BusinessDetails/Business';

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />}>
							{/* <Route index element={<DirectoryList />} /> */}
							{/* <Route path="/" element={<DirectoryList />} /> */}
							{/* <Route path="business/:id/*" element={<Business />} /> */}
							<Route path="/" element={<Business />} />
							{/* <Route path="*" element={<NotFound />} /> */}
						</Route>
					</Routes>
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;
