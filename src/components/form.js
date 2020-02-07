import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div className="col-12">
                <form className= "card">
                    <div className="card-header">
                        <h2 className="card-title">Formulário</h2>
                    </div>

                <div className="card-body">
                    <p className="form-group">
                        <label className= "form-label">Nome<br/></label>
                        <input className="form-control" type="text"/>
                    </p>

                    <p>
                        <label className= "form-label">Github<br/></label>
                        <input className="form-control" type="url"/> 
                    </p>
                </div>

                <div className="card-footer text-right">
                    <button className="btn btn-primary">Enviar</button>
                </div>
            </form>   
            </div>     
        )
    }
}
export default Form;

