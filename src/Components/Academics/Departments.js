import React from "react";
import "./Departments.css";

const Departments = () => {
  const list = [
    { dep: "Architecture & Planning" },
    { dep: "Biosciences and Bioengineering" },
    { dep: "Chemical Engineering" },
    { dep: "Chemistry" },
    { dep: "Civil Engineering" },
    { dep: "Computer Science and Engineering" },
    { dep: "Design" },
    { dep: "Earthquake Engineering" },
    { dep: "Earth Sciences" },
    { dep: "Electrical Engineering" },
    { dep: "Electronics and communication engineering" },
    { dep: "Humanities and Social sciences" },
    { dep: "Hydrology" },
    { dep: "Hydro and Renewable energy" },
    { dep: "Management studies" },
    { dep: "Mathematics" },
    { dep: "Mechanics and Industrial Engineering" },
    { dep: "Metallurgical and Materials Engineering" },
    { dep: "Paper Technology" },
    { dep: "Physics" },
    { dep: "WaterResource Department and Management" },
  ];

  return (
    <>
      <h1>Departments</h1>
      <div className="containerD">
        {list.map((data, idx) => {
          return (
            <>
              <div className="cardD">
                <p>{data.dep}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Departments;
