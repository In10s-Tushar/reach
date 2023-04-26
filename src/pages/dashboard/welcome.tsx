import React from 'react';
import TopGradientBox from '../../components/functional/dashboard/topGradientBox';

const Welcome = () => {
    return(
        <React.Fragment>
            <div className="container mb-4 p-0">
				<div className="card mb-3 mb-md-4 bg-transparent shadow-none">
					<div className="card-body px-3">
						<div className="col-12 p-md-4 p-3 bg-white circel-custom-shadow rounded">
							<div className="card-header mb-3 p-0 rounded-0">
                                <h1 className="h3 text-dark">Dashboard</h1>
                            </div> 
                            <div className="row">
								<div className="d-flex col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <TopGradientBox />
								</div>
							</div>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </React.Fragment>
    )
}

export default Welcome;