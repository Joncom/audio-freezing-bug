Playing an audio clip over and over seems to be all it takes to induce a full on system lock (100% CPU pinning) for several seconds at a time. And this freeze seems to occur semi-frequently, several times in five minutes. Sometimes it happens several times in a single minute.

I'm guessing this is happening because of how garbage collection is working.

- Seems to happen only in Chrome
- Happens whether using OGG or MP3 audio file
- Doesn't seem to make a difference where the audio file is sourced from