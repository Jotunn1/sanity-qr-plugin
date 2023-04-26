import {Card, Flex, TextInput} from '@sanity/ui'
import {useState, FormEvent, forwardRef, Ref} from 'react'

const Input = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value)

  return (
    <Card padding={3} radius={3}>
      <Flex paddingBottom={3}>
        <label htmlFor="url">Your URL</label>
      </Flex>
      <TextInput
        id="url"
        type="text"
        placeholder="Write or paste URL"
        radius={2}
        ref={ref as Ref<HTMLInputElement>}
        value={inputValue}
        onChange={(e) => inputChangeHandler(e)}
      />
    </Card>
  )
})

export default Input
