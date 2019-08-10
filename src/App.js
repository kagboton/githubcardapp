import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './CardList';
import Form from './Form';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class App extends React.Component{

  state = {
    profiles : [],
  };

  addNewProfile = (profileData)=>{
    this.setState(prevState => ({
      profiles : [...prevState.profiles, profileData]
    }))
  };


  render() {

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <div className="header">{this.props.title}</div>
          <Form onSubmit = {this.addNewProfile}/>
          <CardList profiles = {this.state.profiles}/>

        </div>
    );
  }

}


export default App;
