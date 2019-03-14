import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';

import Header from '../../Components/UI/Header'


class HomePage extends Component{

    state ={
        products: null
    };


    componentDidMount() {
        axios.get('products').then(responce =>{
            this.setState({products: responce.data})
        });
    }


    render() {
        const imgUrl = 'http://localhost:8000/uploads/';
        return (
            <Fragment>
                <Header />
                <div>
                    {!this.state.products ? <div>Loading</div> :
                        this.state.products.map((item, index) =>{
                            return (
                                <div key={index}>
                                    <img src={imgUrl + item.image} alt=""/>
                                    <span>{item.name}</span>
                                    <span>{item.price} USD</span>
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>
        );
    }

}
export default HomePage;