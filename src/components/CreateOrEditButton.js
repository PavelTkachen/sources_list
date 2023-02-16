import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./CreateOrEditButton.css";

export const CreateOrEditButton = ({ isEdit, label, ...props }) => {
  if (isEdit) {
    return (
      <Button
        className="button"
        type="text"
        shape="circle"
        ghost='true'
        icon={
          <EditOutlined
            className="button__icon"
          />
        }
        {...props}
      />
    );
  }
  return (
    <Button type="primary" {...props}>
      {label}
    </Button>
  );
};
