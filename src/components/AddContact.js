import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {

    state = {
        name:"",
        email:"",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the feilds are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});

        
    }
    render() {

        return(

            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="feild">
                        <label>Name</label>
                        <input 
                            type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
                    </div>
                    <div className="feild">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})} />
                    </div>
                    <br/>
                    <Link to="/">
                        <button className="ui button blue right">Back</button>
                    </Link>    
                    <button className="ui button blue right">Add</button>
                </form>
            </div>
            
        );

    }

}

export default AddContact;