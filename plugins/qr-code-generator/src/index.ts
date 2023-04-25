import { definePlugin } from 'sanity';
import { CodeBlockIcon } from '@sanity/icons';
import { route } from 'sanity/router';
import PluginContainer from './components/PluginContainer';

interface MyPluginConfig {
  /* nothing here yet */
}

export const myPlugin = definePlugin<MyPluginConfig | void>((options) => {
  return {
    name: 'sanity-plugin-qr-code-generator',
    tools: [
      {
        name: 'qr-code-generator',
        title: 'QR Code generator',
        icon: CodeBlockIcon,
        component: PluginContainer,
        route: route.create('/*'),
        options,
      },
    ],
  }
})
