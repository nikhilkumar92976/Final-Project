export { removeperson } from "../../store/reducers/personSlice"
import axios from "../../utils/Axios";
import { loadperson } from '../../store/reducers/personSlice';

export const asyncloadperson = (id) => async (dispatch) => {
    try {
        const details = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        console.log(externalid)
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const personCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);

        let theultimatedetails = {
            details: details.data,
            externalids: externalid.data,
            combinedCredits: combinedCredits.data,
            personCredits: personCredits.data,
            movieCredits: movieCredits.data,
        };
        console.log(theultimatedetails)
        dispatch(loadperson(theultimatedetails));
    } catch (error) {
        console.error('Error fetching person details:', error);
    }
};

