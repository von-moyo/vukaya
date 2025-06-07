import { useMobile } from "../useMobile";

export const useBreakpointSizes = () => {
  const isMobile600 = useMobile({ size: 600 });
  const isMobile500 = useMobile({ size: 500 });
  const isMobile400 = useMobile({ size: 400 });
  const isMobile300 = useMobile({ size: 300 });

  const getSizeClass = (baseSize: string) => {
    const sizeMap: any = {
      small: 'w-24 h-24 md:w-32 md:h-32',
      medium: 'w-32 h-32 md:w-48 md:h-48',
      large: getDynamicSize('w-60 h-60', { 600: 'w-40 h-40', 500: 'w-35 h-35', 400: 'w-30 h-30', 300: 'w-25 h-25' }),
      extralarge: getDynamicSize('w-90 h-90', { 600: 'w-60 h-60', 500: 'w-50 h-50', 400: 'w-40 h-40', 300: 'w-30 h-30' })
    };
    return sizeMap[baseSize] || sizeMap['small'];
  };

  const getTextSizeClass = (baseSize: string) => {
    const textSizeMap: any = {
      small: 'text-xs md:text-sm',
      medium: 'text-sm md:text-base',
      large: getDynamicTextSize('text-base lg:text-lg xl:text-xl', { 600: 'text-sm', 500: 'text-xs', 400: 'text-xs', 300: 'text-xxs' }),
      extralarge: getDynamicTextSize('text-xl', { 600: 'text-lg', 500: 'text-base', 400: 'text-sm', 300: 'text-xs' })
    };
    return textSizeMap[baseSize] || textSizeMap['small'];
  };

  const getMainTextSizeClass = (baseSize: string) => {
    const mainTextSizeMap: any = {
      small: 'text-lg md:text-xl',
      medium: 'text-xl md:text-2xl',
      large: getDynamicTextSize('text-2xl lg:text-3xl xl:text-4xl', { 600: 'text-lg', 500: 'text-base', 400: 'text-sm', 300: 'text-xs' }),
      extralarge: getDynamicTextSize('text-3xl', { 600: 'text-xl', 500: 'text-lg', 400: 'text-base', 300: 'text-sm' })
    };
    return mainTextSizeMap[baseSize] || mainTextSizeMap['small'];
  };

  const getDynamicSize = (baseClass: string, sizeOverrides: { [key: number]: string }) => {
    if (isMobile300) return sizeOverrides[300] || baseClass;
    if (isMobile400) return sizeOverrides[400] || (isMobile300 ? sizeOverrides[300] : baseClass);
    if (isMobile500) return sizeOverrides[500] || (isMobile400 ? sizeOverrides[400] : (isMobile300 ? sizeOverrides[300] : baseClass));
    if (isMobile600) return sizeOverrides[600] || (isMobile500 ? sizeOverrides[500] : (isMobile400 ? sizeOverrides[400] : (isMobile300 ? sizeOverrides[300] : baseClass)));
    return baseClass;
  };

  const getDynamicTextSize = (baseClass: string, sizeOverrides: { [key: number]: string }) => {
    if (isMobile300) return sizeOverrides[300] || baseClass;
    if (isMobile400) return sizeOverrides[400] || (isMobile300 ? sizeOverrides[300] : baseClass);
    if (isMobile500) return sizeOverrides[500] || (isMobile400 ? sizeOverrides[400] : (isMobile300 ? sizeOverrides[300] : baseClass));
    if (isMobile600) return sizeOverrides[600] || (isMobile500 ? sizeOverrides[500] : (isMobile400 ? sizeOverrides[400] : (isMobile300 ? sizeOverrides[300] : baseClass)));
    return baseClass;
  };

  return { getSizeClass, getTextSizeClass, getMainTextSizeClass };
};