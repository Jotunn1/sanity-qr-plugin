import {useQRCode} from 'next-qrcode'
import {useRef} from 'react'

const QRCodePreview = ({url, size}: {url: string; size?: number}) => {
  const {Image} = useQRCode()
  const imageRef = useRef(null)

  const defaultOptions = {
    type: 'image/jpeg',
    level: 'H',
    margin: 1,
    scale: 10,
    width: size ? size : 300,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  }

  return (
    <div
      style={{width: defaultOptions.width + 'px', height: defaultOptions.width + 'px'}}
      ref={imageRef}
    >
      <Image
        text={`${url ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}`}
        options={defaultOptions}
      />
    </div>
  )
}

export default QRCodePreview
