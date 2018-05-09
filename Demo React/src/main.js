import { Welcome } from './welcome.component';


window.ReactComponents = {
    Welcome: Welcome
}


document.addEventListener("DOMContentLoaded", bootstrapDemoApp);

function bootstrapDemoApp(){
    var rootElem = document.getElementById('welcome_root');
    ReactDOM.render(React.createElement(ReactComponents.Welcome, null, null), rootElem );
}