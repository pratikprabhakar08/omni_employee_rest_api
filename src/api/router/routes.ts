import express from 'express';
import Handler from '../../handler';
import EmployeeController from '../controller/employeeController';

const router = express.Router();

router.post(
	'/create',
	Handler.handleValidationError,
	EmployeeController.create
);

router.get(
	'/read/:id',
	Handler.handleValidationError,
	EmployeeController.readByID
);

router.delete(
	'/delete/:id',
	Handler.handleValidationError,
	EmployeeController.delete
);

router.get(
	'/all',
	Handler.handleValidationError,
	EmployeeController.findAll
);

export default router;