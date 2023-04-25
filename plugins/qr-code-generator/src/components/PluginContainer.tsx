import './styles.css'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'
import {Button, ThemeColorProvider} from '@sanity/ui'
import {GenerateIcon, DownloadIcon} from '@sanity/icons'

const PluginContainer = () => {
  return (
    <ThemeColorProvider>
      <div className="plugin-container">
        <Input />
        <QRCodePreview />
        <div className="buttons">
          <Button
            icon={GenerateIcon}
            text="Generate QR"
            fontSize={[2, 2, 3]}
            padding={[3, 3, 4]}
            onClick={() => console.log('Generate QR')}
          />
          <Button
            icon={DownloadIcon}
            text="Download"
            tone="primary"
            fontSize={[2, 2, 3]}
            padding={[3, 3, 4]}
            onClick={() => console.log('Download')}
          />
        </div>
      </div>
    </ThemeColorProvider>
  )
}

export default PluginContainer
