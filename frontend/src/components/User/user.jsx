import React, {Component} from 'react'
import axios from 'axios'
import Main from '../teamplate/main'
import {FaPencilAlt, FaTrash} from 'react-icons/fa'

const baseURL = 'http://localhost:3001/users'

const inicialState = {
    user: {name: '', email: ''},
    list:[]
}

const headerProps = {
    title: 'Usuarios',
    subTitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
}

export default class UserCrud extends Component {

    state = {...inicialState}

    componentWillMount(){
        axios(baseURL).then(resp => {
            this.setState({list: resp.data})
        })
    }

    clear(){
        this.setState({user: inicialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseURL}/${user.id}`: baseURL
        axios[method](url,user)
        .then(resp =>{
            const list = this.getUpdatedList(resp.data)
            this.setState({user: inicialState.user, list})
        })

    }
    getUpdatedList(user, add= true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list

    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Nome</label>
                            <input type="text" className="form-control" name="name" id="" 
                            value={this.state.user.name}
                            onChange={e=> this.updatedField(e)}
                            placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Email</label>
                            <input type="text" className="form-control" name="email" id="" 
                            value={this.state.user.email}
                            onChange={e=> this.updatedField(e)}
                            placeholder="Digite o email..."/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex">
                        <button className="btn btn-primary" onClick={e=>this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e=>this.clear(e)}>
                             Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    updatedField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }
    load(user){
        this.setState({user})

    }
    remove(user){
        axios.delete(`${baseURL}/${user.id}`).then(resp=>{
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }
    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows(){
        return this.state.list.map(user =>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={()=> this.load(user)}><FaPencilAlt/></button>
                        <button className="btn btn-danger ml-2"onClick={()=> this.remove(user)}><FaTrash/></button>
                    </td>
                </tr>
            )
        })
    }

    render(){

        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
