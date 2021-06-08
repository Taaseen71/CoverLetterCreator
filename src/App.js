
import './App.css';
import React, { useState, } from 'react';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyToClip from './components/CopyToClip'
import CreateExcelTabs from './components/CreateExcelTabs';
import Content from './components/Content.jsx';




function App() {

  const [todayDate, setTodayDate] = useState(new Date().toLocaleString().split(","))
  const [positionName, setPositionName] = useState("POSITION NAME");
  const [companyName, setCompanyName] = useState("COMPANY NAME");
  const [link, setLink] = useState('')
  const [extraComments, setExtraComments] = useState("");
  const [statePositionChange, setStatePositionChange] = useState("")
  const [stateCompanyChange, setStateCompanyChange] = useState("")
  const [stateLinkChange, setStateLinkChange] = useState("")
  const [stateExtraComments, setStateExtraComments] = useState("")
  const [background, setBackground] = useState({
    backgroundColor: 'white',
    color: 'black'
  })

  const [copiedToClipboard, setCopiedToClipboard] = useState({
    value: '',
    copied: false,
  });

  console.log("today's Date: " + todayDate[0])

  const grid = [
    [{ value: positionName }, { value: companyName }, { value: 'Link', expr: link }],
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setPositionName(statePositionChange)
    setCompanyName(stateCompanyChange)
    setLink(stateLinkChange)
    setExtraComments(stateExtraComments)
    //! Clear Defaults Below
    setStatePositionChange("")
    setStateCompanyChange("")
    setStateExtraComments("")
    setStateLinkChange("")
  }

  const handlePositionChange = (event) => {
    setStatePositionChange(event.target.value)
  }
  const handleCompanyChange = (event) => {
    setStateCompanyChange(event.target.value)
  }

  const handleLinkChange = (event) => {
    setStateLinkChange(event.target.value)
  }

  const handleExtraCommentChange = event => {
    setStateExtraComments(event.target.value)
  }

  const setBackgroundColor = () => {
    if (background.backgroundColor === 'black') {
      setBackground({
        backgroundColor: 'white',
        color: 'black'
      })
    }
    else {
      setBackground({
        backgroundColor: 'black',
        color: 'white'
      })
    }

    console.log(background)
  }


  return (
    <div
      className="fullPage"
      style={{ color: background.color, backgroundColor: background.backgroundColor }}
    >
      <button onClick={() => setBackgroundColor()}>Background Color: {background.backgroundColor}</button>
      <header className="header">
        <form onSubmit={handleSubmit} autoComplete="off">
          <p className="headerContents">Saadat Taaseen </p>
          <label className="headerContents">
            Position Name:
                        <input type="text" name="PositionName" value={statePositionChange} onChange={handlePositionChange} />
          </label>
          <label className="headerContents">
            Company Name:
                        <input type="text" name="CompanyName" value={stateCompanyChange} onChange={handleCompanyChange} />
          </label>
          <label className="headerContents">
            Link to Job
                        {/* <input type="text" name={stateCompanyName} onChange={handleCompanyChange} /> */}
            <input type="text" name="LinkName" value={stateLinkChange} onChange={handleLinkChange} />
          </label>
          <label className="headerContents">
            Extra Comments:
                        {/* <input type="text" name={stateCompanyName} onChange={handleCompanyChange} /> */}
            <textarea name="extraText" type="text" value={stateExtraComments} onChange={handleExtraCommentChange} id="" cols="50" rows="2"></textarea>
          </label>

          <input className="headerContents" type="submit" value="Submit" />
        </form>
      </header>


      <div>
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', padding: '10px' }}>

          {/* //* Create Excel Sheet */}
          <CreateExcelTabs grid={grid} />

          {/* //* COPY TO CLIPBOARD */}
          <CopyToClip setCopiedToClipboard={setCopiedToClipboard} copiedToClipboard={copiedToClipboard} positionName={positionName} companyName={companyName} link={link} grid={grid} />
        </div>

        {/* //* Cover Letter and Interview Prompt */}
        <Content positionName={positionName} companyName={companyName} extraComments={extraComments} todayDate={todayDate} />

      </div>

    </div >
  );

}

export default App;



    //? Old Scrapped on March 17th 2021;

    //                 const paragraph1 = `I am writing to express my strong interest in the ${positionName} position at ${companyName}. I am a highly self-motivated Full Stack Software Engineer who exhibits strong analytical and critical thinking skills to write custom HTML, CSS and JavaScript, as well as following semantic W3C coding practices. I have experience in React-Native, React, Node, Ruby On Rails, and have worked with databases such as MongoDB, PostgreSQL and Firebase. I have experience building websites with full CRUD and authentication, and am passionate about coding. I have experience working with UX/UI designers and work well with a team, with minimal supervision. I am also well versed in mobile first and future friendly designs with an advanced knowledge of Git version control and progressive enhancement. I am a very fast learner, and have a lot of experience working with CSS, SCSS, Flexbox and Grid systems. I have used promises, Async and Await calls, and States and Props in my previous projects and feel comfortable using them in both React Hooks and Class based components. I have spent countless hours fixing bugs for both me and my colleagues' codes and have developed very strong skills to find and fix errors and provide a beautifully designed, scalable and functional website. ${extraComments}`

    // const paragraph2 = `I am a recent graduate from General Assembly as a Software Engineering Fellow. Before joining GA, I worked as a Quality Control Scientist in a pharmaceutical company and from there I gathered extensive knowledge on how to extract information through analysis and make reports with proper documentation practices that I am sure will help me in this field of work as well. I have a lot of experience working and collaborating with large groups and work particularly well under pressure. I have learnt that through patience, hard  work and a growth mindset, positive results can always be attainable.`

    // const paragraph3 = `I recently completed an immersive Software Engineering program from General Assembly, with 480 hours of training where I honed my skills in JavaScript, HTML, React.js, Ruby on Rails, Netlify, Heroku and other packages.  During the program, I used APIs to create front-end websites using JavaScript and React, and later used back-end runtime environments and frameworks like Node.js and Ruby on Rails to create RESTful APIs that have full CRUD and server-side Authentication capabilities. My portfolio and previous projects can be viewed through this link [http://saadt.netlify.app/].`

    // const paragraph4 = `I have a good understanding of Front-End Development using Vanilla JavaScript and React.js (both class-based Components and Hooks) and have built web-pages with responsive cross browser and device responsive development. I also have experience in Full Stack development that requires understanding of React, Node, NPM packages, Express and MongoDB databases and various operating systems like Windows, Mac OS and basic terminal based Linux environments. I am confident that my knowledge and experiences will make me an excellent candidate for the ${positionName} position at ${companyName}. Thank you for your time and consideration.`

    //? End March 17th 2021
