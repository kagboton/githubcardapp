import React from 'react';
import './Form.css';
import axios from 'axios';


class Form extends React.Component{

    state = {
        userName : '',
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const  resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);

        this.props.onSubmit(resp.data); //to send the  profile data object to App component

        //to reset the userName field
        this.setState({
            userName : ''
        })
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value = {this.state.userName}
                    onChange={event => this.setState({userName : event.target.value})}
                    placeholder="Github username"
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;
