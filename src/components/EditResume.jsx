import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {Button, ToggleButtonGroup, ToggleButton, TextField, Icon} from '@mui/material';
import axios from 'axios'
import CreateResume from './CreateResume';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const EditResume = () => {

    const [information, setInformation] = useState("")
    const [unmounted, setUnmounted] = useState(true)
    const [usePrimaryAddress, setUsePrimaryAddress] = useState(1)
    const [usePrimaryPhoneNumber, setUsePrimaryPhoneNumber] = useState(1)
    const [resumeDetails, setResumeDetails] = useState({})
    const [showAddSkill, setShowAddSkill] = useState(false);
    const [newSkill, setNewSkill] = useState("")

    const [showExperience, setShowExperience] = useState(false)
    const [showSkills, setShowSkills] = useState(false)

    const styles = {
      margin: {
          marginBottom: '10px'
      },
      divColumn: {
        display:'flex',
        flexDirection: 'column'
      },
      textFieldSpaing: {
        paddingBottom: "15px"
      }
    }
    
    useEffect(() => {  
        setUnmounted(false) 
        GetFile()
        GetResume()
        return () => {
          setUnmounted(true)
        }
      }, [unmounted])
    
      const GetFile = () => {
        axios.get('/CoverLetterContent.json').then(response => {
          setInformation(response.data.information)
        })
      }

      const GetResume = async () => {
        const {data} = await axios.get('/Resume.json')
        // console.log(data);
        setResumeDetails(data)
      }
    
    
    
    
  return (
    <div style={{ margin: "10px", marginBottom: "200px"}}>
        <div style={{display: 'flex', flexDirection: "column", alignItems:"center", margin: "5px"}}>
            <Button variant="contained" color="error" style={styles.margin}>
                <Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link>
            </Button>
            <div style={styles.margin}>
                <ToggleButtonGroup
                    color="primary"
                    value={usePrimaryAddress}
                    size="small"
                    exclusive
                    onChange={(e, newValue) => {
                        if(newValue !==null){
                            setUsePrimaryAddress(newValue)
                        }
                    }}
                    aria-label="Use Phone Number"
                    >
                    <ToggleButton value={1}>Use Alternate Address</ToggleButton>
                    <ToggleButton value={0}>Use Personal Address</ToggleButton>
                </ToggleButtonGroup>
            </div>        
            <div style={styles.margin}>
                <ToggleButtonGroup
                    color="primary"
                    value={usePrimaryPhoneNumber}
                    size="small"
                    exclusive
                    onChange={(e, newValue) => {
                        if (newValue !==null){
                            setUsePrimaryPhoneNumber(newValue)
                        }
                    }}
                    aria-label="Use Phone Number"
                >
                    <ToggleButton value={1}>Use Alternate Phone Number</ToggleButton>
                    <ToggleButton value={0}>Use Personal Phone Number</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>

        <div>
            <CreateResume 
                address={usePrimaryAddress ? information.altAddress : information.address} 
                stateAndZip={usePrimaryAddress? information.altStateAndZip : information.stateAndZip} 
                phoneNumber={usePrimaryPhoneNumber ? information.altPhoneNumber : information.phoneNumber}
                resumeDetails={resumeDetails}
            />
        </div>

        <div className="edit-resume">          
            <div style={{padding: '15px'}} className="experience">
                    <Button variant="outlined" onClick={()=> {setShowExperience(!showExperience)}}>{showExperience ? 'Hide Experience': 'Show Experience'}</Button>
                {showExperience && resumeDetails.experience && resumeDetails.experience.map((job, id) => (
                    <div key={id}>
                        <h2>{job.company}</h2>
                        <h3>Title</h3>
                        <TextField 
                            style={{paddingBottom: '15px'}} 
                            fullWidth 
                            className="Title" 
                            label="Title" 
                            value={job.title}
                            onChange={e => {
                                setResumeDetails(current => {
                                    current.experience[id].title = e.target.value
                                    return {...current}
                                })
                            }}
                        />
                        <h3>Responsibilities: </h3>
                        {job.responsibilities.map((responsibility, xd) => (
                            <TextField 
                                lg={10}
                                key={xd} 
                                multiline 
                                variant='outlined' 
                                style={{paddingBottom: '15px'}} 
                                fullWidth 
                                label={`Responsibility#: ${xd + 1}`} 
                                value={responsibility}
                                onChange={e => {
                                    setResumeDetails(current => {
                                        current.experience[id].responsibilities.splice(xd, 1, e.target.value)
                                        return {...current}
                                    })
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div style={{padding: '15px'}} className="skills">
                <Button variant="outlined" onClick={()=> {setShowSkills(!showSkills)}}>{showSkills ? 'Hide Skills': 'Show Skills'}</Button>
                {showSkills && 
                    <div>
                        <h2>Skills</h2>
                        <div>
                            {resumeDetails.skills && resumeDetails.skills.map((skill, id) => (
                                <span key={id}>
                                    <Button 
                                        variant="outlined"
                                        style={{margin: "5px"}}
                                        onClick={()=> {
                                            setResumeDetails(current => {
                                                current.skills.splice(id, 1)
                                                return {...current}
                                            })
                                        }}
                                    >{skill}<Icon><RemoveCircleIcon fontSize='small'/></Icon></Button>
                                </span>
                            ))}
                            { !showAddSkill && 
                                <Button variant="contained" color="success" onClick={() => {setShowAddSkill(true)}}>Add</Button>
                            } 
                            {
                                showAddSkill && 
                                <div style={{display: 'flex', flexDirection:"column", alignItems:"center"}}>
                                    <div>
                                        <TextField 
                                            style={{paddingBottom: '15px'}}  
                                            className="New Skill" 
                                            label="New Skill" 
                                            value={newSkill}
                                            onChange={(e) => {setNewSkill(e.target.value)}}
                                             onKeyUp={(e) => {
                                                if (e.key === 'Enter'){
                                                    setResumeDetails(current => {
                                                        current.skills.splice(0, 0, newSkill)
                                                        setNewSkill("")
                                                        return {...current}
                                                    })
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Button variant="contained" color="success" 
                                            onClick={() => {
                                                setShowAddSkill(false)
                                                setResumeDetails(current => {
                                                    current.skills.splice(0, 0, newSkill)
                                                    setNewSkill("")
                                                    return {...current}
                                                })
                                            }}
                                        >Add Skill</Button>
                                    </div>
                                </div>
                            }   
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default EditResume