import React from 'react';
export default function PatientList(props) {
    const { patients }   = props
    return (
        <ul class="list-group">
            {
                patients.map((p, index) => (
                    <li className="list-group-item" key={index}>
                        <h4 className="card-title">{p.country}</h4>   
                        <span className="card-text updateddate">
                            <div className="row">
                                Collected:   {p.day}
                            </div>
                        </span>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <h6 className="card-title">Cases</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    New:
                                                </div>
                                                <div className="col-md-4">
                                                    {p.cases['new']}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    Active:
                                                </div>
                                                <div className="col-md-4">
                                                    {p.cases['active']}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row death">
                                                <div className="col-md-8">
                                                    Critical:
                                                </div>
                                                <div className="col-md-4">
                                                    {p.cases['critical']}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    Recovered:
                                                </div>
                                                <div className="col-md-4">
                                                    {p.cases['recovered']}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row critical">
                                                <div className="col-md-8 ">
                                                    Total:
                                                </div>
                                                <div className="col-md-4 " >
                                                    {p.cases['total']}
                                                </div>
                                            </div>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <h6 className="card-title">Death</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    New:
                                                </div>
                                                <div className="col-md-4">
                                                    {p.deaths['new']}
                                                </div>
                                            </div>
                                        </li> 
                                        <li className="list-group-item">
                                            <div className="row death">
                                                <div className="col-md-8">
                                                    Total:
                                                </div>
                                                <div className="col-md-4 ">
                                                    {p.deaths['total']}
                                                </div>
                                            </div>
                                        </li>    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <br />
                        <span className="card-text updateddate">
                            DataSoucrce By <a href="https://rapidapi.com/collection/coronavirus-covid-19" > &nbsp;RapidApi&nbsp; </a> COVID-19
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}