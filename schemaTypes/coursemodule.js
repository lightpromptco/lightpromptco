export default {
  name: 'courseModule',
  title: 'Course Module',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'moduleNumber', title: 'Module Number', type: 'number' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'content', title: 'Content', type: 'text' },
    { name: 'unlockRequirement', title: 'Unlock Requirement', type: 'string' },
    { name: 'relatedBot', title: 'Related Bot', type: 'reference', to: [{ type: 'bot' }] }
  ]
}