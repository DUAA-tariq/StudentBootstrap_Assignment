
import './App.css';

import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main className="container main-content">

        <Breadcrumb />

        <div className="page-header d-flex justify-content-between align-items-center">

          <h2>Page Header</h2>

          <button
            className="btn btn-primary"
            onClick={() => alert("Add New Student")}
          >
            Add New Student
          </button>

        </div>

        {/* Student Cards */}

        <div className="row justify-content-center g-3 student-list">

          <div className="col-12 col-sm-6 col-lg-3">
            <StudentCard
              name="Jane Doe"
              id="101"
              major="Computer Science"
              year="2"
              gpa="3.8"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <StudentCard
              name="Mary Doe"
              id="102"
              major="Computer Science"
              year="2"
              gpa="3.8"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <StudentCard
              name="Gant Doe"
              id="103"
              major="Computer Science"
              year="2"
              gpa="3.8"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <StudentCard
              name="Amm Doe"
              id="104"
              major="Computer Science"
              year="2"
              gpa="3.8"
            />
          </div>

        </div>

        {/* Pagination */}

        <nav aria-label="Student pages">
          <ul className="pagination justify-content-center">

            <li className="page-item disabled">
              <a className="page-link" href="#">Previous</a>
            </li>

            <li className="page-item active">
              <a className="page-link" href="#">1</a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>

          </ul>
        </nav>

        {/* Success Alert */}

        <div className="alert alert-info alert-dismissible fade show student-alert" role="alert">

          Student records have been successfully updated.

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default App;


