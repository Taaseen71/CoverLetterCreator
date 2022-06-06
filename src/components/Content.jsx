import React, { useState } from 'react'
import MailForInterviewRequest from './MailForInterviewRequest'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function CoverLetter({ paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, todayDate }) {
  return (
    <div className="content">
      <p>
        
        New York Metropolitan Area, NY-10010<br />
        (347) 600-4353<br />
        dev.saadat@gmail.com<br />
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


  const paragraph1 = `I would like to express my strong interest in your open ${positionName} position with ${companyName}. Your description of the work responsibilities for the role very closely match my experiences, and I am excited to submit my resume to you for your consideration.`



  const paragraph2 = `In my position as a Software Developer for my previous company, I have led, managed, and overseen projects as well as created  web pages, with RESTful APIs and authentication, and improved web security and code-structures. I have worked by myself, and with other developers, and clients to deliver accurate designs and dynamic webpages. I have very strong leadership skills, and I am adaptive to any kind of environment or tasks. I have experience shipping and deploying codebases, such as JavaScript, Vue w/ TypeScript, React, Node JS, Ruby on Rails, and Wordpress, and have worked directly with founders, to deliver working websites. I have exceeded multiple expectations from my current team, and want to be able to use my experiences to help reach all the goals that ${companyName} has. I am always looking to grow as an Engineer and looking forward to learn new languages and use my skillsets to benefit my peers.`



  const paragraph3 = `I have extensive practice and experience working within an agile Team environment, and have worked with both relational and non-relational databases, such as MongoDB, MySQL, Firebase etc. I have a really good concept of CORS, and web browsing security, as well as handling RESTful API requests using the Node-Express framework. ${extraComments}`



  const paragraph4 = ` I have a proven track record of working in a dynamic environment with the ability to manage multiple projects, and work with tight deadlines. I have worked closely with the founders of my current company and have provided elaborate insights to the development process to help them assess situations and make important decisions for the company.`



  const paragraph5 = ` I am confident that my proven track record of excellent work ethic, unparalleled attention to detail and high performing programming skills will make me an exceptional candidate for this role, and allow me to contribute to the team's success. I have endorsements from my previous employers and colleagues who vouch for my engineering skills and my ability to adapt to any situation. I am excited to meet your team and work with them to the fullest of my abilities. As I plan my career to become a better engineer, I look forward to an opportunity to discuss both your biggest needs and how I may offer solutions to your team. If I can provide you with any further information on my background and qualifications, please let me know.`

  const paragraph6 = `I look forward to hearing from y​​ou. Thank you​​​​​ so much​ ​​​for your consideration.`

  const whyGoodFit = `Why do you think you are a good fit for this company?`

  const whyGoodFitAnswer = `I work extremely well under pressure. I am primarily here to learn all that I can, and apply that knowledge to my role, and help the team and the company achieve its goals. I intend to deliver results as soon as I join the team, and immediately prove that I am an asset. I have a lot of experience with data analysis and believe my skills and technical ability will help the company exceed their expectations.`

  const whatFreeTime = `Please list 2-3 dates and time ranges that you could do an interview.`

  const whatFreeTimeAnswer = `Weekdays, 11:00 am - 7:00 pm`

  const cover = `
New York Metropolitan Area, NY-10010
(347) 600-4353
dev.saadat@gmail.com
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


