import React from 'react';
import { IoIosCall } from "react-icons/io";
import './resume.css';
const Resume = () => {
    return (
        <div className='resume'>
            <header>
            <h1>Sindhuja K</h1>
            <h3>Full Stack Developer</h3>
            </header>
            <hr></hr>
            <div className='contents'>
            <div className='content'>
                <div className='contact'>
                    <h2>Contact</h2>
                    <li><IoIosCall />9677638516</li>
                    <li>✉️sindhu@gmail.com</li>
                    <li>🏡123 Anywhere, Any city</li>
                    <li>💻www.sindhuja.com</li>
                </div>
                <div className='education'>
                    <h2>Education</h2>
                    <li>2020 - 2024</li>
                    <li>Bachelor's in Computer Science</li>
                    <li>XYZ University</li>
                    <li>2018 - 2020</li>
                    <li>Bachelor's in Computer Science</li>
                    <li>XYZ University</li>
                </div>
                <div className='skills'>
                    <h2>Skills</h2>
                    <li>Web development</li>
                    <li>Project Management</li>
                    <li>Digital Marketing</li>
                    <li>Content Creation</li>
                    <li>Data Analysis </li>
                </div>
                <div className='language'>
                <h2>Languages</h2>
                    <li>Tamil(Native)</li>
                    <li>English(Fluent)</li>
                </div>
            </div>
            <div className='content1'>

            <div>
                    <h2>Profile Summary</h2>
                    <p>Full Stack Developer with a passion for creating dynamic and responsive web applications. Proficient in both front-end and back-end texhnologies including Javascript, React, Node.js, Express, and MongoDb. Adopt at building scalable, efficient, and user-friendly solutions.</p>
                    
                </div>
                <div>
                    <h2>Work Experience</h2>
                    <div>
                    <h3>Lead Developer</h3>
                    <li>2020 - Present</li>
                    <li>XYZ Company</li>
                    <p>Led a team of 10 to launch a comprehensive marketing campaign resulting in a 20% increase in sales.</p>
                    <p>Implemented data-driven strategies to optimize marketing budget allocation and improve ROI by 30%.</p>
                    </div>
                    <div>
                    <h3>Web Developer</h3>
                    <li>2018 - 2020</li>
                    <li>ABC Company</li>
                    <p>Developed and executed digital marketing strategies leading to a 15% growth in organic website traffic.</p>
                    <p>Collaborated with the content tean to create SEO-optimized content, increasing search engine rankings.</p>
                    </div>

                    <div>
                    <h3>Web Developer Intern</h3>
                    <li>2020 - 2022</li>
                    <li>XYZ Startup</li>
                    <p>Assisted the marketing team with research and strategy implementation, contributing to the success of new product launches.</p>
                    <p>Conducted competitor analysis and provided actionable insights for campaign improvements.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
