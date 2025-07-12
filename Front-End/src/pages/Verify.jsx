import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {
    const {navigate,token,setCartItems,backendUrl} = useContext(ShopContext);
    const [searchParmas, setSearchParams] = useSearchParams();

    const success = searchParmas.get('success');
    const orderId = searchParmas.get('orderId');
    
    const verifyPayment = async () =>{
        try {
            if (!token) {
                return null;
            } 
            const response =await axios.post(backendUrl + '/api/order/verifyStripe', { orderId, success }, { headers: { token } });
            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message ||"Failed to verify payment");
            
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[token]);
  return (
    <div>

    </div>
  )
}

export default Verify