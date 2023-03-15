import '../assets/sass/profil.scss';

function Modal(props) {

    return (

        <div className="box-modal">
            <div className={`mask ${props.showModal ? 'active' : ''}`}></div>
            <div className={`modal ${props.showModal ? 'active' : ''}`}>
                <div className="modal-inner">

                    {props.children}

                    <button type="button" className="close" onClick={() => props.setShowModal(false)}>X</button>
                </div>
            </div>
        </div>

    );
}

export default Modal