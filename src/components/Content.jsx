import React, { useState, useEffect } from 'react'
import MailForInterviewRequest from './MailForInterviewRequest'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from "axios";

function Content({ positionName, companyName, extraComments, todayDate }) {


  const [paragraph1, setParagraph1] = useState("")
  const [paragraph2, setParagraph2] = useState("")
  const [paragraph3, setParagraph3] = useState("")
  const [paragraph4, setParagraph4] = useState("")
  const [paragraph5, setParagraph5] = useState("")
  const [paragraph6, setParagraph6] = useState("")
  const [whatFreeTimeAnswer, setWhatFreeTimeAnswer] = useState("")
  const [whyGoodFitAnswer, setWhyGoodFitAnswer] = useState("")
  

  useEffect(() => {
    axios.get('/CoverLetterContent.json').then(response => {
      setParagraph1(`I would like to express my strong interest in your open ${positionName} position with ${companyName}.\u00A0` + (response.data.CoverLetterContent.paragraph1))
      setParagraph2(response.data.CoverLetterContent.paragraph2 + `I have exceeded multiple expectations from my current team, and want to be able to use my experiences to help reach all the goals that ${companyName} has. I am always looking to grow as an Engineer and looking forward to learning new languages and using my skill sets to benefit my peers.`)
      setParagraph3(response.data.CoverLetterContent.paragraph3 + `\u00A0${extraComments}`)
      setParagraph4(response.data.CoverLetterContent.paragraph4)
      setParagraph5(response.data.CoverLetterContent.paragraph5)
      setParagraph6(response.data.CoverLetterContent.paragraph6)
      setWhatFreeTimeAnswer(response.data.misc.whatFreeTimeAnswer)
      setWhyGoodFitAnswer(response.data.misc.whyGoodFitAnswer)
    })

    
    return () => {
    }
  }, [extraComments, companyName, positionName])
  


  const [coverLetterClipboard, setCoverLetterClipboard] = useState({
    value: "",
    copied: false
  })

  const whyGoodFit = `Why do you think you are a good fit for this company?`

  const whatFreeTime = `Please list 2-3 dates and time ranges that you could do an interview.`


  const cover = (`
  New York Metropolitan Area, NY-10010
  +1 (540) 753-1951
  dev.saadat@gmail.com
  https://www.linkedin.com/in/taaseen71/
  https://github.com/Taaseen71/
  https://saadt.netlify.app/
  ${todayDate[0]}\n
  Dear Hiring Manager,
  ${paragraph1}\n
  ${paragraph2}\n
  ${paragraph3}\n
  ${paragraph4}\n
  ${paragraph5}\n
  ${paragraph6}\n
  Sincerely,\n
  Saadat Taaseen\n
            `)


  return (
    <div>
      <h2>Cover Letter</h2>
      <div>
        <CoverLetter
          positionName={positionName}
          companyName={companyName}
          extraComments={extraComments}
          todayDate={todayDate}
          paragraph1={paragraph1}
          paragraph2={paragraph2}
          paragraph3={paragraph3}
          paragraph4={paragraph4}
          paragraph5={paragraph5}
          paragraph6={paragraph6}
        />

        <CopyToClipboard
          options={{ format: "text/plain" }}
          text={cover}
          onCopy={() => setCoverLetterClipboard({ ...coverLetterClipboard, copied: true })}
        >
          <button>Copy Cover Letter</button>
        </CopyToClipboard>

      </div> 
      
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> 

      <div>  
        <h2> Why are you Interesting?</h2>
        <p>{whyGoodFit}</p>
        <p>{whyGoodFitAnswer}</p>
        
      </div> 
      
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
      
      <div>  
        <h2>Availability</h2>
        <p>{whatFreeTime}</p>
        <p>{whatFreeTimeAnswer}</p>
      </div>
      <MailForInterviewRequest positionName={positionName} companyName={companyName} />
    </div>

  )
}

function CoverLetter({ paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, todayDate }) {
  return (
    <div className="content">
      <p>
        
        New York Metropolitan Area, NY-10010<br />
        +1 (540) 753-1951<br />
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

export default Content


