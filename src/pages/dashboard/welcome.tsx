import React, { useEffect } from 'react';
import TopGradientBox from '../../components/functional/dashboard/topGradientBox';
import BarGraph from '../../components/graph/barGraph';
import LineGraph from '../../components/graph/lineGraph';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getEmailStats, getFileCount, getSMSStats } from '../../store/services/dashboard';

const Welcome = () => {
  const dispatch = useAppDispatch()
  const smsStats = useAppSelector((state)=> state.dashboard?.smsStats)
  const emailStats = useAppSelector((state)=> state.dashboard?.emailStats)
  const masterFileCount = useAppSelector((state)=> state.dashboard?.masterFileCount)
  const transactionalFileCount = useAppSelector((state)=> state.dashboard?.transactionalFileCount)

  useEffect(() => {
    dispatch(getFileCount({
      Data_Type: 'M',
      startDate: 1682015400000,
      endDate: 1682101799999,
    }))
    dispatch(getFileCount({
      Data_Type: 'T',
      startDate: 1682015400000,
      endDate: 1682101799999,
    }))
    dispatch(getSMSStats({
      startDateTime: '2023-04-20T07:39:24.931Z',
      endDateTime: '2023-04-27T07:39:24.931Z',
      getCount: true
    }))
    dispatch(getEmailStats({
      startDateTime: '2023-04-20T07:39:24.931Z',
      endDateTime: '2023-04-27T07:39:24.931Z'
    }))
  }, [])
  return (
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
                  <TopGradientBox
                    bgGradientClass="bg-gradient-success"
                    campaignName="SMS Text"
                    subHeadingOne="Communication Sent"
                    subHeadingTwo="Audience Count"
                    campaignCount="2345"
                    audienceCount="3243" />
                </div>
                <div className="d-flex col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <TopGradientBox
                    bgGradientClass="bg-gradient-warning"
                    campaignName="Email"
                    subHeadingOne="Communication Sent"
                    subHeadingTwo="Audience Count"
                    campaignCount="1234"
                    audienceCount="2342" />
                </div>
                <div className="d-flex col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <TopGradientBox
                    bgGradientClass="bg-gradient-info"
                    campaignName="SMS Text"
                    subHeadingOne="Unique Clicks"
                    subHeadingTwo="CTR"
                    campaignCount="234"
                    audienceCount="12" />
                </div>
                <div className="d-flex col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <TopGradientBox
                    bgGradientClass="bg-gradient-info"
                    campaignName="Email"
                    subHeadingOne="Unique Clicks"
                    subHeadingTwo="CTR"
                    campaignCount="134"
                    audienceCount="6" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-12 mb-4">
                  <div className="card border circel-custom-shadow h-100 mb-0">
                    <div className="card-header bg-transparent px-3 py-2">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <h6 className="text-uppercase ls-1 mb-1 text-gray-h6">Last 7 Days</h6>
                          <h3>Total Count of Files (Master)</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-1">
                      <LineGraph />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-4">
                  <div className="card border circel-custom-shadow h-100 mb-0">
                    <div className="card-header bg-transparent px-3 py-2">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <h6 className="text-uppercase ls-1 mb-1 text-gray-h6">Last 7 Days</h6>
                          <h3>Total Count of Files (Transactional)</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-1">
                      <LineGraph />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-12 mb-4">
                  <div className="card border circel-custom-shadow h-100 mb-0">
                    <div className="card-header bg-transparent px-3 py-2">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <h6 className="text-uppercase ls-1 mb-1 text-gray-h6">Last 7 Days</h6>
                          <h3>SMS Text Delivery Status</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-1">
                      <BarGraph />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-4">
                  <div className="card border circel-custom-shadow h-100 mb-0">
                    <div className="card-header bg-transparent px-3 py-2">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <h6 className="text-uppercase ls-1 mb-1 text-gray-h6">Last 7 Days</h6>
                          <h3>Email Delivery Status</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-1">
                      <BarGraph />
                    </div>
                  </div>
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