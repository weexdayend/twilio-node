'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Participant', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Participants`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create_sms response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'null',
          'messaging_binding': {
              'type': 'sms',
              'address': '+15558675310',
              'proxy_address': '+15017122661'
          },
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create_chat response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'IDENTITY',
          'messaging_binding': {
              'type': 'chat',
              'address': 'null',
              'proxy_address': 'null'
          },
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants('MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Participants/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'null',
          'messaging_binding': {
              'type': 'sms',
              'address': '+15558675310',
              'proxy_address': '+15017122661'
          },
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants('MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants('MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Participants/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants('MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants('MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Participants/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'null',
          'messaging_binding': {
              'type': 'sms',
              'address': '+15558675310',
              'proxy_address': '+15017122661'
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants('MBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'participants'
          },
          'participants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'null',
                  'messaging_binding': {
                      'type': 'sms',
                      'address': '+15558675310',
                      'proxy_address': '+15017122661'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'IDENTITY',
                  'messaging_binding': {
                      'type': 'chat',
                      'address': 'null',
                      'proxy_address': 'null'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .participants.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'participants'
          },
          'participants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'null',
                  'messaging_binding': {
                      'type': 'sms',
                      'address': '+15558675310',
                      'proxy_address': '+15017122661'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'IDENTITY',
                  'messaging_binding': {
                      'type': 'chat',
                      'address': 'null',
                      'proxy_address': 'null'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .participants.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://conversations.twilio.com/v1/Conversations/${conversationSid}/Participants',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'participants'
          },
          'participants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'null',
                  'messaging_binding': {
                      'type': 'sms',
                      'address': '+15558675310',
                      'proxy_address': '+15017122661'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'IDENTITY',
                  'messaging_binding': {
                      'type': 'chat',
                      'address': 'null',
                      'proxy_address': 'null'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .participants.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Participants`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'participants'
          },
          'participants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'null',
                  'messaging_binding': {
                      'type': 'sms',
                      'address': '+15558675310',
                      'proxy_address': '+15017122661'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'IDENTITY',
                  'messaging_binding': {
                      'type': 'chat',
                      'address': 'null',
                      'proxy_address': 'null'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .participants.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});