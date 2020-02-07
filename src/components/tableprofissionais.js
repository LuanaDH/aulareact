import React from 'react';

class Tableprofissionais extends React.Component{
    render(){
        //console.log(this.props)
        return(
        <div>
            <table className="table mt-5 mb-5">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Github</th>
                    </tr>    
                </thead>
                <tbody>
                    {this.props.dadosprofis.map((profissional)=>{ //map: o msm que foreach, mas que tem um return
                        return (
                            <tr key={profissional.id}>
                                <td>{profissional.nome}</td> 
                                <td>{profissional.github}</td>
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td>{this.props.dadosprofis[0].nome}</td>
                        <td>{this.props.dadosprofis[0].github}</td>
                    </tr> */}
                </tbody>
            </table>
            {/* <h4>{this.props.profissionais[0].nome}</h4>
            <h4>{this.props.profissionais[0].github}</h4> */}
        </div>    
        )
    }
}
export default Tableprofissionais;