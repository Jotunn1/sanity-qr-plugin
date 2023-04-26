import {useQRCode} from 'next-qrcode'

const QRCodePreview = ({url}: {url: string}) => {
  const {Image} = useQRCode()
  console.log(url, 'from preview')
  const defaulOptions = {
    level: 'H',
    margin: 2,
    scale: 10,
    width: 300,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  }
  return <Image text="https://www.youtube.com/watch?v=dQw4w9WgXcQ" options={defaulOptions} />
}

export default QRCodePreview
