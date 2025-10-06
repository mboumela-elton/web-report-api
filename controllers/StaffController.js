import StaffService from '../services/StaffService.js';

class StaffController {
	async listStaff(req, res) {
		try {
			const staffList = await StaffService.getAllStaff();
			res.json(staffList);
		} catch (err) {
			res.status(500).json({ error: 'Erreur serveur' });
		}
	}

	async getStaff(req, res) {
		try {
			const staff = await StaffService.getStaffByMatricule(req.params.matricule);
			if (!staff) return res.status(404).json({ error: 'Staff non trouvé' });
			res.json(staff);
		} catch (err) {
			res.status(500).json({ error: 'Erreur serveur' });
		}
	}

	async addStaff(req, res) {
		try {
			const newStaff = await StaffService.createStaff(req.body);
			res.status(201).json(newStaff);
		} catch (err) {
			res.status(400).json({ error: 'Création impossible', details: err.message });
		}
	}

	async updateStaffInfo(req, res) {
		try {
			const updated = await StaffService.updateStaff(req.params.matricule, req.body);
			if (!updated) return res.status(404).json({ error: 'Staff non trouvé' });
			res.json(updated);
		} catch (err) {
			res.status(400).json({ error: 'Mise à jour impossible', details: err.message });
		}
	}

	async removeStaff(req, res) {
		try {
			const deleted = await StaffService.deleteStaff(req.params.matricule);
			if (!deleted) return res.status(404).json({ error: 'Staff non trouvé' });
			res.json({ message: 'Suppression réussie' });
		} catch (err) {
			res.status(500).json({ error: 'Suppression impossible', details: err.message });
		}
	}

	async createStaffDb(req, res) {
		try {
			const staff = await StaffService.addStaffToDb(req.body);
			res.status(201).json(staff);
		} catch (err) {
			res.status(400).json({ error: 'Création impossible', details: err.message });
		}
	}
}

export default new StaffController();
