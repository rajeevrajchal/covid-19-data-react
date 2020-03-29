import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Toast from '../toast/Toast'


export default function Search(porps) {
    const { setPatient, setSearch, setLoading} = porps

    const headers = {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        // "x-rapidapi-key": "5e28dcd66bmshee1ad2ff0157e16p18f2eajsna24eff3a5984"
        "X-RapidAPI-Key":"5e28dcd66bmshee1ad2ff0157e16p18f2eajsna24eff3a5984"
    }
    const url = `https://covid-193.p.rapidapi.com/history`

    const [searchpatientParam, setSearchPatientParam] = useState('');
    const [display, setDisplay] = useState(false);

    const getPatient = async () => {
        let res = await axios({
            "method": "GET",
            "url": url,
            "headers": headers
            , "params": {
                "country": searchpatientParam
            }
        })
        setSearch(true)
        setLoading(false);
        setPatient(res.data.response)
    }

    const openToast = () => {
        setDisplay(true);
        setTimeout(() => {
            setDisplay(false);
        }, 2000);
    } 

    const getSearch = (e) => {
        setSearchPatientParam(e.target.value)
    }


    const getSearchData = (e) => {
        e.preventDefault()
        if (searchpatientParam === '') {
            openToast();
        } else {
            setLoading(true);
            getPatient();
        }
    }

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/prevention" className="link" >Prevention Measures</Link>
                <span className="navbar-brand" href="#">Corona Virus Update</span>
                <div className="search-section">
                    <form className="form-inline my-2 my-lg-0" onSubmit={getSearchData} >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search By Country " onChange={getSearch} aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={getSearchData} >Search</button>
                    </form>
                </div>
            </nav>
            <Toast msg="Search field is empty !!" type="error" display={display} />
        </div>

    )
}