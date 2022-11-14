function CopyCoverLetter(todayDate, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6) {
  const cover = (
  `New York Metropolitan Area,
NY-10010
+1 (540) 753-1951
dev.saadat@gmail.com
https://www.linkedin.com/in/taaseen71
https://github.com/Taaseen71
https://saadt.netlify.app/
${todayDate[0]}\n
Dear Hiring Manager,
\n${paragraph1}
\n${paragraph2}
\n${paragraph3}
\n${paragraph4}
\n${paragraph5}
\n${paragraph6}
Sincerely,
Saadat Taaseen`).trim()
    return cover
}

// import React from 'react'

// const CopyCoverLetter = () => {
//   return (
//     <>
//       <p>
//         New York Metropolitan Area,
//         NY-10010
//         +1 (540) 753-1951
//         dev.saadat@gmail.com
//         https://www.linkedin.com/in/taaseen71
//         https://github.com/Taaseen71
//         https://saadt.netlify.app/
//         <br/>
//         ${todayDate[0]}\n
//       </p>
//       <p>
//         Dear Hiring Manager,
//         ${paragraph1}
//       </p>
//       <p>${paragraph2}</p>
//       <p>${paragraph3}</p>
//       <p>${paragraph4}</p>
//       <p>${paragraph5}</p>
//       <p>${paragraph6}</p>
//       <p>
//         Sincerely,
//         Saadat Taaseen
//       </p>
//     </>
//   )
// }

export default CopyCoverLetter