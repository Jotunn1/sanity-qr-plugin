import {Card, TextInput} from '@sanity/ui'
import {useState} from 'react'

const Input = () => {
  const [url, setUrl] = useState('')

  return (
    <Card padding={2} radius={3}>
      <label htmlFor="url">Your URL</label>
      <TextInput
        radius={2}
        onChange={(event) => setUrl(event.currentTarget.value)}
        placeholder="Write or paste URL"
        value={url}
        id="url"
      />

      {url}
    </Card>
  )
}

export default Input
