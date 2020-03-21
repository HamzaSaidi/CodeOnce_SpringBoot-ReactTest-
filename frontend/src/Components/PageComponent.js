import React, { Component } from 'react';
import InputComponent from './InputComponent';
import DisplayTextComponent from './DisplayTextComponent';
class PageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ListItems: []
        }


    }

    //add received text from input child to the state
    addTextTolist = (item) => {


        console.log(item.text+" the item sent from child function")
        let l = [...this.state.ListItems]
        l.push(item)
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
                <InputComponent handleSubmit={this.addTextTolist} />
                {
                    this.state.ListItems.reverse().map((element, index) => {

                        return <DisplayTextComponent key={index} text={element.text} numberOfMatches={element.numberOfMatches}></DisplayTextComponent>


                    })
                }
            </React.Fragment>
        );
    }

}
export default PageComponent;