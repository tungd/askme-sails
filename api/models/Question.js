module.exports = {
  attributes: {
    asker: {
      type: 'string',
      required: true,
    },

    text: {
      type: 'string',
      required: true,
    },

    response: {
      type: 'string',
    },

    responder: {
      model: 'user'
    }
  }
};
