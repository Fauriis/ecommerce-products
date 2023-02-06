import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'


export const CartControl = () =>{
    return <>
    <ul>
        <li className='flex justify-center items-center '>
            <Link href="/cart">
                <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
            </Link>
        </li>
    </ul>
    </>
}