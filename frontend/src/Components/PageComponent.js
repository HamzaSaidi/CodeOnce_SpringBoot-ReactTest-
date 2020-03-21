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


        console.log(item.text + " the item sent from child function")
        let l = [...this.state.ListItems]
        l.splice(0, 0, item)
        this.setState({ ListItems: l })

        // l.forEach((element, index) => {

        //     console.log(element.text + "    l " + index)

        // })
        // //////////////////////////////////////////
        // this.state.ListItems.forEach((element, index) => {

        //     console.log(element.text + "its index " + index)

        // })
    }



    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>

                    <h1 className="display-3 center">Count Special caracters on your Text</h1>
                </Jumbotron>
                <InputComponent handleSubmit={this.addTextTolist} />
<<<<<<< HEAD
                {//show items in a reversed order
                    this.state.ListItems.map((element, index) => {
=======
                {
                    this.state.ListItems.reverse().map((element, index) => {
>>>>>>> parent of 0ca507c... useful comments

                        return <DisplayTextComponent key={index} text={element.text} numberOfMatches={element.numberOfMatches}></DisplayTextComponent>


                    })
                }
            </React.Fragment>
        );
    }

}
export default PageComponent;