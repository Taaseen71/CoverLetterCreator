import React, { useState, useEffect } from 'react'
import MailForInterviewRequest from './MailForInterviewRequest'
// import { useStateIfMounted } from "use-state-if-mounted";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyCoverLetter from './CopyCoverLetter';
import axios from "axios";
import {Button, Typography} from '@mui/material';


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
    GetFile()
    return () => {
    }
  }, [extraComments, companyName, positionName])

  const GetFile = () => {
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
  }
  


  const [coverLetterClipboard, setCoverLetterClipboard] = useState({
    value: "",
    copied: false
  })

  const whyGoodFit = `Why do you think you are a good fit for this company?`

  const whatFreeTime = `Please list 2-3 dates and time ranges that you could do an interview.`

  //? THIS COPIES THE BUTTON
//   const cover = (
// `New York Metropolitan Area, 
// NY-10010
// +1 (540) 753-1951
// dev.saadat@gmail.com
// https://www.linkedin.com/in/taaseen71/
// https://github.com/Taaseen71/
// https://saadt.netlify.app/

// ${todayDate[0]}

// Dear Hiring Manager,
// ${paragraph1}
// ${paragraph2}
// ${paragraph3}
// ${paragraph4}
// ${paragraph5}
// ${paragraph6}

// Sincerely,
// Saadat Taaseen`
// )


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
          text={CopyCoverLetter(todayDate, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6)}
          onCopy={() => setCoverLetterClipboard({ ...coverLetterClipboard, copied: true })}
        >
          <Button variant="contained">Copy Cover Letter</Button>
        </CopyToClipboard>

      </div> 
      
      <div style={{paddingTop: '100px'}}>  
        <h2> Why are you Interesting?</h2>
        <p>{whyGoodFit}</p>
        <p>{whyGoodFitAnswer}</p>
        
      </div> 
      
      <div style={{paddingTop: '100px'}}>  
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
<Typography variant="body1" gutterBottom><br/>
{`New York Metropolitan Area, NY-10010`}<br/>
{`+1 (540) 753-195`}<br/>
{`dev.saadat@gmail.com`}<br/>
{`https://www.linkedin.com/in/taaseen71/`}<br/>
{`https://github.com/Taaseen71/`}<br/>
{`https://saadt.netlify.app/`}<br/>
</Typography>
<Typography variant="body1" gutterBottom  className="todaysDate">{todayDate[0]}</Typography><br/>
<Typography variant="body1" gutterBottom>Dear Hiring Manager,<br /></Typography>
<Typography variant="body1" gutterBottom>
{paragraph1}<br/><br/>
{paragraph2}<br/><br/>
{paragraph3}<br/><br/>
{paragraph4}<br/><br/>
{paragraph5}<br/><br/>
{paragraph6}
</Typography>< br />
<Typography variant="body1" gutterBottom>Sincerely,< br /> 
Saadat Taaseen</Typography>
</div>
  )
}

export default Content


