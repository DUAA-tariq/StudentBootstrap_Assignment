
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">

        <a className="navbar-brand" href="#">
          StudentPortal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav me-auto ms-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Students</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Reports</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Settings
              </button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">Profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
