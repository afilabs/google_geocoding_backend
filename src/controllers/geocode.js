import geocodeService from '../services/geocode.js';

const getGeocode = async (req, res) => {
   const { address } = req.query;
   if (!address) return res.status(400).json({ error: 'Please enter address' });

   try {
      const data = await geocodeService.getGeocode(address);
      res.json(data);
   } catch (error) {
      res.status(500).json({ error: 'Failed to get geocode', details: error.message });
   }
};

const getReverseGeocode = async (req, res) => {
   const { lat, lng } = req.query;

   if (!lat) return res.status(400).json({ error: 'Please enter latitude' });
   if (!lng) return res.status(400).json({ error: 'Please enter longitude' });

   try {
      const latlng = `${lat},${lng}`;
      const data = await geocodeService.getReverseGeocode(latlng);
      res.json(data);
   } catch (error) {
      res.status(500).json({ error: 'Failed to get reverse geocode', details: error.message });
   }
};

export default {
   getGeocode,
   getReverseGeocode,
};
