/* @refresh reload */
import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'

import type { Component } from 'solid-js'

const App: Component = () => {
	const [count, setCount] = createSignal(0)
	const increment = () => setCount(count() + 1)

	return (
		<div>
			<h4>Counter component</h4>
			<p>it's very important...</p>
			<button onClick={increment}>{count()}</button>
		</div>
	)
}

render(() => <App />, document.querySelector('#root') as HTMLElement)
