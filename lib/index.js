/**
*
*	LINSPACE
*
*
*	DESCRIPTION:
*		- Create a vector of linearly spaced numbers.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	HISTORY:
*		- 2014/07/02: Created. [AReines].
*
*
*	DEPENDENCIES:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. athan@nodeprime.com. 2014.
*
*/

(function() {
	'use strict';

	// LINSPACE //

	/**
	* FUNCTION: linspace( min, max, length )
	*	Generate a linearly spaced vector.
	*
	* @param {number} min - min defines the vector lower bound
	* @param {number} max - max defines the vector upper bound
	* @param {number} length - (optional) vector length; default value: 100
	* @returns {array} a 1-dimensional array
	*/
	function linspace( min, max, length ) {
		var vec, increment;

		if ( typeof min !== 'number' || min !== min ) {
			throw new Error( 'linspace()::invalid input argument. Min value must be a number.' );
		}
		if ( typeof max !== 'number' || max !== max ) {
			throw new Error( 'linspace()::invalid input argument. Max value must be a number.' );
		}
		if ( arguments.length < 3 ) {
			length = 100;
		} else if ( typeof length !== 'number' || length !== length ) {
			throw new Error( 'linspace()::invalid input argument. Vector length must be a number.' );
		}

		vec = new Array( length );
		increment = ( max-min ) / (length-1);

		vec[ 0 ] = min;
		for ( var i = 0; i < length-1; i++ ) {
			vec[ i ] = min + increment*i;
		}
		vec[ length-1 ] = max;

		return vec;
	} // end FUNCTION linspace()

	// EXPORTS //

	module.exports = linspace;

})();