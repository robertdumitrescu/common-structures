'use strict';

/**
 * @typedef {Object} CommonOptions
 * @property {*} input - The input of method.
 * @property {Boolean} returnOutput - If this is on true, the function, instead of returning the {@link CommonResult} object, it will return directly the output ${@link CommonResult.output}
 * @property {Boolean} returnLogs - If this is on true, it will only the array with the logs and the end instead of returning the LogsCollector object (the transient state of logging-services) ${@link LogsCollector}
 * @property {Boolean} logging - If this is on true, logging will enabled and will be offered for debugging purposes
 * @property {LogsCollector} logs - If this is passed, the new logs from the method (if logging is enabled ${@link CommonOptions.logging}), will be appended to to this object instead of initializing a new one
 * */

/**
 * @typedef {Object} CommonResult
 * @property {*} output - The output of the method.
 * @property {String[]} logs - If the logging was activated by putting ${@link CommonOptions.logging}, on true, this will be populated.
 * @property {*} state - This will represent the state of the output at the end. This can be things like: "Complete", "Incomplete", "Failed", "Complete with warnings" and so on.
 * */

/**
 *
 * @classdesc Class that offers static constructors for common structures such as option object or result objects
 * @author Robert Dumitrescu (LinkedIn: https://www.linkedin.com/in/robertdumitrescu/) (Github: https://github.com/robertdumitrescu)
 * @class CommonStructures
 */
class CommonStructures {
    /**
     * @returns {CommonOptions}
     * @memberof CommonStructures
     */
    static getNewOptions () {
    /** @type {CommonOptions} */
        return {
            returnOutput: false,
            returnLogs: false,
            logging: false,
        }
    }

    /**
     * @returns {CommonResult}
     * @memberof CommonStructures
     */
    static getNewResult () {
    /** @type {CommonResult} */
        return {
            logs: [],
            state: '',
        }
    }
}

export {CommonStructures};