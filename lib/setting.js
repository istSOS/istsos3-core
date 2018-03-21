
class Setting {
    constructor(){
        this._ogc_def = "http://www.opengis.net/def/";
        this._ogc_nil = this._ogc_def + "nil/OGC/0/unknown";
        this._foidef = this._ogc_def + "samplingFeatureType/OGC-OM/2.0/";
        this._typedef = this._ogc_def + "observationType/OGC-OM/2.0/";

        // Sampling Types
        this._POINT = "SF_SamplingPoint";
        this._CURVE = "SF_SamplingCurve";
        this._SOLID = "SF_SamplingSolid";
        this._SURFACE = "SF_SamplingSurface";
        this._FEATURE = "SF_SpatialSamplingFeature";
        this._SPECIMEN = "SF_Specimen";

        this._SAMPLING_POINT = this._foidef + this._POINT;
        this._SAMPLING_CURVE = this._foidef + this._CURVE;
        this._SAMPLING_SOLID = this._foidef + this._SOLID;
        this._SAMPLING_SURFACE = this._foidef + this._SURFACE;
        this._SAMPLING_SPATIAL_FEATURE = this._foidef + this._FEATURE;
        this._SAMPLING_SPECIMEN = this._foidef + this._SPECIMEN;

        this._SAMPLING_TYPES = {};
        this._SAMPLING_TYPES[
            this._SAMPLING_POINT
        ] = {
            definition: this._SAMPLING_POINT,
            short: this._POINT,
            name: "Point"
        };
        this._SAMPLING_TYPES[
            this._SAMPLING_CURVE
        ] = {
            definition: this._SAMPLING_CURVE,
            short: this._CURVE,
            name: "Curve"
        };
        this._SAMPLING_TYPES[
            this._SAMPLING_SURFACE
        ] = {
            definition: this._SAMPLING_SURFACE,
            short: this._SURFACE,
            name: "Surface"
        };


        // Observation Types
        this._COMPLEX = "OM_ComplexObservation";
        this._SWE_ARRAY = "OM_SWEArrayObservation";
        this._CATEGORY = "OM_CategoryObservation";
        this._COUNT = "OM_CountObservation";
        this._MEASUREMENT = "OM_Measurement";
        this._TRUTH = "OM_TruthObservation";
        this._TEXT = "OM_TextObservation";
        this._GEOMETRY = "OM_GeometryObservation";
        this._TEMPORAL = "OM_TemporalObservation";

        this._COMPLEX_OBSERVATION = this._typedef + this._COMPLEX;
        this._SWE_ARRAY_OBSERVATION = this._typedef + this._SWE_ARRAY;
        this._CATEGORY_OBSERVATION = this._typedef + this._CATEGORY;
        this._COUNT_OBSERVATION = this._typedef + this._COUNT;
        this._MEASUREMENT_OBSERVATION = this._typedef + this._MEASUREMENT;
        this._TRUTH_OBSERVATION = this._typedef + this._TRUTH;
        this._TEXT_OBSERVATION = this._typedef + this._TEXT;
        this._GEOMETRY_OBSERVATION = this._typedef + this._GEOMETRY;
        this._TEMPORAL_OBSERVATION = this._typedef + this._TEMPORAL;

        this._OBSERVATION_TYPES = {};
        this._OBSERVATION_TYPES[
            this._COMPLEX_OBSERVATION
        ] = {
            definition: this._COMPLEX_OBSERVATION,
            short: this._COMPLEX,
            name: "Data record"
        };
        this._OBSERVATION_TYPES[
            this._SWE_ARRAY_OBSERVATION
        ] = {
            definition: this._SWE_ARRAY_OBSERVATION,
            short: this._SWE_ARRAY,
            name: "Data array"
        };
        this._OBSERVATION_TYPES[
            this._CATEGORY_OBSERVATION
        ] = {
            definition: this._CATEGORY_OBSERVATION,
            short: this._CATEGORY,
            name: "Text"
        };
        this._OBSERVATION_TYPES[
            this._COUNT_OBSERVATION
        ] = {
            definition: this._COUNT_OBSERVATION,
            short: this._COUNT,
            name: "Integer"
        };
        this._OBSERVATION_TYPES[
            this._MEASUREMENT_OBSERVATION
        ] = {
            definition: this._MEASUREMENT_OBSERVATION,
            short: this._MEASUREMENT,
            name: "Decimal"
        };
        this._OBSERVATION_TYPES[
            this._TRUTH_OBSERVATION
        ] = {
            definition: this._TRUTH_OBSERVATION,
            short: this._TRUTH,
            name: "Boolean"
        };
        this._OBSERVATION_TYPES[
            this._TEXT_OBSERVATION
        ] = {
            definition: this._TEXT_OBSERVATION,
            short: this._TEXT,
            name: "Text"
        };
        this._OBSERVATION_TYPES[
            this._GEOMETRY_OBSERVATION
        ] = {
            definition: this._GEOMETRY_OBSERVATION,
            short: this._GEOMETRY,
            name: "Geometry"
        };
        this._OBSERVATION_TYPES[
            this._TEMPORAL_OBSERVATION
        ] = {
            definition: this._TEMPORAL_OBSERVATION,
            short: this._TEMPORAL,
            name: "Time instant"
        };
    }
}

export const setting = new Setting();
