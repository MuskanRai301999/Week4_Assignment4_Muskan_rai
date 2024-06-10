import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

// Define the interface for the payload stored in the JWT
export interface JwtPayload {
  userId: string;
  organizationId: string;
}

// Middleware function to authenticate the JWT
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  try {
    // Verify the token using the secret key
    const payload = jwt.verify(token, config.jwtSecret) as JwtPayload;
    req.user = payload; // Attach the payload to the request object

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
