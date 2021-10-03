import React from "react";
import { HeaderContainer, LogoContainer,OptionDiv,OptionLink,OptionsContainer} from "./header.style";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/users/user.selector";

const Header = ({currentUser, hidden}) => (
        <HeaderContainer>
            <LogoContainer to='/'> 
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    Shop
                </OptionLink>
                <OptionLink to='/shop'>
                Contact
                </OptionLink>
                {currentUser ?
                (   <OptionDiv className='option' onClick={() => auth.signOut()}>
                        Sign Out
                    </OptionDiv>
                ) : (
                    <Link className='option' to='/signin'>
                        Sign In
                    </Link>
                    )
            }
                <CartIcon />
            
               
            </OptionsContainer>
        {hidden ? null : <CartDropdown />}
        </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);