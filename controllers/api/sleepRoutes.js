const router = require('express').Router();
const {User, Sleep} = require('../../models');
const withAuth = require('../../utils/auth');

// GET all sleep data
router.get('/', withAuth, async (req, res) => {
    try{
      const sleepData = await Sleep.findAll({where: {user_id: req.session.user_id}})
      res.status(200).json(sleepData);
    } catch(err) {
      res.status(500).json(err);
    }
  });
  
// GET specific sleep data by id
router.get('/:user_id', withAuth, async (req, res) => {
  
    try{
      const sleepData = await Sleep.findAll({where: {user_id: req.params.user_id},
        include: [{ model: User }],
      })
   
      if (!sleepData) {
        res.status(404).json({ message: 'No existing data found with this id' });
        return;
      }
  
      res.status(200).json(sleepData);
    } catch(err){
    res.status(500).json(err);
  }
});

// CREATE new sleep entry
router.post('/', 
withAuth,
async (req, res) => {
    try {
      const newSleep = await Sleep.create(
        {...req.body,
        user_id: req.session.user_id,
        });

      res.status(200).json(newSleep);
    } catch (err) {
      res.status(400).json(err);
    }
});
  
// DELETE a sleep entry 
router.delete('/:id', 
withAuth,
 async (req, res) => {
    try {
      const sleepData = await Sleep.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        }
      });
  
      if (!sleepData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
      res.status(200).json(sleepData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
module.exports = router;
