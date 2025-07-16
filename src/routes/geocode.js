import { Router } from 'express';
import geocodeController from '../controllers/geocode.js';

const router = Router();
router.get('/geocode', geocodeController.getGeocode);
router.get('/reverse-geocode', geocodeController.getReverseGeocode);

export default router;
