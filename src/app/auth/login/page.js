import Link from "next/link";
import React from 'react';

const page = () => {
    return (
      <div className="app-wrapper d-block">
      <div className="">
        <main className="w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-xl-8 d-none d-lg-block p-0">
                <div className="image-contentbox">
                  <img src="/images/login/01.png" className="img-fluid" alt="Log in" />
                </div>
              </div>
              <div className="col-lg-5 col-xl-4 p-0 bg-white">
                <div className="form-container">
                  <form className="app-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-5 text-center text-lg-start">
                          <h2 className="text-primary f-w-600">Welcome To ra-admin! </h2>
                          <p>Sign in with your data that you enterd during your registration</p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="username" className="form-label">Username</label>
                          <input type="text" className="form-control" placeholder="Enter Your Username" id="username" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="password" className="form-label">Password</label>
                          <a href="./pwd_reset.html" className="link-primary float-end">Forgot Password ?</a>
                          <input type="password" className="form-control" placeholder="Enter Your Password" id="password" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                          <label className="form-check-label text-secondary" for="checkDefault">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <Link href="/auth/login" role="button" className="btn btn-primary w-100">Sign In</Link>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-center text-lg-start">
                          Don't Have Your Account yet? <Link href="/auth/register"
                            className="link-primary text-decoration-underline"> Sign up</Link>
                        </div>
                      </div>
                      <div className="app-divider-v justify-content-center">
                        <p>Or sign in with</p>
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <button type="button" className="btn btn-facebook icon-btn b-r-22 m-1"><i
                              className="ti ti-brand-facebook text-white"></i></button>
                          <button type="button" className="btn btn-gmail icon-btn b-r-22 m-1"><i
                              className="ti ti-brand-google text-white"></i></button>
                          <button type="button" className="btn btn-github icon-btn b-r-22 m-1"><i
                              className="ti ti-brand-github text-white"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    )
}

export default page;