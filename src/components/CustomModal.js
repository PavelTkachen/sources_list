import React, { useCallback } from "react";
import { Modal } from "antd";
import { useState } from "react";
import { CreateOrEditButton } from "./CreateOrEditButton";

export const CustomModal = ({
  buttonTitle,
  modalTitle,
  isEdit,
  buttonLabel,
  handleSubmit,
  defaultFormValue,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stateFormValue, setStateFormValue] = useState("");
  const [isErrorState, setIsErrorState] = useState(false);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    if (isEdit) {
      setStateFormValue(defaultFormValue);
    }
  };
  const handleOk = useCallback(async () => {
    try {
      setIsLoadingState(true);
      if (stateFormValue !== "") {
        await new Promise((res, rej) => {
          setTimeout(() => {
            handleSubmit(stateFormValue);
            setIsModalOpen(false);
            setStateFormValue("");
            res()
          }, 2000);
        });
      } else {
        setIsErrorState(true);
      }
    } catch (error) {
      console.log("err");
    } finally {
      setIsLoadingState(false);
    }
  }, [handleSubmit, stateFormValue]);

  const handleChange = (event) => {
    setStateFormValue(event.target.value);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setStateFormValue("");
    setIsErrorState(false);
  };
  return (
    <>
      <CreateOrEditButton
        isEdit={isEdit}
        title={buttonTitle}
        label={buttonLabel}
        onClick={showModal}
      />
      <Modal
        okText={isLoadingState ? "Загрузка..." : "Принять"}
        cancelText={"Отмена"}
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          style={{ width: "100%" }}
          onChange={handleChange}
          value={stateFormValue}
          placeholder="Название вкладки"
        />
        <div style={isErrorState ? {} : { display: "none" }}>
          <h4 style={{ color: "red", marginTop: "10px" }}>
            Введите название вкладки.
          </h4>
        </div>
      </Modal>
    </>
  );
};
