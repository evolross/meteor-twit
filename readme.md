Twit by ttezel
==============

Node.js Twitter API client.

Repackaged for Meteorite.


Create new Twit
===============


If authenticating with user-context, place this on the server side

    Twit = new TwitMaker({
        consumer_key:         '...'
      , consumer_secret:      '...'
      , access_token:         '...'
      , access_token_secret:  '...'
    });

If authenticating with application-only context, place this on the server side

    Twit = new TwitMaker({
        consumer_key:         '...'
      , consumer_secret:      '...'
      , app_only_auth:        true
    });

Usage
=====

See [original repo.](https://github.com/ttezel/twit)
