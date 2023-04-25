import './styles.css'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'

const PluginContainer = () => {
  return (
    <div className="plugin-container">
      <Input />
      <QRCodePreview />
    </div>
  )
}

export default PluginContainer
