import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "../Componets/CartItem"
import { useEffect, useState } from "react"


const Cart =()=>{
    const {cart} = useSelector((state)=>state)
    const [totalAmount,setTotalAmount]= useState(0)
//reduce funtion is used to calculate the value  of the cart 
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=> acc+ curr.price,0))
    },[cart])

    return (
        <div>

            {
                cart.length> 0 ?
                (<div className="max-w-[1200px] mx-auto flex md:flex-row flex-col justify-center">
                    <div  className="w-[100%] md:w-[60%] flex flex-col p-2">
                        {
                            cart.map((item,index)=>{
                                return<CartItem key={item.id} item={item} itemIndex={index}/>

                            })
                        }
                    </div>

                        <div  className="w-[100%] md:w-[40%] mt-5  flex flex-col md:flex-row ">
                            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] ">
                                <div  className="flex flex-col gap-5 " >
                                    <div className="font-semibold text-xl text-[#dc9d52] ">
                                        Your Cart
                                    </div>
                                    <div className="font-semibold text-5xl text-[#dc9d52]  -mt-5">Summary</div>
                                    <p  className="text-xl"><span className="text-gray-700 font-semibold text-xl">Total Item:{cart.length}</span></p>
                                </div> 
                                <div  className="flex flex-col">
                                <p className="text-xl font-bold"> <span  className="text-gray-700 font-semibold"> Total Amount:</span> ${totalAmount}</p>
                                <button className="bg-[#dc9d52]  hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-[#bf8948] font-bold  p-3 text-xl hover:text-[#dc9d52]"> CheckOut</button>
                            </div>
                            </div>
                           
                           

                        </div>

                </div>):
                (
                    <div  className="min-h-[80vh] flex flex-col items-center justify-center">
                        <h1 className="text-gray-700 font-semibold text-xl mb-2">CART IS EMPTY </h1>
                        <Link to={"/"}>
                        <button className="uppercase bg-[#dc9d52] hover:bg-purple-50 hover:text-[#dc9d52] rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-[#bf8948] font-semibold hover:[#dc9d52] p-3 px-10 tracking-wider">
                             SHOP NOW
                        </button>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}
export default Cart