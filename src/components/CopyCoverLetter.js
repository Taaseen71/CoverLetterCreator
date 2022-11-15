function CopyCoverLetter(todayDate, information, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, usePhoneNumber) {
  const cover = information && (
  `${information.address}, ${information.stateAndZip}
${usePhoneNumber ? information.altPhoneNumber : information.phoneNumber}
${information.email}
${information.linkedin}
${information.github}
${information.portfolio}\n
${todayDate[0]}\n
${information.intro},
\n${paragraph1}
\n${paragraph2}
\n${paragraph3}
\n${paragraph4}
\n${paragraph5}
\n${paragraph6}
\n${information.outro},
${information.name}`
).trim()
    return cover
}

export default CopyCoverLetter
