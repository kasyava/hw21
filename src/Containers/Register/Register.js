import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';
import Header from '../../Components/UI/Header';


class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    changeLoginHandle = (e) => {
        this.setState({username: e.target.value});
    };

    changePasswordHandle = (e) => {
        this.setState({password: e.target.value});
    };




    handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('username', this.state.username);
        formData.set('password', this.state.password);

        axios.post('users', formData)
            .then(responce=>{

                if(responce.status === 200){
                    localStorage.setItem('user', JSON.stringify(responce.data))
                    window.location = '/';
                }
                else{
                    alert('Произошла ошибка');
                }

            })
            .catch((responce) => alert('Ошибка: ' + responce));
    };



    render() {
        return (
            <Fragment>
                <Header />
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form id="formRegister" className="col-12">
                            <div className="form-group">
                                <label htmlFor="username">Login</label><br/>
                                <input type="text" className="form-control" id="username" name="username" required onChange={(e)=>this.changeLoginHandle(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label><br/>
                                <input type="text" className="form-control" id="password" name="password" required onChange={(e)=>this.changePasswordHandle(e)}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" id="register" className="btn btn-primary" onClick={(e)=>this.handleClick(e)}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default Register;