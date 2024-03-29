import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://meithee.in/hihres/api/position/open")
    .then((res) => res.json())
    .then((resp) => {
      console.log(resp);
      setData(resp.data.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
  }, []);

  return (
    <div className="container py-4">
      <div className="row">
        {data.map((item) => (
          <div className="col-lg-3 mb-4" key={item.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Title : {item.job_title}</h5>
                <p className="card-text">Role Type : {item.role_type}</p>
                <p className="card-text">Location : {item.work_location}</p>
                <a href="#" className="btn btn-dark">Apply Here</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
