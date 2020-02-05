import React from 'react'; //importamos o obejto react

class Post extends React.Component { //sempre que tiver a classe React.Component, tem o render
    render(){
        return( //sempre retorna o html  //props:componente que recebe todas as propriedades
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p> 
        </div> 
        )   
    }
}

export default Post; //pegou a classe post e habilitou para ser importada