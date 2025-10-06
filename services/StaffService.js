import Staff from '../models/Staff.js';

class StaffService {
    async getAllStaff() {
        return await Staff.findAll();
    }

    async getStaffByMatricule(matricule) {
        return await Staff.findByPk(matricule);
    }

    async createStaff(data) {
        return await Staff.create(data);
    }

    async updateStaff(matricule, data) {
        const staff = await Staff.findByPk(matricule);
        if (!staff) return null;
        await staff.update(data);
        return staff;
    }

    async deleteStaff(matricule) {
        const staff = await Staff.findByPk(matricule);
        if (!staff) return null;
        await staff.destroy();
        return staff;
    }

    async addStaffToDb(staffData) {
        return await Staff.create(staffData);
    }
}

export default new StaffService();