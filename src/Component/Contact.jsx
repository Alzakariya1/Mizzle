import { CiLocationOn } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
const Contact = () => {
    return (
        <>
            {/* content start*/}
            <section className="pt-xl-8">
                <div className="container">
                    <div className="row g-4 g-xxl-5">
                        <div className="col-xl-9 mx-auto">
                            {/* Image */}
                            <img
                                src="/Image/contact/02.jpg"
                                className="rounded"
                                alt="contact-bg"
                            />
                            {/* Contact form START */}
                            <div className="row mt-n5 mt-sm-n7 mt-md-n8">
                                <div className="col-11 col-lg-9 mx-auto">
                                    <div className="card shadow p-4 p-sm-5 p-md-6">
                                        {/* Card header */}
                                        <div className="card-header border-bottom px-0 pt-0 pb-5">
                                            {/* Breadcrumb */}
                                            <nav className="mb-3" aria-label="breadcrumb">
                                                <ol className="breadcrumb breadcrumb-dots pt-0">
                                                    <li className="breadcrumb-item">
                                                        <a href="#">Home</a>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">
                                                        Contact us
                                                    </li>
                                                </ol>
                                            </nav>
                                            {/* Title */}
                                            <h1 className="mb-3 h3">Let's level up your brand, together</h1>
                                            <p className="mb-0">
                                                You can reach us anytime via <a href="#">example@gmail.com</a>
                                            </p>
                                        </div>
                                        {/* Card body & form */}
                                        <form className="card-body px-0 pb-0 pt-5">
                                            {/* Name */}
                                            <div className="input-floating-label form-floating mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent"
                                                    id="floatingName"
                                                    placeholder="Password"
                                                />
                                                <label htmlFor="floatingName">Your name</label>
                                            </div>
                                            {/* Email */}
                                            <div className="input-floating-label form-floating mb-4">
                                                <input
                                                    type="email"
                                                    className="form-control bg-transparent"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                />
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                            {/* Number */}
                                            <div className="input-floating-label form-floating mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent"
                                                    id="floatingNumber"
                                                    placeholder="Password"
                                                />
                                                <label htmlFor="floatingNumber">Phone number</label>
                                            </div>
                                            {/* Message */}
                                            <div className="input-floating-label form-floating mb-4">
                                                <textarea
                                                    className="form-control bg-transparent"
                                                    placeholder="Leave a comment here"
                                                    id="floatingTextarea2"
                                                    style={{ height: 100 }}
                                                    defaultValue={""}
                                                />
                                                <label htmlFor="floatingTextarea2">Message</label>
                                            </div>
                                            {/* Button */}
                                            <button className="btn btn-lg btn-primary mb-0">
                                                Send a message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Contact form END */}
                        </div>
                    </div>{" "}
                    {/* Row END */}
                </div>
            </section>
            {/*content end  */}

            {/* Contact info & Map start*/}

            <section className="py-0">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {/* Address info */}
                        <div className="col">
                            <div className="card card-body bg-light border p-sm-5">
                                {/* Icon */}
                                <div className="mb-4">
                                    <i className="text-primary"><CiLocationOn /></i>
                                </div>
                                {/* Title */}
                                <h6 className="mb-4">Office Address</h6>
                                {/* Office item */}
                                <div className="d-flex align-items-center mb-2">
                                    {/* Avatar */}
                                    <div className="avatar avatar-xxs me-2">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src="/Image/flag/us.svg"
                                            alt="avatar"
                                        />
                                    </div>
                                    <span className="heading-color fw-semibold mb-0">US office:</span>
                                </div>
                                <address className="mb-0">
                                    1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.
                                </address>
                            </div>
                        </div>
                        {/* Email info */}
                        <div className="col">
                            <div className="card card-body bg-light border p-sm-5">
                                {/* Icon */}
                                <div className="mb-4">
                                    <i className="text-primary"><IoMdMail /></i>
                                </div>
                                {/* Title */}
                                <h6 className="mb-3">Email us</h6>
                                <p>
                                    We're on top of things and aim to respond to all inquiries within 24
                                    hours.
                                </p>
                                <a
                                    href="#"
                                    className="heading-color text-primary-hover text-decoration-underline mb-0"
                                >
                                    example@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* Contact info */}
                        <div className="col">
                            <div className="card card-body bg-light border p-sm-5">
                                {/* Icon */}
                                <div className="mb-4">
                                    <i className="text-primary"><IoCall /></i>
                                </div>
                                {/* Title */}
                                <h6 className="mb-3">Call us</h6>
                                <p>Let's work together towards a common goal - get in touch!</p>
                                <a
                                    href="#"
                                    className="heading-color text-primary-hover text-decoration-underline mb-0"
                                >
                                    (251) 854-6308
                                </a>
                            </div>
                        </div>
                    </div>{" "}
                    {/* Row END */}
                </div>
                {/* Map */}
                <iframe
                    className="w-100 h-200px h-lg-400px grayscale d-block mt-8"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                    style={{ marginBottom: "-5px" }}
                    aria-hidden="false"
                    tabIndex={0}
                />
            </section>
{/* contact info & Map end */}
        </>
    );
}
export default Contact;