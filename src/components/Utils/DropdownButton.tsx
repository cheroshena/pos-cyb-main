import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { BiDotsVerticalRounded, BiEdit,BiTrash } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineEye } from "react-icons/ai";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        className="flex items-center"
      >
        <AiOutlineEye className="mr-2" /> View Sales
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
        className="flex items-center"
      >
        <BiEdit className="mr-2" /> Edit
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
        className="flex items-center"
      >
        <LiaFileInvoiceDollarSolid className="mr-2" /> POS Invoice
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
        className="flex items-center"
      >
        <BiTrash className="mr-2" /> Delete
      </a>
    ),
  },
];

const DropdownButton: React.FC = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button>
          <BiDotsVerticalRounded />
        </Button>
      </Dropdown>
    </Space>
  </Space>
);

export default DropdownButton;
