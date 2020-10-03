import { connect } from 'react-redux';

import Main from './main_page';
import { openModal } from '../../actions/modal_actions';
import { 
    fetchGeojson, 
    setPreloadingGeojson, 
    setCachedGeojson 
} from '../../actions/adventures_actions';

const msp = state => {
    const { adventures } = state;
    return {
        adventures
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        fetchGeojson: (key) => dispatch(fetchGeojson(key)),
        setPreloadingGeojson: (boolean) => dispatch(setPreloadingGeojson(boolean)),
        setCachedGeojson: (boolean) => dispatch(setCachedGeojson(boolean))
    };
};

export default connect(
    msp, 
    mdtp
)(Main);