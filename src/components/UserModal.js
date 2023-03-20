import '../assets/sass/profil.scss';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function UserModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {props.buttonText}
            </Button>

            <Modal
                open={isModalOpen}
                footer={null}
            >
                {props.modalContent}
            </Modal>
        </>
    );
}

export default UserModal