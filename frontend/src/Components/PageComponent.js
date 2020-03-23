import React, { Component } from 'react';
import InputComponent from './InputComponent';
import DisplayTextComponent from './DisplayTextComponent';
import {Jumbotron } from 'reactstrap'

class PageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ListItems: []
        }


    }

    //add received text from input child to the state
    addTextTolist = (item) => {


        let l = [...this.state.ListItems]
        //splice function to add at the begining
        l.splice(0, 0, item)
        this.setState({ ListItems: l })
    }



    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>

                    <h1 className="display-3 center">Count Special caracters on your Text</h1>
                </Jumbotron>
                <InputComponent handleSubmit={this.addTextTolist} />
                { 
                    this.state.ListItems.map((element, index) => {

                        return <DisplayTextComponent key={index} text={element.text} numberOfMatches={element.numberOfMatches}></DisplayTextComponent>


                    })
                }
            </React.Fragment>
        );
    }

}
export default PageComponent;
