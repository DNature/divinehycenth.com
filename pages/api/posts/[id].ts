import { NextApiRequest, NextApiResponse } from 'next';
import ArticleData from '../../../utils/data';

export default (req: NextApiRequest, res: NextApiResponse): void => {
    try {
        const {id} = req.query
        const selected = ArticleData.find(data => data.title === id)
        if(!selected){
            throw new Error("Cannot find user")
        }
        res.status(201).json(selected)
    } catch (e) {
        res.status(404).json({statusCode: 404, message: e.message})
    }
}