const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.author.search(ctx.query);
    } else {
      entities = await strapi.services.author.find(ctx.query, ['posts', 'post.id']);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.author }));
  },
};