import {useState} from 'react'
import './styles.css'
import {ThemeColorProvider} from '@sanity/ui'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'
import ButtonsRow from './ButtonsRow/ButtonsRow'
import PluginProvider from '../context/PluginProvider'

const PluginContainer = () => {
  const [url, setUrl] = useState('')
  return (
    <PluginProvider>
      <ThemeColorProvider>
        <div className="plugin-container">
          <Input url={url} setUrl={setUrl} />
          <QRCodePreview url={url} />
          <ButtonsRow />
        </div>
      </ThemeColorProvider>
    </PluginProvider>
  )
}

export default PluginContainer
