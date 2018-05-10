import { Card } from './card.component';
import './dashboard.component.css';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "en"
        }
    }
    render() {
        return this.genTemplate();
    }
    genTemplate() {
        return (
            <div className="dash_C">
                <div className='dashboard-container'>
                <div className="account-section card-section">
                    <Card title="account" lang={this.state.lang} fields={['fname', 'lname']} />
                </div>
                <div className="shipping-section card-section">
                    <Card title="shippingAddress" lang={this.state.lang} fields={['addressLine']} />
                </div>
            </div>
                <button onClick={this.changeLang.bind(this)} className="btn btn-primary"> Change Language to {this.state.lang === "en" ? "Spanish" : "English"} </button>
            </div>
            
        );
    }
    changeLang() {
        this.setState({
            lang: (this.state.lang === "en") ? "es" : "en"
        });
    }
}