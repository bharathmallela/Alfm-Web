import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
import './NavMenu.css'
import {useDispatch,useSelector} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'





const NavMenu = (prop) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartState)
    var total = cart.reduce(function(sum, item){
        return sum = sum+item.Qty;
    },0);
    console.log(total,'the total quantity')

    
    return (
        <div className='menu-bar sticky-top'>
            <Navbar bg='pri'  variant='dark' expand="lg" >
            <Navbar.Brand onClick={()=>prop.history.push('/')} className='Logo offset-lg-1' style={{cursor:'pointer'}}>Challanger <i class="fas fa-desktop"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto offset-lg-6">
                    {/* <Link to='/'> */}
                        <Nav.Link onClick={()=>prop.history.push('/')} className=''>Home</Nav.Link>
                    {/* </Link> */}
                <NavDropdown bg='sec' title="Products" id="basic-nav-dropdown" >
                    <NavDropdown.Item onClick={()=>prop.history.push('/Processors')}>Processors</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>prop.history.push('/Laptop')}>Laptops</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>prop.history.push('/Hdd')} >Hdd</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>prop.history.push('/Sdd')} >Sdd</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>prop.history.push('/Monitor')} >Monitor</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={()=>prop.history.push('/Cart')}>View Cart <i className='fas fa-shopping-cart'/> </NavDropdown.Item>
                </NavDropdown>
                <Form inline >
                <FormControl type="text" placeholder="Search... " className="mr-sm-2 "  onChange={(event) =>{prop.setSearch(event.target.value)}}/>
                </Form>
                </Nav>
            </Navbar.Collapse>
            <a onClick={()=>prop.history.push('/Cart')} className='Cart'><i className='fas fa-shopping-cart'/><span>{total}</span></a>
            </Navbar>
        
            
        </div>


    )
}



export default withRouter(NavMenu);
