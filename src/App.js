
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

    const [todayDate, setTodayDate] = useState(new Date().toLocaleString().split(","))
    const [positionName, setPositionName] = useState("POSITION NAME");
    const [extraComments, setExtraComments] = useState("");
    const [companyName, setCompanyName] = useState("COMPANY NAME")
    console.log(todayDate[0])


    useEffect(() => {
        let newPositionName = prompt('enter POSITION NAME')
        let newCompanyName = prompt('enter COMPANY NAME')
        // let confirmAdditional = confirm('Any Extra Comments you want to add after the first paragraph?')
        // let newExtraComments = prompt('Any Extra Comments you want to add after the first paragraph?')
        let newExtraComments;

        if (window.confirm('Any Extra Comments you want to add after the first paragraph?')) {
            newExtraComments = prompt('Type Additional Information in box')
        }
        else {
            newExtraComments = null;
        }

        newCompanyName ? (setCompanyName(newCompanyName)) : (setCompanyName("COMPANY NAME"))
        newPositionName ? (setPositionName(newPositionName)) : (setPositionName("POSITION NAME"))
        newExtraComments ? (setExtraComments(newExtraComments)) : (setExtraComments(""));
    }, [])


    const paragraph1 = `I am writing to express my strong interest in the ${positionName} position at ${companyName}. I am a highly self-motivated Full Stack Software Engineer who exhibits strong analytical and critical thinking skills to write custom HTML, CSS and JavaScript, as well as following semantic W3C coding practices. I have experience in React-Native, React, Node, Ruby On Rails, and have worked with databases such as MongoDB, PostgreSQL and Firebase. I have experience building websites with full CRUD and authentication, and am passionate about coding. I have experience working with UX/UI designers and work well with a team, with minimal supervision. I am also well versed in mobile first and future friendly designs with an advanced knowledge of Git version control and progressive enhancement. I am a very fast learner, and I have a passion towards coding. Any experiences I may have lacking for this position, I can assure you that I will learn very quickly and be able  to apply it to my code as required. ${extraComments}`

    const paragraph2 = `I am a recent graduate from General Assembly as a Software Engineering Fellow. Before joining General Assembly, I worked as a Quality Control Scientist in a Pharmaceutical Company and from there I gathered extensive knowledge on how to extract information through analysis and make reports with proper documentation practices that I am sure will help me in this field of work as well. I have a lot of experience working and collaborating with large groups and work particularly well under pressure. I have learnt that through patience, hard  work and a growth mindset, positive results can always be attainable.`

    const paragraph3 = `I recently completed an immersive Software Engineering program from General Assembly, with 480 hours of training where I honed my skills in JavaScript, HTML, React.js, Ruby on Rails, Netlify, Heroku and other packages.  During the program, I used APIs to create front-end websites using JavaScript and React, and later used back-end runtime environments and frameworks like Node.js and Ruby on Rails to create RESTful APIs that have full CRUD and server-side Authentication capabilities. My portfolio and previous projects can be viewed through this link [http://saadt.netlify.app/].`

    const paragraph4 = `I have a good understanding of Front-End Development using Vanilla JavaScript and React.js (both class-based Components and Hooks) and have built web-pages with responsive cross browser and device responsive development. I also have experience in Full Stack development that requires understanding of React, Node, NPM packages, Express and MongoDB databases and various operating systems like Windows, Mac OS and basic terminal based Linux environments. I am confident that my language proficiencies make me an excellent candidate for the ${positionName} position at ${companyName}. Thank you for your time and consideration.`


    return (
        <div className="fullPage">
            <header className="header">
                <p>Saadat Taaseen <br /></p>
            </header>
            <body>
                <p className="header">
                    New York Metropolitan Area, NY-11429<br />
                    (347) 600-4353<br />
                    saadat.taaseen@gmail.com<br />
                    https://www.linkedin.com/in/taaseen71/<br />
                    https://github.com/Taaseen71/<br />
                    http://saadt.netlify.app/<br />
                </p>
                <div className="todaysDate">
                    <p>
                        {todayDate[0]}
                    </p>
                </div>
                <p>Dear Hiring Manager,<br /></p>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <p>{paragraph3}</p>
                <p>{paragraph4}</p>
                <p>Sincerely,< br /> Saadat Taaseen</p>
            </body>

        </div>
    );

}

export default App;

/*Saadat Taaseen

New York Metropolitan Area, NY-11429
(347) 600-4353
saadat.taaseen@gmail.com
https://www.linkedin.com/in/taaseen71/
https://github.com/Taaseen71/
http://saadt.netlify.app/

02/10/2021

Dear Hiring Manager,

I am writing to express my strong interest in the <POSITION-NAME> position at <COMPANY-NAME>. I am a highly self-motivated Full Stack Software Engineer who exhibits strong analytical and critical thinking skills to write custom HTML, CSS and JavaScript, as well as following semantic W3C coding practices. I have experience in React-Native, React, Node, Ruby On Rails, and have worked with databases such as MongoDB, PostgreSQL and Firebase. I have experience building websites with full CRUD and authentication, and am passionate about coding. I have experience working with UX/UI designers and work well with a team, with minimal supervision. I am also well versed in mobile first and future friendly designs with an advanced knowledge of Git version control and progressive enhancement. I am a very fast learner, and I have a passion towards coding. Any experiences I may have lacking for this position, I can assure you that I will learn very quickly and be able  to apply it to my code as required.

                I am a recent graduate from General Assembly as a Software Engineering Fellow. Before joining General Assembly, I worked as a Quality Control Scientist in a Pharmaceutical Company and from there I gathered extensive knowledge on how to extract information through analysis and make reports with proper documentation practices that I am sure will help me in this field of work as well. I have a lot of experience working and collaborating with large groups and work particularly well under pressure. I have learnt that through patience, hard  work and a growth mindset, positive results can always be attainable.

                I recently completed an immersive Software Engineering program from General Assembly, with 480 hours of training where I honed my skills in JavaScript, HTML, React.js, Ruby on Rails, Netlify, Heroku and other packages.  During the program, I used APIs to create front-end websites using JavaScript and React, and later used back-end runtime environments and frameworks like Node.js and Ruby on Rails to create RESTful APIs that have full CRUD and server-side Authentication capabilities. My portfolio and previous projects can be viewed through this link [http://saadt.netlify.app/].

I have a good understanding of Front-End Development using Vanilla JavaScript and React.js (both class-based Components and Hooks) and have built web-pages with responsive cross browser and device responsive development. I also have experience in Full Stack development that requires understanding of React, Node, NPM packages, Express and MongoDB databases and various operating systems like Windows, Mac OS and basic terminal based Linux environments. I am confident that my language proficiencies make me an excellent candidate for the <POSITION-NAME> position at <COMPANY-NAME>. Thank you for your time and consideration.

                    Sincerely,
                    Saadat Taaseen
 */