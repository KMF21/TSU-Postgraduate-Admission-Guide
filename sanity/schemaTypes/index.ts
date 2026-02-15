import { type SchemaTypeDefinition } from 'sanity'
import transcriptRequest from './transcriptRequest'
import transcriptPayment from './transcriptPayment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [transcriptRequest,transcriptPayment],
}
