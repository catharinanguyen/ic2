import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { selectCurrentTheme } from '@/store/slices/appStatusSlice';

import { getWidgetSvgIconByType } from '@/utils/widgetUtils';

import { THEME_KEYS } from '@/constants/constants';

function WidgetSvgIconSelectButton(props) {
  const gTheme = useSelector(selectCurrentTheme);

  const { type, fill, onClick } = props;

  const activeBorderClass = gTheme == THEME_KEYS.SOPHISTICATED
    ? `border-2 border-[#04D5B7] rounded-md`
    : `border-2 border-[#0072DE] rounded-md`;

  const svgIcon = getWidgetSvgIconByType({ widgetType: type, fill });

  return (
    <button
      className={clsx(
        'bg-transparent w-fit h-fit',
        fill ? activeBorderClass : '',
      )}
      onClick={onClick}
    >
      {svgIcon}
    </button>
  );
}

export default WidgetSvgIconSelectButton;
