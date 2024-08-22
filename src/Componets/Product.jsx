import { useDispatch, useSelector } from "react-redux"
import {add,remove} from "../redux/Slice/CartSlice"
import {toast} from "react-hot-toast";
import { useState } from "react";

const Product =({post})=>{

    const {cart}= useSelector((state)=>state)

    console.log('cart print ho ri hia')
    console.log (cart)

    const dispatch = useDispatch();

    const removeFromCart=()=>{

        dispatch(remove(post.id));
        toast.error(
            "Item removed from cart"
        )
        

    }

    const addToCart=()=>{

        dispatch(add(post));
        toast.success("item added to cart")


    }
    const [readmore,setReadmore] = useState(false)
    const description = readmore ? post.description :`${ post.description.substring(0,100)}....`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div  className="flex flex-col items-center justify-between 
        hover:scale-110  transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{description} 
                <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `Show Less`:`Read More` }
              </span>
              </p>
            </div>
            <div className="h-[180px]">
                <img  className="h-full w-full " src={post.image}/>
            </div>
            <div  className="flex justify-between gap-12 items-center w-full mt-5">

            <div>
                <p className="text-[#dc9d52] font-semibold" >${post.price}</p>
            </div>
            {//cart mai p hai agar us ki id post ki id se equal hai to 
                cart.some((p) => p.id === post.id) ? (<button
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700
                    hover:text-white transition duration-300 ease-in"
                onClick={removeFromCart}>  
                    Remove Item
                </button>):
                (<button
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase 
                      hover:bg-gray-700
                      hover:text-white transition duration-300 ease-in " 
                    onClick={addToCart}>Add to cart</button>)
            }

            </div>
           
            
        </div>
    )
}
export default Product 