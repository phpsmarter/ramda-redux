const R= require('ramda')

/**
 * The Action constructor
 * @function
 * @param type {string}
 * @param payload {any}
 * @return {Action}
 * @example
 * const incNumberAction=Action('incNumber')
 * const addNumber100Action=Action('addNumber',100)
 * store.dispatch(incNumberAction)
 * store.dispatch(addNumber100Action)
 * */
const Action = (type, payload={}) =>({
	type,
	payload
})

/**
 * Pattern constructor for arguments of  Matcher constructor
 * @function
 * @param type {string}
 * @param handler {function}
 * @return {Pattern}
 * @example
 * const incNumberPattern =Pattern(
 * 	'incNumber',
 * 	(state, payload) => R.over(
 *			R.lensProp('number'),
 *			R.inc,
 *			state
 *		)
 * )
 * const matcher=Matcher(incNumberPattern)
 * */
const Pattern = R.curry(
	(type, handler) => [type, handler]
)

/**
 * Matcher constructor
 * @function
 * @param matcherList {...function}
 * @return {Matcher}
 * @example
 * const incNumberAction=Action('incNumber')
 * const incNumberPattern =Pattern(
 * 	'incNumber',
 * 	(state, payload) => R.over(
 *			R.lensProp('number'),
 *			R.inc,
 *			state
 *		)
 * )
 * const matcher=Matcher(incNumberPattern)
 * */
const Matcher = (...matcherList) => R.fromPairs(matcherList)

/**
 * Reducer constructor,return a some implement of React redux native reducer
 * @function
 * @param initState {any} (object commonly)
 * @param matcher {Matcher}
 * @return {Reducer}
 * @example
 * const incNumberAction=Action('incNumber')
 * const incNumberPattern =Pattern(
 * 	'incNumber',
 * 	 R.over(
 *			R.lensProp('number'),
 *			R.inc
 *		)
 * )
 * const matcher=Matcher(incNumberPattern)
 * const reducer=Reducer(
 * 	{number:0},
 * 	matcher
 * )
 * const store = createStore(reducer)
 * store.dispatch(incNumberAction)
 * //=> store.state={n:1}
 * */
const Reducer = (initState, matcher) =>
	(state = initState, {type, payload}) =>
		matcher[type]
			? matcher[type](state, payload)
			: initState


module.exports={
	Action,
	Pattern,
	Matcher,
	Reducer
}