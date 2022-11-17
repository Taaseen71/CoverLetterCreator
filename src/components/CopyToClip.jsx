import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Button} from '@mui/material';

function CopyToClip({ copiedToClipboard, setCopiedToClipboard, positionName, companyName, link }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CopyToClipboard
          options={{ format: "text/plain" }}
          // text={`${positionName}	${companyName}	${link}`}
          text={`${positionName}\t${companyName}\t${link}`}
          onCopy={() => setCopiedToClipboard({ ...copiedToClipboard, copied: true })}
        >
          <Button variant="contained">Copy for Excel</Button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default CopyToClip
