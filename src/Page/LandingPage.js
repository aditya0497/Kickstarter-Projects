import React, { useEffect, useState } from "react";
import ProjectTable from "../Component/ProjectTable";
import Pagination from "../Component/Pagination";

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const startingIndex = indexOfFirstProject + 1; // Starting serial number for the current page

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>Showing Data of Kickstarter</h1>
          <div className="table-container">
            <ProjectTable projects={currentProjects} startingIndex={startingIndex} />
          </div>
          <div className="fixed-footer">
            <Pagination
              projectsPerPage={projectsPerPage}
              totalProjects={projects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
