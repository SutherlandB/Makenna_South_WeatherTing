/**
 * WeatherAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SearchJsonResponse
 */
class SearchJsonResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.name = this.constructor.getValue(obj.name);
        this.region = this.constructor.getValue(obj.region);
        this.country = this.constructor.getValue(obj.country);
        this.lat = this.constructor.getValue(obj.lat);
        this.lon = this.constructor.getValue(obj.lon);
        this.url = this.constructor.getValue(obj.url);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'name', realName: 'name' },
            { name: 'region', realName: 'region' },
            { name: 'country', realName: 'country' },
            { name: 'lat', realName: 'lat' },
            { name: 'lon', realName: 'lon' },
            { name: 'url', realName: 'url' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = SearchJsonResponse;
