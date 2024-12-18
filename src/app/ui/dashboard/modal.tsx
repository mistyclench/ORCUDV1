const Modal = props => {
    return (
      <>
        <div className="fixed inset-0 opacity-25 bg-black">
        </div>
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <div className="bg-white">
            <div onClick={() => props.setModalState(false)}>
              x
            </div>
            <div>
              hello
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Modal