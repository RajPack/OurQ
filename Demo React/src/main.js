import { Card } from './card.component';
import { Dashboard } from './dashboard.component';




window.ReactComponents = {
    Dashboard: Dashboard
}


document.addEventListener("DOMContentLoaded", bootstrapDemoApp);

function bootstrapDemoApp() {
    var rootElem = document.getElementById('welcome_root');
    ReactDOM.render(React.createElement(ReactComponents.Dashboard, null, null), rootElem);
}
