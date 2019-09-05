import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    hits: 0
  };

  handleDisplay = str => {
    switch (str) {
      case 'strike':
        if (this.state.strikes === 2) {
          this.setState({ strikes: 0, balls: 0 });
        } else {
          this.setState({ strikes: this.state.strikes + 1 });
        }
        break;

      case 'foul':
        if (this.state.strikes === 2) {
          return null;
        } else {
          this.setState({ strikes: this.state.strikes + 1 });
        }
        break;
      //logic for balls
      case 'ball':
        if (this.state.balls === 3) {
          this.setState({ strikes: 0, balls: 0 });
        } else {
          this.setState({ balls: this.state.balls + 1 });
        }
        break;

      case 'hit':
        this.setState({
          strikes: 0,
          balls: 0,
          hits: this.state.hits + 1
        });
        break;
      default:
        console.log('this is not a valid stat');
    }
  };

  render() {
    return (
      <div className="App">
        <Display stats={this.state} />
        <Dashboard stats={this.state} handleDisplay={this.handleDisplay} />
      </div>
    );
  }
}

export default App;
