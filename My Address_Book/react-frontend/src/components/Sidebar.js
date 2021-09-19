import React, {useState, useEffect, Component } from 'react';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';
import '../sidebar.css';

const Sidebar = () => { 


        return (
          
            <div >
            <div className="sidebar ">
           
                <br/>
                    <ul>
                        <li><a href="/add-user">Register</a></li>
                        <li><a href="/users">View All</a></li>
                       
                    </ul>
	        </div>
            </div>



   
        );  
}

export default withRouter(Sidebar);