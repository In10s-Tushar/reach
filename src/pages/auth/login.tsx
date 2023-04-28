import React, { useState } from 'react'
import TextField from '../../components/molecules/textField'
import { emailRegex } from '../../lib/constant/constant'
import { useAppDispatch } from '../../store/hooks'
import { loginUser } from '../../store/services/main'
import { ILoginPayload } from '../../lib/interfaces/user'

const initialValue: ILoginPayload = {
  emailAddress: '',
  password: '',
}
const Login = () => {
  const dispatch = useAppDispatch()
  const [formValue, setFormValue] = useState(initialValue)
  const [notification, setNotification] = useState({
    message: '',
    field: '',
  })

  const handleSignin = (e: any) => {
    e.preventDefault()
    if (formValue.emailAddress === '' || !emailRegex.test(formValue.emailAddress)) {
      setNotification({ message: 'Please Provide Valid Email', field: 'email' })
    } else if (formValue.password === '') {
      setNotification({ message: 'Please Provide Valid Password', field: 'password' })
    } else if (formValue.emailAddress !== '' || emailRegex.test(formValue.emailAddress)) {
      setNotification({ message: '', field: '' })
    }
    dispatch(
      loginUser({
        data: { ...formValue },
        cb: (status: boolean) => {
          if (status) {
            window.location.replace('/')
          } else {
            // alert('Invalid credential')
          }
        },
      }),
    )
  }

  const onChangeValue = (name: string, val: string | number) => {
    setFormValue({ ...formValue, [name]: val })
  }

  return (
    <React.Fragment>
      <div className="bg-gradient-info">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              {/* <Link to=""> */}
              <img src="/images/reach-big-logo-white.png" alt="white-logo" className="img-fluid" />
              {/* </Link> */}
            </div>
            <div className="col-lg-5 col-md-7 col-12">
              <div className="card bg-white border-0 mb-0">
                <div className="card-header text-center bg-transparent border-0 pb-0">
                  <h1 className="mb-0">Login</h1>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <form onSubmit={handleSignin}>
                    {/* Email */}
                    <TextField
                      fieldType="email"
                      name="emailAddress"
                      value={formValue.emailAddress}
                      isError={false}
                      errorMessage={notification.message}
                      setValue={onChangeValue}
                      ariaLabel="email"
                      placeholder="Enter email address"
                    />

                    {/* Password */}
                    <TextField
                      fieldType="password"
                      name="password"
                      value={formValue.password}
                      isError={false}
                      errorMessage={notification.message}
                      setValue={onChangeValue}
                      ariaLabel="password"
                      placeholder="Enter password"
                    />

                    <div className="row">
                      <div className="col-6">
                        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                          <label className="form-check-label">
                            <input
                              className="form-check-input mr-1"
                              type="checkbox"
                              id="remember"
                              name="rememberMe"
                            />{' '}
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-6 text-right">
                        {/* <Link to="/password/forgot" class="text-intense"> */}
                        <small>Forgot password?</small>
                        {/* </Link> */}
                      </div>
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-primary mt-3 w-100 py-3" type="submit">
                        Sign in
                      </button>
                      {/* <BigButton 
                            buttonName="Sign In"
                            buttonClick={props.loginUserHandler} /> */}
                    </div>
                    <div className="row">
                      <div className="col-12 text-right">
                        {/* <Link to="/sso-login" class="text-intense"> */}
                        <small>SSO Login</small>
                        {/* </Link> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Login
