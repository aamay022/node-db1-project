const db = require('../../data/db-config')

async function getAll(){
const rows = await db('accounts')
.select('id', 'name', 'budget')
.orderBy('name', 'desc')

return rows
}

async function getById(id){
  // DO YOUR MAGIC
  const [record] = await db('accounts')
  .select('id', 'name', 'budget')
  .where('id', '=', id)

  return record
}

async function create(newAccount){
  // DO YOUR MAGIC
  const [accountid] = await db('accounts').insert(newAccount)
  const account = await getById(accountid)
  return account
}

async function updateById(id, account) {
  // DO YOUR MAGIC
  await db('accounts')
  .update(account)
  .where('id', id)

  const updated = await getById(id)
  return updated
}

async function deleteById(id) {
  // DO YOUR MAGIC
  await db('accounts')
  .delete()
  .where('id', id)
  return `the account with id ${id} got removed`
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
