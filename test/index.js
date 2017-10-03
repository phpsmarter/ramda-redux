const R = require('ramda'),
	{
		Action,
		Pattern,
		Matcher,
		Reducer
	} = require('../index'),
	assert = require('assert')


describe(
	'Reducer function',
	() => it(
		'Reducer construct Function must return a function satisfy with redux\'s native reducer function',
		() => assert.deepEqual(
			Reducer(
				{},
				Matcher(
					Pattern(
						'incNumber',
						(state, payload) => R.over(
							R.lensProp('number'),
							R.inc,
							state
						)
					)
				)
			)({number: 0}, Action('incNumber'))['number'],
			1
		)
	)
)