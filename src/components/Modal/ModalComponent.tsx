import { Modal } from "antd";
import React, { FC } from "react";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  isModalVisible: boolean;
  modalTitle: string;
  setIsModalVisible: (visible: boolean) => void;
}

const ModalComponent: FC<IProps> = ({
  children,
  isModalVisible,
  modalTitle,
  setIsModalVisible,
}) => {
  return (
    <Modal
      title={modalTitle}
      centered
      open={isModalVisible}
      footer={null}
      onCancel={() => setIsModalVisible(false)}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
