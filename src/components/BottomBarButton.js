function BottomBarButton(props) {
  const { onClick } = props;

  return (
    <button
      type="button"
      className="h-4 mx-auto"
      onClick={onClick}
    >
      <svg
        width="174"
        height="4"
        viewBox="0 0 180 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" width="180" height="4" rx="2" fill="#04D5B7" />
      </svg>
    </button>
  );
}

export default BottomBarButton;
