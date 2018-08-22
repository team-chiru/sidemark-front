/* @flow */

// Dependencies
import axios from 'axios'

// Configs
const baseUrl = 'http://localhost:8000'

// End-Points
export const END_POINTS = {
  API_GET_WITH_FIRST_CHILDREN: baseUrl + 'likemark/getWithFirstChildren/',
  API_POST_CREATE_LIKEMARK: baseUrl + 'likemark/post'
}

// Http verbs
const VERBS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put'
}

class Xhr {
    /**
   *
   * @param {path} url - url to reach
   * @param {any} parameter - path parameter
   */
  urlParser (path: string, parameter: any) {
    if (parameter && path.indexOf(':') === -1) {
      throw new Error(`No placeholder found in path for path: ${path} parameter: ${parameter}`)
    }
    return path.concat(parameter || '')
  }

  /**
   *
   * @param {string} method - http verb
   * @param {any} url - url to reach
   * @returns {payload} - possible data to use on some requests
   */
  request = (method: string, url: string, payload: ?Object) => axios({ method, url, data: payload })

  /**
   *
   * @param {string} path - request path
   * @param {any} parameter - path parameter
   * @returns {AxiosPromise}
   */
  get = (path: string, parameter: any) => this.request(VERBS.GET, this.urlParser(path, parameter))
  /**
   *
   * @param {string} path - request path
   * @param {any} parameter - path parameter
   * @param {Object} data - data payload
   * @returns {AxiosPromise}
   */
  post = (path: string, parameter: any, data: Object) => this.request(VERBS.POST, this.urlParser(path, parameter), data)

  /**
   *
   * @param {string} path - request path
   * @param {any} parameter - path parameter
   * @param {Object} data - data payload
   * @returns {AxiosPromise}
   */
  put = (path: string, parameter: any, data: Object) => this.request(VERBS.PUT, this.urlParser(path, parameter), data)
}

export const xhr = new Xhr()

export default xhr
