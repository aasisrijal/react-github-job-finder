import React, { useState } from "react";
import "./App.css";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import { Container } from "react-bootstrap";
import JobPagination from "./JobPagination";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  return (
    <Container className="my-4">
      <h1>Github Jobs</h1>
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading..</h1>}
      {error && <h1>Error occured..Try</h1>}

      {jobs.map((job) => {
        return <Job key={job.id} job={job}></Job>;
      })}
    </Container>
  );
}

export default App;
