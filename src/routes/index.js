import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'My first node website'}))

router.get('/about', (req, res) => res.render('about', {title: 'About us'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contact'}))
router.get('/apps', (req, res) => res.render('apps', {title: 'Our APPS'}))

export default router