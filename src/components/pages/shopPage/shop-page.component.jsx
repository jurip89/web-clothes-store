import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import WithSpinner from "../../with-spinner/with-spinner.component";
import CollectionsOverview from '../../collections-overview/collection-overview.component'
import CollectionPage from "../collections/collection.component";

import { updateData } from "../../../redux/shop/shop.action";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase.utils";

const CollectionsOverviewWithSpinnerComponent = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinnerComponent = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsuscribeFromSnapshot = null;
      
    componentDidMount() {
        
        const mario = async () => {
            const {updateData}= this.props
            const querySnapshot = await getDocs(collection(db, "collections"));
            // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-ba8cc/databases/(default)/documents/collections')
            //     .then(res => res.json())
            //     .then(collections=> console.log(collections))
            const transformedCollection=querySnapshot.docs.map((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const { items, title } = doc.data();
                return {
                    routeName: encodeURI(title.toLowerCase()),
                    id: doc.id,
                    title,
                    items
                };                
            });
            const colletionMap= transformedCollection.reduce((accumulator, collect) =>
            {
                accumulator[collect.title.toLowerCase()] = collect
                return accumulator
            }, {})
            updateData(colletionMap)
            this.setState({
                loading: false
            })
        }
        mario();
        
    }

    
    
    render()
    {
        const { match } = this.props
        const {loading}= this.state
        return(<div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinnerComponent  isLoading={loading } {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} render={(props) =>  <CollectionPageWithSpinnerComponent isLoading={loading} {...props}/> } />
    </div>)
        
    }
}

const mapDipatcToProps = (dispatch) => ({
    updateData: collectionsMap => dispatch(updateData(collectionsMap))
})




export default connect(null, mapDipatcToProps)(ShopPage)