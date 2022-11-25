import React from "react";

function ListJob(props) {
    const { jobs, handleRemoveJob } = props;
    return (
        <div className="container">
            <ul className="list-group">
                {
                    jobs.map((job) => (
                        <li key={job.id} className="list-group-item d-flex justify-content-between">{job.name}
                            <span role="button" className="text-danger fw-bolder"
                                onClick={() => handleRemoveJob(job)}
                            >&times;</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ListJob;