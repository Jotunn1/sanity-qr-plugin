import {ReactNode, useState} from 'react'
import {PluginContext} from './PluginContext'

const PluginProvider = (children: any) => {
  const [url, setUrl] = useState('')

  return <PluginContext.Provider value={{url, setUrl}}>{children}</PluginContext.Provider>
}

export default PluginProvider
