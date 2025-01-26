import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5);
  const FETCH_URL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(FETCH_URL);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
    <h1>Highly-Rated Kickstarter Projects</h1>
    <table aria-labelledby="projects-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {currentProjects.map((project) => (
          <tr key={project['s.no']}>
            <td>{project['s.no']}</td>
            <td>{project['percentage.funded']}</td>
            <td>{project['amt.pledged']}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  </div>
  );
};

export default App;
