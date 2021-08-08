import React, { useState } from 'react'
import MailForInterviewRequest from './MailForInterviewRequest'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function CoverLetter({ paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, todayDate }) {
  return (
    <div className="content">
      <p>
        New York Metropolitan Area, NY-11429<br />
        (347) 600-4353<br />
        saadat.taaseen@gmail.com<br />
        https://www.linkedin.com/in/taaseen71/<br />
        https://github.com/Taaseen71/<br />
        https://saadt.netlify.app/<br />
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
      <p>{paragraph5}</p>
      <p>{paragraph6}</p>
      <p>Sincerely,< br /> Saadat Taaseen</p>
    </div>
  )
}

function Content({ positionName, companyName, extraComments, todayDate }) {

  const [coverLetterClipboard, setCoverLetterClipboard] = useState({
    value: "",
    copied: false
  })


  const paragraph1 = `I would like to express my strong interest in your open ${positionName} position with ${companyName}. Your description of the work responsibilities for the role very closely matches my experiences, and I am excited to submit my resume to you for your consideration.`



  const paragraph2 = `In my position as a Software Developer for my current company, Tred Earth LTD, I have led, managed, and overseen projects as well as performed in designing and developing the website myself. I have very strong leadership skills, and I am adaptive to any kind of environment or tasks that I do. I have experience shipping and deploying codebases on different hosting platforms and have worked directly with founders to deliver exactly what is required from me. I have exceeded multiple expectations from my current team, and want to be able to use my experiences to help reach all the goals that ${companyName} has. Currently I am working to develop a mobile version of the website I built for Android development purposes using React-Native.`



  const paragraph3 = `I have extensive practice and experience working within an Agile Team environment, and have worked with HTML, CSS, JavaScript and multiple frameworks, including Node.JS, React, Ruby on Rails, and React-Native etc. I have a really good concept of CORS, and web browsing security, as well as handling RESTful API requests using Express or Node.JS framework. ${extraComments}`



  const paragraph4 = ` I have a proven track record of working in a dynamic environment with the ability to manage multiple projects, and work with tight deadlines. I have worked closely with the founders of my current company and have provided elaborate insights to the development process to help them assess situations and make important decisions for the company. My hard work, along with my peers at Tred’s marketing and UX/UI teams have helped raise over £1 million in investments from over 1000 investors for the company.  From my previous employments, I also have gained a lot of experience understanding the sales cycles and strategies that allow a company to excel in reaching their target demographics. `



  const paragraph5 = ` I am confident that my proven track record of excellent work ethic, unparalleled attention to detail and high performing programming skills will make me an exceptional candidate for this role, and allow me to contribute to the team's success. I am excited to meet your team and work with them to the fullest of my abilities. As I plan my career to become better and a result driven programmer, I look forward to an opportunity to discuss both your biggest needs and how I may offer solutions to your team. If I can provide you with any further information on my background and qualifications, please let me know.`

  const paragraph6 = `I look forward to hearing from y​​ou. Thank you​​​​​ so much​ ​​​for your consideration.`

  const whyGoodFit = `Why do you think you are a good fit for this company?`

  const whyGoodFitAnswer = `I work extremely well under pressure. I am primarily here to learn all that I can, and apply that knowledge to my role, and help the team and the company achieve its goals. I intend to deliver results as soon as I join the team, and immediately prove that I am an asset. I have a lot of experience with data analysis and believe my skills and technical ability will help the company exceed their expectations.`

  const whatFreeTime = `Please list 2-3 dates and time ranges that you could do an interview.`

  const whatFreeTimeAnswer = `Weekdays, 11:00 am - 7:00 pm`

  const cover = `
New York Metropolitan Area, NY-11429
(347) 600-4353
saadat.taaseen@gmail.com
https://www.linkedin.com/in/taaseen71/
https://github.com/Taaseen71/
https://saadt.netlify.app/
  
${todayDate[0]}
  
Dear Hiring Manager,
${paragraph1}

${paragraph2}

${paragraph3}

${paragraph4}

${paragraph5}

${paragraph6}
  
Sincerely,
Saadat Taaseen
            `


  return (
    <div>
      <h2>Cover Letter</h2>
      <div>
        <CoverLetter positionName={positionName} companyName={companyName} extraComments={extraComments} todayDate={todayDate} paragraph1={paragraph1} paragraph2={paragraph2} paragraph3={paragraph3} paragraph4={paragraph4} paragraph5={paragraph5} paragraph6={paragraph6} />

        <CopyToClipboard
          options={{ format: "text/plain" }}
          // text={`${positionName}	${companyName}	${link}`}
          text={cover}

          onCopy={() => setCoverLetterClipboard({ ...coverLetterClipboard, copied: true })}
        >
          <button>Copy Cover Letter</button>
        </CopyToClipboard>



      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <br />
        <br />
        <br />
        <br />
        <h2> Why are you Interesting?</h2>
        <p>{whyGoodFit}</p>
        <p>{whyGoodFitAnswer}</p>

        <br />
        <br />
        <h2>Availability</h2>
        <p>{whatFreeTime}</p>
        <p>{whatFreeTimeAnswer}</p>
      </div>
      <MailForInterviewRequest positionName={positionName} companyName={companyName} />
    </div>

  )
}

export default Content


// const paragraph2h = `I have experience in JavaScript, React-Native, React JS, Node JS, C# and Ruby On Rails, with which I have built scalable and functional websites with full CRUD and Authentication, and have worked with UX/UI designers to create mobile first and future friendly designs. I am a very fast learner with lots of experience working with React Hooks and Class based components. I am a problem solver at heart, and have developed very strong skills to find and fix errors to provide a beautiful user experience.  ${extraComments}
// `

// const paragraph4h = `I completed an immersive Software Engineering program from General Assembly with over 500 hours of concentrated training, with which I have honed my skills as a Full-Stack Developer.  My best projects can be viewed directly through my Portfolio.
//   `


//   const paragraph3h = `I have previous experience in managing projects and have made important decisions to help navigate my team to reach its goals.  As a former Chemical Data Scientist, I have experience in reliably working with confidential and critical data, and work extremely well under pressure, with a team and individually. I believe I will transition to your company very seamlessly, and hit the ground running to deliver results very quickly.
//   `

//   const paragraph5h = `I am confident that my proven track record of excellent work ethic, unparalleled attention to detail and high performing programming skills will make me an immediate asset at ${companyName}, and allow me to contribute to the team’s success. As I plan my career to become better and a result driven programmer, I look forward to an opportunity to discuss both your biggest needs and how I may offer solutions to your team.`