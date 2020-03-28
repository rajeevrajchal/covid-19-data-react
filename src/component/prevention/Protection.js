import React from 'react';
export default function Protection() {
    return (
        <div className="protection">
            <h3>Take steps to protect yourself</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card-img">
                        <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/protect-wash-hands.png" alt="" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <div className="card-title">
                            Clean your hands often
                        </div>
                        <ul>
                            <li>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</li>
                            <li>If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.</li>
                            <li>Avoid touching your eyes, nose, and mouth with unwashed hands.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="card-img">
                        <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/protect-quarantine.png" alt="" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <div className="card-title">
                            Avoid close contact
                        </div>
                        <ul>
                            <li>Avoid close contact with people who are sick</li>
                            <li>Put distance between yourself and other people if COVID-19 is spreading in your community. This is especially important for people who are at higher risk of getting very sick.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}