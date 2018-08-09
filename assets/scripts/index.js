'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('../auth/events')
const itemEvents = require('../scripts/items/events')
const userEvents = require('../user/events')
// const showItemsTemplate = require('../templates/item.handlebars')
// const showItemsHtml = showItemsTemplate({ items: data.items })
$(() => {
  authEvents.authHandlers()
  itemEvents.addHandlers()
  userEvents.userHandlers()
  $('#getItemsButton').click()
  // $('#getItemsButton').click()
  // $('.content').html(showItemsHtml)
})
