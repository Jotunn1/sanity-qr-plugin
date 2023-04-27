import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { QrCodeGenerator } from './plugins/qr-code-generator/src';

const projectId: string | undefined = (process.env.SANITY_STUDIO_PROJECT_ID as string)
const dataset: string | undefined = (process.env.SANITY_STUDIO_DATASET as string)

export default defineConfig({
  name: 'default',
  title: 'sanity-test-project',

  projectId: projectId,
  dataset: dataset,

  plugins: [deskTool(), visionTool(), QrCodeGenerator()],

  schema: {
    types: schemaTypes,
  },
})
