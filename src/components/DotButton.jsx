import { useDispatch } from 'react-redux';

import { setPage } from '@/store/slices/appStatusSlice';

function DotButton(props) {
  const { isActive = false, pageNo } = props;

  const dispatch = useDispatch();

  return (
    <button
      className="p-1 rounded-full"
      onClick={() => dispatch(setPage(pageNo))}
    >
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="6" height="6" rx="3" fill={isActive ? "#04D5B7" : "#CABFB9"} />
      </svg>
    </button>
  );
}

export default DotButton;
