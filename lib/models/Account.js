'use strict';

import Model from './Model.js';
import Utils from '../utils/Utils.js';

export default class Account extends Model {
  constructor(jmap, id, opts) {
    super(jmap);

    Utils.assertRequiredParameterIsPresent(id, 'id');

    opts = opts || {};

    this.id = id;
    this.name = opts.name || '';
    this.isPrimary = opts.isPrimary || false;
    this.isReadOnly = opts.isReadOnly || false;
  }

  getMailboxes(options) {
    options = options || {};
    options.accountId = this.id;

    return this._jmap.getMailboxes(options);
  }

  static fromJSONObject(jmap, object) {
    Utils.assertRequiredParameterIsPresent(object, 'object');

    return new Account(jmap, object.id, object);
  }
}
