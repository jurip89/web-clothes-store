import React from "react";
import CustomButton from "../custom-button/custom-button-component";
import './collection-item.style.scss'
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
    const {imageUrl,name, price}= item
    return(
    <div className='collection-item'>
        <div className='image'
            style={{
            backgroundImage : `url(${imageUrl})`
        }}/>

        <div className='collection-footer'>
            <span className ='name'>{ name}</span>
            <span className ='price'>{ price}</span>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted>Add to Cart</CustomButton>
    </div>
)}
const mapDipatcToProps = dispatch => ({
    addItem: item=> dispatch(addItem(item))
})

export default connect(null,mapDipatcToProps)(CollectionItem)