import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form className= "card">
                <p className="form-group">
                    <label className= "form-label">Nome<br/></label>
                    <input className="form-control" type="text"/>
                </p>

                <p>
                    <label className= "form-label">Github<br/></label>
                    <input className="form-control" type="url"/> 
                </p>

                <p>
                    <button>Enviar</button>
                </p>
            </form>        
        )
    }
}
export default Form;

