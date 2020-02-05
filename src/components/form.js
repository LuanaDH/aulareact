import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form class= "card">
                <p class="form-group">
                    <label class= "form-label">Nome<br/></label>
                    <input class="form-control" type="text"/>
                </p>

                <p>
                    <label class= "form-label">Github<br/></label>
                    <input class="form-control" type="url"/> 
                </p>

                <p>
                    <button>Enviar</button>
                </p>
            </form>        
        )
    }
}


export default Form;

