import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Portfolio from '../components/Portfolio';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{' ' + config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Electrical & Computer Engineering Undergraduate. <br /> Passionate
            about technology and software engineering.
            <br /> Experience with front end skills, now concentrating on data
            engineering & machine learning.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front End Developer Intern</h3>
              <div className="subheading mb-3">
                {' '}
                <a href="https://www.apifon.com/" target="_blank">
                  Apifon
                </a>
              </div>
              <p>
                <strong>R&D Department - </strong>contributing to designing and
                coding the web application SmartWater. Responsibilities
                included: <br />
                <br />• Developing new user-facing features using Javascript
                frameworks ( React & Angular 8 ) <br />• Designing a modern,
                highly responsive web-based user interface <br />• Building
                reusable components and front-end libraries for future use{' '}
                <br />• Translating designs and wireframes into high-quality
                code
                <br />• Learning and understanding user interactions
                <br />
                <br /> <strong>Marketing Department - </strong>contributing to
                coding, maintaining and expanding Apifon's{' '}
                <a href="https://www.apifon.com/" target="_blank">
                  website
                </a>
                . Responsibilities included: <br />
                <br />• Consistently creating well-designed, tested code using
                best practices for website development, including mobile and
                responsive site design <br />• Creating website and user
                interfaces, using standard HTML/CSS practices <br />• Creating
                and maintaining workflows with teams to provide visibility and
                to ensure workload balance for consistent visual designs <br />•
                Developing and validating testing schedules, addressing all
                browsers and devices to ensure various computers can access
                content <br />• Maintaining updated knowledge of new and
                emerging industry trends and technology <br />• Cooperating with
                graphic and UI/UX designers to match visual design intent
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary date">
                July 2019 - January 2020
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bioinformatics Engineer Intern</h3>
              <div className="subheading mb-3">
                Centre for Research & Technology Hellas{' '}
                <a href="https://www.certh.gr/root.en.aspx" target="_blank">
                  (CERTH)
                </a>
              </div>
              <p>
                Code implementation to distinguish gene differences in the human
                genome using Python & Snakemake
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary date">
                July 2018 - September 2018
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Freelance Web Developer</h3>
              <div className="subheading mb-3"></div>
              <p>Designing and implementing websites for companies</p>
              <p>
                <a href="#portfolio">Portfolio</a>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary date">May 2016 - Present</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Diploma in Electrical and Computer Engineering
              </h3>
              <div className="subheading mb-3">
                Aristotle University of Thessaloniki (AUTH)
              </div>
              {/* CHECK THIS OUT */}
              <div>Specializing in Electronic & Computer Engineering</div>
              <div>Particular interest in:</div>
              <p>Pattern Recognition, Databases, Robotics</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary date">
                September 2014 - Present
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">High School Diploma</h3>
              <div className="subheading mb-3">Mandoulides High School</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary date">
                September 2011 - June 2014
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>

          <Portfolio />
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-joomla"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Projects</div>
          <ul className="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-spinner color_icon"></i>
              Currently working on a web app that will bring the art community
              together using technologies such as React & Firebase.
            </li>
            <li>
              <i className="fa-li fa fa-check color_icon"></i>
              Music genre classification student project (group of students)
              using two approaches to solve the problem. Deep Learning approach,
              implementating RCNN and scoring nearly 70% accuracy on test data.
              Machine Learning approach, using algorithms such as SVM, K-Means
              etc.
            </li>
            <li>
              <i className="fa-li fa fa-check color_icon"></i>
              Low Level Programming using Assembly.
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
        </div>
      </section> */}

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Courses & Webinars</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-award color_icon"></i> Responsive Web Design
              Certification (300 hours) -{' '}
              <a href="https://www.freecodecamp.org" target="_blank">
                Freecodecamp
              </a>
            </li>
            <li>
              <i class="fa-li fa fa-award color_icon"></i> Javascript Algorithms
              and Data Structure Certification (300 hours) -{' '}
              <a href="https://www.freecodecamp.org" target="_blank">
                Freecodecamp
              </a>
            </li>
            <li>
              <i class="fa-li fa fa-award color_icon"></i> Introduction to
              Gatsby by Jason Lengstorf -{' '}
              <a href="https://frontendmasters.com" target="_blank">
                Frontend Masters
              </a>
            </li>
            <li>
              <i class="fa-li fa fa-award color_icon"></i> Complete Intro to
              React, v5 by Brian Holt -{' '}
              <a href="https://frontendmasters.com" target="_blank">
                Frontend Masters
              </a>
            </li>
            <li>
              <i class="fa-li fa fa-award color_icon"></i> Intermediate React,
              v2 by Brian Holt -{' '}
              <a href="https://frontendmasters.com" target="_blank">
                Frontend Masters
              </a>
            </li>
            <li>
              <i class="fa-li fa fa-award color_icon"></i> State Management in
              Pure React, v2 by Steve Kinney -{' '}
              <a href="https://frontendmasters.com" target="_blank">
                Frontend Masters
              </a>
            </li>
            <li>
              <i class="fa-li fa fa-award color_icon"></i> Firebase with React,
              v2 by Steve Kinney -{' '}
              <a href="https://frontendmasters.com" target="_blank">
                Frontend Masters
              </a>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="memberships"
      >
        <div className="w-100">
          <h2 className="mb-5">Memberships</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-address-card color_icon"></i>{' '}
              <a href="https://aiesec.gr/" target="_blank">
                AIESEC
              </a>{' '}
              - world's largest non-profit youth-run organization{' '}
            </li>
            <li>
              <i class="fa-li fa fa-address-card color_icon"></i>{' '}
              <a href="https://emb.web.auth.gr/about" target="_blank">
                IEEE Engineering in Medicine and Biology Society AUTH
              </a>{' '}
            </li>

            <li>
              <i class="fa-li fa fa-address-card color_icon"></i>Student’s
              Conference of Electrical and Computer Engineering on Smart Houses
              -{' '}
              <a href="https://www.sfhmmy.gr/en/home" target="_blank">
                ECESCON
              </a>
            </li>
            <li>
              <i class="fa-li fa fa-address-card color_icon"></i>World Academic
              Expo (
              <a href="http://wave.afixis.org/" target="_blank">
                WAVE
              </a>
              ) - Volunteer{' '}
            </li>
            <li>
              <i class="fa-li fa fa-address-card color_icon"></i>{' '}
              <a href="https://www.entrepreneurshipschool.com/" target="_blank">
                Entrepreneurship School
              </a>{' '}
              2018 (Competition)
            </li>
            <li>
              <i class="fa-li fa fa-address-card color_icon"></i> American
              Studies Seminar - Marshall Plan (May 2017)
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
