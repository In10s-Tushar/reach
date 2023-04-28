import React from 'react'
import TopRightArrowIcon from '../../icons/topRightArrowIcon'

interface IBox {
  bgGradientClass: string
  campaignName: string
  subHeadingOne: string
  subHeadingTwo: string
  campaignCount: string | number
  audienceCount: string | number
}

const TopGradientBox = (props: IBox) => {
  const {
    bgGradientClass,
    campaignName,
    subHeadingOne,
    subHeadingTwo,
    campaignCount,
    audienceCount,
  } = props
  return (
    <React.Fragment>
      <div className={`flex-fill card mb-2 mb-xl-0 ${bgGradientClass}`}>
        <div className="card-body p-2">
          <a href="/welcome/sms-analytics">
            <div className="row">
              <div className="mt-0 col-8">
                <h5 className="card-title text-white mb-3">
                  {campaignName} <br />
                  <small className="text-white">Last 7 Days</small>
                </h5>
              </div>
              <div className="col-4 text-right">
                <div className="stat stat-sm">
                  <TopRightArrowIcon />
                </div>
              </div>
              <div className="col-6 pr-1 border-right">
                <small className="card-title text-muted text-white mb-0 color-box-text">
                  {subHeadingOne}
                </small>
                <h3 className="mb-0 text-white">{campaignCount}</h3>
              </div>
              <div className="col-6 pl-1">
                <small className="card-title text-white text-muted mb-0 color-box-text">
                  {subHeadingTwo}
                </small>
                <h3 className="mb-0 text-white">
                  {audienceCount}
                  {subHeadingTwo === 'CTR' ? '%' : ''}
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TopGradientBox
