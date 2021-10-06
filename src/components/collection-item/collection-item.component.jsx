import React from "react";


import { CollectionItemContainer,ImgContainer, CustomButtonForCollectionItem, SpanName,SpanPrice,FooterContainer} from "./collection-item.style";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
    const {imageUrl,name, price}= item
    return(
    <CollectionItemContainer>
            <ImgContainer className='image' imageUrl={ imageUrl}/>

        <FooterContainer>
            <SpanName>{ name}</SpanName>
            <SpanPrice>{ price}</SpanPrice>
        </FooterContainer>
        <CustomButtonForCollectionItem onClick={()=>addItem(item)} inverted>Add to Cart</CustomButtonForCollectionItem>
    </CollectionItemContainer>
)}
const mapDipatcToProps = dispatch => ({
    addItem: item=> dispatch(addItem(item))
})

export default connect(null,mapDipatcToProps)(CollectionItem)