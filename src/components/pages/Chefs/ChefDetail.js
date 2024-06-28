import React from 'react'
import LayoutPages from '../../layouts/LayoutPage'

function ChefDetail() {
  return (
    <LayoutPages>
        <div class="chef-single-area bg-gray default-padding-top">
        <div class="container">
            <div class="chef-content-top">
                <div class="row align-center">
                    <div class="col-lg-5 left-info">
                        <div class="thumb">
                            <img src="assets/img/team/1.jpg" alt="Thumb"/>
                        </div>
                    </div>
                    <div class="col-lg-7 right-info pl-80 pl-md-15 pl-xs-15">
                        <h2>Lucas Ethan</h2>
                        <p>
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from.
                        </p>
                        
                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>
                                    175 10h Street, Office 375 Berlin, De 21562
                                </p>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:support@digital.com">support@digital.com</a>
                            </li>
                            <li>
                                <i class="fas fa-phone-alt"></i>
                                <a href="tel:123-456-7890">+44-20-7328-4499</a>
                            </li>
                        </ul>
                        <div class="social">
                            <a class="btn circle btn-sm btn-theme animation">Contact Me</a>
                            <div class="share-link">
                                <i class="fas fa-share-alt"></i>
                                <ul>
                                    <li class="facebook">
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li class="twitter">
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="youtube">
                                        <a href="#">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-info bg-light default-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="chef-single-list">
                            <div class="chef-list-item">
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
                            <div class="chef-list-item">
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
                    <div class="col-lg-6">
                        <div class="skill-items">
                            <h3>Personal Skills</h3>
                            <div class="progress-box">
                                <h5>Fast Food</h5>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" data-width="88">
                                         <span>88%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-box">
                                <h5>Sea Food</h5>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" data-width="95">
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-box">
                                <h5>Drinks & Juice</h5>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" data-width="80">
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