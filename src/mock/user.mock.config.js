const service = require('./service/user');

module.exports = {
  requests: [
    {
      type: 'get',
      url: '/user/list',
      handle(req, res) {
        res.json({
          code: 200,
          message: 'ok',
          ...service.pagedQuery(req.query),
        });
      },
    },
    {
      type: 'post',
      url: '/user/create',
      handle(req, res) {
        const user = service.create(req.body);
        res.json({
          code: 200,
          message: 'ok',
          data: user,
        });
      },
    },
    {
      type: 'delete',
      url: '/user/:id',
      handle(req, res) {
        console.log(req.params, 'req.params');
        res.json({
          code: 200,
          message: 'ok',
          user: service.delete(req.params.id),
        });
      },
    },
    {
      type: 'patch',
      url: '/user/:id',
      handle(req, res) {
        console.log(req.params, 'req.params');
        console.log(req.body, 'req.body');
        res.json({
          code: 200,
          message: 'ok',
          user: service.patchUpdate(req.params.id, req.body),
        });
      },
    },
  ],
};
