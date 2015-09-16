'use strict';

class EMailer {
  constructor(opts) {
    opts = opts || {};

    this.name = opts.name || '';
    this.email = opts.email || '@'; // http://jmap.io/spec.html#messages
  }

  static unknown() {
    return new EMailer();
  }
}
