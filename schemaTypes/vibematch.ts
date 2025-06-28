export default {
  name: 'vibematchBot',
  title: 'VibeMatch Bot',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'shortDescription', title: 'Short Description', type: 'string' },
    { name: 'longDescription', title: 'Long Description', type: 'text' },
    {
      name: 'tierAccess',
      title: 'Tier Access',
      type: 'string',
      options: {
        list: [
          { title: 'Free', value: 'free' },
          { title: 'Tier 2', value: 'tier2' },
          { title: 'Secret', value: 'secret' },
        ],
      },
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'prismPointEnabled',
      title: 'Enable PrismPoint Phase?',
      type: 'boolean',
    },
    {
      name: 'matchType',
      title: 'Match Type',
      type: 'string',
      options: {
        list: [
          { title: 'One-on-One', value: '1v1' },
          { title: 'Group Pods', value: 'group' },
          { title: 'Mentor Match', value: 'mentor' },
        ],
      },
    },
  ],
}
