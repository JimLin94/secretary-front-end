import React from 'react';
import * as ReactDOM from 'react-dom';
import Router from 'containers/Router';

// Inject your application into the an element with the id `app`.
// Make sure that such an element exists in the dom ;)
ReactDOM.render(<Router />, document.getElementById('app'));
