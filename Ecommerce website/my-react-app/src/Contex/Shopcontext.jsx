import React , {createContext} from "react";
 import all_products from "../Components/Assests/all_products";

export const ShopContext = createContext(null)

const ShopContextProvider =((props) =>
{
    const contexValue = {all_products};

    return(
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

)

export default ShopContextProvider