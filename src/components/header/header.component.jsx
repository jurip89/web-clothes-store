import React from "react";
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden, selectCartItem } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/users/user.selector";

const Header = ({currentUser, hidden}) => (
        <div className='header'>
            <Link className='logo-container' to='/'> 
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                Contact
                </Link>
                {currentUser ?
                (   <div className='option' onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        Sign In
                    </Link>
                    )
            }
                <CartIcon />
            
               
        </div>
        {hidden ? null : <CartDropdown />}
        </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);