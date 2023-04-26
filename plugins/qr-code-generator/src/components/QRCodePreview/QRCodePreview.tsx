import {useQRCode} from 'next-qrcode'

const QRCodePreview = ({url}: {url: string}) => {
  const {Image} = useQRCode()

  const defaultOptions = {
    type: 'image/jpeg',
    level: 'H',
    margin: 2,
    scale: 10,
    width: 300,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  }

  return (
    <Image
      text={`${url ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}`}
      options={defaultOptions}
    />
  )
}

export default QRCodePreview
