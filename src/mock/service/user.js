// 注意：要删除本模块的require缓存，否则不支持热加载
delete require.cache[require.resolve('./user.js')];

const path = require('path');
const mockjs = require('mockjs');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
console.log(path.resolve(__dirname, '../lowdb/json/user.json'))
const db = lowdb(new FileSync(path.resolve(__dirname, '../lowdb/json/user.json')));
const _ = db._;

db.defaults(
  mockjs.mock({
    'list|100': [{ name: '@CNAME()', 'age|18-60': 1, id: '@GUID()' }],
  }),
).write();

module.exports = {
  // 创建用户
  create(data) {
    const user = _.assign(data, {
      id: mockjs.Random.guid(),
    });
    db.get('list')
      .push(user)
      .write();
    return user;
  },
  // 分页查询
  pagedQuery({ page, size }) {
    const list = db.get('list').value();
    return {
      data: _.chunk(list, size)[page - 1],
      total: list.length,
    };
  },
  // 根据id查找用户
  find(id) {
    return db
      .get('list')
      .find({ id })
      .value();
  },
  // 根据id删除用户，删除成功返回被删除的用户，否则返回null
  delete(id) {
    const user = this.find(id);
    if (user) {
      db.get('list')
        .remove({ id })
        .write();
    }
    return user;
  },
  // 补丁更新用户
  patchUpdate(id, data) {
    db.get('list')
      .find({ id })
      .assign(data)
      .write();
    return this.find(id);
  },
};
