import { X } from 'lucide-react'
import { closeAll, closeMenu } from '@/redux/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function MobileMenu() {
    const isMenuOpen = useSelector(state => state.ui.isMenuOpen)

    const dispatch = useDispatch()
    return (
        <div className={`fixed h-screen w-full z-40 bg-black/20
                transition-opacity duration-300      
                ${isMenuOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}
            onClick={() => dispatch(closeMenu())}
        >

            <div className={`absolute h-screen w-64 bg-white left-0
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >

                <X
                    onClick={() => dispatch(closeMenu())}
                    strokeWidth={2}
                    className="cursor-pointer mt-7 ml-5"
                />
                <div className="flex flex-col gap-2 p-5">
                    <Link to="/" onClick={() => dispatch(closeAll())}>Home</Link>
                    <Link to="/Checkout" onClick={() => dispatch(closeAll())}>Checkout</Link>
                </div>

            </div>

        </div >
    )
}

export default MobileMenu