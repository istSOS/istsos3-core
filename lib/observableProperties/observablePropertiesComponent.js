import React, { Component } from 'react';

// istSOS components
//import ObservablePropertyForm from '../observablePropertyForm/observablePropertyFormContainer';

// Semantic UI components
import {
    Form,
    Header,
    Modal,
    Button
} from 'semantic-ui-react'

class ObservablePropertiesComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data) {
        const {
            //onSelected,
            observed_properties,
            observablePropertySelected,
            onSelected
        } = this.props;
        /*if(observablePropertySelected!==undefined){
            for (var i = 0; i < observed_properties.data.length; i++) {
                if(observed_properties.data[i].definition === data.value){
                    observablePropertySelected(observed_properties.data[i]);
                    break;
                }
            }
        }*/
        if(onSelected!==undefined){
            for (var i = 0; i < observed_properties.data.length; i++) {
                if(observed_properties.data[i].definition === data.value){
                    onSelected(observed_properties.data[i]);
                    break;
                }
            }
        }
    }

    render() {
        const {
            observed_properties,
            core_observable_properties,
            hideButton,
            openDialog,
            value
        } = this.props;
        console.log("Seleceded: " + value);
        var options = observed_properties.data.map((oty, key) => {
            return {
                key: oty.id,
                value: oty.definition,
                text: oty.name,
                content: <Header
                    content={oty.name}
                    subheader={oty.definition} />
            }
        })
        if(hideButton === true){
            return (
                <Form.Select
                    fluid={true}
                    value={value}
                    options={options}
                    placeholder='Select an observable property..'
                    onChange={this.handleChange}/>
            );
        }
        return (
            <Form.Group>
                <Form.Select
                    fluid={true}
                    value={value}
                    options={options}
                    placeholder='Select an observable property..'
                    onChange={this.handleChange}/>
                {
                    core_observable_properties.dialog===true?
                    <Modal
                        key="opc-md"
                        open={core_observable_properties.dialog}
                        onClose={(e) => {
                            openDialog(false)
                        }}>
                        <Modal.Header>
                            Add a new observable property
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                ObservablePropertyForm
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>:
                    <Button
                        circular
                        secondary
                        icon='add'
                        onClick={(e) => {
                            openDialog(true)
                        }}/>
                }
            </Form.Group>
        )
    }
};

export default ObservablePropertiesComponent;
