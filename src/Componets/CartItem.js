import {MdOutlineDeleteOutline} from "react-icons/md"
import { useDispatch } from "react-redux"
import {remove} from "../redux/Slice/CartSlice"
import toast from "react-hot-toast"
import { useState } from "react"

const CartItem =({item,itemImdex})=>{

    const dispatch = useDispatch()
    function removeFromCart(){
        dispatch(remove(item.id));
        toast.success("item Removed")

    }
    const [readmore,setReadmore] = useState(false)
    const description = readmore ? item.description :`${ item.description.substring(0,100)}....`

    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 border-b-2">
            <div  className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
                <div  className="w-[30%]">
                    <img className="object-cover " src={item.image}/>
                </div>

                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                    <h1  className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                    <p className="text-base text-slate-700 font-medium">{description} <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `Show Less`:`Read More` }
              </span></p>
                    <div  className="flex items-center justify-between">
                        <p className="font-bold text-lg text-[#dc9d52]">${item.price}</p>
                        <div  className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                        onClick={removeFromCart}>
                            <MdOutlineDeleteOutline/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default CartItem