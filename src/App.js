import React, { useState } from "react";
import "./App.css";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import { Container, Spinner } from "react-bootstrap";
import JobPagination from "./JobPagination";
import SearchForm from "./SearchForm";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [params]: value };
    });
  }

  return (
    <Container className="my-4">
      <h1>Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <Spinner animation="grow" />}
      {error && <h1>Error occured..Try</h1>}

      {jobs.map((job) => {
        return <Job key={job.id} job={job}></Job>;
      })}
    </Container>
  );
}

export default App;
