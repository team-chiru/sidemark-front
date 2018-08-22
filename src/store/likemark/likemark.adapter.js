/**
 * Function to handle, parse and adapt the response from Xhr service, before it reachs the reducer.
 * @param {Object} res - Success response from xhr service
 */
export const getWithFirstChildrenPayloadAdapter = (res) => res.data && res.data.message ? res.data.message : 'The payload data structure was changed!'
export const postLikemarkPayloadAdapter = (res) => res.data && res.data.message ? res.data.message : 'An error occured while creating a likemark!'

/**
 * Function to handle, parse and adapt the response from Xhr service, before it reachs the reducer.
 * @param {Object} res - Failure response from xhr service
 */
export const getWithFirstChildrenErrorAdapter = (res) => res
export const postLikemarkErrorAdapter = (res) => res
