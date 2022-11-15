import React, {useState} from 'react'
import CopyToClip from './components/CopyToClip'
import CreateExcelTabs from './components/CreateExcelTabs';
import Content from './components/Content.jsx';
import { TextField, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


const Body = ({setBackgroundColor, background}) => {
    
    const [todayDate] = useState(new Date().toLocaleString().split(","))
    const [statePositionChange, setStatePositionChange] = useState("")
    const [stateCompanyChange, setStateCompanyChange] = useState("")
    const [stateLinkChange, setStateLinkChange] = useState("")
    const [stateExtraComments, setStateExtraComments] = useState("")
    
    const [positionName, setPositionName] = useState("POSITION NAME");
    const [companyName, setCompanyName] = useState("COMPANY NAME");
    const [link, setLink] = useState('')
    const [extraComments, setExtraComments] = useState("");

    const [usePhoneNumber, setUsePhoneNumber] = useState(1)

    const [copiedToClipboard, setCopiedToClipboard] = useState({
        value: '',
        copied: false,
    });
    const grid = [
        [{ value: positionName }, { value: companyName }, { value: 'Link', expr: link }],
    ]

        
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
    
    const Restore = () => {
        console.log(positionName, companyName, extraComments, link)
            positionName && setStatePositionChange(positionName)
            companyName && setStateCompanyChange(companyName)
            link && setStateLinkChange(link)
            companyName && setStateCompanyChange(companyName)
            extraComments && setStateExtraComments(extraComments)
    }
    
  return (
    <div>
        <div>
            <Button variant="outlined" color="secondary" onClick={() => setBackgroundColor()}>DarkMode: {background.darkMode}</Button>
            <header className="header">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Typography variant='h2' className="headerContents">Saadat Taaseen </Typography>
                    
                    <label className="headerContents">
                        <TextField 
                            sx={{ input: { color: background.color}}} 
                            id="outlined-basic" 
                            label="Position Name" 
                            fullWidth
                            variant="outlined" 
                            type="text" 
                            value={statePositionChange} 
                            onChange={handlePositionChange} 
                        />
                    </label>

                    <label className="headerContents">
                        <TextField 
                            sx={{ input: { color: background.color}}} 
                            id="outlined-basic" 
                            label="Company Name" 
                            variant="outlined" 
                            fullWidth={true}
                            type="text" 
                            value={stateCompanyChange} 
                            onChange={handleCompanyChange} 
                        />
                    </label>

                    <label className="headerContents">
                        <TextField 
                            sx={{ input: { color: background.color}}} 
                            id="outlined-basic" 
                            label="Link To Job" 
                            variant="outlined" 
                            type="text" 
                            value={stateLinkChange} 
                            onChange={handleLinkChange} 
                        />
                    </label>

                    <label className="headerContents">
                        <TextField
                            style={{textAlign: 'left'}}
                            label="Extra Comments"
                            multiline
                            minRows={3}
                            value={stateExtraComments} 
                            onChange={handleExtraCommentChange}
                        />
                    </label>
                
                    {/* <input className="headerContents" type="submit" value="Submit" /> */}
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                                <Button fullWidth={true} variant="contained" color="secondary" className="headerContents" type="submit" value="Submit">Submit</Button>
                        </Grid>
                        <Grid xs={6}>
                                <Button fullWidth={true} variant="outlined" color="warning" onClick={Restore}>Restore</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                            <ToggleButtonGroup
                                color="secondary"
                                value={usePhoneNumber}
                                size="small"
                                exclusive
                                onChange={(e, newValue) => {setUsePhoneNumber(newValue)}}
                                aria-label="Use Phone Number"
                            >
                                <ToggleButton value={0}>Use Personal Phone Number</ToggleButton>
                                <ToggleButton value={1}>Use Alternate Phone Number</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    {/* <Grid container spacing={2}>
                        <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                            <ToggleButtonGroup
                                color="secondary"
                                value={usePhoneNumber}
                                size="small"
                                exclusive
                                onChange={(e, newValue) => {setUsePhoneNumber(newValue)}}
                                aria-label="Use Phone Number"
                            >
                                <ToggleButton value={0}>Use Personal Phone Number</ToggleButton>
                                <ToggleButton value={1}>Use Alternate Phone Number</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid> */}
                </form>
            </header>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', padding: '10px' }}>
            {/* //* Create Excel Sheet */}
                <CreateExcelTabs grid={grid} />
            {/* //* COPY TO CLIPBOARD */}
            <CopyToClip setCopiedToClipboard={setCopiedToClipboard} copiedToClipboard={copiedToClipboard} positionName={positionName} companyName={companyName} link={link} grid={grid} />
          </div>
          {/* //* Cover Letter and Interview Prompt */}
          <Content positionName={positionName} companyName={companyName} extraComments={extraComments} todayDate={todayDate} usePhoneNumber={usePhoneNumber} />
        </div>
    </div>
  )
}

export default Body