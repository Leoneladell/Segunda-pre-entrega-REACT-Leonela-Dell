import { ShoppingCart } from 'lucide-react';


function Cart(){
    return(
        <div className="flex items-center">
            <ShoppingCart />
            <span>0</span>
        </div>
    )
}

export default Cart