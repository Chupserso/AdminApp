import { Component } from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import AppList from "../app-list/app-list";
import AppModal from "../app-modal/app-modal";

class App extends Component {
    constructor (props) {
        super(props);
        if (localStorage.getItem("state")) {
            this.state = JSON.parse(localStorage.getItem("state"));
        } else {
            this.state = {
                data: [
                    {name: "Евгений", privilege: "Обыкновенный пользователь", id: 1, key: "aaad"},
                    {name: "Андрей", privilege: "Помощник администратора", id: 2, key: "ddgf"},
                    {name: "Александр", privilege: "Администратор", id: 3, key: "dadf"},
                ],
                maxId: 4,
                modalIsOpen: false
            }    
        }
    }
    openModalBtn = () => {
        this.setState({modalIsOpen: true});
    }
    closeModalBtn = () => {
        this.setState({modalIsOpen: false});
    }
    createUser = (name) => {
        if (name.length > 0) {
            let id = this.state.maxId;
            this.setState(({data}) => {
                const newArr = {
                    name: name,
                    privilege: "Обыкновенный пользователь",
                    id: id
                };
                return {
                    data: [...this.state.data, newArr]
                }
            })
            this.setState({maxId: id + 1})
        }
    }
    deleteUser = (id) => {
        this.setState({
            data: this.state.data.filter(item => item.id != id)
        });
    }
    privilegeChange = (value, id) => {
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].id == id) {
                let element = this.state.data[i];
                element.privilege = value;
                this.setState({
                    data: this.state.data.filter(item => item.id != id)
                });
                this.setState(({data}) => {
                    const newArr = {
                        name: element.name,
                        privilege: element.privilege,
                        id: id
                    };
                    return {
                        data: [...this.state.data]
                    }
                })
            }
        }
    }
    render () {
        if (localStorage.getItem("state")) {
            localStorage.removeItem("state");
            localStorage.setItem("state", JSON.stringify(this.state));
        } else {
            localStorage.setItem("state", JSON.stringify(this.state));
        }
        if (this.state.modalIsOpen == true) {
            return (
                <div className="wrapper">
                    <AppHeader openModalBtn={this.openModalBtn} />
                    <AppList data={this.state.data} deleteUser={this.deleteUser} privilegeChange={this.privilegeChange} />
                    <AppModal closeModalBtn={this.closeModalBtn} openModalBtn={this.openModalBtn} createUser={this.createUser} data={this.state.data} />
                </div>
            );
        } else {
            return (
                <div className="wrapper">
                    <AppHeader openModalBtn={this.openModalBtn} />
                    <AppList data={this.state.data} deleteUser={this.deleteUser} privilegeChange={this.privilegeChange} />
                </div>
            );
        }
    }
}

export default App;