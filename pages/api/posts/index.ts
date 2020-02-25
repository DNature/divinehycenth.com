import { NextApiRequest, NextApiResponse } from 'next';
import ArticleData from '../../../utils/data';

export default (_: NextApiRequest, res: NextApiResponse): void => {
    try {
        if(!Array.isArray(ArticleData)){
            throw new Error("Cannot find user data")
        }
        res.status(201).json(ArticleData)
    } catch (e) {
        res.status(500).json({statusCode: 500, message: e.message})
    }
}