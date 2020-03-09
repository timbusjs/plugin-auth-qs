async function queryStringAuthPlugin(logger, config) {
  return {
    authenticate: async function(req) {
      const { uid } = req.query;
      if (uid) {
        logger.info('Allowing easy access for user ' + uid);
        return { type: 'success', uid };
      } else {
        logger.error('No UID specified in the query string')
        return { type: 'unauthorized' };
      }
    }
  };
}

module.exports = queryStringAuthPlugin;
