import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';

// Semantic UI components
import {
    Form,
    Icon,
    Popup
} from 'semantic-ui-react';

class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
        //console.log(this.state);
    }
    getInitialState() {
        const {
            from,
            to
        } = this.props;
        return {
            from: from !== undefined? moment(from).toDate(): undefined,
            to: to !== undefined? moment(to).toDate(): undefined
        };
    }
    handleDayClick(day) {
        const { onRangeSelected } = this.props;
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        if(onRangeSelected!==undefined){
            onRangeSelected({
                from: range.from? moment(range.from).format("YYYY-MM-DD"): null,
                to: range.to? moment(range.to).add(1, 'days').format("YYYY-MM-DD"): null
            });
        }
    }
    handleResetClick() {
        this.setState(this.getInitialState());
    }

    componentWillReceiveProps(nextProps) {
        const { from, to } = nextProps;
        console.log("Daterange: componentWillReceiveProps");
        console.log(from, to);
        this.setState({
            from: from,
            to: to
        });
    }
    render() {
        const { from, to } = this.state;
        const { asArray } = this.props;
        const modifiers = { start: from, end: to};
        //console.log(from, to);
        if (asArray){
            return (
                [
                    <Popup
                        key={"cr-drc-st"}
                        trigger={
                            <Form.Input
                                value={
                                    from?
                                    moment(from).format("YYYY-MM-DD"): ''
                                }
                                icon={<Icon name='calendar'/>}
                                placeholder='From date' />
                        }
                        on='focus'
                        position='bottom left'>
                        <Popup.Content>
                            <DayPicker
                                firstDayOfWeek={1}
                                showWeekNumbers
                                className="Selectable"
                                numberOfMonths={this.props.numberOfMonths}
                                selectedDays={[from, { from, to }]}
                                modifiers={modifiers}
                                month={from}
                                todayButton="Today"
                                onDayClick={this.handleDayClick}
                            />
                        </Popup.Content>
                    </Popup>,
                    <Popup
                        key={"cr-drc-ed"}
                        trigger={
                            <Form.Input
                                value={
                                    to?
                                    moment(to).format("YYYY-MM-DD"): ''
                                }
                                icon={<Icon name='calendar'/>}
                                placeholder='To date' />
                        }
                        on='focus'
                        position='bottom right'>
                        <Popup.Content>
                            <DayPicker
                                firstDayOfWeek={1}
                                showWeekNumbers
                                className="Selectable"
                                numberOfMonths={this.props.numberOfMonths}
                                selectedDays={[from, { from, to }]}
                                modifiers={modifiers}
                                month={to}
                                onDayClick={this.handleDayClick}
                            />
                        </Popup.Content>
                    </Popup>
                ]
            );
        }
        return (
            <Form.Group widths='equal'>
                <Popup
                    trigger={
                        <Form.Input
                            value={
                                from?
                                moment(from).format("YYYY-MM-DD"): ''
                            }
                            icon={<Icon name='calendar'/>}
                            placeholder='From date' />
                    }
                    on='focus'
                    position='bottom left'>
                    <Popup.Content>
                        <DayPicker
                            firstDayOfWeek={1}
                            showWeekNumbers
                            className="Selectable"
                            numberOfMonths={this.props.numberOfMonths}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={this.handleDayClick}
                        />
                    </Popup.Content>
                </Popup>
                <Popup
                    trigger={
                        <Form.Input
                            value={
                                to?
                                moment(to).format("YYYY-MM-DD"): ''
                            }
                            icon={<Icon name='calendar'/>}
                            placeholder='To date' />
                    }
                    on='focus'
                    position='bottom right'>
                    <Popup.Content>
                        <DayPicker
                            firstDayOfWeek={1}
                            showWeekNumbers
                            className="Selectable"
                            numberOfMonths={this.props.numberOfMonths}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={this.handleDayClick}
                        />
                    </Popup.Content>
                </Popup>
            </Form.Group>
        );
    }
}

export default DateRange;
