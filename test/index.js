const expect = require('chai').expect;
const veronica = require('../index');

describe('test marvel API call', function() {
	
	it('should call marvel API', function(done) {
		veronica()
			.then(res => {
				expect(res).to.have.property('character');
				done();
			});
	});

	it('should give an error when calling to marvel API', function(done) {
		veronica('iron man')
			.then(res => {
				expect(res).to.have.property('error');
			});
	});

});