angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://hangman.hernan.org:5000/sessions/:sessionId');
});

