import '../assets/sass/profil.scss';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function UserModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
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
                width={900}
                open={isModalOpen}
                onCancel={() => handleCancel()}
                footer={null}
            >
                {props.modalContent}
            </Modal>
        </>

    );
}

export default UserModal