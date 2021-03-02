module.exports = {
    isName,
    isUsername,
    isPassword,
    
  };

  function isName(req, res, next) {
    const user = req.body;
    
    if(user.name){
      next();
    } else {
      res.status(400).json({
        message: "please provide name",
      });
    }
  }
  function isUsername(req, res, next) {
    const user = req.body;
    
    if(user.username){
      next();
    } else {
      res.status(400).json({
        message: "please provide username",
      });
    }
  }
  function isPassword(req, res, next) {
    const user = req.body;
    
    if(user.password){
      next();
    } else {
      res.status(400).json({
        message: "please provide password",
      });
    }
  }