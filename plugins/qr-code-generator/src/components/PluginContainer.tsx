import {useState, createRef} from 'react'
import {Container, Flex, ThemeColorProvider} from '@sanity/ui'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'
import ButtonsRow from './ButtonsRow/ButtonsRow'

const PluginContainer = () => {
  const [url, setUrl] = useState('')
  const inputRef = createRef()

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
      <Container width={1}>
        <Input ref={inputRef} />
        <Flex direction={'column'} align={'center'} gap={5} marginTop={4}>
          <QRCodePreview url={url} />
          <ButtonsRow generateCode={generateCode} downloadImage={downloadImage} />
        </Flex>
      </Container>
    </ThemeColorProvider>
  )
}

export default PluginContainer
