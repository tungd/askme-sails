/*global Question*/

module.exports = {
  friendlyName: 'Update question',
  description: 'Update question',
  extendedDescription: `Probably just used for adding answer`,

  inputs: {
    answer: {
      description: 'The answer',
      type: 'string',
      required: true
    },
  },

  exits: {
    success: {
      responseType: 'redirect'
    },
  },


  fn: async function (inputs, exits) {
    console.log(inputs);

    const question = await Question.findOne({
      where: {
        id: inputs.id
      }
    });

    return exits.success('/welcome');
  }
};
