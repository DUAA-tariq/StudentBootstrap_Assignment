
function StudentCard(props) {
  return (
    <div className="card student-card shadow-sm h-100">

      <div className="student-avatar">
        <div className="avatar-head"></div>
        <div className="avatar-body"></div>
      </div>

      <div className="card-body">

        <h4 className="card-title">
          {props.name}
        </h4>

        <p className="card-text">
          ID: {props.id}
        </p>

        <p className="card-text">
          Major: {props.major}
        </p>

        <p className="card-text">
          Year: {props.year}
        </p>

        <p className="card-text">
          GPA: {props.gpa}
        </p>

        <div className="student-buttons">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => alert("Viewing profile of " + props.name)}
          >
            View Profile
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => alert("Delete selected for " + props.name)}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default StudentCard;


