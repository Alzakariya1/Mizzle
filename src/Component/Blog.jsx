import { CiShare2 } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const Blog = () => {
    return (
        <>
            <section className="pt-8 pt-xl-9">
                <div className="container">
                    <div className="row g-4 g-lg-6">
                        {/* Title and author */}
                        <div className="col-lg-8 mx-auto text-center">
                            <a href="#" className="badge text-bg-dark mb-4">
                                Lifestyle
                            </a>
                            <h1 className="h2 mb-0">
                                The Power of Gratitude: Cultivating Joy and Abundance
                            </h1>
                            {/* Author and actions */}
                            <div className="d-sm-flex justify-content-center justify-content-sm-between align-items-center text-start mt-5">
                                {/* Avatar */}
                                <div className="d-flex justify-content-center align-items-center mb-5 mb-sm-0">
                                    <div className="avatar flex-shrink-0">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src="/Image/avatar/05.jpg"
                                            alt="avatar"
                                        />
                                    </div>
                                    {/* Info */}
                                    <div className="ms-2">
                                        <h6 className="mb-0">
                                            <a href="#">Carolyn Ortiz</a>
                                        </h6>
                                        <small>1 day ago</small>
                                    </div>
                                </div>
                                {/* Action */}
                                <div className="d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="dropdown">
                                        <a
                                            href="#"
                                            className="text-secondary text-primary-hover"
                                            id="cardFeedAction"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-share me-2"><CiShare2 /></i>
                                            14
                                        </a>
                                        {/* Card feed action dropdown menu */}
                                        <ul
                                            className="dropdown-menu min-w-auto"
                                            aria-labelledby="cardFeedAction"
                                        >
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    {" "}
                                                    <i className="bi bi-facebook fa-fw me-2"><FaFacebook /></i>
                                                    Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    {" "}
                                                    <i className="bi bi-instagram fa-fw me-2"><IoLogoInstagram /></i>
                                                    Instagram
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    {" "}
                                                    <i className="bi bi-whatsapp fa-fw me-2"><IoLogoWhatsapp /></i>
                                                    Whatsapp
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    {" "}
                                                    <i className="fa-regular fa-paste fa-fw me-2"><IoCopyOutline /></i>
                                                    Copy link
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className="text-secondary opacity-3 mx-3">|</span>
                                    <a href="#" className="text-secondary text-primary-hover mb-0">
                                        <i className="bi bi-chat me-2"><FaRegCommentDots /></i>5
                                    </a>
                                    <span className="text-secondary opacity-3 mx-3">|</span>
                                    <span className="text-secondary">2 min read</span>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="col-lg-10 mx-auto text-center">
                            <img
                                src="/Image/blog/04.jpg"
                                className="img-fluid rounded"
                                alt="blog-img"
                            />
                        </div>
                        {/* Content */}
                        <div className="col-lg-8 mx-auto">
                            <p>
                                <span className="dropcap heading-color bg-light rounded px-2">T</span>
                                he simple act of cultivating gratitude has the remarkable ability to
                                bring joy and abundance into our lives, shifting our perspective from
                                lack to abundance. In this article, we will explore the power of
                                gratitude and how it can enhance our overall well-being and create a
                                positive ripple effect in our lives and the lives of those around us.{" "}
                                <strong>In a world filled with chaos</strong> and uncertainty, it's
                                easy to lose sight of the things that truly matter.
                            </p>
                            <p>
                                Additionally, expressing gratitude to others through acts of kindness
                                or <u> heartfelt appreciation strengthens our relationships and</u>{" "}
                                fosters a sense of interconnectedness.
                            </p>
                            <p>
                                Incorporating gratitude into our daily routine can be as simple as
                                keeping a gratitude journal, where we write down three things we are
                                grateful for each day.{" "}
                                <strong>This practice helps us become more attuned</strong> to the
                                positive aspects of our lives, no matter how small they may seem.{" "}
                            </p>
                            <p className="mb-0">
                                By reframing obstacles as opportunities for growth and learning,{" "}
                                <mark>we can navigate through difficulties with</mark> a sense of
                                gratitude for the lessons they bring. This mindset shift empowers us
                                to find joy and meaning in every circumstance, leading to a more
                                fulfilling and purposeful life.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="col-lg-10 mx-auto">
                            <div className="row g-4 g-lg-6">
                                <div className="col-sm-6">
                                    <a
                                        href=""
                                        data-glightbox=""
                                        data-gallery="image-popup"
                                    >
                                        <img
                                            src="/Image/blog/05.jpg"
                                            className="rounded"
                                            alt="blog-img"
                                        />
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <a
                                        href=""
                                        data-glightbox=""
                                        data-gallery="image-popup"
                                    >
                                        <img
                                            src="/Image/blog/06.jpg"
                                            className="rounded"
                                            alt="blog-img"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* List content */}
                        <div className="col-lg-8 mx-auto">
                            <h6>Step 1: Shifting Perspective: From Lack to Abundance</h6>
                            <p className="mb-5">
                                Gratitude has the unique ability to shift our perspective from
                                focusing on what we lack to appreciating what we have. Often, we get
                                caught up in the pursuit of material possessions or achievements,
                                believing that they will bring us happiness. However, true abundance
                                is found in appreciating the present moment and recognizing the
                                blessings that already exist in our lives. Cultivating gratitude
                                allows us to break free from the cycle of perpetual longing and
                                embrace the abundance that surrounds us.
                            </p>
                            <h6>Step 2: The Ripple Effect of Gratitude</h6>
                            {/* List */}
                            <ul className="ps-4 mb-0">
                                <li className="mb-2">
                                    Shift in Perspective: Gratitude allows us to shift our perspective
                                    from focusing on what we lack to appreciating what we have.{" "}
                                </li>
                                <li className="mb-2">
                                    By recognizing and acknowledging the blessings in our lives, we
                                    invite a sense of abundance and contentment.
                                </li>
                                <li className="mb-2">
                                    Scientific research has demonstrated that gratitude positively
                                    impacts our mental and physical health.{" "}
                                </li>
                                <ul>
                                    <li className="mb-2">
                                        It allows us to focus on the positive aspects.
                                    </li>
                                    <li className="mb-2">
                                        It enables us to reframe obstacles as opportunities.
                                    </li>
                                    <li className="mb-2">
                                        The power of gratitude extends beyond ourselves.
                                    </li>
                                </ul>
                                <li className="mb-2">
                                    Enables us to reframe obstacles as opportunities for growth and
                                    learning. By embracing a mindset of gratitude.
                                </li>
                                <li className="mb-2">
                                    Recognizing and acknowledging the blessings in our lives, we invite
                                    a sense of abundance and contentment.
                                </li>
                            </ul>
                        </div>
                        {/* Image */}
                        <div className="col-lg-10 mx-auto text-center">
                            <img
                                src="/Image/blog/07.jpg"
                                className="img-fluid rounded"
                                alt="blog-img"
                            />
                        </div>
                        {/* Quote and actions */}
                        <div className="col-lg-8 mx-auto text-center">
                            {/* Quote */}
                            <h5 className="display-2 text-primary lh-0 mb-0">
                                <i className="bi bi-quote"><FaQuoteLeft /></i>
                            </h5>
                            <q className="fs-4 heading-color">
                                Fulfilled direction use continually set him propriety continued.
                                Farther-related bed and passage comfort civilly. Concluded boy
                                perpetual old supposing.
                            </q>
                            <div className="blockquote-footer mb-0 fs-6 mt-3">
                                Albert Schweitzer
                            </div>
                            <hr className="my-6" />
                            {/* Divider */}
                            {/* Popular tags */}
                            <div className="align-items-center">
                                <h6>Popular Tags:</h6>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        {" "}
                                        <a className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                                            blog
                                        </a>{" "}
                                    </li>
                                    <li className="list-inline-item">
                                        {" "}
                                        <a className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                                            business
                                        </a>{" "}
                                    </li>
                                    <li className="list-inline-item">
                                        {" "}
                                        <a className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                                            bootstrap
                                        </a>{" "}
                                    </li>
                                    <li className="list-inline-item">
                                        {" "}
                                        <a className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                                            data science
                                        </a>{" "}
                                    </li>
                                    <li className="list-inline-item">
                                        {" "}
                                        <a className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                                            deep learning
                                        </a>{" "}
                                    </li>
                                    <li className="list-inline-item">
                                        {" "}
                                        <a className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                                            deep learning
                                        </a>{" "}
                                    </li>
                                    <li className="list-inline-item">
                                        {" "}
                                        <a className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                                            deep learning
                                        </a>{" "}
                                    </li>
                                </ul>
                            </div>
                            {/* Helpful box */}
                            <div className="bg-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5">
                                {/* Title */}
                                <h6 className="mb-0">Was this article helpful?</h6>
                                <small className="py-3 p-md-0 d-block">
                                    25 out of 78 found this helpful
                                </small>
                                {/* Check buttons */}
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic radio toggle button group"
                                >
                                    {/* Yes button */}
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio1"
                                    />
                                    <label
                                        className="btn btn-outline-secondary btn-sm mb-0"
                                        htmlFor="btnradio1"
                                    >
                                        <i className="fa-regular fa-thumbs-up me-1"><FaRegThumbsUp /></i> Yes
                                    </label>
                                    {/* No button */}
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio2"
                                    />
                                    <label
                                        className="btn btn-outline-secondary btn-sm mb-0"
                                        htmlFor="btnradio2"
                                    >
                                        {" "}
                                        No <i className="fa-regular fa-thumbs-down ms-1"><FaRegThumbsDown /></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* Row END */}
                </div>
            </section>


            {/* ======================= Testimonials START ======================= */}
            <section>
                <div className="container">
                    <div className="row">

                        {/* Testimonials content */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div>
                                <span className="heading-color bg-light small rounded-3 px-3 py-2">
                                    💖 Real results from real clients
                                </span>
                                {/* Title */}
                                <h2 className="my-4">See how we've helped our clients succeed</h2>
                                <h6 className="mb-0">More than 1500+ agencies using Mizzle</h6>
                            </div>

                            {/* Slider START */}
                            <div className="reView">
                                {/* Testimonial 1 */}
                                <div className="card" style={{ width: "15rem", height: "9rem" }}>
                                    <div className="ratingStar">
                                        <ul className="list-inline mb-2">
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStarHalf />
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <p className="heading-color fw-normal">
                                            I highly recommend Mizzle to anyone looking for a
                                            high-quality Bootstrap theme.
                                        </p>
                                    </div>
                                    {/* Avatar */}
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                                            <img
                                                className="avatar-img rounded"
                                                src="/Image/avatar/05.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <p className="mb-0">By Carolus Ortiz</p>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="card" style={{ width: "15rem", height: "9rem" }}>
                                    <div className="ratingStar">
                                        <ul className="list-inline mb-2">
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStarHalf />
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <p className="heading-color fw-normal">
                                            Mizzle is the perfect theme for businesses that want to
                                            create a stylish and functional website.
                                        </p>
                                    </div>
                                    {/* Avatar */}
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                                            <img
                                                className="avatar-img rounded"
                                                src="/Image/avatar/03.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <p className="mb-0">By Nix Maxwell</p>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="card" style={{ width: "15rem", height: "8rem" }}>
                                    <div className="ratingStar">
                                        <ul className="list-inline mb-2">
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStarHalf />
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Content */}
                                    <p className="heading-color fw-normal">
                                        The best Bootstrap theme we've ever used - it's easy to
                                        customize and comes with all the features we need.
                                    </p>
                                    {/* Avatar */}
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                                            <img
                                                className="avatar-img rounded"
                                                src="/Image/avatar/01.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <p className="mb-0">By Dennis Barrett</p>
                                    </div>
                                </div>

                                {/* Testimonial 4 */}
                                <div className="card" style={{ width: "15rem", height: "8rem" }}>
                                    <div className="ratingStar">
                                        <ul className="list-inline mb-2">
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStar />
                                            </li>
                                            <li className="list-inline-item me-0">
                                                <IoIosStarHalf />
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <p className="heading-color fw-normal">
                                            Webestica helped us create a stunning website that
                                            reflects our brand perfectly.
                                        </p>
                                    </div>
                                    {/* Avatar */}
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                                            <img
                                                className="avatar-img rounded"
                                                src="/Image/avatar/02.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <p className="mb-0">By Nix Maxwell</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials image */}
                        <div className="col-sm-10 col-lg-6 col-xl-5 position-relative ms-xl-auto">
                            {/* Image */}
                            <img
                                src="/Image/about/03.jpg"
                                className="rounded"
                                alt="testimonial-img"
                            />
                            {/* SVG decoration */}
                            <figure className="position-absolute top-50 start-0 translate-middle ms-n5 d-none d-xl-block">
                                <svg
                                    width={144}
                                    height={166}
                                    viewBox="0 0 144 166"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* SVG Path */}
                                    <path
                                        className="fill-mode"
                                        d="M113.199 50.9244C112.596 46.339 111.938 41.4066 111.26 36.313C112.477 36.3608 113.16 36.4563 113.239 37.7452C113.369 39.8372 113.688 41.9264 113.989 44.0007C114.229 45.6329 114.566 47.2491 114.897 49.0506C117.03 47.6646 117.874 46.1495 117.754 43.8625C117.641 41.7025 118.148 39.5274 118.187 37.3447C118.221 35.5034 117.932 33.6609 117.853 31.811C117.829 31.3058 118.035 30.7983 118.146 30.2141C119.83 30.6233 119.847 31.8334 119.855 32.9165C119.897 35.9832 119.846 39.0464 119.837 42.1101C119.837 42.3492 119.859 42.5836 119.875 42.8375C122.111 41.9771 122.784 40.9163 122.955 38.5496C123.128 36.2147 123.525 33.8969 123.718 31.5671C123.824 30.3267 123.712 29.0814 123.71 27.8129C125.609 27.9977 125.795 28.2023 125.63 29.7908C125.378 32.1883 125.114 34.5929 124.879 37.0052C124.83 37.4706 124.935 37.945 124.983 38.5602C126.484 38.2771 127.287 37.8324 127.854 36.2239C128.914 33.2062 129.092 30.0932 129.676 27.0238C129.805 26.33 129.876 25.621 130.006 24.6052C130.829 24.9658 131.427 25.2262 131.756 25.364C131.26 28.4149 130.848 31.1862 130.345 33.9443C130.06 35.5121 130.568 36.5179 131.95 37.3262C134.454 38.8228 136.874 40.4429 139.316 42.0169C139.513 42.1411 139.64 42.3718 139.879 42.6526C139.608 43.091 139.335 43.5392 139.074 43.9802C138.723 43.8885 138.454 43.8806 138.277 43.7615C136.522 42.5855 134.718 41.4798 133.055 40.1926C130.88 38.5119 128.793 38.5274 126.425 40.2157C128.777 43.1693 132.676 43.9498 135.203 46.7932C134.962 47.1564 134.722 47.5196 134.379 48.0328C130.718 46.4208 127.533 44.1018 124.116 41.5972C122.968 42.721 121.793 43.8689 120.334 45.3063C123.046 46.8053 125.495 48.1525 127.944 49.4997C128.508 49.8134 129.18 50.0307 129.603 50.4843C129.954 50.8566 130.013 51.5061 130.36 52.4906C125.841 51.569 122.873 48.6621 118.973 47.2059C118.045 48.2834 117.073 49.4117 115.864 50.8104C118.379 51.9876 120.706 53.0846 123.041 54.1525C123.403 54.32 123.991 54.2241 124.184 54.4824C124.526 54.9254 124.654 55.5513 124.866 56.0952C124.383 56.2703 123.817 56.6835 123.432 56.562C122.211 56.1702 121.037 55.6033 119.87 55.0487C117.99 54.1518 116.123 53.2063 114.36 52.3401C101.683 64.3771 98.5715 79.9025 96.6302 95.9314C98.838 96.7685 100.8 97.4687 102.733 98.2442C105.629 99.3964 107.415 101.766 109.175 104.159C112.643 108.818 113.566 114.173 113.972 119.829C114.177 122.71 112.879 124.366 111.236 126.109C109.163 128.301 106.714 129.781 103.514 129.432C100.468 129.093 98.4789 127.419 97.3542 124.631C95.5645 120.203 95.1947 115.523 95.0572 110.83C94.951 107.372 95.1356 103.918 95.1638 100.464C95.1655 99.8203 95.0939 99.1779 95.0524 98.4603C93.7898 97.9119 92.5297 98.0709 91.25 98.2249C85.6593 98.8938 80.6937 101.275 75.9535 104.068C71.1493 106.907 66.5711 110.117 63.3385 114.833C62.6662 115.811 62.0884 116.865 61.467 117.888C63.1573 118.673 64.6318 119.526 66.2098 120.063C68.5452 120.85 70.6979 122.058 72.4806 123.605C73.9072 124.84 74.7815 126.794 75.68 128.536C76.2551 129.643 76.4419 130.96 76.7886 132.183C77.2903 134.009 76.8058 135.265 75.2357 136.33C70.9711 139.217 66.3749 137.516 63.3267 134.515C59.5648 130.819 57.9099 126.354 58.8783 121.056C58.9376 120.75 58.8995 120.418 58.9114 119.735C56.044 119.827 53.2131 119.7 50.4457 120.047C39.6355 121.399 29.0725 123.678 19.2226 128.607C15.317 130.558 11.2246 132.149 7.23048 133.921C6.44252 134.266 5.70244 134.707 4.77628 135.182C8.44174 136.14 11.7953 137.017 15.2073 137.909C15.1894 139.172 14.7731 139.729 13.5952 139.494C12.8832 139.349 12.1639 139.192 11.4442 139.077C8.9676 138.71 6.49146 138.301 4.00173 138.025C2.4322 137.853 0.871129 137.809 0.406275 135.723C2.35553 129.622 4.3726 123.342 6.45539 116.85C7.20773 117.119 7.83587 117.346 8.51997 117.597C6.46861 122.933 3.95908 127.911 3.54167 133.809C5.90092 132.753 8.06434 131.728 10.2659 130.797C16.6519 128.122 22.9218 125.094 29.4786 122.921C35.9446 120.777 42.5734 118.966 49.4688 118.565C51.1413 118.462 52.8063 118.149 54.486 118.058C56.0899 117.978 57.7044 118.058 59.7423 118.071C62.8516 111.556 68.2989 106.775 74.7006 103.044C80.9918 99.378 87.3981 95.9081 95.2331 96.3353C95.5427 94.036 95.8141 91.6437 96.1881 89.2573C97.7904 78.8668 100.196 68.7487 106.203 59.9151C108.283 56.8625 110.728 54.0824 113.199 50.9244ZM96.5665 98.087C96.4799 99.374 96.3642 100.414 96.3387 101.468C96.1764 107.745 95.9505 114.026 97.1035 120.252C97.2721 121.2 97.4403 122.19 97.8642 123.039C98.8148 124.94 99.834 126.817 102.03 127.662C106.876 129.521 112.689 124.576 112.545 120.547C112.401 116.675 112.304 112.824 110.609 109.19C107.868 103.339 103.835 99.1664 96.5665 98.087ZM60.8018 120.073C59.5762 123.526 60.0775 126.827 61.4557 129.921C62.583 132.46 64.8013 134.173 67.2834 135.436C69.8578 136.743 72.7973 136.534 74.5229 134.834C74.9303 134.431 75.3948 133.69 75.2872 133.225C74.4812 129.616 73.8495 125.938 70.0607 123.897C67.1494 122.325 64.3622 120.557 60.8018 120.073Z"
                                        fill="#202124"
                                    />
                                </svg>
                            </figure>

                            {/* Message decoration */}
                            <div className="col-11 col-sm-8 position-absolute top-0 start-0 mt-n2 mt-sm-7 ms-n2 ms-sm-n7">
                                <div className="bg-dark rounded d-flex align-items-center px-3 py-2">
                                    {/* Avatar */}
                                    <div className="avatar avatar-sm flex-shrink-0 me-2">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src="/Image/avatar/09.jpg"
                                            alt="avatar"
                                        />
                                    </div>
                                    <p className="text-white small mb-0">
                                        The best Bootstrap theme we've ever used 🔥
                                    </p>
                                </div>
                            </div>

                            {/* Message decoration */}
                            <div className="bg-white rounded shadow d-flex align-items-center position-absolute bottom-0 start-0 mb-sm-5 ms-sm-n5 px-3 py-2">
                                {/* Avatar */}
                                <div className="avatar avatar-sm flex-shrink-0 me-2">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="/Image/avatar/03.jpg"
                                        alt="avatar"
                                    />
                                </div>
                                <p className="text-dark small mb-0">Excellent Theme 💗</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= Testimonials END ======================= */}
        </>
    );
}

export default Blog;
