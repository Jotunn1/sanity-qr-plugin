import {useState, createRef, useCallback} from 'react'
import {Container, Flex, ThemeColorProvider} from '@sanity/ui'
import Input from './Input/Input'
import QRCodePreview from './QRCodePreview/QRCodePreview'
import ButtonsRow from './ButtonsRow/ButtonsRow'

const PluginContainer = () => {
  const [url, setUrl] = useState('')
  const inputRef = createRef()

  const generateCode = useCallback(() => {
    const inputValue = (inputRef.current as HTMLInputElement)?.value

    if (inputValue) {
      console.log('setUrl')
      setUrl(inputValue)
    }
  }, [])

  const downloadImage = useCallback(() => {
    const image = document.getElementById('qr-code-image')?.childNodes[0]
    console.log(image, 'download')
  }, [])

  return (
    <ThemeColorProvider>
      <Container width={1} paddingX={3} paddingTop={5}>
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
