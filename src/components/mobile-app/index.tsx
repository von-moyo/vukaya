import React, { useState, useRef, useEffect } from 'react';
import { Home, Search, Sliders, BookOpen, User, Star, Play, Pause, Volume2, Headphones, X, SkipBack, SkipForward, ArrowLeft, MoreVertical, Timer, Zap, Cast } from 'lucide-react';
import { Toggle } from '../toggle';
import { Battery, Signal, Wifi } from '../../assets';
import { useClickOutside } from '../../hooks';
import { CustomBarChart } from '../bar-chart';
import { set } from 'react-hook-form';

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [modalOpen, setModalOpen] = useState(true);
  const [soundModalOpen, setSoundModalOpen] = useState(false);
  const [isOnNotification, setIsOnNotification] = useState(true);
  const [isOnDarkMode, setIsOnDarkMode] = useState(false);
  const [currentSong, setCurrentSong] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showNowPlaying, setShowNowPlaying] = useState(false);
  const [eqActiveTab, setEqActiveTab] = useState('Soundscape');
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
  const [selectedCannabisType, setSelectedCannabisType] = useState('Sativa');

  useEffect(() => {
    if (selectedCannabisType === "Indica") {
      setEqValues(indicaData);
    } else if (selectedCannabisType === "Sativa") {
      setEqValues(sattivaData);
    } else if (selectedCannabisType === "Hybrid") {
      setEqValues(hybridData);
    }
  }, [selectedCannabisType]);


  const audioRef = useRef<any>(null);
  const modalRef = useRef<any>(null);
  const soundModalRef = useRef<any>(null);

  useClickOutside(modalRef, modalRef, () => setModalOpen(false));
  useClickOutside(soundModalRef, soundModalRef, () => setSoundModalOpen(false));

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  // Sample audio URL - you can replace with actual audio files
  const sampleAudioUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

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
      title: 'Amasosha',
      artist: 'SHAYA',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
      audioUrl: sampleAudioUrl
    },
    {
      title: 'That heat',
      artist: 'SHAYA',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
      audioUrl: sampleAudioUrl
    },
    {
      title: 'Chill Vibes',
      artist: 'Lo-Fi Collective',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      audioUrl: sampleAudioUrl
    },
    {
      title: 'Ocean Waves',
      artist: 'Nature Sounds',
      bgColor: 'bg-gradient-to-br from-blue-500 to-teal-500',
      audioUrl: sampleAudioUrl
    }
  ];

  const litHitsOfTheWeek = [
    {
      title: 'Un dos Tres',
      artist: 'IRAWO',
      bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500',
      audioUrl: sampleAudioUrl
    },
    {
      title: 'Yara',
      artist: 'IRAWO',
      bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500',
      audioUrl: sampleAudioUrl
    },
    {
      title: 'Fire Track',
      artist: 'Hot Artist',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-500',
      audioUrl: sampleAudioUrl
    },
    {
      title: 'Weekly Hit',
      artist: 'Top Chart',
      bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500',
      audioUrl: sampleAudioUrl
    }
  ];

  const yourHistory = [
    { title: 'Un dos Tres', artist: 'IRAWO', bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500', audioUrl: sampleAudioUrl },
    { title: 'Yara', artist: 'IRAWO', bgColor: 'bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500', audioUrl: sampleAudioUrl },
    { title: 'Fire Track', artist: 'Hot Artist', bgColor: 'bg-gradient-to-br from-red-500 to-pink-500', audioUrl: sampleAudioUrl },
    { title: 'Weekly Hit', artist: 'Top Chart', bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500', audioUrl: sampleAudioUrl },
    { title: 'Fire Track', artist: 'Hot Artist', bgColor: 'bg-gradient-to-br from-red-500 to-pink-500', audioUrl: sampleAudioUrl },
    { title: 'Weekly Hit', artist: 'Top Chart', bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500', audioUrl: sampleAudioUrl }
  ];

  const bluntBangers = [
    { title: 'Summer Chill', artist: 'Beach Vibes', bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500', audioUrl: sampleAudioUrl },
    { title: 'Lotus Dreams', artist: 'Zen Garden', bgColor: 'bg-gradient-to-br from-green-400 to-teal-600', audioUrl: sampleAudioUrl },
    { title: 'Night Mood', artist: 'Dark Beats', bgColor: 'bg-gradient-to-br from-purple-600 to-pink-500', audioUrl: sampleAudioUrl },
    { title: 'Energy Flow', artist: 'Power House', bgColor: 'bg-gradient-to-br from-red-500 to-orange-600', audioUrl: sampleAudioUrl }
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

  // Audio control functions
  const playSong = (song: any) => {
    if (audioRef.current && song.audioUrl) {
      setCurrentSong(song);
      audioRef.current.src = song.audioUrl;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error: any) => {
        console.log('Audio play failed:', error);
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

        setIsPlaying(true);
        setDuration(60); // Mock duration
      });
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
          console.log('Audio play failed:', error);
        });
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentSong]);


  const renderMoodModal = () => (
    <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-[12px] p-3 w-full max-w-sm"
      >
        <h2 className="text-white text-[13px] font-bold mb-2">Good to see you, Baddie</h2>
        <p className="text-gray-300 text-[10px] mb-3 w-[50%]">What mood are we channeling today?</p>

        <div className="grid grid-cols-4 gap-x-1.5 gap-y-3 mb-4">
          {moodOptions.map((mood, index) => (
            <div key={index} className='flex flex-col items-center gap-1'>
              <div
                className={`bg-gray-800 rounded-[5px] flex flex-col items-center justify-center aspect-square cursor-pointer hover:opacity-80 transition-opacity w-full`}
                onClick={() => setModalOpen(false)}
              >
                <div className="text-[25px]">{mood.icon}</div>
              </div>
              <div className="text-white text-[7px] font-medium">{mood.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSoundEQPage = () => (
    <div className="h-[515px] overflow-auto scrollbar-none bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-3 pt-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-white cursor-pointer" onClick={() => setActiveTab('Home')} />
          <h1 className="text-white text-base font-bold">Cannabis Sound</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-800 rounded-[12px] px-4 py-3 mb-4 flex items-center gap-2 mx-3">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search for a Cannabis Profile"
          className="bg-transparent text-white text-[10px] flex-1 outline-none placeholder-gray-400"
        />
      </div>

      <div className=' bg-gray-800 rounded-[12px] px-3.5 pt-3 pb-3 mx-3 mb-4 h-[250px] overflow-y-auto scrollbar-none'>
        {/* Tab Selector */}
        <div className="flex mb-4">
          <button
            onClick={() => setEqActiveTab('Description')}
            className={`flex-1 py-2 px-4 text-xs font-medium cursor-pointer transition-colors ${eqActiveTab === 'Description'
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-300'
              }`}
          >
            Description
          </button>
          <button
            onClick={() => setEqActiveTab('Soundscape')}
            className={`flex-1 py-2 px-4 text-xs font-medium cursor-pointer transition-colors ${eqActiveTab === 'Soundscape'
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-300'
              }`}
          >
            Soundscape
          </button>
        </div>

        {eqActiveTab === 'Description' ? (
          <div className="h-[200px] overflow-y-auto scrollbar-none">
            <h2 className="text-white text-xs font-semibold mb-1">3 Bears Og</h2>
            <p className="text-purple-400 text-[10px] mb-3">indica</p>

            {/* Mood Icons */}
            <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-none">
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🌊</span>
                </div>
                <p className="text-white text-[6px]">Relaxing/Calming</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">😊</span>
                </div>
                <p className="text-white text-[6px]">Happy</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">💤</span>
                </div>
                <p className="text-white text-[6px]">Sedative/Sleepy</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <p className="text-white text-[6px]">Creative</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <p className="text-white text-[6px]">Creative</p>
              </div>
            </div>

            <h3 className="text-white text-xs font-bold mb-4">Sweet, Pungent, Earthy</h3>

            <p className="text-gray-300 text-[9px] leading-relaxed mb-6">
              3 Bears OG by Mephisto Genetics is an excellent auto-cross of Bear OG x Karma OG. As a smaller autoflower, this makes it an excellent choice for beginner growers who prefer indica effects. This strain features a...
            </p>
          </div>
        ) : (
          <div className="">
            {/* EQ Controls */}
            <div className="bg-gray-800 rounded-[12px] px-3">
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
            onClick={() => {
              setSelectedCannabisType(type);
              setEqActiveTab('Soundscape');
            }}
            className={`cursor-pointer px-5 py-[6px] rounded-full text-[10px] font-medium transition-colors ${selectedCannabisType === type
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300'
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center bg-gray-800 rounded-[12px] p-4 mb-6 mx-3">
        <h3 className="text-white text-xs font-bold">Comments</h3>
        <button className="text-purple-400 text-[10px]">See All</button>
      </div>

    </div>
  );

  const renderCannabisSound = () => (
    <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={soundModalRef}
        className="bg-gray-900 rounded-[12px] py-5 w-[90%] mx-auto"
      >
        <div className="flex items-center justify-between mb-4 mx-3">
          <h2 className="text-white text-base font-bold">Cannabis Sound</h2>
          <div className="flex items-center gap-3">
            <Home className="w-3.5 h-3.5 text-gray-400 cursor-pointer" />
            <button onClick={() => setSoundModalOpen(false)}>
              <X className="w-4 h-4 text-gray-400 cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-gray-800 rounded-[12px] px-4 py-3 mb-4 flex items-center gap-2 mx-3">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white text-[10px] flex-1 outline-none placeholder-gray-400"
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
                : 'bg-gray-800 text-gray-300'
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Strain Tags */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {strainTags.map((strain, index) => (
            <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-full text-[10px] whitespace-nowrap">
              {strain}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNowPlayingScreen = () => (
    <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-green-800 to-black z-50 h-[515px]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <ArrowLeft className="w-6 h-6 text-white cursor-pointer" onClick={() => setShowNowPlaying(false)} />
        <div className="text-center">
          <h2 className="text-white text-sm">Playing from playlist</h2>
          <p className="text-green-400 text-xs">Cannabis Vibes</p>
        </div>
        <MoreVertical className="w-6 h-6 text-white" />
      </div>

      {/* Album Art */}
      <div className="flex justify-center p-8">
        <div className="w-72 h-72 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl relative overflow-hidden flex items-center justify-center border-4 border-purple-500">
          <div className="text-center">
            <div className="text-white font-bold text-4xl mb-4">STARBOY</div>
            <div className="text-yellow-400 font-bold text-lg">THE WEEKND</div>
          </div>
        </div>
      </div>

      {/* Song Info */}
      <div className="text-center px-8 mb-8">
        <h1 className="text-white text-2xl font-bold mb-2">{currentSong?.title || 'Starboy'}</h1>
        <p className="text-gray-300 text-lg">{currentSong?.artist || 'The Weeknd, Daft Punk'}</p>
      </div>

      {/* Progress Bar */}
      <div className="px-8 mb-8">
        <div className="w-full bg-gray-600 rounded-full h-1 mb-2">
          <div
            className="bg-green-500 h-1 rounded-full transition-all duration-1000"
            style={{ width: `${(currentTime / (duration || 210)) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-white text-sm">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration || 210)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 px-8 mb-8">
        <SkipBack className="w-8 h-8 text-white cursor-pointer" />
        <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center cursor-pointer">
          <div className="w-2 h-2 border-l-2 border-white transform rotate-180"></div>
          <span className="text-white text-xs ml-1">10</span>
        </div>
        <button
          onClick={togglePlayPause}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-black fill-current" />
          ) : (
            <Play className="w-8 h-8 text-black fill-current ml-1" />
          )}
        </button>
        <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center cursor-pointer">
          <div className="w-2 h-2 border-r-2 border-white"></div>
          <span className="text-white text-xs ml-1">10</span>
        </div>
        <SkipForward className="w-8 h-8 text-white cursor-pointer" />
      </div>

      {/* Additional Controls */}
      <div className="flex items-center justify-center gap-12 px-8">
        <Zap className="w-6 h-6 text-white cursor-pointer" />
        <Timer className="w-6 h-6 text-white cursor-pointer" />
        <Cast className="w-6 h-6 text-white cursor-pointer" />
        <MoreVertical className="w-6 h-6 text-white cursor-pointer" />
      </div>
    </div>
  );

  const renderCard = (item: any, index: number, showArtist = true) => (
    <div key={index} className="flex-shrink-0 text-center">
      <div
        className={`w-22 h-20 ${item.bgColor} rounded-[12px] mb-2 relative overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
        onClick={() => playSong(item)}
      >
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
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-current" />
          </div>
        )}
      </div>
      <h3 className="text-white font-medium text-[10px] mb-1">{item.title}</h3>
      {showArtist && item.artist && (
        <p className="text-gray-400 text-[9px]">{item.artist}</p>
      )}
    </div>
  );

  const renderHomeContent = () => (
    <div className="h-[515px] overflow-auto scrollbar-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-3">
        <div className="flex items-center gap-3 pt-6">
          <div className="w-8 h-8 flex-shrink-0 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-300" />
          </div>
          <div>
            <h1 className="text-xs font-semibold">Baddie</h1>
            <p className="text-gray-400 text-[10px] w-[70%]">Your vibe is chill. Stay easy today.</p>
          </div>
        </div>
        <Headphones className="w-4 h-4 text-gray-400 cursor-pointer" onClick={() => setSoundModalOpen(true)} />
      </div>

      {/* Strain Tags */}
      <div className="flex gap-2 pl-2 mb-6 overflow-x-auto scrollbar-none">
        {strainTags.map((strain, index) => (
          <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-full whitespace-nowrap text-[9px]">
            {strain}
          </div>
        ))}
      </div>

      {/* Freshly Rolled Beats */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className="text-[13px] font-bold">Freshly Rolled Beats</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {freshlyRolledBeats.map((beat, index) => renderCard(beat, index))}
        </div>
      </div>

      {/* Guided Sessions */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className="text-[13px] font-bold">Guided Sessions</h2>
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
          <h2 className="text-[13px] font-bold">Zizling Podcasts</h2>
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
              <h3 className="text-white font-medium text-[10px]">{podcast.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Lit Hits of the Week */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className="text-[13px] font-bold">Lit Hits of the Week</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {litHitsOfTheWeek.map((hit, index) => renderCard(hit, index))}
        </div>
      </div>

      {/* Blunt Bangers */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-3">
          <h2 className="text-[13px] font-bold">Blunt Bangers</h2>
          <button className="text-purple-400 text-[11px] font-medium cursor-pointer">See All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-none pl-3">
          {bluntBangers.map((banger, index) => renderCard(banger, index))}
        </div>
      </div>
    </div>
  );

  const renderExploreContent = () => (
    <div className="h-[515px] overflow-auto scrollbar-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4 pt-6">
        <h1 className="text-white text-xl font-bold">Explore</h1>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-white" />
          <Headphones className="w-5 h-5 text-white" />
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
    <div className="h-[515px] overflow-auto scrollbar-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4 pt-6">
        <h1 className="text-white text-xl font-bold">Library</h1>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-white" />
          <Headphones className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Your History Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 px-4">
          <h2 className="text-white text-base font-bold">Your History</h2>
          <button className="text-purple-400 text-xs font-medium cursor-pointer">See All</button>
        </div>

        <div className="flex gap-2 px-4 overflow-x-auto scrollbar-none">
          {yourHistory.map((song, index) => (
            <div className="text-center cursor-pointer" key={index} onClick={() => playSong(song)}>
              <div className="w-20 aspect-square bg-gradient-to-br from-orange-500 to-red-600 rounded-[13px] mb-2 flex items-center justify-center">
                <div className="text-white font-bold text-xs">{song.artist}</div>
              </div>
              <p className="text-white text-xs font-medium text-left pl-2">{song.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Library Categories */}
      <div className="px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-3 border border-white rounded-sm flex items-center justify-center">
                <Play className="w-2 h-2 text-white fill-current" />
              </div>
            </div>
            <span className="text-white text-base font-medium">Playlists</span>
          </div>
          <div className="text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-white text-base font-medium">Podcasts</span>
          </div>
          <div className="text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-3 border border-white rounded-sm"></div>
            </div>
            <span className="text-white text-base font-medium">Albums</span>
          </div>
          <div className="text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-white text-base font-medium">Songs</span>
          </div>
          <div className="text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileContent = () => (
    <div className="h-[515px] overflow-auto scrollbar-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4 pt-6">
        <h1 className="text-white text-xl font-bold">Profile</h1>
        <Headphones className="w-5 h-5 text-white" />
      </div>

      {/* Profile Info */}
      <div className="flex items-center gap-4 px-4 mb-6">
        <div className="w-12 h-12 flex-shrink-0 bg-gray-600 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-gray-300" />
        </div>
        <div>
          <h2 className="text-white text-xs font-semibold">baddie</h2>
          <p className="text-gray-400 text-[10px]">Crushokoro@gmail.com</p>
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
            <User className="w-5 h-5 text-gray-400" />
            <span className="text-white text-sm font-medium">Profile</span>
          </div>
          <div className="text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5h5m-10-1V4a2 2 0 112 2v11" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Notification</span>
          </div>
          <Toggle isOn={isOnNotification} setIsOn={setIsOnNotification} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Dark Mode</span>
          </div>
          <Toggle isOn={isOnDarkMode} setIsOn={setIsOnDarkMode} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Sync Music</span>
          </div>
          <div className="text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Language</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Language</span>
            <div className="text-gray-400">
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
              <h2 className="text-white text-base font-bold mb-2">{tabName}</h2>
              <p className="text-gray-400 text-xs">Content coming soon...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='relative bg-[#181A20] text-white max-w-md mx-auto'>
      <audio ref={audioRef} />

      <div className='bg-[#181A20] sticky top-0 z-50 rounded-top-[30px] pl-[7%] pr-[5%] pt-1.5 flex justify-between items-center'>
        <div className='font-bold'>{time}</div>
        <div className='flex gap-1.5'>
          <div className='flex font-bold items-center gap-[1px]'>
            <img src={Signal} className='w-4' stroke-width={3} />
          </div>
          <img src={Wifi} className='w-4' stroke-width={3} />
          <img src={Battery} className='w-6' stroke-width={3} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {showNowPlaying ? renderNowPlayingScreen() : (
          <>
            {/* Content Area */}
            {activeTab === 'Home' ? renderHomeContent() : renderOtherContent(activeTab)}

            {/* Fixed Bottom Music Player */}
            {/* {currentSong && (
              <div className="fixed bottom-16 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 mx-4 rounded-xl p-3 flex items-center gap-3 cursor-pointer" onClick={() => setShowNowPlaying(true)}>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">
                    {currentSong.artist?.substring(0, 2) || 'SH'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm truncate">{currentSong.title}</h4>
                  <p className="text-white/80 text-xs truncate">{currentSong.artist}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-white fill-current" />
                  ) : (
                    <Play className="w-4 h-4 text-white fill-current ml-0.5" />
                  )}
                </button>
                <X
                  className="w-5 h-5 text-white/60 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSong(null);
                    setIsPlaying(false);
                    if (audioRef.current) {
                      audioRef.current?.pause();
                    }
                  }}
                />
              </div>
            )} */}

            {/* Bottom Navigation */}
            <div className="bg-[#1a1a1a] border-t border-gray-800">
              <div className="flex justify-around items-center pt-1 pb-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeTab === item.name;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-[2px] cursor-pointer"
                      onClick={() => setActiveTab(item.name)}
                    >
                      <IconComponent className={`w-3 h-3 ${isActive ? 'text-purple-500' : 'text-gray-500'}`} />
                      <span className={`text-[6px] ${isActive ? 'text-purple-500 font-medium' : 'text-gray-500'}`}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="h-1 bg-white rounded-full mx-auto w-[40%] mb-2"></div>
            </div>

            {/* Mood Modal */}
            {modalOpen && renderMoodModal()}
            {/* Cannabis Sound Modal */}
            {soundModalOpen && renderCannabisSound()}
          </>
        )}
      </div>
    </div>
  )
}

export { MobileApp }