import React, { useState } from "react";
import ListJob from "./ListJob";

const jobs_db = "jobs_db";
function TodoList() {
    const [jobs, setJobs] = useState(() => {
        let data;
        if(localStorage.getItem(jobs_db) == null){
            data = [
                {
                    id: 1,
                    name: "Java Spring Boot"
                },
                {
                    id: 2,
                    name: "React JS"
                }
            ]
            localStorage.setItem(jobs_db, JSON.stringify(data));
        }
        else{
            data = JSON.parse(localStorage.getItem(jobs_db));
        }

        return data;
    })
    const [jobname, setJobname] = useState("");

    const handleAddJob = (e) => {
        e.preventDefault();
        let maxId = findMaxId();
        let data = [
            ...jobs,
            {
                id: maxId + 1,
                name: jobname
            }
        ]
        localStorage.setItem(jobs_db, JSON.stringify(data));
        setJobs(data)
        setJobname("");
    }

    const handleRemoveJob = (job) => {
        let confirmed = window.confirm(`Are you sure to remove job: ${job.name}?`);
        if (confirmed) {
            let newJobs = jobs.filter((item) => item !== job);
            localStorage.setItem(jobs_db, JSON.stringify(newJobs));
            setJobs(newJobs);
        }
    }

    const findMaxId = () => {
        let newJobs = [...jobs];
        newJobs.sort(function(job1, job2){
            return job2.id - job1.id;
        })
        return newJobs.length ? newJobs[0].id : 0;
    }
    return (
        <div className="container">
            <div className="create-job">
                <h1>List jobs</h1>
                <form onSubmit={handleAddJob}>
                    <div className="d-flex align-items-center">
                        <input type="text" className="form-control"
                            value={jobname}
                            onInput={(e) => setJobname(e.target.value)}
                        />
                        <button type="submit" className="btn btn-secondary btn-sm">
                            <i className="fa fa-plus"> Create</i>

                        </button>
                    </div>
                </form>
            </div>
            <div className="list-jobs">
                <ListJob jobs={jobs} handleRemoveJob={handleRemoveJob} />
            </div>
        </div>
    )
}

export default TodoList;