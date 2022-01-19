import { Request, Response, NextFunction } from "express";
import { findVictums, updateVictumStatus } from "../services/victum.service";

const getVictums = async (req: any, res: Response, next: NextFunction) => {
  try {
    const victums = await findVictums();
    res.status(200).send(victums);
  } catch (error) {
    next(error);
  }
};

const updateVictum = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await updateVictumStatus(id);
    res.status(200).send('Ho ho ho!');
  } catch (error) {
    next(error);
  }
};

export { getVictums, updateVictum };
