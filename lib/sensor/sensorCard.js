import React from 'react';
import PropTypes from 'prop-types';

// Semantic UI components
import {
    Header,
    Segment
} from 'semantic-ui-react';

class SensorCard extends React.Component {
    render() {
        const {
            sensor,
            buttons
        } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Header as="h3">{sensor.name} {
                        sensor.procedure === sensor.name?
                        null: ' ('+sensor.procedure+')'
                    }</Header>
                    <div
                        style={{fontWeight: 'bold'}}>
                        Observed properties
                    </div>
                    <div>
                        {sensor.observable_properties.map((op, idx) => (
                            <div key={"isc-sc-"+idx}>
                                {op.name} {op.uom}
                            </div>
                        ))}
                    </div>
                </Segment>
                {
                    buttons !== undefined?
                    <Segment clearing>
                        {buttons}
                    </Segment>: null
                }
            </Segment.Group>
        )
    }
};

SensorCard.propTypes = {
    sensor: PropTypes.object
};

export default SensorCard;
