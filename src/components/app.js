import React from 'react';
import Tableprofissionais from './tableprofissionais';
import Form from './form';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            profissionais: [
                {
                id: 1,
                nome: "Wagner Venceslau",
                github: "http://github.io/wagven"
                },
                {
                id:2,    
                nome: "Eduardo Rocha",
                github: "http://github.io/eduroc"
                }
                ]
                
        }
    }
    render(){
        //console.log("state".this.state);
        return(
            <main>
                <div>
                    <h1>{this.props.title}</h1>
                </div>

                <div>
                <Tableprofissionais dadosprofis={this.state.profissionais} />
                <Form/>
                </div>

            </main>
        )
    }
}

export default App;