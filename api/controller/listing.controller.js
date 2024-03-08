import Listing from '../models/lsiting.model.js';

const createListing = async (req , res , next) => {
     try {
        const listing = await Listing.create(req.body);
        return res.status(200).json({listing});
     } catch (error) {
        next(error);
     }
}


export default createListing
