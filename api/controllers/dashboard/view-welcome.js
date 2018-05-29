/*global Question*/

const timeAgo = require('date-fns/distance_in_words_to_now')

module.exports = {
  friendlyName: 'View welcome page',
  description: 'Display the dashboard "Welcome" page.',

  exits: {
    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },
  },

  fn: async function (inputs, exits) {
    const questions = await Question.find({
      where: {
        responder: 1,
        response: ''
      },
      sort: 'createdAt DESC'
    });
    return exits.success({ timeAgo, questions });
  }
};
