import React, { useState, useEffect } from 'react'
import MailForInterviewRequest from './MailForInterviewRequest'
// import { useStateIfMounted } from "use-state-if-mounted";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyCoverLetter from './CopyCoverLetter';
import CreatePDF from './CreatePDF';
import axios from "axios";
import {Button, Typography} from '@mui/material';


function Content({ positionName, companyName, extraComments, todayDate, usePhoneNumber, usePrimaryAddress }) {
  const [paragraph1, setParagraph1] = useState("")
  const [paragraph2, setParagraph2] = useState("")
  const [paragraph3, setParagraph3] = useState("")
  const [paragraph4, setParagraph4] = useState("")
  const [paragraph5, setParagraph5] = useState("")
  const [paragraph6, setParagraph6] = useState("")
  const [information, setInformation] = useState("")
  const [whatFreeTimeAnswer, setWhatFreeTimeAnswer] = useState("")
  const [whyGoodFitAnswer, setWhyGoodFitAnswer] = useState("")

  const [coverLetterClipboard, setCoverLetterClipboard] = useState({
    value: "",
    copied: false
  })

  useEffect(() => {   
    GetFile()
    return () => {
    }
  }, [extraComments, companyName, positionName])

  const GetFile = () => {
    axios.get('/CoverLetterContent.json').then(response => {
      setParagraph1(`I would like to express my strong interest in your open ${positionName} position with ${companyName}.\u00A0` + (response.data.coverLetterContent.paragraph1))
      setParagraph2(response.data.coverLetterContent.paragraph2 + `I have exceeded multiple expectations from my current team, and want to be able to use my experiences to help reach all the goals that ${companyName} has. I am always looking to grow as an Engineer and looking forward to learning new languages and using my skill sets to benefit my peers.`)
      setParagraph3(response.data.coverLetterContent.paragraph3 + `\u00A0${extraComments}`)
      setParagraph4(response.data.coverLetterContent.paragraph4)
      setParagraph5(response.data.coverLetterContent.paragraph5)
      setParagraph6(response.data.coverLetterContent.paragraph6)
      setInformation(response.data.information)
      setWhatFreeTimeAnswer(response.data.misc.whatFreeTimeAnswer)
      setWhyGoodFitAnswer(response.data.misc.whyGoodFitAnswer)
    })
  }
  



  return (
    <div>
      <h2>Cover Letter</h2>
      <div>
        <CoverLetter
          positionName={positionName}
          companyName={companyName}
          extraComments={extraComments}
          todayDate={todayDate}
          usePhoneNumber={usePhoneNumber}
          usePrimaryAddress={usePrimaryAddress}
          paragraph1={paragraph1}
          paragraph2={paragraph2}
          paragraph3={paragraph3}
          paragraph4={paragraph4}
          paragraph5={paragraph5}
          paragraph6={paragraph6}
          information={information}
        />

        <CopyToClipboard
          style={{marginBottom: 50}} 
          options={{ format: "text/plain" }}
          text={CopyCoverLetter(todayDate, information, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, usePhoneNumber, usePrimaryAddress)}
          onCopy={() => setCoverLetterClipboard({ ...coverLetterClipboard, copied: true })}
        >
          <Button variant="contained">Copy Cover Letter</Button>
        </CopyToClipboard>
        <br />
        <CreatePDF
          positionName={positionName}
          companyName={companyName}
          extraComments={extraComments}
          todayDate={todayDate}
          usePhoneNumber={usePhoneNumber}
          usePrimaryAddress={usePrimaryAddress}
          paragraph1={paragraph1}
          paragraph2={paragraph2}
          paragraph3={paragraph3}
          paragraph4={paragraph4}
          paragraph5={paragraph5}
          paragraph6={paragraph6}
          information={information}
          />
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

function CoverLetter({ information, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, todayDate, usePhoneNumber, usePrimaryAddress }) {
  return (
<div className="content">
<Typography variant="body1" gutterBottom><br/>
{usePrimaryAddress ? `${information.altAddress}, ${information.altStateAndZip}` : `${information.address}, ${information.stateAndZip}`}<br/>
{usePhoneNumber ? information.altPhoneNumber : information.phoneNumber}<br/>
{information.email}<br/>
{information.linkedin}<br/>
{information.github}<br/>
{information.portfolio}<br/>
</Typography>
<Typography variant="body1" gutterBottom  className="todaysDate">{todayDate[0]}</Typography><br/>
<Typography variant="body1" gutterBottom>{information.intro},<br /></Typography>
<Typography variant="body1" gutterBottom>
{paragraph1}<br/><br/>
{paragraph2}<br/><br/>
{paragraph3}<br/><br/>
{paragraph4}<br/><br/>
{paragraph5}<br/><br/>
{paragraph6}
</Typography>< br />
<Typography variant="body1" gutterBottom>{information.outro},< br /> 
{information.name}</Typography>
</div>
  )
}

const whyGoodFit = `Why do you think you are a good fit for this company?`

const whatFreeTime = `Please list 2-3 dates and time ranges that you could do an interview.`

export default Content


