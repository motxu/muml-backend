/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    caption : { type: 'string' },

    imageurl : { type: 'string' },

    createdby : { type: 'string' },

    updatedby : { type: 'string' },

    categoryid: { type: 'string'},

    groupid: {type: 'string'}
  }
};

