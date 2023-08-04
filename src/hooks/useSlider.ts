import { useLocation } from 'react-router-dom';
import { portafolioInfo } from '../utils';
import { useMemo } from 'react';

export const useSlider = () => {
  const { pathname } = useLocation();

  const itemId = useMemo(() => pathname.split('/details/'), [pathname]);
  const itemIndex = useMemo(
    () => portafolioInfo.findIndex((item) => item.id === itemId[1]),
    [itemId]
  );
  const isLastItem = useMemo(
    () => itemIndex === portafolioInfo.length - 1,
    [itemIndex]
  );
  const isfirtsItem = useMemo(() => itemIndex === 0, [itemIndex]);
  const selectedItem = useMemo(() => portafolioInfo[itemIndex], [itemIndex]);

  const nextItem = useMemo(() => {
    if (isLastItem) {
      return portafolioInfo[0];
    } else {
      return portafolioInfo[itemIndex + 1];
    }
  }, [itemIndex, isLastItem]);
  const previusItem = useMemo(() => {
    if (isfirtsItem) {
      return portafolioInfo[portafolioInfo.length - 1];
    } else {
      return portafolioInfo[itemIndex - 1];
    }
  }, [itemIndex, isfirtsItem]);

  return {
    selectedItem,
    itemIndex,
    nextItem,
    previusItem,
  };
};
