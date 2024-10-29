import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link } from "react-router-dom";
import { GoStack } from "react-icons/go";
import { FaCubes } from "react-icons/fa";
import { BsCircleSquare } from "react-icons/bs";
import { PiPenNibThin } from "react-icons/pi";
import { PiBagSimpleFill } from "react-icons/pi";
import { TbWorldSearch } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { TbBrandPinterest } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
const Service = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000 

        }); 
      }, []);
    
    return (
        <>
        {/* =======================Services START */}
            <section className="pt-lg-8 pt-xl-9">
                <div className="container position-relative pt-4 pt-lg-0">
                    <div className="row align-items-center">
                        {/* Title */}
                        <div className="col-md-7 col-xl-6 mb-7 mb-md-0">
                            <h1 className="mb-4" data-aos="fade-right" data-aos-duration="3000">Discover the solutions we offer</h1>
                            <p className="mb-4">
                                Our experienced team is dedicated to helping you achieve your goals
                                through innovative technology.{" "}
                            </p>
                            <Link to="/Contact" className="btn btn-lg btn-dark mb-5">
                                <i className="bi bi-telephone me-2"><IoCall /></i>
                                Contact us
                            </Link>
                            {/* Rating */}
                            <div className="d-sm-flex align-items-center">
                                {/* Avatar group */}
                                <ul className="avatar-group mb-0 align-items-center">
                                    <li className="avatar avatar-lg">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src="/Image/avatar/08.jpg"
                                            alt="avatar"
                                        />
                                    </li>
                                    <li className="avatar avatar-lg">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src="/Image/avatar/12.jpg"
                                            alt="avatar"
                                        />
                                    </li>
                                    <li className="avatar avatar-lg">
                                        <div className="avatar-img rounded-circle bg-primary">
                                            <span className="text-white position-absolute top-50 start-50 translate-middle">
                                                10K+
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                {/* Info */}
                                <div className="ms-sm-3 mt-2 mt-sm-0">
                                    <p className="heading-color fw-normal mb-1">
                                        More then 10k active users! 🤩
                                    </p>
                                    <a
                                        className="icon-link icon-link-hover text-primary-hover mt-auto"
                                        href="#"
                                    >
                                        Join them now
                                        <i className="bi bi-arrow-right"><FaArrowRight /></i>{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="col-md-5 ms-auto" data-aos="zoom-in" data-aos-duration="2500">
                            <img src="/Image/element/service.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="bg-primary-subtle position-relative overflow-hidden" data-aos="zoom-in" data-aos-duration="3000"
                data-bs-theme="dark"
            >

                <div className="container position-relative">
                    {/* Title */}
                    <div className="inner-container-small text-center">
                        <span className="bg-light heading-color small rounded-3 px-3 py-2">
                            🚀 Innovative solutions, Measurable results
                        </span>
                        <h2 className="mb-0 mt-4">We specialize in the following services</h2>
                    </div>
                    {/* Service list START */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-5 gy-md-7 mt-3">
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">

                                        <GoStack />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">Digital Marketing</a>
                                    </h5>
                                    <p>Growing brands online through digital channels.</p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                                        <FaCubes />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">Product Design</a>
                                    </h5>
                                    <p>Creating products that users love and businesses need .</p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                                        <BsCircleSquare />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">Web Design</a>
                                    </h5>
                                    <p>
                                        Designing websites that are visually appealing &amp;
                                        user-friendly.
                                    </p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                                        <PiPenNibThin />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">UI/UX Design</a>
                                    </h5>
                                    <p>
                                        Creating user interfaces that are both efficient and enjoyable.
                                    </p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                                        <PiBagSimpleFill />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">Business Strategy</a>
                                    </h5>
                                    <p>Developing and executing plans to achieve business goals.</p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                                        <TbWorldSearch />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">Research</a>
                                    </h5>
                                    <p>Gathering and analyzing data to inform decision-making.</p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                                        <FaCode />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">Web Development</a>
                                    </h5>
                                    <p>Building and maintaining websites and web applications.</p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Service item */}
                        <div className="col ServiceCard">
                            <div className="card bg-dark h-100">
                                <div className="card-body pb-0">
                                    {/* Icon */}
                                    <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                                        <TbBrandPinterest />
                                    </div>
                                    {/* Content */}
                                    <h5 className="mb-3">
                                        <a href="#">Brand Design</a>
                                    </h5>
                                    <p>Creating brands that are unique, memorable, and meaningful.</p>
                                </div>
                                <div className="card-footer bg-dark mt-auto pt-2">
                                    <a className="icon-link icon-link-hover" href="#">
                                        Know more
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service list END */}
                </div>
            </section>
            {/* =======================Services END */}
        </>
    );
}
export default Service; 