import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
    setting
} from '../setting';

// Semantic UI components
import {
    Header,
    Segment,
    List
} from 'semantic-ui-react';

class SensorCard extends React.Component {
    render() {
        const {
            sensor,
            buttons
        } = this.props;
        return (
            <Segment.Group
                style={{
                    margin: "1rem 1rem 0px"
                    //minWidth: '455px'
                }}>
                <Segment padded>
                    <Header as="h2">{sensor.name}</Header>
                    {
                        sensor.phenomenon_time === null?
                        <div>
                            No data
                        </div>:
                        <List>
                            <List.Item>
                                <List.Header>
                                    {sensor.phenomenon_time.timePeriod.begin}
                                </List.Header>
                                Started: {moment(
                                    sensor.phenomenon_time.timePeriod.begin
                                ).fromNow()}
                            </List.Item>
                            <List.Item>
                                <List.Header>
                                    {sensor.phenomenon_time.timePeriod.end}
                                </List.Header>
                                Last observation: {moment(
                                    sensor.phenomenon_time.timePeriod.end
                                ).fromNow()}
                            </List.Item>
                        </List>
                    }
                    <div style={{
                            paddingTop: "0.5em"
                        }}>
                        <Header sub color='blue'>Observed properties:</Header>
                        <List>
                        {sensor.observable_properties.map((op, idx) => (
                            op.type !== setting._COMPLEX_OBSERVATION?
                                <List.Item key={"isc-sc-"+idx}>
                                    <List.Header>{op.name} ({op.uom})</List.Header>
                                    {op.type.replace(setting._typedef, '')}
                                </List.Item>: null
                        ))}
                        </List>
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
