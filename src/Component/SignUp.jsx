import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const SignUp = () => {
    return (
        <>
        <div className="row g-0">
            <div className="col-sm-10 col-lg-5 d-flex m-auto">
                <div className="row w-100 m-auto"> 
                    <div className="col-lg-10 my-5 m-auto">
                        <a href="#">
                        <img
                                src="/Image/logo/logo-icon.svg"
                                className="h-50px mb-4"
                                alt="logo"
                            />
                        </a>
                        <h2 className="mb-0">
                            Create your
                            <span className="position-relative">
                                account
                                {/* SVG START */}
                                <span className="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 mt-2 d-none d-sm-block">
                                    <svg
                                        width="150.1px"
                                        height="20.7px"
                                        viewBox="0 0 150.1 20.7"
                                        style={{ enableBackground: "new 0 0 150.1 20.7" }}
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            className="fill-primary"
                                            d="M10.7,12.2c-0.8,0.2-1.7,0.4-2.3,1.1C9.3,13,10.1,12.9,10.7,12.2 M63.6,1.9c3.3,0.3,6.7,0.1,10,0.2 c4.8,0.1,9.6,0.2,14.4,0.7c2.9,0.3,5.9,0.3,8.8,0.8c6.9,1,13.7,1.8,20.6,3.1c5.5,1.1,11,2.1,16.4,3.3c4.8,1.1,9.5,2.6,14.3,4 c0.7,0.2,1.3,0.5,1.7,1c-0.3,0.6-0.8-0.2-1.1,0.3c0.3,0.4,1.6,0.2,1.2,1c-0.3,0.6-1.2,1.1-2.2,1c-1.4-0.2-2.6-1-4-1.3 c-6.1-1.4-12.2-3-18.4-4c-3.8-0.6-7.6-1.4-11.5-1.7c-2.1-0.2-4.1-1-6.3-0.9c-0.5,0-1-0.3-1.6,0.2c-0.2,0.2-1,0.5-1.1-0.5 c0-0.2-0.4-0.1-0.6-0.2c-2.5-0.2-5-0.8-7.5-0.7c-2.4,0.1-4.8-0.3-7.2-0.3c-1.7,0-3.3-0.8-5.1-0.7c-0.7,0-1.5-0.1-2.2,0.2 c-0.3,0-0.5-0.1-0.8-0.1c-1.8-0.3-3.7-0.5-5.5-0.2c-1.9-0.4-3.9-0.4-5.8-0.1C68.1,7,66.1,6.8,64,7.4c-0.9,0.3-1.8,0.1-2.8,0.2 c-3.1,0.3-6.3,0.6-9.4,0.8c-0.6,0-1.2,0.3-1.8-0.2c-1.6-0.2-3.2,0-4.8,0.5c-1.6,0.5-3.2,0.4-4.8,0.5c-2.1,0.2-4.1,0.4-6,1.2 c-1.6,0.7-3.5,0.5-5.2,0.9c-3.8,0.9-7.7,1.6-11.2,3.2c-3.8,1.7-8,2.4-11.7,4.4c-0.9,0.5-1.7,1.3-2.8,1.6c-1.1,0.3-2.8-0.3-3.4-1.5 c-0.5-1-0.3-2.1,0.6-2.9c1.7-1.4,3.5-2.5,5.4-3.5c8.2-4.3,16.9-7,25.9-9c8.8-1.9,17.7-3,26.7-3.5C63.5-0.1,68.1,0,72.6,0 c4.7,0,9.4,0.1,14.1,0.5c4.2,0.4,8.3,0.9,12.5,1.4c4.9,0.6,9.7,1.3,14.5,2.1c11.6,2.1,23.1,4.4,34.2,8.4c0.7,0.3,1.7,0.1,2.2,1.1 c-0.9,0.4-1.7,0.1-2.4-0.1c-5.7-2-11.6-3.5-17.4-4.9c-8.7-2.1-17.5-3.3-26.3-4.7c-4.2-0.7-8.6-0.9-12.8-1.5 c-5.6-0.7-11.3-0.9-16.9-1.1c-3.4-0.1-6.8-0.1-10.1,0.3C63.9,1.6,63.7,1.7,63.6,1.9c-0.6-0.5-1.2-0.2-1.9-0.2 C56.9,1.9,52,2.3,47.1,2.8C44.1,3.1,41.1,3.7,38,4c-3.2,0.4-6.4,1.2-9.5,2.1c-0.9,0.2-2.1,0-2.7,1.1c-1.4-0.5-2.5,0.4-3.6,1 c1.2-0.2,2.5-0.4,3.6-1c0.3,0,0.7,0,1-0.1c9.1-2.3,18.4-3.7,27.7-4.4C57.6,2.4,60.6,2.2,63.6,1.9"
                                        />
                                    </svg>
                                </span>
                                {/* SVG END */}
                            </span>
                        </h2>
                        <p className="mb-0">Let's get started with your 30 days free trial</p>
                        {/* Social buttons */}
                        <div className="row mt-5">
                            {/* Social btn */}
                            <div className="col-xxl-6 d-grid">
                                <a href="#" className="btn border bg-light mb-2 mb-xxl-0">
                                    <i className="text-google-icon me-2"><FcGoogle /></i>
                                    Signup with Google
                                </a>
                            </div>
                            {/* Social btn */}
                            <div className="col-xxl-6 d-grid">
                                <a href="#" className="btn border bg-light mb-0">
                                    <i className="text-facebook me-2"><BsFacebook /></i>
                                    Signup with Facebook
                                </a>
                            </div>
                            {/* Divider with text */}
                            <div className="position-relative my-5">
                                <hr />
                                <p className="small position-absolute top-50 start-50 translate-middle bg-body px-4">
                                    Or
                                </p>
                            </div>
                        </div>
                        {/* Form START */}
                        <form>
                            {/* Email */}
                            <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            {/* Password */}
                            <div className="input-floating-label form-floating position-relative">
                                <input
                                    type="password"
                                    className="form-control fakepassword pe-6"
                                    id="psw-input"
                                    placeholder="Enter your password"
                                />
                                <label htmlFor="floatingInput">Password</label>
                                <span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                                    <i className="cursor-pointer p-0"></i>
                                </span>
                            </div>
                            {/* Pswmeter */}
                            <div id="pswmeter" className="mt-3 password-strength-meter">
                                <div className="password-strength-meter-score" />
                            </div>
                            <div className="d-flex mt-1 mb-4">
                                <div id="pswmeter-message" className="rounded">
                                    Write your password...
                                </div>
                                {/* Password message notification */}
                                <div className="ms-auto">
                                    <i
                                        className="bi bi-info-circle ps-1"
                                        data-bs-container="body"
                                        data-bs-toggle="popover"
                                        data-bs-placement="top"
                                        data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long."
                                        data-bs-original-title=""
                                        title=""
                                    />
                                </div>
                            </div>
                            {/* Confirm Password */}
                            <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm your password"
                                />
                                <label htmlFor="floatingInput">Confirm Password</label>
                            </div>
                            {/* Check box */}
                            <div className="mb-4">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="checkbox-1"
                                    />
                                    <label className="form-check-label" htmlFor="checkbox-1">
                                        I agree to all Terms &amp; conditions and the privacy policy.
                                    </label>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="align-items-center mt-0">
                                <div className="d-grid">
                                    <button className="btn btn-dark mb-0" type="button">
                                        Create an account
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Form END */}
                        {/* Sign IN link */}
                        <div className="mt-4 text-center">
                            <span>
                                Already have an account?<a href="/SignUp"> Sign in here</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default SignUp;