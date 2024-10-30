import fs from 'fs';
import path from 'path';
// OPTIMIZE comment
export const getTranslations = (language: string) => {
    const filePath = path.join(process.cwd(), 'translations', language, 'translations.json');
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
    }
    return {};
    // FIXME hello
    // NOTE comment

    // ? question
    // ToDo comment
};
