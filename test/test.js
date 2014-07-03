
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	linspace = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'linspace', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( linspace ).to.be.a( 'function' );
	});

	it( 'should not allow a non-numeric min value', function test() {
		expect( badValue( '5' ) ).to.throw( Error );
		expect( badValue( [] ) ).to.throw( Error );
		expect( badValue( {} ) ).to.throw( Error );
		expect( badValue( null ) ).to.throw( Error );
		expect( badValue( undefined ) ).to.throw( Error );
		expect( badValue( NaN ) ).to.throw( Error );
		expect( badValue( function(){} ) ).to.throw( Error );

		function badValue( value ) {
			return function() {
				linspace( value, 1 );
			};
		}
	});

	it( 'should not allow a non-numeric max value', function test() {
		expect( badValue( '5' ) ).to.throw( Error );
		expect( badValue( [] ) ).to.throw( Error );
		expect( badValue( {} ) ).to.throw( Error );
		expect( badValue( null ) ).to.throw( Error );
		expect( badValue( undefined ) ).to.throw( Error );
		expect( badValue( NaN ) ).to.throw( Error );
		expect( badValue( function(){} ) ).to.throw( Error );

		function badValue( value ) {
			return function() {
				linspace( 0, value );
			};
		}
	});

	it( 'should not allow a non-numeric length value', function test() {
		expect( badValue( '5' ) ).to.throw( Error );
		expect( badValue( [] ) ).to.throw( Error );
		expect( badValue( {} ) ).to.throw( Error );
		expect( badValue( null ) ).to.throw( Error );
		expect( badValue( undefined ) ).to.throw( Error );
		expect( badValue( NaN ) ).to.throw( Error );
		expect( badValue( function(){} ) ).to.throw( Error );

		function badValue( value ) {
			return function() {
				linspace( 0, 1, value );
			};
		}
	});

	it( 'should generate a linearly spaced vector', function test() {
		var expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
		assert.deepEqual( linspace( 0, 10, 11 ), expected );
	});

});