import React, { useState, useRef, useEffect } from 'react';
import { Home, Search, Sliders, BookOpen, User, Star, Pause, Headphones, X, ArrowLeft, MoreVertical, PlayIcon, BellIcon } from 'lucide-react';
import { IconApple, IconBattery, IconSignal, IconWifi } from '../icons';
import {
  FouramImage, OwnTheNightImage, KeepingItRealImage, LeVibeImage, FourAm, GetOverIt, KeepingItReal, LeVibe, OverIt, OwnTheNight, BackwardsTen, Clock, ForwardsTen, Meter, Next, Play, Previous, Select, ShareScreen, FourAmIndica,
  FourAmHybrid,
  GetOverItIndica,
  GetOverItHybrid,
  KeepingItRealHybrid,
  KeepingItRealIndica,
  KeepingItRealSativa,
  LeVibeHybrid,
  LeVibeIndica,
  LeVibeSativa,
  OverItHybrid,
  OverItSativa,
  OwnTheNightHybrid,
  OwnTheNightIndica,
  OwnTheNightSativa,
  Pointer,
} from '../../assets';
import { useClickOutside } from '../../hooks';
import { CustomBarChart } from '../bar-chart';
import { Toggle } from '../toggle';

const mockAudio = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [modalOpen, setModalOpen] = useState(true);
  const [soundModalOpen, setSoundModalOpen] = useState(false);
  const [isOnNotification, setIsOnNotification] = useState(true);
  const [isOnDarkMode, setIsOnDarkMode] = useState(false);
  const [currentSong, setCurrentSong] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [stepsOpen, setStepsOpen] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [showNowPlaying, setShowNowPlaying] = useState<boolean>(false);
  const [eqActiveTab, setEqActiveTab] = useState<string>('Soundscape');
  const [demoStep, setDemoStep] = useState(0); // 0: none, 1: click first song, 2: click Sound (EQ), 3: click cannabis type, 4: thank you modal
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const theme = {
    bg: isOnDarkMode ? 'bg-[#181A20]' : 'bg-gray-50',
    cardBg: isOnDarkMode ? 'bg-gray-800' : 'bg-gray-100',
    modalBg: isOnDarkMode ? 'bg-gray-900' : 'bg-white',
    text: isOnDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isOnDarkMode ? 'text-gray-300' : 'text-gray-600',
    textTertiary: isOnDarkMode ? 'text-gray-400' : 'text-gray-500',
    border: isOnDarkMode ? 'border-gray-800' : 'border-gray-200',
    input: isOnDarkMode ? 'bg-gray-800' : 'bg-gray-100',
    shadow: isOnDarkMode ? '' : 'shadow-sm',
    modalOverlay: isOnDarkMode ? 'bg-black/40' : 'bg-black/20'
  };

  const indicaData = [
    { name: '31', max: 100, value: 80 },
    { name: '62', max: 100, value: 75 },
    { name: '125', max: 100, value: 70 },
    { name: '255', max: 100, value: 75 },
    { name: '500', max: 100, value: 60 },
    { name: '1k', max: 100, value: 55 },
    { name: '2k', max: 100, value: 50 },
    { name: '4k', max: 100, value: 45 },
    { name: '8k', max: 100, value: 40 },
    { name: '16k', max: 100, value: 35 },
  ];

  const sattivaData = [
    { name: '31', max: 100, value: 85 },
    { name: '62', max: 100, value: 88 },
    { name: '125', max: 100, value: 90 },
    { name: '255', max: 100, value: 80 },
    { name: '500', max: 100, value: 70 },
    { name: '1k', max: 100, value: 55 },
    { name: '2k', max: 100, value: 75 },
    { name: '4k', max: 100, value: 80 },
    { name: '8k', max: 100, value: 90 },
    { name: '16k', max: 100, value: 45 },
  ];

  const hybridData = [
    { name: '31', max: 100, value: 55 },
    { name: '62', max: 100, value: 42 },
    { name: '125', max: 100, value: 53 },
    { name: '255', max: 100, value: 60 },
    { name: '500', max: 100, value: 49 },
    { name: '1k', max: 100, value: 45 },
    { name: '2k', max: 100, value: 40 },
    { name: '4k', max: 100, value: 50 },
    { name: '8k', max: 100, value: 65 },
    { name: '16k', max: 100, value: 55 },
  ];

  const [eqValues, setEqValues] = useState(indicaData);
  const [selectedCannabisType, setSelectedCannabisType] = useState<string>('');

  const audioRef = useRef<any>(null);
  const modalRef = useRef<any>(null);
  const soundModalRef = useRef<any>(null);
  const stepsRef = useRef<any>(null);
  const thankYouModalRef = useRef<any>(null);

  useClickOutside(modalRef, modalRef, () => setModalOpen(false));
  useClickOutside(soundModalRef, soundModalRef, () => setSoundModalOpen(false));
  useClickOutside(stepsRef, stepsRef, () => setStepsOpen(false));
  useClickOutside(thankYouModalRef, thankYouModalRef, () => setShowThankYouModal(false));

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  const strainTags = [
    '3D Cbd',
    '3 Bears Og',
    'Afghan Skunk',
    '24K Gold',
    'Blue Dream',
    'Purple Haze'
  ];

  const guidedSessions = [
    { title: 'Clear Start', rating: 4.8, gradient: 'from-yellow-400 via-pink-400 to-purple-500' },
    { title: 'Calm Reset', rating: 3.0, gradient: 'from-yellow-400 via-pink-400 to-purple-500' },
    { title: 'Deep Focus', rating: 4.5, gradient: 'from-green-400 via-blue-400 to-purple-500' },
    { title: 'Sleep Easy', rating: 4.2, gradient: 'from-purple-400 via-pink-400 to-red-500' },
    { title: 'Energy Boost', rating: 4.7, gradient: 'from-orange-400 via-red-400 to-pink-500' },
    { title: 'Stress Relief', rating: 4.3, gradient: 'from-teal-400 via-cyan-400 to-blue-500' }
  ];

  const podcasts = [
    {
      title: 'Blunt Talks',
      image: '/api/placeholder/120/120',
      bgColor: 'bg-amber-700'
    },
    {
      title: 'Mood Architects',
      image: '/api/placeholder/120/120',
      bgColor: 'bg-black'
    },
    {
      title: 'High Thoughts',
      image: '/api/placeholder/120/120',
      bgColor: 'bg-green-800'
    },
    {
      title: 'Cannabis Culture',
      image: '/api/placeholder/120/120',
      bgColor: 'bg-purple-800'
    },
    {
      title: 'Strain Stories',
      image: '/api/placeholder/120/120',
      bgColor: 'bg-blue-800'
    },
    {
      title: 'Wellness Weekly',
      image: '/api/placeholder/120/120',
      bgColor: 'bg-red-800'
    }
  ];

  const freshlyRolledBeats = [
    {
      title: "Own the Night",
      artist: "Unknown",
      image: OwnTheNightImage,
      audioUrl: OwnTheNight,
      audioUrls: {
        indica: OwnTheNightIndica,
        sativa: OwnTheNightSativa,
        hybrid: OwnTheNightHybrid,
      },
    },
    {
      title: "Keeping It Real",
      artist: "Unknown",
      image: KeepingItRealImage,
      audioUrl: KeepingItReal,
      audioUrls: {
        indica: KeepingItRealIndica,
        sativa: KeepingItRealSativa,
        hybrid: KeepingItRealHybrid,
      },
    },
    {
      title: "4am",
      artist: "Unknown",
      image: FouramImage,
      audioUrl: FourAm,
      audioUrls: {
        indica: FourAmIndica,
        hybrid: FourAmHybrid,
        // no sativa version in your files
      },
    },
    {
      title: "Le Vibe",
      artist: "Unknown",
      image: LeVibeImage,
      audioUrl: LeVibe,
      audioUrls: {
        indica: LeVibeIndica,
        sativa: LeVibeSativa,
        hybrid: LeVibeHybrid,
      },
    },
    {
      title: "Get Over It",
      artist: "Unknown",
      image: null,
      audioUrl: GetOverIt,
      audioUrls: {
        indica: GetOverItIndica,
        hybrid: GetOverItHybrid,
        // no sativa version in your files
      },
    },
    {
      title: "Over It",
      artist: "Unknown",
      image: null,
      audioUrl: OverIt,
      audioUrls: {
        sativa: OverItSativa,
        hybrid: OverItHybrid,
        // no indica version in your files
      },
    },
  ];

  const litHitsOfTheWeek = [
    {
      title: 'Starboy',
      artist: 'The Weeknd, Daft Punk',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
      audioUrl: mockAudio
    },
    {
      title: 'Un dos Tres',
      artist: 'IRAWO',
      bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500',
      audioUrl: mockAudio
    },
    {
      title: 'Yara',
      artist: 'IRAWO',
      bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500',
      audioUrl: mockAudio
    },
    {
      title: 'Fire Track',
      artist: 'Hot Artist',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-500',
      audioUrl: mockAudio
    },
    {
      title: 'Weekly Hit',
      artist: 'Top Chart',
      bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500',
      audioUrl: mockAudio
    }
  ];

  const yourHistory = [
    { title: 'Un dos Tres', artist: 'IRAWO', bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500', audioUrl: mockAudio },
    { title: 'Yara', artist: 'IRAWO', bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500', audioUrl: mockAudio },
    { title: 'Fire Track', artist: 'Hot Artist', bgColor: 'bg-gradient-to-br from-red-500 to-pink-500', audioUrl: mockAudio },
    { title: 'Weekly Hit', artist: 'Top Chart', bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500', audioUrl: mockAudio },
    { title: 'Fire Track', artist: 'Hot Artist', bgColor: 'bg-gradient-to-br from-red-500 to-pink-500', audioUrl: mockAudio },
    { title: 'Weekly Hit', artist: 'Top Chart', bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500', audioUrl: mockAudio }
  ];

  const bluntBangers = [
    { title: 'Summer Chill', artist: 'Beach Vibes', bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500', audioUrl: mockAudio },
    { title: 'Lotus Dreams', artist: 'Zen Garden', bgColor: 'bg-gradient-to-br from-green-400 to-teal-600', audioUrl: mockAudio },
    { title: 'Night Mood', artist: 'Dark Beats', bgColor: 'bg-gradient-to-br from-purple-600 to-pink-500', audioUrl: mockAudio },
    { title: 'Energy Flow', artist: 'Power House', bgColor: 'bg-gradient-to-br from-red-500 to-orange-600', audioUrl: mockAudio }
  ];

  const moodOptions = [
    { name: 'Chill', icon: '🧊', color: 'bg-blue-700' },
    { name: 'Energized', icon: '🔥', color: 'bg-red-600' },
    { name: 'Foggy', icon: '⬜', color: 'bg-gray-400' },
    { name: 'Inspired', icon: '🎨', color: 'bg-yellow-600' },
    { name: 'Low-Key', icon: '🌙', color: 'bg-purple-700' }
  ];

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Explore', icon: Search },
    { name: 'Sound (EQ)', icon: Sliders },
    { name: 'Library', icon: BookOpen },
    { name: 'Profile', icon: User }
  ];

  const exploreCategories = [
    { name: 'Podcasts', color: 'bg-green-500', image: 'jordan-stranger' },
    { name: 'Playlists', color: 'bg-purple-600', image: 'woman-headphones' },
    { name: 'Users', color: 'bg-yellow-500', image: 'nour-album' },
    { name: 'Articles', color: 'bg-teal-600', image: 'woman-pink' },
    { name: 'Strains', color: 'bg-amber-700', image: 'acerial-album' },
    { name: 'Meditation', color: 'bg-slate-600', image: 'blue-album' },
    { name: 'Acoustic Chill', color: 'bg-cyan-500', image: 'acoustic-phone' },
    { name: 'Chillwave', color: 'bg-green-500', image: 'jordan-stranger' },
    { name: 'Neo-Soul', color: 'bg-purple-600', image: 'woman-headphones' },
    { name: 'Funk Pulse', color: 'bg-yellow-500', image: 'nour-album' }
  ];

  useEffect(() => {
    if (selectedCannabisType === "Indica") {
      setEqValues(indicaData);
    } else if (selectedCannabisType === "Sativa") {
      setEqValues(sattivaData);
    } else if (selectedCannabisType === "Hybrid") {
      setEqValues(hybridData);
    }

    if (currentSong && audioRef.current) {
      const variant = selectedCannabisType.toLowerCase();
      const newSrc = currentSong.audioUrls[variant] || currentSong.audioUrl; // Fallback to default audioUrl

      if (audioRef.current.src !== newSrc) {
        const currentTime = audioRef.current.currentTime;
        const wasPlaying = isPlaying;

        // Pause only if playing to avoid unnecessary state changes
        if (isPlaying) {
          audioRef.current.pause();
        }

        audioRef.current.src = newSrc;
        audioRef.current.currentTime = currentTime;

        // Wait for the audio to be ready before playing
        const onCanPlay = () => {
          if (wasPlaying) {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch((error: any) => {
              console.error('Audio play failed:', error);
              setIsPlaying(false);
            });
          }
          // Clean up the event listener
          audioRef.current.removeEventListener('canplay', onCanPlay);
        };

        audioRef.current.addEventListener('canplay', onCanPlay);
        audioRef.current.load(); // Load the new source
      }
    }
  }, [selectedCannabisType, currentSong]);

  const playSong = (song: any) => {
    if (audioRef.current && song.audioUrl) {
      setCurrentSong(song);

      // Ensure any existing playback is stopped
      if (isPlaying) {
        audioRef.current.pause();
      }

      const variant = selectedCannabisType.toLowerCase();
      audioRef.current.src = song.audioUrls[variant] || song.audioUrl; // Use variant or default audioUrl
      audioRef.current.currentTime = 0; // Reset to start

      const onCanPlay = () => {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          // Update duration once metadata is loaded
          audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);
          });
        }).catch((error: any) => {
          console.error('Audio play failed:', error);
          setIsPlaying(false);
          // Fallback to test tone
          const audioContext = new (window.AudioContext || window.AudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.value = 440;
          oscillator.type = 'sine';
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 1);

          setDuration(60); // Mock duration
        });
        audioRef.current.removeEventListener('canplay', onCanPlay);
      };

      audioRef.current.addEventListener('canplay', onCanPlay);
      audioRef.current.load();
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error: any) => {
          console.error('Audio play failed:', error);
          setIsPlaying(false);
        });
      }
    }
  };

  const handleSongClick = (song: any) => {
    if (demoStep === 1) {
      playSong(song);
      setDemoStep(2);
    } else {
      playSong(song);
    }
  };

  const handleSoundEQClick = () => {
    if (demoStep === 2) {
      setActiveTab('Sound (EQ)');
      setDemoStep(demoStep + 1);
    } else {
      setActiveTab('Sound (EQ)');
    }
  };

  const handleCannabisTypeClick = (type: any) => {
    if (demoStep === 3 && type === 'Indica') {
      setSelectedCannabisType(type);
      setEqActiveTab('Soundscape');
      setDemoStep(4);
    } else if (demoStep === 4 && type === 'Sativa') {
      setSelectedCannabisType(type);
      setEqActiveTab('Soundscape');
      setDemoStep(5);
    } else if (demoStep === 5 && type === 'Hybrid') {
      setSelectedCannabisType(type);
      setEqActiveTab('Soundscape');
      setDemoStep(6);
      setTimeout(() => {
        setShowThankYouModal(true);
      }, 3000);

      // Only close steps after all cannabis types are selected
      // setStepsOpen(false); // Comment out or remove this line if it exists
    } else {
      setSelectedCannabisType(type);
      setEqActiveTab('Soundscape');
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
    }
    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', () => { });
      }
    };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      setDemoStep(0);
    } else {
      setDemoStep(1);
    }
  }, [modalOpen]);

  useEffect(() => {
    if (demoStep === 6) {
      const interval = setInterval(() => {
        setShowThankYouModal(true);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [demoStep]);

  useEffect(() => {
    if (demoStep === 1) {
      setActiveTab('Home');
      setShowThankYouModal(false);
      setShowNowPlaying(false);
    }
  }, [demoStep]);

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, audioRef.current.duration);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const playNextSong = () => {
    if (currentSong) {
      const currentIndex = freshlyRolledBeats.findIndex(song => song.title === currentSong.title);
      const nextIndex = (currentIndex + 1) % freshlyRolledBeats.length;
      const nextSong = freshlyRolledBeats[nextIndex];
      playSong(nextSong);
    }
  };

  const playPrevSong = () => {
    if (currentSong) {
      const currentIndex = freshlyRolledBeats.findIndex(song => song.title === currentSong.title);
      const prevIndex = (currentIndex - 1 + freshlyRolledBeats.length) % freshlyRolledBeats.length; // Loop to last song if at first
      const prevSong = freshlyRolledBeats[prevIndex];
      playSong(prevSong);
    }
  };

  const renderDemoOverlay = () => {
    if (demoStep === 0 || demoStep === 6) return null;

    let message, position;
    if (demoStep === 1) {
      message = 'Click the first song here';
      position = 'top-[230px] left-[35px]';
    } else if (demoStep === 2) {
      message = 'Click Sound (EQ) on the bottom navbar';
      position = '-bottom-[40px] left-[110px]';
    } else if (demoStep === 3) {
      message = 'Select Indica to feel that vibe shift';
      position = 'top-[420px] left-[32px]';
    } else if (demoStep === 4) {
      message = 'Feel that shift? Select Sativa to feel that again';
      position = 'top-[420px] left-[110px]';
    } else if (demoStep === 5) {
      message = 'Feel the vibe shift again? Select Hybrid to let that hit';
      position = 'top-[420px] left-[200px]';
    }

    return (
      stepsOpen ? <div className="absolute bg-black/30 inset-0 z-[999999999999999] h-[590px] -mt-[25px] pointer-events-none">
        <div className={`absolute ${position} ${demoStep === 2 && 'flex gap-1'} font-semibold text-[10px]`}>
          <img src={Pointer} color="white" className={` ${demoStep === 2 ? 'w-16' : 'w-14'} h-auto duration-1000`} />
          {demoStep === 1 && <div className='flex flex-col'>
            <div className={`${theme.bg} w-3 h-3 rotate-45 -mb-2 ml-6`} />
            <p className={`${theme.text} ${theme.bg} rounded-[8px] py-2 px-3`}>{message}</p>
          </div>}
          {demoStep === 2 && <div className='flex items-end mb-16 -ml-4'>
            <div className={`${theme.bg} w-3 h-3 rotate-[40deg] mb-1 -mr-2 flex-shrink-0`} />
            <p className={`${theme.text} ${theme.bg} rounded-[8px] py-2 px-3 w-[96px]`}>{message}</p>
          </div>}
          {(demoStep === 3 || demoStep === 4) && <div className='flex flex-col -ml-2.5'>
            <div className={`${theme.bg} w-3 h-3 rotate-45 -mb-2 ml-8`} />
            <p className={`${theme.text} ${theme.bg} rounded-[8px] py-2 px-3 w-[150px]`}>{message}</p>
          </div>}
          {(demoStep === 5) && <div className='flex flex-col items-end -ml-[100px]'>
            <div className={`${theme.bg} w-3 h-3 rotate-45 -mb-2 mr-6`} />
            <p className={`${theme.text} ${theme.bg} rounded-[8px] py-2 px-3 w-[150px]`}>{message}</p>
          </div>}
        </div>
      </div> : <div></div>
    );
  };

  const renderThankYouModal = () => (
    <div className={`absolute inset-0 ${theme.modalOverlay} h-[590px] -mt-[25px] flex items-center justify-center z-50 p-4`}>
      <div ref={thankYouModalRef} className={`${theme.modalBg} ${theme.shadow} rounded-[12px] px-4 py-6 w-full max-w-sm`}>
        <h2 className={`${theme.text} text-sm font-bold mb-2`}>Thank You for Trying the Demo!</h2>
        <p className={`${theme.textSecondary} text-[10px] mb-4`}>
          Experience the full power of cannabis-inspired audio with our app. Download now to explore more!
        </p>
        <a
          href="https://apps.apple.com/ca/app/vukaya/id6468777028"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { setStepsOpen(false); setShowThankYouModal(false); }}
          className="bg-black text-white px-3 py-1.5 rounded-[9px] font-semibold hover:bg-black/80 transition-colors flex items-center w-fit gap-1"
        >
          <IconApple size={25} color="white" />
          <div className="flex flex-col leading-none">
            <span className="text-[9px]">Download on the</span>
            <span className="text-[13px] font-semibold">App Store</span>
          </div>
        </a>
      </div>
    </div>
  );

  const renderMoodModal = () => (
    <div className={`absolute inset-0 ${theme.modalOverlay} h-[590px] -mt-[25px] flex items-center justify-center z-50 p-4`}>
      <div
        ref={modalRef}
        className={`${theme.modalBg} ${theme.shadow} rounded-[12px] p-3 w-full max-w-sm`}
      >
        <h2 className={`${theme.text} text-[13px] font-bold mb-2`}>Good to see you, Baddie</h2>
        <p className={`${theme.textSecondary} text-[10px] mb-3 w-[50%]`}>What mood are we channeling today?</p>

        <div className="grid grid-cols-4 gap-x-1.5 gap-y-3 mb-4">
          {moodOptions.map((mood, index) => (
            <div key={index} className='flex flex-col items-center gap-1'>
              <div
                className={`${isOnDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-[5px] flex flex-col items-center justify-center aspect-square cursor-pointer hover:opacity-80 transition-opacity w-full`}
                onClick={() => setModalOpen(false)}
              >
                <div className="text-[25px]">{mood.icon}</div>
              </div>
              <div className={`${theme.text} text-[7px] font-medium`}>{mood.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSoundEQPage = () => (
    <div className={`h-[515px] overflow-auto scrollbar-none ${theme.bg} ${currentSong && 'pb-8'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-3 pt-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className={`w-5 h-5 ${theme.text} cursor-pointer`} onClick={() => setActiveTab('Home')} />
          <h1 className={`${theme.text} text-base font-bold`}>Cannabis Sound</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`${theme.input} rounded-[12px] px-4 py-3 mb-4 flex items-center gap-2 mx-3 ${theme.shadow}`}>
        <Search className={`w-4 h-4 ${theme.textTertiary}`} />
        <input
          type="text"
          placeholder="Search for a Cannabis Profile"
          className={`bg-transparent ${theme.text} text-[10px] flex-1 outline-none placeholder-${isOnDarkMode ? 'gray-400' : 'gray-500'}`}
        />
      </div>

      <div className={`${theme.cardBg} ${theme.shadow} rounded-[12px] px-3.5 pt-3 pb-3 mx-3 mb-4 h-[250px] overflow-y-auto scrollbar-none`}>
        {/* Tab Selector */}
        <div className="flex mb-4">
          <button
            onClick={() => setEqActiveTab('Description')}
            className={`flex-1 py-2 px-4 text-xs font-medium cursor-pointer transition-colors ${theme.textSecondary
              }`}
          >
            Description
          </button>
          <button
            onClick={() => setEqActiveTab('Soundscape')}
            className={`flex-1 py-2 px-4 text-xs font-medium cursor-pointer transition-colors ${theme.textSecondary
              }`}
          >
            Soundscape
          </button>
        </div>

        {eqActiveTab === 'Description' ? (
          <div className="h-[200px] overflow-y-auto scrollbar-none">
            <h2 className={`${theme.text} text-xs font-semibold mb-1`}>3 Bears Og</h2>
            <p className="text-purple-400 text-[10px] mb-3">indica</p>

            {/* Mood Icons */}
            <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-none">
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🌊</span>
                </div>
                <p className={`${theme.text} text-[6px]`}>Relaxing/Calming</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">😊</span>
                </div>
                <p className={`${theme.text} text-[6px]`}>Happy</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">💤</span>
                </div>
                <p className={`${theme.text} text-[6px]`}>Sedative/Sleepy</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <p className={`${theme.text} text-[6px]`}>Creative</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <p className={`${theme.text} text-[6px]`}>Creative</p>
              </div>
            </div>

            <h3 className={`${theme.text} text-xs font-bold mb-4`}>Sweet, Pungent, Earthy</h3>

            <p className={`${theme.textSecondary} text-[9px] leading-relaxed mb-6`}>
              3 Bears OG by Mephisto Genetics is an excellent auto-cross of Bear OG x Karma OG. As a smaller autoflower, this makes it an excellent choice for beginner growers who prefer indica effects. This strain features a...
            </p>
          </div>
        ) : (
          <div className="">
            {/* EQ Controls */}
            <div className={`${theme.cardBg} rounded-[12px] px-3`}>
              <CustomBarChart data={eqValues} />
            </div>
          </div>
        )}
      </div>

      {/* Cannabis Type Selector */}
      <div className="flex justify-between mb-4 mx-3">
        {['Indica', 'Sativa', 'Hybrid'].map((type) => (
          <button
            key={type}
            onClick={() => handleCannabisTypeClick(type)}
            className={`cursor-pointer px-5 py-[4px] rounded-full text-[10px] font-medium transition-colors ${selectedCannabisType === type
              ? 'bg-purple-600 text-white'
              : `${theme.cardBg} ${theme.textSecondary} ${theme.shadow}`
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className={`flex flex-col justify-between ${theme.cardBg} ${theme.shadow} rounded-[12px] p-4 mb-6 mx-3`}>
        <div className='flex justify-between w-full'>
          <h3 className={`${theme.text} text-xs font-bold`}>Comments</h3>
          <button className="text-purple-400 text-[10px]">See All</button>
        </div>

        <div className='my-4'>
          <p className={`${theme.textSecondary} text-[9px] leading-relaxed text-center`}>
            No comments yet. Be the first to share your thoughts!
          </p>
        </div>
      </div>
    </div>
  );

  const renderCannabisSound = () => (
    <div className={`absolute inset-0 ${theme.modalOverlay} flex items-center justify-center z-50`}>
      <div
        ref={soundModalRef}
        className={`${theme.modalBg} ${theme.shadow} rounded-[12px] py-5 w-[90%] mx-auto`}
      >
        <div className="flex items-center justify-between mb-4 mx-3">
          <h2 className={`${theme.text} text-base font-bold`}>Cannabis Sound</h2>
          <div className="flex items-center gap-3">
            <Home className={`w-3.5 h-3.5 ${theme.textTertiary} cursor-pointer`} />
            <button onClick={() => setSoundModalOpen(false)}>
              <X className={`w-4 h-4 ${theme.textTertiary} cursor-pointer`} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`${theme.input} rounded-[12px] px-4 py-3 mb-4 flex items-center gap-2 mx-3`}>
          <Search className={`w-4 h-4 ${theme.textTertiary}`} />
          <input
            type="text"
            placeholder="Search"
            className={`bg-transparent ${theme.text} text-[10px] flex-1 outline-none placeholder-${isOnDarkMode ? 'gray-400' : 'gray-500'}`}
          />
        </div>

        {/* Cannabis Type Selector */}
        <div className="flex justify-between mb-4 mx-3">
          {['Indica', 'Sativa', 'Hybrid'].map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedCannabisType(type);
                setActiveTab('Sound (EQ)');
                setSoundModalOpen(false);
                setEqActiveTab('Soundscape');
              }}
              className={`cursor-pointer px-4 py-[4px] rounded-full text-[10px] font-medium transition-colors ${selectedCannabisType === type
                ? 'bg-purple-600 text-white'
                : `${theme.cardBg} ${theme.textSecondary}`
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Strain Tags */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {strainTags.map((strain, index) => (
            <div key={index} className={`${theme.cardBg} ${theme.text} px-2 py-1 rounded-full text-[10px] whitespace-nowrap ${theme.shadow}`}>
              {strain}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNowPlayingScreen = () => {
    const handleSeek = (e: React.MouseEvent | React.TouchEvent) => {
      if (!audioRef.current || !progressBarRef.current || !duration) return;

      const rect = progressBarRef.current.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const offsetX = clientX - rect.left;
      const newTime = (offsetX / rect.width) * duration;

      audioRef.current.currentTime = Math.max(0, Math.min(newTime, duration));
      setCurrentTime(audioRef.current.currentTime);
    };

    const handleDrag = (e: MouseEvent | TouchEvent) => {
      if (!audioRef.current || !progressBarRef.current || !duration) return;

      const rect = progressBarRef.current.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const offsetX = clientX - rect.left;
      const newTime = (offsetX / rect.width) * duration;

      audioRef.current.currentTime = Math.max(0, Math.min(newTime, duration));
      setCurrentTime(audioRef.current.currentTime);
    };

    const startDragging = () => {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('touchmove', handleDrag);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchend', stopDragging);
    };

    const stopDragging = () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
    return (
      <div className="inset-0 bg-gradient-to-b from-green-900 via-green-800 to-black z-50 top-0 h-[560px]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 pt-6">
          <ArrowLeft className="w-5 h-auto text-white cursor-pointer" onClick={() => setShowNowPlaying(false)} />
          <div className="text-center mt-2">
            <h2 className="text-white text-xs">Playing from playlist</h2>
            <p className="text-green-400 text-[10px]">Cannabis Vibes</p>
          </div>
          <MoreVertical className="w-auto h-4.5 text-white" />
        </div>

        {/* Album Art */}
        <div className="flex justify-center pb-4 w-[230px] h-[220px] mx-auto rounded-[20px]">
          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        {/* Song Info */}
        <div className="text-center px-8 mb-8">
          <h1 className="text-white text-lg font-bold mb-1">{currentSong?.title || 'Starboy'}</h1>
          <p className="text-gray-300 text-sm">{currentSong?.artist || 'The Weeknd, Daft Punk'}</p>
        </div>

        {/* Progress Bar */}
        <div className="px-4 mb-8">
          <div
            ref={progressBarRef}
            className="w-full bg-gray-600 rounded-full h-1 mb-2 cursor-pointer"
            onMouseDown={e => { handleSeek(e); startDragging(); }}
            onTouchStart={e => { handleSeek(e); startDragging(); }}
          >
            <div
              className="bg-green-500 h-1 rounded-full transition-all duration-50"
              style={{ width: `${(currentTime / (duration || 210)) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-white text-sm">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration || 210)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-8 mb-8">
          <img src={Previous} alt="previous icon" className="w-5 h-5 text-black fill-current cursor-pointer" onClick={playPrevSong} />
          <img src={BackwardsTen} alt="backwards icon" className="w-6 h-6 text-black fill-current cursor-pointer" onClick={skipBackward} />
          {!isPlaying ?
            <img onClick={togglePlayPause} src={Play} alt="Play" className="w-12 h-12 text-black fill-current cursor-pointer" />
            : (
              <button
                onClick={togglePlayPause}
                className="w-12 h-12 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
              >
                <Pause className="w-6 h-6 text-black fill-current cursor-pointer" />
              </button>
            )}
          <img src={ForwardsTen} alt="forwards icon" className="w-6 h-6 text-black fill-current cursor-pointer" onClick={skipForward} />
          <img src={Next} alt="next icon" className="w-5 h-5 text-black fill-current cursor-pointer" onClick={playNextSong} />
        </div>

        {/* Additional Controls */}
        <div className="flex items-center justify-between px-8">
          <img src={Meter} alt="meter icon" className="w-4 h-4 text-black fill-current cursor-pointer" />
          <img src={Clock} alt="clock icon" className="w-4 h-4 text-black fill-current cursor-pointer" />
          <img src={ShareScreen} alt="scree share icon" className="w-4 h-4 text-black fill-current cursor-pointer" />
          <img src={Select} alt="select icon" className="w-4 h-4 text-black fill-current cursor-pointer" />
        </div>
      </div>
    );
  }

  const renderCard = (item: any, index: any, showArtist = true) => (
    <div key={index} className="flex-shrink-0 text-center">
      <div
        className={`w-22 h-20 rounded-[12px] mb-2 relative overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
        onClick={() => {
          playSong(item);
          handleSongClick(item);
        }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {item.title === 'Amasosha' || item.title === 'That heat' ? (
              <div className="text-center">
                <div className="text-white font-bold text-lg mb-1">SHAYA</div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-2">
                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  </div>
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
            ) : item.title === 'Un dos Tres' || item.title === 'Yara' ? (
              <div className="text-center">
                <div className="text-white font-bold text-sm mb-1">IRAWO</div>
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="text-black text-xs font-bold">Ψ</div>
                </div>
              </div>
            ) : item.title === 'Summer Chill' ? (
              <div className="text-white text-4xl">🏖️</div>
            ) : item.title === 'Lotus Dreams' ? (
              <div className="text-white text-4xl">🪷</div>
            ) : (
              <div className={`w-22 h-20 ${item.bgColor ?? 'bg-gradient-to-br from-gray-500 to-gray-700'} rounded-[12px] flex items-center justify-center`}>
                <PlayIcon className="w-6 h-6 text-white fill-current" />
              </div>
            )}
          </>
        )}
      </div>
      <h3 className={`${theme.text} font-medium text-[10px] mb-1`}>{item.title}</h3>
      {showArtist && item.artist && (
        <p className={`${theme.textTertiary} text-[9px]`}>{item.artist}</p>
      )}
    </div>
  );

  const renderHomeContent = () => (
    <div className={`h-[515px] ${currentSong && 'pb-8'} ${stepsOpen ? ' overflow-hidden' : 'overflow-auto scrollbar-none'}`}>
      {/* Header */}
      <div className="flex flex-col mb-4 px-3 relative pt-5">
        <img src={`${isOnDarkMode ? '/logo-white.avif' : '/logo.avif'}`} alt='logo icon' className='w-[70px] h-auto mb-3' />
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 flex-shrink-0 ${isOnDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>
            <User className={`w-4 h-4 ${isOnDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          </div>
          <div>
            <h1 className={`${theme.text} text-xs font-semibold`}>Baddie</h1>
            <p className={`${theme.textTertiary} text-[10px] w-[70%]`}>Your vibe is chill. Stay easy today.</p>
          </div>
        </div>
        <div className='flex gap-2 text-[6.5px] absolute top-6 right-4'>
          <div className='flex flex-col gap-[2px] items-center'>
            <Sliders className={`w-3 h-3 ${theme.textTertiary} cursor-pointer`} onClick={() => setSoundModalOpen(true)} />
            Sound (EQ)
          </div>
          <div className='flex flex-col gap-[2px] items-center'>
            <BookOpen className={`w-3 h-3 ${theme.textTertiary} cursor-pointer`} onClick={() => setActiveTab('Library')} />
            Library
          </div>
          <div className='flex flex-col gap-[2px] items-center'>
            <BellIcon className={`w-3 h-3 ${theme.textTertiary} cursor-pointer`} onClick={() => { }} />
            Alerts
          </div>
        </div>

      </div>

      {/* Strain Tags */}
      <div className="flex gap-2 pl-2 pb-6 overflow-x-auto scrollbar-none">
        {strainTags.map((strain, index) => (
          <div key={index} className={`${theme.cardBg} ${theme.text} ${theme.shadow} px-2 py-1 rounded-full whitespace-nowrap text-[9px]`}>
            {strain}
          </div>
        ))}
      </div>

      {/* Freshly Rolled Beats */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className={`${theme.text} text-[13px] font-bold`}>Freshly Rolled Beats</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {freshlyRolledBeats.map((beat, index) => renderCard(beat, index))}
        </div>
      </div>

      {/* Guided Sessions */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className={`${theme.text} text-[13px] font-bold`}>Guided Sessions</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex pl-3 gap-2 overflow-x-auto scrollbar-none">
          {guidedSessions.map((session, index) => (
            <div key={index} className="flex-shrink-0 w-22">
              <div className={`h-20 bg-gradient-to-br ${session.gradient} rounded-[12px] flex flex-col gap-2 p-2 relative overflow-hidden`}>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-300 fill-current" />
                  <span className="text-white font-medium text-[10px]">{session.rating}</span>
                </div>
                <h3 className="text-white text-[10px] text-center font-semibold leading-tight">{session.title}</h3>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/10 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zizling Podcasts */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className={`${theme.text} text-[13px] font-bold`}>Zizling Podcasts</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {podcasts.map((podcast, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <div className={`w-22 h-20 ${podcast.bgColor} rounded-[12px] mb-3 relative overflow-hidden flex items-center justify-center`}>
                {podcast.title === 'Blunt Talks' ? (
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1">Blunt</div>
                    <div className="text-white font-bold text-lg mb-2">TALKS</div>
                    <div className="text-green-400 text-xs">REAL TALK • REAL CANNABIS</div>
                    <div className="w-8 h-1 bg-green-400 mx-auto mt-1"></div>
                  </div>
                ) : podcast.title === 'Mood Architects' ? (
                  <div className="text-white text-6xl font-thin italic">v</div>
                ) : (
                  <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                )}
              </div>
              <h3 className={`${theme.text} font-medium text-[10px]`}>{podcast.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Lit Hits of the Week */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className={`${theme.text} text-[13px] font-bold`}>Lit Hits of the Week</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {litHitsOfTheWeek.map((hit, index) => renderCard(hit, index))}
        </div>
      </div>

      {/* Blunt Bangers */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className={`${theme.text} text-[13px] font-bold`}>Blunt Bangers</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {bluntBangers.map((banger, index) => renderCard(banger, index))}
        </div>
      </div>
    </div>
  );

  const renderExploreContent = () => (
    <div className={`h-[515px] ${currentSong && 'pb-12'} overflow-auto scrollbar-none`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4 pt-6">
        <h1 className={`${theme.text} text-xl font-bold`}>Explore</h1>
        <div className="flex items-center gap-4">
          <Search className={`w-5 h-5 ${theme.text}`} />
          <Headphones className={`w-5 h-5 ${theme.text}`} />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-2 px-4">
        {exploreCategories.map((category, index) => (
          <div key={index} className={`${category.color} rounded-[13px] h-20 p-4 relative overflow-hidden`}>
            <h3 className="text-white font-bold text-sm">{category.name}</h3>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-white/20 rounded-lg rotate-30"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLibraryContent = () => (
    <div className={`h-[515px] ${currentSong && 'pb-8'} overflow-auto scrollbar-none`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4 pt-6">
        <h1 className={`${theme.text} text-xl font-bold`}>Library</h1>
        <div className="flex items-center gap-4">
          <Search className={`w-5 h-5 ${theme.text}`} />
          <Headphones className={`w-5 h-5 ${theme.text}`} />
        </div>
      </div>

      {/* Your History Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 px-4">
          <h2 className={`${theme.text} text-base font-bold`}>Your History</h2>
          <button className="text-purple-400 text-xs font-medium cursor-pointer">See All</button>
        </div>

        <div className="flex gap-2 px-4 overflow-x-auto scrollbar-none">
          {yourHistory.map((song, index) => (
            <div className="text-center cursor-pointer" key={index} onClick={() => playSong(song)}>
              <div className="w-20 aspect-square bg-gradient-to-br from-orange-500 to-red-600 rounded-[13px] mb-2 flex items-center justify-center">
                <div className="text-white font-bold text-xs">{song.artist}</div>
              </div>
              <p className={`${theme.text} text-xs font-medium text-left pl-2`}>{song.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Library Categories */}
      <div className="px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`w-4 h-3 border ${isOnDarkMode ? 'border-white' : 'border-gray-900'} rounded-sm flex items-center justify-center`}>
                <PlayIcon className={`w-2 h-2 ${theme.text} fill-current`} />
              </div>
            </div>
            <span className={`${theme.text} text-base font-medium`}>Playlists</span>
          </div>
          <div className={theme.textTertiary}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`w-4 h-4 rounded-full border-2 ${isOnDarkMode ? 'border-white' : 'border-gray-900'} flex items-center justify-center`}>
                <div className={`w-1 h-1 ${isOnDarkMode ? 'bg-white' : 'bg-gray-900'} rounded-full`}></div>
              </div>
            </div>
            <span className={`${theme.text} text-base font-medium`}>Podcasts</span>
          </div>
          <div className={theme.textTertiary}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`w-4 h-3 border ${isOnDarkMode ? 'border-white' : 'border-gray-900'} rounded-sm`}></div>
            </div>
            <span className={`${theme.text} text-base font-medium`}>Albums</span>
          </div>
          <div className={theme.textTertiary}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`w-3 h-3 rounded-full border ${isOnDarkMode ? 'border-white' : 'border-gray-900'} flex items-center justify-center`}>
                <div className={`w-1 h-1 ${isOnDarkMode ? 'bg-white' : 'bg-gray-900'} rounded-full`}></div>
              </div>
            </div>
            <span className={`${theme.text} text-base font-medium`}>Songs</span>
          </div>
          <div className={theme.textTertiary}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileContent = () => (
    <div className={`h-[515px] ${currentSong && 'pb-8'} overflow-auto scrollbar-none`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4 pt-6">
        <h1 className={`${theme.text} text-xl font-bold`}>Profile</h1>
        <Headphones className={`w-5 h-5 ${theme.text}`} />
      </div>

      {/* Profile Info */}
      <div className="flex items-center gap-4 px-4 mb-6">
        <div className={`w-12 h-12 flex-shrink-0 ${isOnDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>
          <User className={`w-4 h-4 ${isOnDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        </div>
        <div>
          <h2 className={`${theme.text} text-xs font-semibold`}>baddie</h2>
          <p className={`${theme.textTertiary} text-[10px]`}>Crushokoro@gmail.com</p>
        </div>
      </div>

      {/* Premium Banner */}
      <div className="mx-4 mb-6 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-4 relative overflow-hidden">
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-white text-sm font-bold mb-1">Enjoy All Benefits!</h3>
            <p className="text-white text-[8px] mb-3 leading-relaxed w-[70%]">
              Enjoy listening songs & podcasts with better audio quality, without restrictions, and without ads.
            </p>
            <button className="bg-white text-purple-600 px-3 py-1.5 rounded-full text-[10px] font-semibold">
              Get Premium
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center ml-2">
            <Headphones className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <User className={`w-5 h-5 ${theme.textTertiary}`} />
            <span className={`${theme.text} text-sm font-medium`}>Profile</span>
          </div>
          <div className={theme.textTertiary}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className={`w-4 h-4 ${theme.textTertiary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5h5m-10-1V4a2 2 0 112 2v11" />
              </svg>
            </div>
            <span className={`${theme.text} text-sm font-medium`}>Notification</span>
          </div>
          <Toggle isOn={isOnNotification} setIsOn={setIsOnNotification} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className={`w-4 h-4 ${theme.textTertiary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <span className={`${theme.text} text-sm font-medium`}>Dark Mode</span>
          </div>
          <Toggle isOn={isOnDarkMode} setIsOn={setIsOnDarkMode} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className={`w-4 h-4 ${theme.textTertiary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className={`${theme.text} text-sm font-medium`}>Sync Music</span>
          </div>
          <div className={theme.textTertiary}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className={`w-4 h-4 ${theme.textTertiary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <span className={`${theme.text} text-sm font-medium`}>Language</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`${theme.textTertiary} text-sm`}>English</span>
            <div className={theme.textTertiary}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOtherContent = (tabName: any) => {
    switch (tabName) {
      case 'Explore':
        return renderExploreContent();
      case 'Sound (EQ)':
        return renderSoundEQPage();
      case 'Library':
        return renderLibraryContent();
      case 'Profile':
        return renderProfileContent();
      default:
        return (
          <div className="h-[515px] flex items-center justify-center">
            <div className="text-center">
              <h2 className={`${theme.text} text-base font-bold mb-2`}>{tabName}</h2>
              <p className={`${theme.textTertiary} text-xs`}>Content coming soon...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative ${theme.bg} ${theme.text} max-w-md mx-auto ${stepsOpen ? ' overflow-hidden' : 'overflow-auto scrollbar-none'}`}>
      <audio ref={audioRef} />

      <div className={`${theme.bg} sticky top-0 z-50 rounded-top-[40px] pl-[7%] pr-[5%] pt-1.5 flex justify-between items-center ${showNowPlaying && 'bg-gradient-to-b bg-green-900'}`}>
        <div className="font-bold">{time}</div>
        <div className="flex gap-1.5">
          <div className="flex font-bold items-center gap-[1px]">
            <IconSignal
              className={`w-4 h-4 ${theme.text}`}
            />
          </div>
          <IconWifi
            className={`w-4 h-4 ${theme.text}`}
          />
          <IconBattery
            className={`w-6 h-4 ${theme.text}`}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {!showThankYouModal && renderDemoOverlay()}
        {showNowPlaying ? renderNowPlayingScreen() : (
          <>
            {activeTab === 'Home' ? renderHomeContent() : renderOtherContent(activeTab)}

            {currentSong && (
              <div className='bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 absolute w-full bottom-[46px] flex items-center' onClick={() => setShowNowPlaying(true)}>
                <div className="w-6 h-6 bg-gradient-to-br mr-3 from-orange-500 to-red-600 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">
                    {currentSong?.artist?.substring(0, 2) || 'SH'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-[10px] truncate">{currentSong?.title}</h4>
                  <p className="text-white/80 text-[8px] truncate">{currentSong?.artist}</p>
                </div>
                <div className='flex gap-2 items-center mr-5'>
                  <img src={Previous} alt="previous icon" className="w-4 h-4 text-gray-500 cursor-pointer" onClick={() => {
                    playPrevSong();
                    setShowNowPlaying(false);
                  }} />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className="w-fit h-fit flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-110 transition-all"
                  >
                    {!isPlaying ?
                      <PlayIcon className="w-4 h-4 text-[#ffffffa7] cursor-pointer" /> : <Pause className="w-4 h-4 text-[#ffffffa7] cursor-pointer" />}
                  </button>
                  <img src={Next} alt="next icon" className="w-4 h-4 text-gray-500 cursor-pointer" onClick={playNextSong} />
                </div>


                <div className={`w-5 h-5 rounded-full absolute right-3 -top-[6px] z-[999999] text-white/60 cursor-pointer hover:scale-110 transition-all grid place-content-center bg-gray-600`}>
                  <X
                    className="w-3 h-3 text-white/60 cursor-pointer hover:scale-110 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSong(null);
                      setSelectedCannabisType('')
                      setIsPlaying(false);
                      if (audioRef.current) {
                        audioRef.current?.pause();
                      }
                    }}
                  />
                </div>

              </div>
            )}

            <div className={`${isOnDarkMode ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'} border-t ${theme.shadow}`}>
              <div className="flex justify-around items-center pt-2 pb-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center gap-[2px] cursor-pointer `}
                      onClick={() => {
                        if (item.name === 'Sound (EQ)') {
                          handleSoundEQClick();
                        } else {
                          setActiveTab(item.name);
                          setStepsOpen(false);
                        }
                      }}
                    >
                      <IconComponent className={`w-3 h-3 ${isOnDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      <span className={`text-[7px] ${isOnDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className={`h-1 ${isOnDarkMode ? 'bg-white' : 'bg-gray-900'} rounded-full mx-auto w-[40%] mb-2`}></div>
            </div>

            {modalOpen && renderMoodModal()}
            {soundModalOpen && renderCannabisSound()}
            {showThankYouModal && renderThankYouModal()}
          </>
        )}
      </div>
    </div>
  )
}

export { MobileApp };