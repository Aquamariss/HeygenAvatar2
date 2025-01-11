const StreamingAvatar = require('@heygen/streaming-avatar').default;
const { TaskType, AvatarQuality } = require('@heygen/streaming-avatar');

const avatar = new StreamingAvatar({ token: 'NDgyNTY3ZjZlYzIwNDcwMGI5NDY2YzllYzUwNTQyOTAtMTczNTY1MTc4OQ==' });

const startSession = async () => {
  const sessionData = await avatar.createStartAvatar({
    avatarName: 'MyAvatar',
 //   quality: AvatarQuality.High,
  });

  console.log('Session started:', sessionData.session_id);

  await avatar.speak({
 //   session_id: sessionData.session_id,
    text: 'Hello, world!',
    task_type: TaskType.REPEAT,
  });
};

startSession();
