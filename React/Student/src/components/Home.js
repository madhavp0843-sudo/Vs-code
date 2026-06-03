import { Link, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const students = ["Alexa", "John", "Riya"];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student, index) => (
        <div key={index}>
          <Link to={`/student/${student}`}>
            {student}
          </Link>
        </div>
      ))}

      <button onClick={() => navigate("/student/Riya")}>
        Go to Riya
      </button>
    </div>
  );
}

export default Home;