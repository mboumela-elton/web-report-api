import express from 'express';
import StaffRoutes from './routes/StaffRoutes.js';
import sequelize from './config/database.js';

await sequelize.sync();
const app = express();

app.use(express.json());
app.use('/web-report-api', StaffRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});