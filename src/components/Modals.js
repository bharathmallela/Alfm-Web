import React,{useState,useEffect} from 'react'
import {Modal,Button,Card,Table,Carousel} from 'react-bootstrap'
import './Modals.css'
import {useDispatch,useSelector} from 'react-redux'

const Modals = (props) =>  {


    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartState)
  
    let view = props.Show
    const values = props.Mdata
 
   
    if(Object.keys(values).length === 0 ){
      return(
        <div></div>
      )
    }
    
    return (
      <div>
        <Modal
          show={view}
          onHide={() => props.setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
             <h2 className='header-top'>{values.productName}</h2> 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container'>
              <div className='product-carousel'>
                <Carousel>
                  {values.productImages.map(self=>{
                    console.log(self,'self')
                    return(
                      <Carousel.Item key={self._id}>
                        <img
                          className="d-block "
                          src={self.s3URL}
                          alt="First slide"
                          height='400px'
                        />
                      </Carousel.Item>
                    )}
                  )
                }
                </Carousel>
              </div>
              <div className='product-data'>
                <div className='Product-name'><h2>{values.productName}</h2></div>
                <div className='Product-price'>RS. {values.finalPrice}<span className='orignal-prices'>RS. {values.totalPrice}</span></div>
                <div className='product-inventory'>Save {values.discountPercentage}% <span className='product-stock'>No.of items in stock: {values.inventory}</span></div>
                <div className='product-button'><button className='product-cart' onClick={() => dispatch({type:'NEW_CART',payload:values})}>ADD TO CART</button></div>
                
              </div>

            </div>
            <div className='spec-header'>
              <h1>Specifications</h1>
            </div>

            <div className='specifications'>

              <Table striped bordered hover variant='dark'>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                    {values.specifications.map(dat=> {
                      
                      return(
                        <thead key={dat._id}>
                      <tr>
                        <th>{dat.key}</th>
                        <th>{dat.value}</th>
                      </tr>
                    </thead>
                    )})}
                </Table>
            </div>
  
          </Modal.Body>
        </Modal>
      </div>
    );
}

export default Modals



        

           
          
