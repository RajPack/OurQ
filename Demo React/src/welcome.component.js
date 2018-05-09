export class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.templateGen();
    }

    templateGen () {
        return (
            <div className="title" >Welcome to first react demo sample</div>
        );
    }
}