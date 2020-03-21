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

    }



    render() {
        return (
            <React.Fragment>
                <InputComponent handleSubmit={this.addTextTolist} />
                {//show items in a reversed order
                    this.state.ListItems.reverse().map((element, index) => {

                        return <DisplayTextComponent key={index} text={element.text} numberOfMatches={element.numberOfMatches}></DisplayTextComponent>


                    })
                }
            </React.Fragment>
        );
    }

}
export default PageComponent;