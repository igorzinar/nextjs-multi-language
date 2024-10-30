import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { language } = req.body;
        console.log("LANG 0--->",language);
        res.setHeader(
            'Set-Cookie',
            serialize('language', language, {
                path: '/',
                maxAge: 30 * 24 * 60 * 60, // 30 days
            })
        );
        res.status(200).json({ message: 'Language set successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
