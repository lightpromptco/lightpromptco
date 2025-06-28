export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'price', title: 'Price ($)', type: 'number' },
    {
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'Physical', value: 'physical' },
          { title: 'Digital', value: 'digital' },
          { title: 'Hybrid', value: 'hybrid' }
        ]
      }
    },
    { name: 'linkedBot', title: 'Linked Bot', type: 'reference', to: [{ type: 'bot' }] },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'nfcTagCode', title: 'NFC Tag Code', type: 'string' }
  ]
}