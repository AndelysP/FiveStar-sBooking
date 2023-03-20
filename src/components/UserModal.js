import '../assets/sass/profil.scss';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function UserModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {props.buttonText}
            </Button>

            <Modal
                open={isModalOpen}
                onCancel={() => handleCancel()}
                footer={null}
            >
                {props.modalContent}
            </Modal>
        </>

        // <div className="box-modal">
        //     <div className={`mask ${props.showModal ? 'active' : ''}`}></div>
        //     <div className={`modal ${props.showModal ? 'active' : ''}`}>
        //         <div className="modal-inner">

        //             {props.children}

        //             <button type="button" className="close" onClick={() => props.setShowModal(false)}>X</button>
        //         </div>
        //     </div>
        // </div>

    );
}

export default UserModal