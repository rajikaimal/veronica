const httpFetcher = require('http-fetcher');
const REQUESTURL = 'http://gateway.marvel.com:80/v1/public/characters?name=:charactername&apikey=:apikey&hash=:hash&ts=:ts';

module.exports = function(apikey, hash, ts) {
	const resource = REQUESTURL.replace(':charactername', 'ironman').replace(':apikey', apikey).replace(':hash', hash).replace(':ts', ts);
	return httpFetcher(resource, null, null, 'https');
}