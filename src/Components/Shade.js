import React from 'react'
import { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Shade = ({ shade }) => {
  const [isCopied, setIsCopied] = useState(false)
  useEffect(() => {
    let interval = 2000
    if (isCopied === true) {
      setInterval(() => {
        {
          setIsCopied(false)
        }
      }, interval)
      return () => {
        clearInterval(interval)
      }

    }

  }, [isCopied])

  return (
    <CopyToClipboard text={shade.hexString()} onCopy={() => setIsCopied(true)} >
      <div className="shade" style={{ backgroundColor: shade.hexString() }} >
        {
          isCopied ? (
            <span className="copied">copied!</span>
          ) : (
              <span>{shade.hexString()}</span>
            )
        }
      </div>
    </CopyToClipboard>
  )
}

export default Shade
