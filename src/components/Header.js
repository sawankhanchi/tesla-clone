import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    // console.log(cars);

    return (
        <Container>
            {/* logo */}
            <a href="logo">
                <img src="/images/logo.svg" alt="" />
            </a>

            {/* menu left */}
            <Menu>
                { cars && cars.map((car, index) => (
                    <a key={index} href="model">{car}</a>
                ))}
            </Menu>

            {/* menu right */}
            <RightMenu>
                <p><a href="shop">Shop</a></p>
                <a href="tacc">Tesla account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CustomClose onClick={() => setBurgerStatus(false)} />
                { cars && cars.map((car, index) => (
                    <li key={index}><a href="model">{car}</a></li>
                ))}
                <li><a href="ei">Existing Inventory</a></li>
                <li><a href="ui">Used Inventory</a></li>
                <li><a href="ti">Trade-in</a></li>
                <li><a href="ct">Cybertruck</a></li>
                <li><a href="rs">Roadster</a></li>
            </BurgerNav>
            
        </Container>
    )
}

export default Header;

const Container = styled.div`
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 20px;
   z-index: 1;

`
const Menu = styled.div`
   display: flex;
   align-items: center;
   justify-center: center;
   flex: 1;
   margin-left: 50px;

   a {
       font-weight: 600;
       text-transform: uppercase;
       padding: 0 10px;
       flex-wrap: nowrap;
   }

`

const RightMenu = styled.div`
   margin-left: 120px;
   display: flex;
   align-items: center;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 25px;
    }

    @media(max-width: 768px) {
        display: none;
    }

    p {
        margin-right: 2px;
    }

`

const CustomMenu = styled(MenuIcon)`
   cursor: pointer;

`

const BurgerNav = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background: white;
   width: 300px;
   z-index: 16;
   list-style: none;
   padding: 20px;
   display: flex;
   flex-direction: column;
   text-align: start;
   justify-content: flex-start;
   transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
   transition: transform 0.2s;
   li {
       padding: 15px 0;
       border-bottom: 1px solid rgba(0, 0, 0, 0.2);

       a {
           font-weight: 600;
       }
   }

`

const CustomClose = styled(CloseIcon)`
   margin-left: 240px;
   margin-top: -5px;
   margin-bottom: 10px;
   cursor: pointer;
`
