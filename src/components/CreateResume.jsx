import React, {useEffect, useState} from 'react'
import {  Document,  Page,  Text,  View, StyleSheet, PDFViewer, Font } from "@react-pdf/renderer";
import axios from "axios"
import roboto from "../assets/fonts/Roboto.ttf"
import robotoBold from "../assets/fonts/RobotoBold.ttf"

Font.register({
    family: "roboto",
    format:"truetype",
    fonts: [
        {
            src: roboto,
        },
        {
            src: robotoBold,
            fontWeight:"bold"
        },
    ]
  })
      // Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "black",
    
    },
    section: {
        margin: 10,
        padding: '20 45',
        fontSize: 10,
        // fontFamily: 'roboto'
        fontFamily:'Times-Roman',
    },
    viewer: {
        display: 'flex',
        margin: 'auto',
        justifyContent: "center",
        width: "80vw", //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
    paragraphBreak: {
        paddingBottom: 6
    },
    lineBreak: {
        paddingBottom: 5
    },
    title: {
        display: 'flex',
        justifyContent: "center",
        // border: "2px solid black",
        textAlign: "center",
    },
    header1: {
        fontSize: 12,
        fontFamily: "Times-Bold",
        fontWeight:  800,
        textTransform: "uppercase",
        paddingBottom: 3
    },
    header2: {
        fontSize: 11,
        fontFamily: "Times-Bold",
        fontWeight: "bold",
    },
    bold: {
        fontFamily: "Times-Bold",
        fontWeight: "bold"
    },
    underline: {
        textDecoration: "underline",
    }
});

const CreateResume = ({address, stateAndZip,phoneNumber, resumeDetails}) => {

    const [coverLetterDetails, setCoverLetterDetails] = useState({})
    // const [resumeDetails, setResumeDetails] = useState({})
    const [unmounted, setUnmounted] = useState(true)

    useEffect(() => {   
        setUnmounted(false);
        GetCoverLetter()
        // GetResume();
        return function () {
            setUnmounted(true);
        };
      }, [unmounted])

      const GetCoverLetter = async () => {
        const {data} = await axios.get('/CoverLetterContent.json')
        // console.log(data)
        setCoverLetterDetails(data && data.information)
      }

    //   const GetResume = async () => {
    //     const {data} = await axios.get('/Resume.json')
    //     // console.log(data);
    //     setResumeDetails(data)
    //   }

  return (
    <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
        {/*render a single page*/}
        <Page size="legal" style={styles.page}>
            <View style={styles.section}>
                <div style={{...styles.title, ...styles.paragraphBreak}}>
                    <Text>{resumeDetails.title}</Text>
                    <Text>{address}, {stateAndZip} | {phoneNumber}</Text>
                    <Text>{coverLetterDetails.email} | {coverLetterDetails.portfolio}</Text>
                </div>
                <div style={{...styles.paragraphBreak}}>
                    <Text style={{...styles.header1}}>Experience</Text>
                    {resumeDetails.experience && resumeDetails.experience.map(job => {
                        return (
                            <div key={job.company} style={{...styles.lineBreak}}>
                                <Text style={styles.header2}>{job.title} ({job.date})</Text>
                                <Text style={styles.underline}>{job.company}{job.website && ` - ${job.website} - `}{job.industry && ` (${job.industry})`}{`, ${job.location}`}</Text>
                                {job.responsibilities && job.responsibilities.map(responsibility => (
                                    <Text key={responsibility}>&#x2022; {responsibility}</Text>
                                ))}
                            </div>
                        )
                    })}
                </div>
                <div style={{...styles.paragraphBreak}}>
                    <Text style={{...styles.header1}}>Skills</Text>
                    <Text>{resumeDetails.skills && resumeDetails.skills.map(skill => {
                        if (resumeDetails.skills.indexOf(skill) === resumeDetails.skills.length-1){
                            return `${skill}`
                        }
                        else {
                            return `${skill}, `
                        }
                    })}
                    </Text>
                </div>
                <div style={{...styles.paragraphBreak}}>
                    <Text style={{...styles.header1}}>Education</Text>
                    {resumeDetails.education && resumeDetails.education.map(edu => {
                        return (
                            <div key={edu.school} style={styles.lineBreak}>
                                <Text>{edu.accomplishment}{edu.subject && ` - ${edu.subject}`}{` (${edu.date})`}</Text>
                                <Text>{`${edu.school}, ${edu.locationAbbr}`}</Text>
                            </div>
                        )
                    })}
                </div>
                <div style={{...styles.paragraphBreak}}>
                    <Text style={{...styles.header1}}>Projects</Text>
                    {resumeDetails.projects && resumeDetails.projects.projects && resumeDetails.projects.projects.map(project => {
                        return (
                            <div key={project.name} style={styles.lineBreak}>
                                <Text style={styles.bold}>{project.name}{project.languages && ` — (${project.languages})`}{project.link && ` — ${project.link}`}</Text>
                                <Text>{project.description}</Text>
                            </div>
                        )
                    })}
                </div>
            </View>
        </Page>
        </Document>
    </PDFViewer>
  )
}

export default CreateResume