/**
 * 
 * write a handler function that will take url from the query string and return the compliance status of the url.
 * 
 */

import { fetchDataAgainstUrl } from '../utility/parseURL';
import { compareWithClaude } from '../service/complianceHandler';
import { Request, Response } from 'express';

export async function checkComplianceHandler (req: Request, res: Response) {
    try {
        const url = req.query.url as string;
        if (!url) {
            throw new Error('URL is required');
        }

        const websiteContent = await fetchDataAgainstUrl(url);

        const nonComplianceText = await compareWithClaude(websiteContent);
        res.status(200).json({ nonComplianceText });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
}