/**
 * Cars.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      size: 22,
      defaultsTo: function () {
        return Math.random().toString(36).slice(2, 24);
      }
    },

    name: {
      type: 'string',
      size: 100
    }
  }
};

