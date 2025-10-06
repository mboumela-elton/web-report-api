import { Router } from 'express';
import StaffController from '../controllers/StaffController.js';

class StaffRoutes {
	constructor() {
		this.router = Router();
		this.router.get('/', (req, res) => StaffController.listStaff(req, res));
		this.router.post('/create-staff', (req, res) => StaffController.createStaffDb(req, res));
		this.router.get('/:matricule', (req, res) => StaffController.getStaff(req, res));
		this.router.post('/', (req, res) => StaffController.addStaff(req, res));
		this.router.put('/:matricule', (req, res) => StaffController.updateStaffInfo(req, res));
		this.router.delete('/:matricule', (req, res) => StaffController.removeStaff(req, res));
	}

	getRouter() {
		return this.router;
	}
}

export default new StaffRoutes().getRouter();
