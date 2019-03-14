import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';
import Header from "../../Components/UI/Header";

class AddProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: '',
            name: '',
            description: '',
            price: 0,
            image: 'noimage.jpeg',
            category: '5c862652ab2bb41f34c17154'
        };

        this.fileInput = React.createRef();

        //this.fileHandle = this.fileHandle.bind(this);
    }
    user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;


    addHandle = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', this.state.name);
        formData.set('description', this.state.description);
        formData.set('price', this.state.price);
        formData.set('category', this.state.category);
        console.log(this.fileInput);
        if (this.fileInput.current.files[0]) formData.set('image', this.fileInput.current.files[0]);

        if(this.user !== null) {
            const headers = {"Token": this.user.token};
            axios.post('products',formData,{headers})
                .then(()=>{
                    window.location = '/';
                })
                .catch((responce) => alert('Error: ' + responce));
        }
    };

    changeName = (e) => {
        this.setState({name: e.target.value});
    };
    changeDesc = (e) => {
        this.setState({description: e.target.value});
    };
    changePrice = (e) => {
        this.setState({price: e.target.value});
    };
    changeCategory = (e) => {
        this.setState({category: e.target.value});
    };

    // fileHandle = (selectorFiles) =>{
    //     //sconsole.log(selectorFiles);
    //     this.setState({image: selectorFiles[0].name});
    // };



    render() {

        return (
            <Fragment>
                <Header/>
                {this.user === null ? null :
                    <div className="container h-100">
                        <div className="row h-100 justify-content-center align-items-center">
                            <form id="formData" name="formData" encType="multipart/form-data" method="post">
                                <div className="form-group">
                                    <label htmlFor="name">Наименование продукта</label>
                                    <input name="name" type="text" id="name" className="form-control" onChange={(e) => this.changeName(e)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Описание продукта</label>
                                    <input name="description" id="description" type="text" className="form-control" required onChange={(e) => this.changeDesc(e)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Цена продукта</label>
                                    <input name="price" id="price" type="number" className="form-control" required onChange={(e) => this.changePrice(e)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <input name="category" id="category" type="text" className="form-control" required onChange={(e) => this.changeCategory(e)}/>
                                </div>
                                <div className="form-group">
                                    <input name="image" id="image" type="file" className="form-control-file" ref={this.fileInput} />
                                </div>
                                <button type="submit" id="btnSendMessage" className="btn btn-primary" onClick={(e)=>this.addHandle(e)}>Отправить</button>
                            </form>
                        </div>
                    </div>}

            </Fragment>

        );
    }
}

export default AddProducts;