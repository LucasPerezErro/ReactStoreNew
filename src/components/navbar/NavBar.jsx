import "./navbar.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function NavBar() {
    const { getTotalItems } = useContext(cartContext);

    function mostrarValorItems() {
        console.log(getTotalItems())
        if (getTotalItems == 0) {
            getTotalItems();
        }
        return "";
    }

    return (
        <>
            <nav class="navbar bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home">Rick n Mory Store</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/merchandice">Merchandise</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/category/mortys">Mortys</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/category/ricks">Ricks</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">Coming Soon</Link>
                                </li>

                            </ul>
                            <form class="d-flex mt-3" role="search">
                                <span>
                                    🛒{getTotalItems()}
                                </span>

                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar;