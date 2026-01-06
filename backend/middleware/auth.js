const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ 
        error: { message: 'No authentication token, access denied' } 
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user info to request
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        error: { message: 'Invalid token' } 
      });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: { message: 'Token expired' } 
      });
    }
    res.status(500).json({ 
      error: { message: 'Server error in authentication' } 
    });
  }
};

module.exports = auth;
