import { JwtPayload } from '../middleware/authMiddleware'; 
export const config = {
    jwtSecret: process.env.JWT_SECRET || '', 
  };
 

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload; 
    }
  }
}