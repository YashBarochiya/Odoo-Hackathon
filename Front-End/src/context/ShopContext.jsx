import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProider = (props) => {
    const currency = '₹';
    const delivery_fee = 30;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartitems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const [profile, setProfile] = useState([]);

    const navigate = useNavigate();

    const categoryPName = products.map(product => product.name );

    
    // const addToCart = async (itemId, size) => {
    //     if (!size) {
    //         toast.error("Select Product Size");
    //         return;
    //     }
    //     let cartData = structuredClone(cartitems);
    //     if (cartData[itemId]) {
    //         if (cartData[itemId][size]) {
    //             cartData[itemId][size]++;
    //         } else {
    //             cartData[itemId][size] = 1;
    //         }
    //     }
    //     else {
    //         cartData[itemId] = {};
    //         cartData[itemId][size] = 1;
    //     }
    //     setCartItems(cartData);

    //     if (token) {
    //         try {
    //             await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
    //             // toast.success("Product added to cart");
    //         } catch (error) {
    //             console.log(error);
    //             toast.error("Failed to add product to cart");

    //         }
    //     }
    // }




    // const getCartCount = () => {
    //     let count = 0;
    //     for (const items in cartitems) {
    //         for (const item in cartitems[items]) {
    //             try {
    //                 if (cartitems[items][item] > 0) {
    //                     count += cartitems[items][item];
    //                 }
    //             } catch (error) {

    //             }
    //         }
    //     }
    //     return count;
    // }

    // const updateQuantity = async (itemId, size, quantity) => {
    //     let cartData = structuredClone(cartitems);
    //     cartData[itemId][size] = quantity;
    //     setCartItems(cartData);

    //     if (token) {
    //         try {
    //             await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
    //             // toast.success("Product quantity updated");
    //         } catch (error) {
    //             console.log(error);
    //             toast.error("Failed to update product quantity");
    //         }
    //     }
    // }

    // const getCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const items in cartitems) {
    //         let itemInfo = products.find((product) => product._id === items);
    //         for (const item in cartitems[items]) {
    //             try {
    //                 if (cartitems[items][item] > 0) {
    //                     totalAmount += itemInfo.price * cartitems[items][item];
    //                 }
    //             } catch (error) {

    //             }
    //         }
    //     }
    //     return totalAmount;
    // }

    // Updated getCartAmount function
   

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartitems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (!itemInfo) continue;

            for (const size in cartitems[itemId]) {
                try {
                    if (cartitems[itemId][size] > 0) {
                        // Find the price for this specific size
                        const sizeObj = itemInfo.sizes.find(s => s.size === size);
                        if (sizeObj && sizeObj.price) {
                            totalAmount += sizeObj.price * cartitems[itemId][size];
                        }
                    }
                } catch (error) {
                    console.error("Error calculating cart amount:", error);
                }
            }
        }
        return totalAmount;
    };

    // // Updated addToCart function to include price
    // const addToCart = async (itemId, size, price) => {
    //     if (!size) {
    //         toast.error("Select Product Size");
    //         return;
    //     }

    //     let cartData = structuredClone(cartitems);
    //     if (cartData[itemId]) {
    //         if (cartData[itemId][size]) {
    //             cartData[itemId][size]++;
    //         } else {
    //             cartData[itemId][size] = 1;
    //         }
    //     }
    //     else {
    //         cartData[itemId] = {};
    //         cartData[itemId][size] = 1;
    //     }
    //     setCartItems(cartData);

    //     if (token) {
    //         try {
    //             await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
    //             toast.success("Product added to cart");
    //         } catch (error) {
    //             console.log(error);
    //             toast.error("Failed to add product to cart");
    //         }
    //     }
    // };

    // Updated addToCart function to include price
const addToCart = async (itemId, size, price) => {
    if (!size) {
        toast.error("Select Product Size");
        return;
    }

    let cartData = structuredClone(cartitems);
        
    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size]++;
        } else {
            cartData[itemId][size] = 1;
        }
    }
    else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
    
    // Store price in cartData
    if (!cartData.prices) {
        cartData.prices = {};
    }
    if (!cartData.prices[itemId]) {
        cartData.prices[itemId] = {};
    }
    cartData.prices[itemId][size] = price;
    
    setCartItems(cartData);
        
    if (token) {
        try {
            await axios.post(backendUrl + '/api/cart/add', { itemId, size, price }, { headers: { token } });
            toast.success("Product added to cart");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product to cart");
        }
    }
};

    // getCartCount remains the same
    const getCartCount = () => {
        let count = 0;
        for (const items in cartitems) {
            for (const item in cartitems[items]) {
                try {
                    if (cartitems[items][item] > 0) {
                        count += cartitems[items][item];
                    }
                } catch (error) {
                    console.error("Error counting cart items:", error);
                }
            }
        }
        return count;
    };

    // Updated updateQuantity function
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartitems);

        // If quantity is 0 or less, remove the item
        if (quantity <= 0) {
            delete cartData[itemId][size];
            // If no sizes left for this product, remove the product entry
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            cartData[itemId][size] = quantity;
        }

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
                // toast.success("Product quantity updated");
            } catch (error) {
                console.log(error);
                toast.error("Failed to update product quantity");
            }
        }
    };

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to load cart items");
        }
    }


    const getProductsData = async () => {
        try {
            const response = await axios.post(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
                // console.log("context_________________________________________",response);
            }
        } catch (error) {
            console.log(error);
            toast.error(response.data.message || "Failed to load products");
        }
    }

    useEffect(() => {
        getProductsData();
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
            getUserCart(token);
        }
    }, []); // Only run once on mount


    useEffect(() => {
        if (token && backendUrl) {
          fetchUserProfile();
        }
      }, [token, backendUrl]);
      
      const fetchUserProfile = async () => {
        try {
          
          const response = await axios.get(`${backendUrl}/api/user/profile`, { 
            headers: { 
              token: token 
            }
          });
          
          if (response.data.success) {
            setProfile(response.data.data);
          } else {
            toast.error(response.data.message || "Failed to load profile data");
          }
        } catch (err) {
          console.error("Failed to load user profile:", err);
          toast.error(err.message || "An error occurred while fetching profile");
        } 
      };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        showSearch,
        setShowSearch,
        setSearch,
        cartitems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token,
        setToken,
        setCartItems,
        categoryPName,
        profile,


    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProider;