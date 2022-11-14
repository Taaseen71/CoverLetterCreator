import React from 'react'
import {  Document,  Page,  Text,  View, StyleSheet, PDFViewer, Font } from "@react-pdf/renderer";


// Create Document Component
const CreatePDF = ({todayDate, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, information}) => {
    Font.register({
      family: 'Roboto',
      src: 'https://fonts.cdnfonts.com/css/roboto'
    });
    // Create styles
    const styles = StyleSheet.create({
      page: {
        backgroundColor: "white",
        color: "black",
      
      },
      section: {
        margin: 10,
        padding: 45,
        fontSize: 11,
        // fontFamily:"Roboto"
        fontFamily:'Times-Roman'
      },
      viewer: {
        display: 'flex',
        margin: 'auto',
        justifyContent: "center",
        width: "90vw", //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
      },
      paragraphSpace: {
          paddingBottom: 15
      },
      lineBreak: {
          paddingBottom: 8
      }
    });
    
    return (
        <PDFViewer style={styles.viewer}>
          {/* Start of the document*/}
          <Document>
            {/*render a single page*/}
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>{information.address}, {information.stateAndZip}</Text>
                <Text>{information.altPhoneNumber}</Text>
                <Text>{information.email}</Text>
                <Text>{information.linkedin}</Text>
                <Text>{information.github}</Text>
                <Text style={styles.lineBreak}>{information.portfolio}</Text>
                <Text style={styles.paragraphSpace}>{todayDate[0]}</Text>
                <Text style={styles.lineBreak}>{information.intro},</Text>
                <Text style={styles.paragraphSpace}>{paragraph1}</Text>
                <Text style={styles.paragraphSpace}>{paragraph2}</Text>
                <Text style={styles.paragraphSpace}>{paragraph3}</Text>
                <Text style={styles.paragraphSpace}>{paragraph4}</Text>
                <Text style={styles.paragraphSpace}>{paragraph5}</Text>
                <Text style={styles.paragraphSpace}>{paragraph6}</Text>
                <Text>{information.outro},</Text>
                <Text>{information.name}</Text>

              </View>
            </Page>
          </Document>
        </PDFViewer>
    );
}


export default CreatePDF