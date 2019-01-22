let base = require('../mixins/Base.js');

function OneNote(options) {
    this.options = options;
}

Object.assign(OneNote.prototype, base);

module.exports = OneNote;