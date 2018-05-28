const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db1.json')
const db = low(adapter)

db.defaults({ posts: [], user: {}, count: 0 })
  .write()

// Add a post
// db.get('posts')
//   .push({ id: 3, title: 'lowdb is awesome' })
//   .write()

// db.get('posts')
//   .find({ title: 'lowdb is awesome' })
//   .assign({ title: 'hi!' })
//   .write()


db.get('posts')
  .find({ id: 1})
  .write()

console.log(db.getState());
