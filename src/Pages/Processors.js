import React,{useEffect,useState} from 'react'
import './Processors.css'
import Product from '../components/Product'
import axios from 'axios'
import NavMenu from '../components/NavMenu'
import Modals from '../components/Modals'
import {DropdownButton,Dropdown,Spinner} from 'react-bootstrap';
import { useDispatch,useSelector} from 'react-redux'

function Processors (props) {
    const [Data, setData] = useState([])
    const [Search, setSearch] = useState('')
    const [Show,setShow] = useState(false)
    const [Mdata, setMdata] = useState([])
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartState);
    const [Loading,setLoading] = useState(false)
    console.log(cart,'from home')

    
  
    useEffect(() =>{
        setLoading(true)
        axios.post('/product?limit=50&page=1&category=Processor')
        .then(res => {
            const arr = res.data.products
            setData(arr)
        })
        .catch(err =>{       
            console.log(err)
        })
        
    },[])

    function low () {
        setLoading(true)
        axios.post('/product?limit=50&page=1&category=Processor')
        .then(res => {
            const arr = res.data.products
            const val = arr.sort((a, b) => (a.finalPrice > b.finalPrice) ? 1 : -1)
            setData(val)
        })
        .catch(err =>{       
            console.log(err)
        })
        
    }

    function high () {
        setLoading(true)
        axios.post('/product?limit=50&page=1&category=Processor')
        .then(res => {
            const arr = res.data.products
            const val = arr.sort((a, b) => (a.finalPrice < b.finalPrice) ? 1 : -1)
            setData(val)
        })
        .catch(err =>{       
            console.log(err)
        })
        
    }

    return (

        <div className='Body'>
            <Modals Show={Show} Mdata={Mdata} setShow={setShow}/>
            <NavMenu setSearch={setSearch}  />
        <div className='Header' ><h1>Processors</h1></div>
        <div className='Container'>
            <div className='LeftNav'>
            <div className='Filter'>
            <DropdownButton id="dropdown-variants-secondary" variant="secondary" title="Filter">
                <Dropdown.ItemText>filter By cost</Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item as="button" onClick={()=>high()}>High to Low</Dropdown.Item>
                <Dropdown.Item as="button" onClick={()=>low()}>Low to High</Dropdown.Item>
            </DropdownButton>
            </div>
            </div>
            <div className='MainContent'>
            {Loading ? <div style={{position:'absolute', top:'50%',right:'50%' }}>
                <Spinner animation='border'/> </div> : <Product prop={Data} search={Search}  setShow={setShow} setMdata={setMdata} />} 
        
            </div>
            </div>

        </div>
    )
}


export default Processors;
           
            
