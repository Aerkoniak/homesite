import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        checkboxVal: false,
        title: "",
        msg: "",
        author: "",
        formInfo: "",
    }

    clearForm = () => {
        this.setState({
            checkboxVal: false,
            title: "",
            msg: "",
            author: "",
        })
    }
    fillForm = (e) => {
        if (e.target.id === "titleMail") {
            this.setState({
                title: e.target.value
            })
        } else if (e.target.id === "textArea") {
            this.setState({
                msg: e.target.value
            })
        } else if (e.target.id === "author") {
            this.setState({
                author: e.target.value
            })
        } else if (e.target.id === "agree") {
            this.setState({
                checkboxVal: !this.state.checkboxVal
            })
        }
    }
    submitForm = (e) => {
        e.preventDefault();
        const { title, msg, author, checkboxVal } = this.state;
        if (title == false || msg == false || author == false || checkboxVal == false) {
            this.setState({
                formInfo: "uzupełnij wszystkie pola formularza"
            })
        } else {
            let data = {
                title,
                msg,
                author
            };
            data = JSON.stringify(data)
            axios.post('/email', { data })
                .then(res => {
                    console.log(res.data);
                    if (res.data.sended) {
                        this.setState({
                            formInfo: "wysłano poprawnie!",
                        });
                        this.clearForm();
                    }
                })

        }
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <h6 className="formInfo">wygodny formularz, Ty piszesz, ja odpisuje.</h6>
                <input className="titleMailInput" value={this.state.title} type="text" id="titleMail" placeholder="temat wiadomości" onChange={this.fillForm} />
                <textarea className="textareMail" value={this.state.msg} name="" id="textArea" placeholder="treść wiadomości" onChange={this.fillForm}></textarea>
                <input className="authorMailAuthor" value={this.state.author} id="author" type="email" placeholder="twój adres e-mail" onChange={this.fillForm} />

                <input className="checkBoxInput" type="checkbox" id="agree" name="agree" value={this.state.checkboxVal} onChange={this.fillForm} />
                <label className="checkBoxLabel" for="agree">Wypełnienie formularza oznacza zgodę, na przetworzenie podanego adresu e-mail w celu kontaktu w sprawie.</label>
                <h6 className="formInfo red">{this.state.formInfo}</h6>
                <input className="sendMail" type="submit" name="" id="" value="Wyślij" />
            </form>
        );
    }
}

export default ContactForm;