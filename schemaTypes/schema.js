import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import bot from './bot'
import product from './product'
import courseModule from './courseModule'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    bot,
    product,
    courseModule
  ])
})