import {Button} from '@sanity/ui'
import {GenerateIcon, DownloadIcon} from '@sanity/icons'

const ButtonsRow = () => {
  return (
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
  )
}

export default ButtonsRow
