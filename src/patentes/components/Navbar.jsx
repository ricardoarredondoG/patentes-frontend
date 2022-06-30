import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="https://api.chilepatentes.com/">APIS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://api.chilepatentes.com/">BASE DE DATOS</a>
                </li>
            </ul>
        </div>
        <div className="mx-auto order-0">
        <Link to="/" className="navbar-brand mx-auto">
        <span className="navbar-brand">
            <i className="fas fa-search"></i>
            &nbsp;
            CHILEPATENTES.COM
        </span>
       </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">DONACIONES</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>
  )
}
