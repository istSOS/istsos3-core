import PropTypes from 'prop-types';
import {setting} from '../setting';

export const ObservedPropertyPropType = PropTypes.shape({
    id: PropTypes.number,
    definition: PropTypes.string,
    uom: PropTypes.string,
    type: PropTypes.string
});

export const SensorPropTypes = PropTypes.shape({
    name: PropTypes.string,
    procedure: PropTypes.string,
    observable_properties: PropTypes.arrayOf(
        ObservedPropertyPropType
    ),
    observation_types: PropTypes.arrayOf(
        PropTypes.oneOf(
            Object.values(setting._OBSERVATION_TYPES).map(
                oty => oty.definition
            )
        )
    ),
    procedure_description: PropTypes.shape({
        general_info: PropTypes.shape({
            keywords: PropTypes.arrayOf(PropTypes.string),
            alias: PropTypes.string,
            description:PropTypes.string
        }),
        identification: PropTypes.shape({
            manufacturer: PropTypes.string,
            model_number: PropTypes.string,
            serial_number:PropTypes.string
        }),
        capabilities: PropTypes.shape({
            sampling_time_resolution: PropTypes.string,
            acquisition_time_resolution: PropTypes.string,
            storage_capacity: PropTypes.string,
            battery_capacity: PropTypes.string
        }),
        contact: PropTypes.shape({
            owner: PropTypes.string,
            operator: PropTypes.string
        })
    })
});

export const HumanPropTypes = PropTypes.shape({
    id: PropTypes.number,
    fax: PropTypes.string,
    firstname: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
    adminarea: PropTypes.string,
    middlename: PropTypes.string,
    web: PropTypes.string,
    organisation: PropTypes.string,
    telephone: PropTypes.string,
    address: PropTypes.string,
    role: PropTypes.string,
    city: PropTypes.string,
    position: PropTypes.string,
    lastname: PropTypes.string,
    postalcode: PropTypes.string
});

export const FoiPropTypes = PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    identifier: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    shape: PropTypes.object
});

export const SamplingTypesPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    definition: PropTypes.string
});
