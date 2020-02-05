import React from 'react';

class Tableprofissionais extends React.Component{
    render(){
        //console.log(this.props)
        return(
        "<div>"
            <h2>{this.props.profissionais[0].nome}</h2>
            <h2>{this.props.profissionais[0].github}</h2>
        </div>    
        )
    }
}
export default Tableprofissionais;