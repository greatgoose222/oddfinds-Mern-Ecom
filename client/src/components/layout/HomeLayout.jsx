import NavBar from "../Nav/NavBar"
import MobileMenu from "../Nav/MobileMenu"
import CartDrawer from "../Nav/CartDrawer"
import { Outlet } from "react-router-dom"
import Footer from "../user/Footer"

function HomeLayout() {
    return (
        <>
            <MobileMenu />
            <CartDrawer />
            <NavBar />
            <Outlet />
            <Footer />
        </>

    )
}

export default HomeLayout