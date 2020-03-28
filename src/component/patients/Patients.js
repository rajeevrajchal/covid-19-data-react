import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientList from './PatientList'
import Search from '../search/Search';
import Spinner from '../spinner/Spinner'

export default function Patients() {
    // ee8b6485e3msh8b3b98ecbb2210ep1d258ejsnef068875921d
    let headers = {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "X-RapidAPI-Key": "5e28dcd66bmshee1ad2ff0157e16p18f2eajsna24eff3a5984"
    }
    const url = `https://covid-193.p.rapidapi.com/statistics`

    const [isSearch, setSearch] = useState(false);
    const [patients, setPatient] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        getPatient();
    }, []);

    const getPatient = async () => {
        let res = await axios({
            "method": "GET",
            "url": url,
            "headers": headers
        })

        setPatient(res.data.response);
        setLoading(false)
    }

    const clearSearchData = (e) => {
        setLoading(true)
        e.persist()
        getPatient();
        setSearch(false)
    }
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <Search setPatient={setPatient} setSearch={setSearch} setLoading={setLoading} />
                {
                    patients.length ?
                        <div className="container">
                            {

                                isSearch ?
                                    <div className="search-section">
                                        <button className="btn btn-outline-danger my-2 my-sm-0"
                                            type="submit"
                                            onClick={clearSearchData} >
                                            Clear Search
                        </button>

                                        <div className="heading">
                                            <br />
                                            <h5>History Of The Selected Country is:</h5>
                                        </div>
                                    </div>

                                    : ''
                            }

                            <PatientList patients={patients} />
                        
                        </div> : <p className="countynotfound" >Country Not Found</p>
                }
            </div>
        )
    }
}