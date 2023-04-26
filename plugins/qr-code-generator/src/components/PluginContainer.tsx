import {useState, createRef} from 'react'
import './styles.css'
import {ThemeColorProvider} from '@sanity/ui'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'
import ButtonsRow from './ButtonsRow/ButtonsRow'

const PluginContainer = () => {
  const [url, setUrl] = useState('')
  const inputRef = createRef();

  const generateCode = () => {
    const inputValue = (inputRef.current as HTMLInputElement)?.value

    if (inputValue) {
      setUrl(inputValue)
    }
  }

  const downloadImage = () => {
    console.log('download')
  }

  return (
    <ThemeColorProvider>
      <div className="plugin-container">
        <Input ref={inputRef} />
        <QRCodePreview url={url} />
        <ButtonsRow generateCode={generateCode} downloadImage={downloadImage} />
      </div>
    </ThemeColorProvider>
  )
}

export default PluginContainer
