
import { ReactLocaleService } from './react.locale.service';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.initState(props);
    }

    render() {
        return this.genTemplate();
    }
    initState(props) {
        let labelKeys = [props.title, ...props.fields];
        let labels = ReactLocaleService.getlocales(labelKeys);
        this.strings = ReactLocaleService.getLocalizedStrings(labels);
        
        this.state = {
            lang: props.lang,
            fields: [...props.fields]
        }
        this.strings.setLanguage(this.state.lang);
    }

    genTemplate(){
        return(
            <div className="card">
            <h5 className="card-header">{this.strings[this.props.title]}</h5>
            <div className="card-body">
               {
                   this.state.fields.map((field)=> {
                        return (
                            <div className="field-group" key={field}>
                                <div className="field-label">{this.strings[field]} </div>
                                <div className="field-value"> </div>
                            </div>
                        )
                   })
               }
            </div>
        </div>
        );
        
    }

    componentWillReceiveProps(newProps){
        this.strings.setLanguage(newProps.lang);
        this.setState();
    }
}

