import PropTypes from 'prop-types';
import {setting} from '../setting';

export const LinkPropTypes = PropTypes.shape({
    href: PropTypes.string.isRequired
});

export const TimeInstantPropTypes = PropTypes.shape({
    timeInstant: PropTypes.shape({
        instant: PropTypes.string
    })
});

export const TimePeriodPropTypes = PropTypes.shape({
    timePeriod: PropTypes.shape({
        begin: PropTypes.string,
        end: PropTypes.string
    })
});

export const SizePropTypes = PropTypes.shape({
    value: PropTypes.number,
    uom: PropTypes.string
});

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
        PropTypes.oneOf(Object.keys(setting._OBSERVATION_TYPES))
        //     Object.values(setting._OBSERVATION_TYPES).map(
        //         oty => oty.definition
        //     )
        // )
    ),
    foi_type: PropTypes.oneOf(
        Object.keys(setting._SAMPLING_TYPES)
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

export const ProcessingPropTypes = PropTypes.shape({
    id: PropTypes.number,
    processOperator: LinkPropTypes,
    processingDetails: LinkPropTypes,
    time: TimeInstantPropTypes
});

export const FoiPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    identifier: PropTypes.string,
    type: PropTypes.string,
    shape: PropTypes.shape({
        type: PropTypes.oneOf(['Point']).isRequired,
        coordinates: PropTypes.array.isRequired
    })
});

export const SpecimenPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    identifier: PropTypes.string,
    sampledFeature: LinkPropTypes,
    materialClass: LinkPropTypes,
    samplingTime: TimeInstantPropTypes,
    samplingMethod: PropTypes.string,
    processingDetails: PropTypes.arrayOf(ProcessingPropTypes),
    size: SizePropTypes,
    currentLocation: LinkPropTypes,
    specimenType: LinkPropTypes
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

export const MaterialPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    definition: PropTypes.string,
    image: PropTypes.string
});

export const UomPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
});

export const ProcessingDetailPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    identifier: PropTypes.string
});

export const SamplingMethodsPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    identifier: PropTypes.string
});

export const SamplingTypesPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    definition: PropTypes.string
});
