module.exports = {
  requests: [
    {
      type: 'get',
      url: '/goods/list',
      handle(req, res) {
        res.json({
          code: 200,
          message: 'ok',
        });
      },
    },
  ],
};
