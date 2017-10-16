/*	
	Resources
	https://github.com/Planeshifter/node-word2vec\	
*/

var w2v = require('word2vec');

//	word2vec( input, output, params, callback )
/*
w2v.word2vec( __dirname + '/texts/input.txt', __dirname + '/texts/vectors.txt', {
	cbow: 1,
	size: 200,
	window: 8,
	negative: 25,
	hs: 0,
	sample: 1e-4,
	threads: 1,
	iter: 30,
	minCount: 1
});
*/

w2v.loadModel( __dirname + '/texts/vectors.txt', function( error, model ) {
//	console.log(model);

	var similar = model.mostSimilar( 'chickens', 20 );
	console.log(similar);

	var similarity = model.similarity( 'chickens', 'survive' );
	console.log( similarity );
});
