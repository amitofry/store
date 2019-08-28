import React, { Component }  from 'react';
import './Product.css'
export default class Product extends Component {
    constructor(props){
        super(props);        
    }

    addToFavorites = (event) => {
        this.props.onAddToFavorites(this.props.name,this.props.userName)
    }

    addToCart = (event) => {
        this.props.onAddToCart(this.props.name,this.props.userName)
    }

    render() {
      return (
        <div className="card product" style={{width:'18rem'}} data-testid="product">
            <img src={this.props.imageSrc} className="card-img-top" alt={this.props.name}/>
            <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.description}</p>
            </div>        
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{this.props.price} $</li>
                {this.props.extraData && this.props.extraData.length > 0 && 
                this.props.extraData.map((extraDataItem)=>{
                    <li className="list-group-item">{extraDataItem}</li>
                })                
                }
            </ul>    
            <div className="card-body">
            <a onClick={this.addToCart} href="#" className="card-link">ADD TO CART</a>
            <a onClick={this.addToFavorites} href="#" className="card-link">FAVORITE</a>
            </div>
        </div>
      );
    }
}
