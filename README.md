Playing an audio clip over and over seems to be all it takes to induce a full on system lock (100% CPU pinning) for several seconds at a time. And this freeze seems to occur semi-frequently, several times in five minutes. Sometimes it happens several times in a single minute.

Maybe a garbage collection issue?

Haven't been able to reproduce the issue outside my dev environment yet, which happens to have 1 CPU @ 3.3Ghz and 3 GB of memory.

- Seems to happen only in Chrome
- Happens whether using OGG or MP3 audio file
- Doesn't seem to make a difference where the audio file is sourced from