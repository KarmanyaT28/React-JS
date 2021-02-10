import { render } from '@testing-library/react';
import React from 'react';
import '../../App.css';




// return <h1 className='signup'>LOGIN </h1>
export default function Login(){

    render() ;{
        return ( <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username"placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Login</button>
            </div>
        </div>
        );
    }
}