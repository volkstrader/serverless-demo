import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
// import firebase from './firebase';
// import '@firebase/firestore'

// const db = firebase.firestore();

class MainLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainLine: '',
    };

    this.handleClick = (e) => {
      this.props.checkLine(this.state.mainLine);
    };
  }

  render() {
    return (
      <section id="mainline">
        <div>What's the main # on your account?</div>
        <div>
          <input type="text" placeholder="Sprint Phone #" onChange={e => this.setState({ mainLine: e.target.value })} />
          <button onClick={this.handleClick}>Continue</button>
        </div>
      </section>
    );
  }
}

class ActiveLines extends React.Component {
  render() {
    console.log(this.props.lines);
    const activeLines = this.props.lines.map(line => {
      return <li>{line}</li>
    });

    return (
      <section id="activelines">
        <ul>
          {activeLines}
        </ul>
        <button onClick={this.handleClick}>Continue</button>
      </section>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mainLine: '',
      activeLines: undefined,
    };

    // this.handleChange = (e) => {
    //   this.setState({
    //     [e.target.name]: e.target.value
    //   })
    // };

    // this.handleSubmit = (e) => {
    //   e.preventDefault();
    //   const itemRef = db.collection('items')
    //   const item = {
    //     title: this.state.currentItem,
    //     user: this.state.username
    //   };
    //   itemRef.add(item);
    //   this.setState({
    //     currentItem: '',
    //     username: '',
    //   });
    // }
    this.checkLine = (num) => {
      console.log('checkLine', num);
      this.setState({ mainLine: num });
      const activeLines = ['2134567890', '2134567899'];
      this.setState({ activeLines });
      return true;
    }    
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <header>
            <div className='wrapper'>
              <h1>Sprint Cash Rewards Registration</h1>
            </div>
          </header>
          <div className='container'>
            <Route exact path="/" render={() => (
              (!this.state.activeLines) ? <MainLine checkLine={this.checkLine} /> : <Redirect to="/lines" />
            )} />
            <Route exact path="/lines" render={() => (
              (this.state.activeLines) ? <ActiveLines lines={this.state.activeLines} /> : <Redirect to="/" />
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
