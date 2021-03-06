'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var SinkList = require('./v1/sink').SinkList;
var SubscriptionList = require('./v1/subscription').SubscriptionList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Events
 *
 * @constructor Twilio.Events.V1
 *
 * @property {Twilio.Events.V1.SinkList} sinks - sinks resource
 * @property {Twilio.Events.V1.SubscriptionList} subscriptions -
 *          subscriptions resource
 *
 * @param {Twilio.Events} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._sinks = undefined;
  this._subscriptions = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'sinks', {
    get: function() {
      this._sinks = this._sinks || new SinkList(this);
      return this._sinks;
    }
});

Object.defineProperty(V1.prototype,
  'subscriptions', {
    get: function() {
      this._subscriptions = this._subscriptions || new SubscriptionList(this);
      return this._subscriptions;
    }
});

module.exports = V1;
