import React, { Component } from 'react';
import { FormGroup, Alert, Input, Jumbotron, Button, Form } from 'reactstrap'
import Axios from 'axios';

class InputComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            alert: false,
            input: ""
        }

    }
    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.state.input + " this is the input")
        var item = {}
        let text = this.state.input
        this.toggle(text)


        //avoid sending request with empty body
        if (text.length !== 0 && text.replace(/\s/gi, "").length !== 0) {

            Axios.post("http://localhost:8080/api/count", text, { headers: { "Content-Type": "text/plain" } }).then((response) => {
                //number=parseInt(response.data)
                item.text = this.state.input
                item.numberOfMatches = response.data
                this.setState({input:""})

                this.props.handleSubmit(item)

            })
        }

    }



    //enable page component to access posted text 


    toggle = (input) => {

        if (input.length === 0 || input.replace(/\s/gi, "").length === 0) {
            this.setState({ alert: true })

        }
        else this.setState({ alert: false })



    }
    //get the value of input
    handleChange = (ev) => {

        this.setState({ input: ev.target.value })

    }


    render() {
        return <div>

            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Input type="textarea" onChange={this.handleChange} style={{ height: 150, width: "60%" }} className="input-sm" name="text" id="exampleText" placeholder="write your text here" value={this.state.input}/>
                    <Alert isOpen={this.state.alert}> you are submitting empty text </Alert>
                    <Button className="mt-10 float-left " type="submit" > Submit Text </Button>
                </FormGroup>
            </Form>
        </div>
    }


}
export default InputComponent;