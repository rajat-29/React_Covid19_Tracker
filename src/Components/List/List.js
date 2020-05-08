import React from 'react';
import { Container } from 'react-bootstrap';

function List(props) {

    const allList = 
    props.states.length > 0
        ? props.states.map((state) => {      
            return (
                <div className="card m-2" key={state.loc} style={{width : "300px"}}>
                    <h5 className="card-header btn bg-primary text-white">
                        {state.loc}
                    </h5>

                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total
                                <span className="badge badge-primary badge-pill">
                                    {state.totalConfirmed}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Confirmed Cases
                                <span className="badge badge-primary badge-pill">
                                    {state.confirmedCasesIndian}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Recovered Cases
                                <span className="badge badge-primary badge-pill">
                                    {state.discharged}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Deaths
                                <span className="badge badge-primary badge-pill">
                                    {state.deaths}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        })
    :  "";
    
    return (
        <Container>
            <div className="row mt-2">{allList}</div>
        </Container>
    );
}

export default List;