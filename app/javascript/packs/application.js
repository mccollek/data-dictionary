/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// import 'bootstrap'
import 'react-bootstrap';
import './dictionary_workspace/index'

// from https://github.com/nerdyworm/returb/blob/master/web/static/js/app/react.js#L107
export function load() {
    stateChanges();

    const elements = document.getElementsByClassName(CLASS_NAME);
    for (let i = 0; i < elements.length; i++) {
        mountElement(elements[i]);
    }
}

function stateChanges() {
    const elements = document.getElementsByClassName("turbo-react-state");
    for (let i = 0; i < elements.length; i++) {
        stateChange(elements[i]);
    }
}

function stateChange(element) {
    let props = element.getAttribute('data-states');
    if (props) {
        props = JSON.parse(props);
    }

    store.dispatch({
        type: 'STATE_CHANGE',
        data: normalize(props),
    });
}

function normalize(data) {
    return humps.camelizeKeys(data);
}

function mountElement(element) {
    const name = element.getAttribute('data-component');
    let props = element.getAttribute('data-props');
    if (props) {
        props = JSON.parse(props);
    }

    Object.keys(props).forEach(function(key) {
        props[key] = fromJS(props[key]);
    });

    const component = getComponentByName(name);
    ReactDOM.render(
        <Provider store={store}>
            {React.createElement(component, props)}
        </Provider>, element);
}

export function teardown() {
    const elements = document.getElementsByClassName(CLASS_NAME);
    for (let i = 0; i < elements.length; i++) {
        unmount(elements[i]);
    }
}

function unmount(el) {
    ReactDOM.unmountComponentAtNode(el);
}

document.addEventListener('turbolinks:before-render', teardown);
document.addEventListener("turbolinks:load", load);
