# A helper for reduce React Redux template code.

## This project is power by [**Ramda.js**](http://ramdajs.com/)

## How to use

1. install **ramda-redux**

    `npm install ramda-redux`

2. using *ramda-redux* for reduce template code.
    see [ramda-redux-sample](https://github.com/jituanlin/ramda-redux-sample)

## How to test

`npm run test`

## Generate API doc

`npm run doc`

## API doc
### Functions

<dl>
<dt><a href="#Action">Action(type, payload)</a> ⇒ <code><a href="#Action">Action</a></code></dt>
<dd><p>The Action constructor</p>
</dd>
<dt><a href="#Pattern">Pattern(type, handler)</a> ⇒ <code><a href="#Pattern">Pattern</a></code></dt>
<dd><p>Pattern constructor for arguments of  Matcher constructor</p>
</dd>
<dt><a href="#Matcher">Matcher(...matcherList)</a> ⇒ <code><a href="#Matcher">Matcher</a></code></dt>
<dd><p>Matcher constructor</p>
</dd>
<dt><a href="#Reducer">Reducer(initState, matcher)</a> ⇒ <code><a href="#Reducer">Reducer</a></code></dt>
<dd><p>Reducer constructor,return a some implement of React redux native reducer</p>
</dd>
</dl>

<a name="Action"></a>

### Action(type, payload) ⇒ [<code>Action</code>](#Action)
The Action constructor

**Kind**: global function  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| payload | <code>any</code> | 

**Example**  
```js
const incNumberAction=Action('incNumber')
const addNumber100Action=Action('addNumber',100)
store.dispatch(incNumberAction)
store.dispatch(addNumber100Action)
```
<a name="Pattern"></a>

### Pattern(type, handler) ⇒ [<code>Pattern</code>](#Pattern)
Pattern constructor for arguments of  Matcher constructor

**Kind**: global function  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| handler | <code>function</code> | 

**Example**  
```js
const incNumberPattern =Pattern(
	'incNumber',
	(state, payload) => R.over(
			R.lensProp('number'),
			R.inc,
			state
		)
)
const matcher=Matcher(incNumberPattern)
```
<a name="Matcher"></a>

### Matcher(...matcherList) ⇒ [<code>Matcher</code>](#Matcher)
Matcher constructor

**Kind**: global function  

| Param | Type |
| --- | --- |
| ...matcherList | <code>function</code> | 

**Example**  
```js
const incNumberAction=Action('incNumber')
const incNumberPattern =Pattern(
	'incNumber',
	(state, payload) => R.over(
			R.lensProp('number'),
			R.inc,
			state
		)
)
const matcher=Matcher(incNumberPattern)
```
<a name="Reducer"></a>

### Reducer(initState, matcher) ⇒ [<code>Reducer</code>](#Reducer)
Reducer constructor,return a some implement of React redux native reducer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| initState | <code>any</code> | (object commonly) |
| matcher | [<code>Matcher</code>](#Matcher) |  |

**Example**  
```js
const incNumberAction=Action('incNumber')
const incNumberPattern =Pattern(
	'incNumber',
	 R.over(
			R.lensProp('number'),
			R.inc
		)
)
const matcher=Matcher(incNumberPattern)
const reducer=Reducer(
	{number:0},
	matcher
)
const store = createStore(reducer)
store.dispatch(incNumberAction)
//=> store.state={n:1}
```
