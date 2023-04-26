import React from 'react';

const TopGradientBox = () => {
    return(
        <React.Fragment>
            <div className="flex-fill card mb-2 mb-xl-0 bg-gradient-success">
                <div className="card-body p-2">
                    <a href="/welcome/sms-analytics">
                        <div className="row">
                            <div className="mt-0 col-8">
                                <h5 className="card-title text-white mb-3">SMS Text <br /><small className='text-white'>Last 7 Days</small></h5>
                            </div>
                            <div className="col-4 text-right">
                                <div className="stat stat-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="align-middle text-white">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-6 pr-1 border-right">
                                <small className="card-title text-muted text-white mb-0 color-box-text">Communication Sent</small>
                                <h3 className="mb-0 text-white">2313</h3>
                            </div>
                            <div className="col-6 pl-1">
                                <small className="card-title text-white text-muted mb-0 color-box-text">Audience Count</small>
                                <h3 className="mb-0 text-white">3213</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TopGradientBox;