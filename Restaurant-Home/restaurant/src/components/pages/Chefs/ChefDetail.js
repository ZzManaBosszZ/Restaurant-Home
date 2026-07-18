import React from 'react'
import LayoutPages from '../../layouts/LayoutPage'

function ChefDetail() {
  return (
    <LayoutPages>
        <div className="chef-single-area bg-gray default-padding-top">
        <div className="container">
            <div className="chef-content-top">
                <div className="row align-center">
                    <div className="col-lg-5 left-info">
                        <div className="thumb">
                            <img src="assets/img/team/1.jpg" alt="Thumb"/>
                        </div>
                    </div>
                    <div className="col-lg-7 right-info pl-80 pl-md-15 pl-xs-15">
                        <h2>Lucas Ethan</h2>
                        <p>
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from.
                        </p>
                        
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <p>
                                    175 10h Street, Office 375 Berlin, De 21562
                                </p>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:support@digital.com">support@digital.com</a>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <a href="tel:123-456-7890">+44-20-7328-4499</a>
                            </li>
                        </ul>
                        <div className="social">
                            <a className="btn circle btn-sm btn-theme animation">Contact Me</a>
                            <div className="share-link">
                                <i className="fas fa-share-alt"></i>
                                <ul>
                                    <li className="facebook">
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="twitter">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="youtube">
                                        <a href="#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-info bg-light default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="chef-single-list">
                            <div className="chef-list-item">
                                <h4>Education</h4>
                                <ul>
                                    <li>
                                        <h5>Residential College</h5>
                                        <span>BA Honours - Biology</span>
                                        <p>
                                            2004 - 2008
                                        </p>
                                    </li>
                                    <li>
                                        <h5>University of Iowa</h5>
                                        <span>Master's degree - Macroeconomics</span>
                                        <p>
                                            2009 - 2012
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="chef-list-item">
                                <h4>Experience</h4>
                                <ul>
                                    <li>
                                        <h5>Senior Chef</h5>
                                        <span>Dubia Arab Hotel</span>
                                        <p>
                                            31 Aug, 2013
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Master of Restaurant</h5>
                                        <span>Muskan Food Factory</span>
                                        <p>
                                            12 Dec 2018
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="skill-items">
                            <h3>Personal Skills</h3>
                            <div className="progress-box">
                                <h5>Fast Food</h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-width="88">
                                         <span>88%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>Sea Food</h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-width="95">
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>Drinks & Juice</h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-width="80">
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </LayoutPages>
  )
}

export default ChefDetail