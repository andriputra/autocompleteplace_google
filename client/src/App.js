import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
	  primary: {
		main: '#1976d2',
	  },
	  secondary: {
		main: '#e91e63',
	  },
	},
});
class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<div>
							<Route exact path="/" component={Home} />
						</div>
					</Router>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
