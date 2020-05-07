import React from 'react';

function List() {

    const allList = 
    <div className="card m-2" style={{width : "300px"}}>
        <h5 className="card-header btn bg-danger text-white">
            Punjab
        </h5>

        <div className="card-body">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total
                    <span className="badge badge-danger badge-pill">
                        16785
                    </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Confirmed Cases
                    <span className="badge badge-danger badge-pill">
                        16785
                    </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Recovered Cases
                    <span className="badge badge-danger badge-pill">
                        16785
                    </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Deaths
                    <span className="badge badge-danger badge-pill">
                        16785
                    </span>
                </li>
                
            </ul>
        </div>
    </div>;


    return (
        <div className="container">
            <div className="row w-100 mt-2">{allList}</div>
        </div>
    )
}

export default List;