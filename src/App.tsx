import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const App = () => {
    const [text, setText] = useState<string>('');
    const [forbiddenWords, setForbiddenWords] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const highlightForbiddenWords = (text: string, forbiddenWords: string[]): string => {
        const words = text.split(' ');

        const updatedWords = words.map(word => {
            const cleanedWord = word.replace(/[.,!?]/g, "");
            if (forbiddenWords.includes(cleanedWord.toLowerCase())) {
                return `<del>${word}</del>`;
            }
            return word;
        });

        return updatedWords.join(' ');
    };

    const handleProcessText = () => {
        const forbiddenWordsArray = forbiddenWords.split(',').map(word => word.trim());
        const result = highlightForbiddenWords(text, forbiddenWordsArray);
        setResult(result);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Highlight Forbidden Words
            </Typography>

            <TextField
                label="Enter your text"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{ marginBottom: 2 }}
            />

            <TextField
                label="Enter forbidden words (comma separated)"
                variant="outlined"
                fullWidth
                value={forbiddenWords}
                onChange={(e) => setForbiddenWords(e.target.value)}
                sx={{ marginBottom: 2 }}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleProcessText}
                sx={{ marginBottom: 2 }}
            >
                Highlight Forbidden Words
            </Button>

            <Typography variant="h6">Result:</Typography>
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: result }}></Typography>
        </Box>
    );
}

export default App;
