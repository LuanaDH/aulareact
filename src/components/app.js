import React from 'react';
import Tableprofissionais from './tableprofissionais';
import Form from './form';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            profissionais: [
                {
                nome: "Wagner Venceslau",
                github: "http://github.io/wagven"
                },
                {
                nome: "Eduardo Rocha",
                github: "http://github.io/eduroc"
                }
                ]
                
        }
    }
    render(){
        return(
            <main>
                <div>
                    <h1>{this.props.title}</h1>
                </div>

                <div>
                <Tableprofissionais profissionais={this.state.profissionais} />
                <Form/>
                </div>

            </main>
        )
    }
}

export default App;