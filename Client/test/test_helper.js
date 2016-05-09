import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
	if (!(key in global)) {
		global[key] = window[key];
	}
});

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

// describe('Compare Numbers', () => {
// 	it('1 should equal 1', () => {
//   	expect(1).to.equal(1);
// 	});
// 	it('2 should be greater than 1', () => {
// 	  expect(2).to.be.greaterThan(1);
// 	});
// });


// describe('React has a root', () => {
// 	it('index.html has a div#root', () => {
// 		const x = document.getElementById('root');
// 	});
// });
