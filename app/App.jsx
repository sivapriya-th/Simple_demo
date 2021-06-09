import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './style.css'


class App extends Component {
    constructor(){
        super()
        this.state = { 
            Transport:"", 
            Shopping:"", 
            Dining:""          
        }
    
        this.changeTransport = this.changeTransport.bind(this)
        this.changeShopping = this.changeShopping.bind(this)
        this.changeDining = this.changeDining.bind(this)
    
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeTransport(event){
        this.setState({
            Transport:event.target.value
        })
    }
    changeShopping(event){
        this.setState({
            Shopping:event.target.value
        })
    }
    changeDining(event){
        this.setState({
            Dining:event.target.value
        })
       }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            Transport: this.state.Transport,
            Shopping: this.state.Shopping,
            Dining: this.state.Dining
            
        }

        axios.post('http://localhost:4001/app/signup', registered)
          .then(response =>  console.log(response.data))
        
        this.setState({
            Transport:"",    
            Shopping:"",
            Dining:""
            
        })   
            //.then(response => {
            //window.location.href = 'http://www.apple.com';})
       
    }
    
        render(){
        return(
                <div>
                                       
                         <div className='container'>
                        <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                        
                        <h1>NUS Money App</h1>
                        <h3>Student Expense</h3>

                            <input type ='number'
                            placeholder='Transport' 
                            onChange={this.changeTransport}                       
                            value={this.state.Transport} 
                            classname ='form-control form-group'
                            />
                           
                            <input type ='number'
                            placeholder='Shopping' 
                            onChange={this.changeShopping}                       
                            value={this.state.Shopping} 
                            classname ='form-control form-group'
                            />  

                            <input type ='number'
                            placeholder='Dining' 
                            onChange={this.changeDining}                       
                            value={this.state.Dining} 
                            classname ='form-control form-group'
                            />
                            
                            
                            <input type = 'submit' classname= 'btn btn danger btn-block' value='submit'/>











                        </form>
                    </div>
                </div>
            </div>
        ); 
    }   

}

export default App;
