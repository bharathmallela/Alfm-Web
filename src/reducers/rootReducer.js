import React,{useEffect} from 'react'
import {loadState} from '../localStorage';
  

// const initialState={cartState: [],persistedState}
// export const store=createStore(persistedState);





const initialState = {
    cartState: []
}


// const persistedState = loadState();


const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'NEW_CART':
            //initialize quantity to 1 for new products added in cart
            const prod = action.payload
            // prod['Qty'] = 1  
            //check if product already inn cart
            const inCart = (state.cartState.find((item) =>item._id === prod._id ) ? true : false);
            //get the item from cartState
            var data = state.cartState.find((item) =>item._id === prod._id ) ;
            // const Quantity = items.Qty 
            return {
                ...state,
                cartState: inCart ? state.cartState.map((add) =>add._id === prod._id ? { ...add, Qty: add.Qty + 1 } : {...add , Qty: add.Qty })
                : [...state.cartState,{...prod, Qty: 1 }]
                // state.cartState.concat(prod)
            }
        case 'DEL_CART':
            const drop = action.payload
            const outCart = (state.cartState.find((item) =>item._id === drop._id ) ? true : false);
            // //get the item from cartState
            var delData = state.cartState.find((item) =>item._id === drop._id ) ;
            // console.log(delData,'item repeated')
            // console.log(outCart,'item true')
            return {
                ...state,
                cartState:outCart ? state.cartState.map((del) =>del._id === drop._id ? { ...del, Qty: del.Qty - 1 }: { ...del, Qty:del.Qty}) 
                : state.cartState.concat(drop)
            }

        default: return state;
        
        case 'LOAD_CART':

            return {
                ...state,
                cartState: state.cartState.filter((load) => load.Qty > 0 )
            }

            

    }
}
export default rootReducer;


//hardcoded value for checking functon before inititalizing the cart
// {
//     "_id": "5fcdf9d725cc2591cead791c",
//     "inventory": 0,
//     "discountPercentage": 0,
//     "productName": "Ant Esports GM100 RGB (Red)",
//     "totalPrice": 900,
//     "productImages": [
//         {
//             "_id": "5fcdf9d725cc2591cead7921",
//             "originalName": "Frame 1 (38).png",
//             "s3URL": "https://challenger-computers.s3.ap-south-1.amazonaws.com/5fcdf9d725cc2591cead791c/Frame%201%20%2838%29.png"
//         }
//     ],
//     "specifications": [
//         {
//             "_id": "60994161570ce63949825713",
//             "key": "Hand Orientation",
//             "value": ""
//         },
//         {
//             "_id": "60994161570ce63949825714",
//             "key": "Tracking",
//             "value": ""
//         },
//         {
//             "_id": "60994161570ce63949825715",
//             "key": "Maximum DPI",
//             "value": ""
//         },
//         {
//             "_id": "60994161570ce63949825716",
//             "key": "Number of Buttons",
//             "value": ""
//         },
//         {
//             "_id": "60994161570ce63949825717",
//             "key": "Scroll Wheel Type",
//             "value": ""
//         },
//         {
//             "_id": "60994161570ce63949825718",
//             "key": "Connectivity",
//             "value": ""
//         }
//     ],
//     "finalPrice": 900,
//     "noSkip": [],
//     "Qty": 2
// },
// {
//     "_id": "60081171b782cd5c948469c9",
//     "inventory": 0,
//     "discountPercentage": 26,
//     "productName": "Ant Esports GM300 RGB (Black)",
//     "totalPrice": 1200,
//     "productImages": [
//         {
//             "_id": "60081171b782cd5c948469d0",
//             "originalName": "Frame 4 - 2021-01-20T164702.972.png",
//             "s3URL": "https://challenger-computers.s3.ap-south-1.amazonaws.com/60081171b782cd5c948469c9/Frame%204%20-%202021-01-20T164702.972.png"
//         }
//     ],
//     "specifications": [
//         {
//             "_id": "6099412c570ce6394982570d",
//             "key": "Hand Orientation",
//             "value": "Right Handed"
//         },
//         {
//             "_id": "6099412c570ce6394982570e",
//             "key": "Tracking",
//             "value": "Optical"
//         },
//         {
//             "_id": "6099412c570ce6394982570f",
//             "key": "Maximum DPI",
//             "value": "4800 DPI"
//         },
//         {
//             "_id": "6099412c570ce63949825710",
//             "key": "Number of Buttons",
//             "value": "Seven"
//         },
//         {
//             "_id": "6099412c570ce63949825711",
//             "key": "Scroll Wheel Type",
//             "value": "Regular"
//         },
//         {
//             "_id": "6099412c570ce63949825712",
//             "key": "Connectivity",
//             "value": "USB"
//         }
//     ],
//     "finalPrice": 950,
//     "noSkip": [],
//     "Qty": 1
// },
// {
//     "_id": "600811fcb782cd5c948469d1",
//     "inventory": 0,
//     "discountPercentage": 14,
//     "productName": "Ant Esports GM500 RGB",
//     "totalPrice": 1500,
//     "productImages": [
//         {
//             "_id": "600811fcb782cd5c948469d8",
//             "originalName": "Frame 4 - 2021-01-20T164922.964.png",
//             "s3URL": "https://challenger-computers.s3.ap-south-1.amazonaws.com/600811fcb782cd5c948469d1/Frame%204%20-%202021-01-20T164922.964.png"
//         }
//     ],
//     "specifications": [
//         {
//             "_id": "609bcf8a570ce63949825ab6",
//             "key": "Hand Orientation",
//             "value": "Ambidextrous"
//         },
//         {
//             "_id": "609bcf8a570ce63949825ab7",
//             "key": "Tracking",
//             "value": "Laser"
//         },
//         {
//             "_id": "609bcf8a570ce63949825ab8",
//             "key": "Maximum DPI",
//             "value": "4000 DPI"
//         },
//         {
//             "_id": "609bcf8a570ce63949825ab9",
//             "key": "Number of Buttons",
//             "value": "Seven"
//         },
//         {
//             "_id": "609bcf8a570ce63949825aba",
//             "key": "Scroll Wheel Type",
//             "value": "Regular"
//         },
//         {
//             "_id": "609bcf8a570ce63949825abb",
//             "key": "Connectivity",
//             "value": "USB"
//         }
//     ],
//     "finalPrice": 1320,
//     "noSkip": [],
//     "Qty": 1
// }