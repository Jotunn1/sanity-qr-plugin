import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myPlugin } from './plugins/qr-code-generator/src'

export default defineConfig({
  name: 'default',
  title: 'sanity-test-project',

  projectId: 'mz001lkk',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), myPlugin()],

  schema: {
    types: schemaTypes,
  },
})
