/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert.equal(detectNetwork('4123456789012'), 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.equal(detectNetwork('4123456789012345'), 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert.equal(detectNetwork('4123456789012345678'), 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  }); 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  //var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        expect(detectNetwork(''.concat (prefix, Math.floor (Math.pow (10, 12))))).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        expect(detectNetwork(''.concat (prefix, Math.floor (Math.pow (10, 15))))).to.equal('Discover');
      });
    })(prefix)
  }
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511567890123456')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511567890123456789')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  for (var cardLength = 12; cardLength <= 19; cardLength++) {
    (function(cardLength) {
      it('has a prefix of 5018 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (5018, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (5020, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (5038, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (6304, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Maestro');
      });
    })(cardLength)
  }
});

// describe('should support China UnionPay')
// describe('should support Switch')

describe('China UnionPay', function() {
  var expect = chai.expect;
  for (var cardLength = 16; cardLength <= 19; cardLength++) {
    (function(cardLength) {
      for (var prefixSix = 622126; prefixSix <= 622925; prefixSix++) {
        (function(prefixSix) {
          it('has a prefix of ' + prefixSix + ' and a length of ' + cardLength, function () {
            expect(detectNetwork(''.concat (prefixSix, Math.floor (Math.pow (10, (cardLength - 7)))))).to.equal('China UnionPay');
          });
        })(prefixSix)
      }
      for (var prefixThree = 624; prefixThree <= 626; prefixThree++) {
        (function(prefixThree) {
          it('has a prefix of ' + prefixThree + ' and a length of ' + cardLength, function () {
            expect(detectNetwork(''.concat (prefixThree, Math.floor (Math.pow (10, (cardLength - 4)))))).to.equal('China UnionPay');
          });
        })(prefixThree)
      }
      for (var prefixFour = 6282; prefixFour <= 6288; prefixFour++) {
        (function(prefixFour) {
          it('has a prefix of ' + prefixFour + ' and a length of ' + cardLength, function () {
            expect(detectNetwork(''.concat (prefixFour, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('China UnionPay');
          });
        })(prefixFour)
      }
    })(cardLength)
  }
});

describe('Switch', function() {
  var expect = chai.expect;
  it('has a prefix of 4903 and a length of 16', function () {
    expect(detectNetwork('4903000000000000')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 16', function () {
    expect(detectNetwork('4905000000000000')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 16', function () {
    expect(detectNetwork('4911000000000000')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 16', function () {
    expect(detectNetwork('4936000000000000')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 16', function () {
    expect(detectNetwork('5641820000000000')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 16', function () {
    expect(detectNetwork('6331100000000000')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function () {
    expect(detectNetwork('6333000000000000')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function () {
    expect(detectNetwork('6759000000000000')).to.equal('Switch');
  });
  for (var cardLength = 18; cardLength <= 19; cardLength++) {
    (function(cardLength) {
      it('has a prefix of 4903 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (4903, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Switch');
      });
      it('has a prefix of 4905 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (4905, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Switch');
      });
      it('has a prefix of 4911 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (4911, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Switch');
      });
      it('has a prefix of 4936 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (4936, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Switch');
      });
      it('has a prefix of 564182 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (564182, Math.floor (Math.pow (10, (cardLength - 7)))))).to.equal('Switch');
      });
      it('has a prefix of 633110 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (633110, Math.floor (Math.pow (10, (cardLength - 7)))))).to.equal('Switch');
      });
      it('has a prefix of 6333 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (6333, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Switch');
      });
      it('has a prefix of 6759 and a length of ' + cardLength, function () {
        expect(detectNetwork(''.concat (6759, Math.floor (Math.pow (10, (cardLength - 5)))))).to.equal('Switch');
      });
    })(cardLength)
  }
});