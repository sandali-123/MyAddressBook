import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            dob: '',
            mobile: '',
            address: ''

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeAddrHandler = this.changeAddrHandler.bind(this);
    
        this.saveUser = this.saveUser.bind(this);

    }

    saveUser = (e) => {
        e.preventDefault();
       
         let phoneno = /^\d{10}$/;
        let user = {name: this.state.name, age: this.state.age, mobile: this.state.mobile , dob: this.state.dob,address: this.state.address};
        console.log('user => ' + JSON.stringify(user));
        if(!this.state.name){
            return alert("Please insert your name")
            
        }
        if(this.state.age > 120 || this.state.age < 1){
            return alert("Age range should be 1-120")
        }
        if(!this.state.mobile){
            return alert("Please insert your Mobile number")
        }
        
        if(!this.state.mobile.length === 10){
            return alert("Please enter 10 digits ")
        }
        if(!this.state.mobile.match(phoneno)){
            return alert("Incorrect Mobile No ! ")
        }
        
        
        else{

            console.log('user => ' + JSON.stringify(user));
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }
         
    }

    changeNameHandler=(event) =>{
       this.setState({name: event.target.value}) ;
    }
    changeAgeHandler=(event) =>{
        this.setState({age: event.target.value}) ;
     }
     changeDobHandler=(event) =>{
        this.setState({dob: event.target.value}) ;
     }
     changeMobileHandler=(event) =>{
        this.setState({mobile: event.target.value}) ;
     }
     changeAddrHandler=(event) =>{
        this.setState({address: event.target.value}) ;
     }
     cancel(){
        this.props.history.push('/users');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <form method="POST" >
                                <div className="form-group "><br></br>
                                    <label for="exampleInputName"><b>Name <span class="required">*</span> :</b></label>
                                    <input className="form-control" id="exampleInputName" placeholder="Name" value={this.state.name} onChange={this.changeNameHandler}  required/>

                                </div>
                                   <div className="form-group">
                                    <label for="exampleInputAge"><b>Age :</b></label>
                                    <input className="form-control" id="exampleInputAge" placeholder="Age" value={this.state.age} onChange={this.changeAgeHandler} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputDOB"><b>DOB :</b></label>
                                    <input className="form-control" type="date" id="exampleInputDOB"  value={this.state.dob} onChange={this.changeDobHandler} />

                                </div>
                                
                                <div className="form-group">
                                    <label for="exampleInputMobile"><b>Mobile Number<span class="required">*</span> :</b></label>
                                    <input className="form-control" id="exampleInputMobile" placeholder="Mobile Number" value={this.state.mobile} onChange={this.changeMobileHandler}  required/>

                                </div>
                                <div className="mb-3">
                                    <label for="validationTextarea"><b>Address :</b></label>
                                    <textarea className="form-control " id="validationTextarea" placeholder="Address"  value={this.state.address} onChange={this.changeAddrHandler}></textarea>
                                    
                                </div>
                                
                                <button className="btn btn-success btn-lg" onClick={this.saveUser}>   Save   </button>  
                                < button className="btn btn-danger btn-lg float-right" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form><br></br>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUserComponent;
