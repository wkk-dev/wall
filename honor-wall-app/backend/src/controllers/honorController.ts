import { Request, Response } from 'express';
import { Honor } from '../models/honorModel';
import { getHonorData, updateHonorData } from '../services/dbService';

export const getLeaderboard = async (req: Request, res: Response) => {
    try {
        const leaderboard = await getHonorData('leaderboard');
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard data', error });
    }
};

export const getTopFive = async (req: Request, res: Response) => {
    try {
        const topFive = await getHonorData('topFive');
        res.status(200).json(topFive);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching top five data', error });
    }
};

export const getWeeklyStar = async (req: Request, res: Response) => {
    try {
        const weeklyStar = await getHonorData('weeklyStar');
        res.status(200).json(weeklyStar);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weekly star data', error });
    }
};

export const getStudyStar = async (req: Request, res: Response) => {
    try {
        const studyStar = await getHonorData('studyStar');
        res.status(200).json(studyStar);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching study star data', error });
    }
};

export const getBestGroup = async (req: Request, res: Response) => {
    try {
        const bestGroup = await getHonorData('bestGroup');
        res.status(200).json(bestGroup);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching best group data', error });
    }
};

export const getBestClass = async (req: Request, res: Response) => {
    try {
        const bestClass = await getHonorData('bestClass');
        res.status(200).json(bestClass);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching best class data', error });
    }
};

export const getBestDorm = async (req: Request, res: Response) => {
    try {
        const bestDorm = await getHonorData('bestDorm');
        res.status(200).json(bestDorm);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching best dorm data', error });
    }
};

export const updateHonorDataController = async (req: Request, res: Response) => {
    try {
        const { type, data } = req.body;
        await updateHonorData(type, data);
        res.status(200).json({ message: 'Honor data updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating honor data', error });
    }
};