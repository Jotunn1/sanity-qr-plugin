import {Card, Flex, TextInput} from '@sanity/ui'
import {Dispatch, SetStateAction} from 'react'

const Input = ({url, setUrl}: {url: string; setUrl: Dispatch<SetStateAction<string>>}) => {
  return (
    <Card padding={3} radius={3}>
      <Flex paddingBottom={3}>
        <label htmlFor="url">Your URL</label>
      </Flex>
      <TextInput
        radius={2}
        onChange={(event) => setUrl(event.currentTarget.value)}
        placeholder="Write or paste URL"
        // value={url}
        id="url"
      />
    </Card>
  )
}

export default Input
