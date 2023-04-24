import { definePlugin } from 'sanity';
import { CodeBlockIcon } from '@sanity/icons';
import { route } from 'sanity/router'
import TestComponent from './components/TestComponent';

interface MyPluginConfig {
  /* nothing here yet */
}

export const myPlugin = definePlugin<MyPluginConfig | void>((options) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-qr-code-generator')
  return {
    name: 'sanity-plugin-qr-code-generator',
    tools: [
      {
        name: 'qr-code-generator',
        title: 'QR Code generator',
        icon: CodeBlockIcon,
        component: TestComponent,
        route: route.create('/*'),
        options,
      },
    ],
  }
})
