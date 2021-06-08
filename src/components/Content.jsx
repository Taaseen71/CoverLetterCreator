import React from 'react'
import MailForInterviewRequest from './MailForInterviewRequest'

function Content({ positionName, companyName, extraComments, todayDate }) {
  const paragraph1 = `I would like to express my strong interest in your open ${positionName} position with ${companyName}. I believe this is an excellent fit due to my strong knowledge and experience in Software Engineering.`

  const paragraph2 = `I have experience in JavaScript, React-Native, React JS, Node JS, C# and Ruby On Rails, with which I have built scalable and functional websites with full CRUD and Authentication, and have worked with UX/UI designers to create mobile first and future friendly designs. I am a very fast learner with lots of experience working with React Hooks and Class based components. I am a problem solver at heart, and have developed very strong skills to find and fix errors to provide a beautiful user experience.  ${extraComments}
  `

  const paragraph3 = `I have strong leadership skills, and have managed teams of developers in the past to deliver projects on time. As a former Chemical Data Scientist, I have experience in confidential and critical data analysis, and work extremely well under pressure, and with a team. I believe I will transition to your company very seamlessly, and hit the ground running to deliver results very quickly.
  `

  const paragraph4 = `I completed an immersive Software Engineering program from General Assembly with over 500 hours of concentrated training, with which I have honed my skills as a Full-Stack Developer.  My best projects can be viewed directly through my Portfolio.
  `

  const paragraph5 = `I am confident that my proven track record of excellent work ethic, unparalleled attention to detail and high performing programming skills will make me an immediate asset at ${companyName}, and allow me to contribute to the team’s success. As I plan my career to become better and a result driven programmer, I look forward to an opportunity to discuss both your biggest needs and how I may offer solutions to your team.`

  const whyGoodFit = `Why do you think you are a good fit for this company?`

  const whyGoodFitAnswer = `I work extremely well under pressure. I am primarily here to learn all that I can, and apply that knowledge to my role, and help the team and the company achieve its goals. I intend to deliver results as soon as I join the team, and immediately prove that I am an asset. I have a lot of experience with data analysis and believe my skills and technical ability will help the company exceed their expectations.`

  const whatFreeTime = `Please list 2-3 dates and time ranges that you could do an interview.`

  const whatFreeTimeAnswer = `Weekdays, 11:00 am - 7:00 pm`


  return (
    <div>
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
      <p>Sincerely,< br /> Saadat Taaseen</p>
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
