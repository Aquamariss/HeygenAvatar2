const { StreamingAvatarClient } = require('@heygen/streaming-avatar');

// Initialize the Streaming Avatar Client
const client = new StreamingAvatarClient({
    apiKey: 'NDgyNTY3ZjZlYzIwNDcwMGI5NDY2YzllYzUwNTQyOTAtMTczNTY1MTc4OQ==', // Replace with your Heygen API key
});

async function callAvatar(avatarId, textToSpeak) {
    try {
        // Create a new session with the avatar ID
        const session = await client.createSession({
            avatarId: avatarId, // Use the avatar ID you want
            input: {
                text: textToSpeak, // The text you want the avatar to speak
                voice: 'ru-RU_Male', // Optional: Customize the voice
            },
            options: {
                streaming: true, // Enable streaming if needed
            },
        });

        console.log('Session created:', session);

        // Start streaming the avatar
        session.on('data', (data) => {
            console.log('Streaming data:', data);
            // Handle video/audio stream chunks here
        });

        session.on('end', () => {
            console.log('Streaming ended.');
        });

        session.on('error', (error) => {
            console.error('Error during streaming:', error);
        });

        // Start the session
        await session.start();
    } catch (error) {
        console.error('Error creating session:', error);
    }
}

// Example usage
const avatarId = 'Bryan_IT_Sitting_public'; // Replace with the avatar ID
const textToSpeak = 'Привет, я здесь чтобы рассказать тебе об управлении проектами';

callAvatar(avatarId, textToSpeak);
