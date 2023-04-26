import {useState} from 'react'
import './styles.css'
import {Button, ThemeColorProvider} from '@sanity/ui'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'
import ButtonsRow from './ButtonsRow/ButtonsRow'

const PluginContainer = () => {
  const [url, setUrl] = useState('')
  return (
    <ThemeColorProvider>
      <div className="plugin-container">
        <Input url={url} setUrl={setUrl} />
        <QRCodePreview url={url} />
        <ButtonsRow />
      </div>
    </ThemeColorProvider>
  )
}

export default PluginContainer
