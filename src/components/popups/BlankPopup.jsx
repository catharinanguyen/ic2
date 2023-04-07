function BlankPopup(props) {
  const { isVisible = false, children } = props;

  return (
    <>
      <div className={"modal " + (isVisible === true ? "modal-open" : "")}>
        <div className="modal-box w-[430px] portrait:w-[36.441vw]">{children}</div>
      </div>
    </>
  );
}

export default BlankPopup;
