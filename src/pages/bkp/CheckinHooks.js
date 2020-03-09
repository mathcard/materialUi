import React, { /*Component, */useState } from 'react';
/*import { Link } from "react-router-dom";*/
import './Checkin.css';
import logo from '../assets/logo.jpg';
//class Checkin extends Component {

export default function Checkin() {      
    const [pesquisa, setPesquisa] = useState('');


    var dados = [
        { id: 1, cpf:'45805412030', nome: 'Jose Maria', status:1},
        { id: 2, cpf:'80055465120', nome: 'Jose Silva', status:0},
        { id: 3, cpf:'70036611107', nome: 'Math RMHj Jkskdjfks skdjfskjf ksjfskj', status:1},
        { id: 4, cpf:'70036611107', nome: 'Lucas Luis do Reis Filho Mezenga Matuzalem', status:0},
        
    ]; 
    
    let consulta = false;

    function inputNome(){
        let find = document.getElementById('find');
        find.setAttribute('placeholder', 'Pesquise pelo Nome');     
        
        let query = document.getElementById('queryPesquisa');
        query.setAttribute('value', 'queryNome');
    }

    function inputCpf(){
        let find = document.getElementById('find');
        find.setAttribute('placeholder', 'Pequise pelo CPF');

        let query = document.getElementById('queryPesquisa');
        query.setAttribute('value', 'queryCpf');


    }

    function buscaParticipante(e){        
        console.log(`Busca ${pesquisa}`);
        let ocultaPesquisa = document.querySelector('.form-pesquisa');
        ocultaPesquisa.style.display = 'none';  
        
        let mostraResultado = document.querySelector('.result');
        mostraResultado.style.display = 'block';

        let principal = document.querySelector('.form-checkin');        
        principal.style.height = '700px';
        principal.style.width = '800px';
        principal.style.marginTop = '300px';  
        console.log(consulta);
        consulta = true;
        console.log(consulta);
        
    }

    function voltarPesquisa(){
        let renderPesquisa = document.querySelector('.form-pesquisa');
        renderPesquisa.style.display = 'block';         
                
        let ocultaResultado = document.querySelector('.result');
        ocultaResultado.style.display = 'none';         
        
        let defaultForm = document.querySelector('.form-checkin');
        defaultForm.style.width=  '600px';
        defaultForm.style.height= '400px';   
        defaultForm.style.marginTop = '1px';        
    }   
    

    function confirmaCheckin(id){
        console.log(id);
        const participante = dados.filter(user => (user.id === id));        
        console.log(participante);               
    }

    function desfazCheckin(){
        console.log('Desfaz');
    }
   
    function resultadoPesquisa(){    
        //console.log(consulta);
        if(consulta==true){
            console.log('Foi true');
        }
        return dados.map((res, index) => {            
            const {id, cpf, nome, status } = res;                      
            return(
                <tr key={id}>
                    <td>
                        <div className="dados-participantes">
                            <strong>{nome}</strong>
                            <span>{cpf}</span>
                        </div>                
                        <input type="hidden" value={id}></input>
                    </td>
                    <td>
                        <div className="status-inscricao">
                            <span>Status:</span>
                            <strong className="status-resultado">{status===0 ? 'Pendente': 'Confirmado'}</strong>
                        </div>                                        
                    </td>
                    <td>
                        { status=== 0 ? 
                                <button className="button-check"  
                                className="confirma-checkin" 
                                onClick={() => confirmaCheckin(id)}>Confirmar</button> 
                         
                                :
                                <button className="desfaz-checkin" 
                                onClick={desfazCheckin}>Desfazer</button> }                                              
                    </td>                                      
                </tr>                                                
            )            
        })
    }

    return (
        <div id="principal">
            <div className="form-checkin">                                                                    
            <img src={logo} alt="Eventos Logo" />                               
            <div className="form-pesquisa">    
                <button type="submit" className="form-checkin-button" onClick={inputNome}>Nome</button>                                        
                <button type="submit" className="form-checkin-button" onClick={inputCpf}>CPF</button>
                <input type="hidden" id="queryPesquisa" value="queryNome"></input>  
                <div className="check-find">
                    <input type="text" id="find" placeholder="Pesquise pelo nome" value={pesquisa}
                        onChange={e => setPesquisa(e.target.value)}
                    />
                    <button className="enviar" type="submit" className="form-checkin-button" onClick={buscaParticipante}>Pesquisar</button>  
                </div>
            </div>
                
                <div className="result" style={{display: 'none'}}> 
                    <h2 className="titulo">Resultados:</h2>                   
                    <table id="resultado">                      
                        <tbody>
                            {  resultadoPesquisa()}
                        </tbody>              
                     </table>  
                     <button className="button-voltar" onClick={voltarPesquisa}>Voltar</button>                
                </div>
            </div>
        </div>
    ); 
}