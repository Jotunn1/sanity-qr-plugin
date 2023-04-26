import {Card, Flex, TextInput} from '@sanity/ui'
import {useState, FormEvent} from 'react'

const Input = () => { 
  const [inputValue, setInputValue] = useState('')

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <Card padding={3} radius={3}>
      <Flex paddingBottom={3}>
        <label htmlFor="url">Your URL</label>
      </Flex>
      <TextInput
        value={inputValue}
        onChange={(e) => changeHandler(e)}
        type="text"
        radius={2}
        placeholder="Write or paste URL"
        id="url"
      />
    </Card>
  )
}

export default Input
