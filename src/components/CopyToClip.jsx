import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
          <button>Copy for Excel</button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default CopyToClip
