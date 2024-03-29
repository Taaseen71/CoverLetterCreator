import React from 'react'

function MailForInterviewRequest({ positionName, companyName }) {

  const para1 = `I’m writing to apply for ${positionName} position at ${companyName}.`

  const para2 = `I am proficient with modern ES6 + JavaScript, advanced CSS and other frameworks such as Next.js, React.js, Node.js and have experience working with SQL and noSQL databases such as MongoDB, SQLite and mySQL. I completed an immersive Software Engineering Program from General Assembly with 480 hours of training, and have acquired extensive knowledge and experience through freelance projects, internships and hackathons. I am confident that I will excel in the position and start contributing to the team soon after I join. I have previous experience in managing projects and have made important decisions to help navigate my team to reach its goals.`

  const para3 = "I’ve attached my cover letter and resume for your review. I hope you’ll contact me at your convenience to discuss the program and to arrange an interview. Thank you for your time."

  const mailBackForRecruiters = `
Thank you for reaching out. I would love to be considered for this position. I have attached my resume to this email for your reference. Please reach out to me if you have any questions.
`



  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h2>Mail For Intervew Request</h2>
      <p>Dear Hiring Manager,</p>
      <p>{para1}</p>
      <p>{para2}</p>
      <p>{para3}</p>
      <p>Best, <br />
       Saadat Taaseen</p>
      <br />
      <br />
      <p>Email: saadat.taaseen@gmail.com <br />
      Phone: (347) 600-4353
      </p>
      <br />
      <div>
        <h3>Mail Back for Recruiters</h3>
        <p>{mailBackForRecruiters}</p>
        <p>Best Regards,</p>
        <p>Saadat Taaseen</p>
      </div>
      <br />
    </div>
  )
}

export default MailForInterviewRequest

