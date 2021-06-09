import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header.component.jsx';
import Main from './components/main/main.component.jsx';
import Footer from './components/footer/footer.component.jsx';

/* notes

email: nodemailer

express-fileupload

*/

function App() {
	return (
		<Router>
			<div id="App">
				<Header />
				<Main />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
