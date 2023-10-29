import express from 'express';
import {
  userControllerAccount,
  userControllerCheck,
} from '../controller/userController.mjs';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('account');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/account', async (req, res) => {
  userControllerAccount(req, res);
});

router.post('/check', (req, res) => {
  userControllerCheck(req, res);
});

router.get('/home', (req, res) => {
  res.render('home');
});

export default router;
