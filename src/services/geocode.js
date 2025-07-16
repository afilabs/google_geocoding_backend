import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

const getGeocode = async (address) => {
   const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
         address,
         key: GOOGLE_MAP_API_KEY,
      },
   });

   return res.data;
};

const getReverseGeocode = async (latlng) => {
   const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
         latlng,
         key: GOOGLE_MAP_API_KEY,
      },
   });

   return res.data;
};

export default {
   getGeocode,
   getReverseGeocode,
};
