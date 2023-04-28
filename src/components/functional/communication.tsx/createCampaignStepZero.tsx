import React from 'react'

const CreateCampaignStepZero = () => {
  return (
    <React.Fragment>
      <div className="card-body p-0 mt-4">
        <div className="col-12 py-lg-4 px-lg-5 p-md-4 p-3 bg-white circel-custom-shadow rounded">
          <div className="card-header p-0 mb-4">
            <h3 className="text-dark">
              {/* {(props.campaignType === CONSTANT.APP_PUSH_CAMPAIGN && */}
              <a href="/" className="border-0">
                <img src="/images/back-icon.png" alt="back-icon" width="25" className="mr-3" />
              </a>
              {/* )} */}
              {/* {props.campaignType} */}
            </h3>
          </div>
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-2 col-12">
                      <label className="font-weight-bold h4 mt-2 pt-1 text-uppercase">
                        Communication
                      </label>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        // value={props.selectedCampTitle}
                        name="campaignName"
                        // onChange={onChangeData}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-2 col-12">
                      <label className="font-weight-bold h4 Text-uppercase">
                        Communication TYPE
                      </label>
                    </div>
                    <div className="col-lg-10 col-12 selection-radio-icons">
                      <label
                      // className={props.selectedCampHold === CONSTANT.CAMP_TYPE_SCHEDULE ? "text-dark font-weight-400 mr-3 active" : "text-dark font-weight-400 mr-3"}
                      >
                        <input
                          type="radio"
                          name="type"
                          // value={CONSTANT.CAMP_TYPE_SCHEDULE}
                          // checked={props.selectedCampHold === CONSTANT.CAMP_TYPE_SCHEDULE}
                          // onClick={onChangeData}
                        />
                        {/* <ScheduleIcon active={props.selectedCampHold === CONSTANT.CAMP_TYPE_SCHEDULE} /> */}
                        Schedule
                      </label>
                      {/* {(props.campaignPermissions.createRecurringCampaign) && ( */}
                      <label
                      // className={props.selectedCampHold === CONSTANT.CAMP_TYPE_RECURRING ? "text-dark font-weight-400 mr-3 active" : "text-dark font-weight-400 mr-3"}
                      >
                        <input
                          type="radio"
                          name="type"
                          // value={CONSTANT.CAMP_TYPE_RECURRING}
                          // checked={props.selectedCampHold === CONSTANT.CAMP_TYPE_RECURRING}
                          // onClick={onChangeData}
                        />
                        {/* <RecurringIcon active={props.selectedCampHold === CONSTANT.CAMP_TYPE_RECURRING} /> */}
                        Recurring
                      </label>
                      {/* )} */}

                      {/* {(props.campaignPermissions.createEventCampaign) && ( */}
                      <label
                      // className={props.selectedCampHold === CONSTANT.CAMP_TYPE_EVEMT_TRIGGER ? "text-dark font-weight-400 mr-3 active" : "text-dark font-weight-400 mr-3"}
                      >
                        <input
                          type="radio"
                          name="type"
                          // value={CONSTANT.CAMP_TYPE_EVEMT_TRIGGER}
                          // checked={props.selectedCampHold === CONSTANT.CAMP_TYPE_EVEMT_TRIGGER}
                          // onClick={onChangeData}
                        />
                        {/* <EventIcon active={props.selectedCampHold === CONSTANT.CAMP_TYPE_EVEMT_TRIGGER} /> */}
                        Event
                      </label>
                      {/* )} */}
                      {/* {(props.campaignPermissions.createTransactionalCampaign) && ( */}
                      <label
                      // className={props.selectedCampHold === CONSTANT.CAMP_TYPE_TRACTIONAL ? "text-dark font-weight-400 active" : "text-dark font-weight-400"}
                      >
                        <input
                          type="radio"
                          name="type"
                          // value={CONSTANT.CAMP_TYPE_TRACTIONAL}
                          // checked={props.selectedCampHold === CONSTANT.CAMP_TYPE_TRACTIONAL}
                          // onClick={onChangeData}
                        />
                        {/* <TransactionIcon active={props.selectedCampHold === CONSTANT.CAMP_TYPE_TRACTIONAL} /> */}
                        Transaction
                      </label>
                      {/* )} */}
                    </div>
                  </div>
                </div>
              </div>
              {/* {(props.campaignType === CONSTANT.APP_PUSH_CAMPAIGN && */}
              <>
                <div className="col-12">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-2 col-12">
                        <label className="font-weight-bold h4 mt-2 text-uppercase">
                          Target Application
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-12 web-analytics-icons-con">
                        <select
                          className="form-control"
                          name="targetApplication"
                          // value={props.selectedCampaignApplicationId}
                          // onChange={onChangeData}
                        >
                          <option value="">Select Application</option>
                          {/* {props.allMobileApps.map((d) => (
                                                        <option value={d.value}>{d.label}</option>
                                                    ))} */}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-2 col-12">
                        <label className="font-weight-bold h4 mt-2 text-uppercase">
                          Application Type
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-12 web-analytics-icons-con">
                        <select
                          className="form-control"
                          name="applicationType"
                          // onChange={onChangeData}
                        >
                          <option value="">Application Type</option>
                          <option
                          // selected={props.selectedCampNotificationType === CONSTANT.APP_STANDARD_PUSH_OUT_NOTIFICATION}
                          // value={CONSTANT.APP_STANDARD_PUSH_OUT_NOTIFICATION}
                          >
                            Standard Push Notification
                          </option>
                          <option
                          // selected={props.selectedCampNotificationType === CONSTANT.APP_PUSH_OUT_NOTIFICATION}
                          // value={CONSTANT.APP_PUSH_OUT_NOTIFICATION}
                          >
                            Custom Push Notification
                          </option>
                          <option
                          // checked={props.selectedCampNotificationType === CONSTANT.APP_PUSH_IN_NOTIFICATION}
                          // value={CONSTANT.APP_PUSH_IN_NOTIFICATION}
                          >
                            In App Notification
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              {/* )} */}
              <div className="col-12">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-2 col-12">
                      <label className="font-weight-bold h4">ENTER DESCRIPTION</label>
                    </div>
                    <div className="col-md-5 col-12">
                      <textarea
                        className="form-control"
                        name="campaignDescription"
                        // onChange={onChangeData}
                        // value={props.selectedCampDesc}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-right">
                {/* {props.canUseEditOrSaveApi && ( */}
                <button
                  type="submit"
                  className="btn btn-primary btn-custom-hover-intense color-intense mt-4"
                  name="createCampaign"
                  // onClick={onChangeData}
                >
                  Create Communication
                </button>
                {/* )} */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateCampaignStepZero
