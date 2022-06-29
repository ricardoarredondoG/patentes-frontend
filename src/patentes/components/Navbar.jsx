import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav me-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="https://api.chilepatentes.com/">APIS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="//codeply.com">BASE DE DATOS</a>
                </li>
            </ul>
        </div>
        <div class="mx-auto order-0">
        <Link to="/" className="navbar-brand mx-auto">
        <span className="navbar-brand">
            <i class="fas fa-search"></i>
            &nbsp;
            CHILEPATENTES.COM
        </span>
       </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">DONACIONES</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>
  )
}
