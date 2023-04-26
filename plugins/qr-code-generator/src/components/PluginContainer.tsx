import {useState} from 'react'
import './styles.css'
import {ThemeColorProvider} from '@sanity/ui'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'
import ButtonsRow from './ButtonsRow/ButtonsRow'

const PluginContainer = () => {
  const [url, setUrl] = useState('')

  const generateCode = () => {
    console.log(url, 'generate code')
  }

  return (
    <ThemeColorProvider>
      <div className="plugin-container">
        <Input />
        <QRCodePreview url={url} />
        <ButtonsRow generateCode={generateCode} />
      </div>
    </ThemeColorProvider>
  )
}

export default PluginContainer
