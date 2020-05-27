import * as APIUTIL from '../util/contact_util';

export const CREATE_CONTACT = 'CREATE_CONTACT';

const receiveNewBlog = data => {
    return {
        type: CREATE_CONTACT,
        data
    };
};