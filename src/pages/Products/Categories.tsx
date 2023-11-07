import React, { useRef, useState } from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Space,
  Table,
  Popconfirm,
  message,
} from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";

interface DataType {
  key: string;
  categoryCode: string;
  categoryName: string;
  description: string;
  status: string;
  action: string;
}

type DataIndex = keyof DataType;

let data: DataType[] = [
  {
    key: "1",
    categoryCode: "",
    categoryName: "",
    description: "",
    status: "",
    action: "",
  },
];

const CategoryList: React.FC = () => {
  const handleDelete = (key: string) => {
    // Here you can perform the delete action. For example, you can remove the item from the data array.
    const newData = data.filter((item) => item.key !== key);
    // Update the data source and show a success message.
    data = newData;
    message.success("Record deleted successfully!");
  };

  const [selectedRecord, setSelectedRecord] = useState<DataType | null>(null);

  // Function to open the edit modal and set the selected record
  const handleEdit = (key: string) => {
    // Find the selected record based on the key
    const recordToEdit = data.find((item) => item.key === key);
    if (recordToEdit) {
      // Set the selected record in state
      setSelectedRecord(recordToEdit);

      // Open your edit modal or navigate to an edit page here
      // For example, you can show a modal with a form for editing
      // or redirect to an edit page with the selected record data.
    }
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    // setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex,
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              //   setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Category  Code",
      dataIndex: "categoryCode",
      key: "categoryCode",
      ...getColumnSearchProps("categoryCode"),
    },

    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
      ...getColumnSearchProps("categoryName"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps("status"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Space>
          <a href="#" onClick={() => handleEdit(record.key)}>
            <EditOutlined />
          </a>
          <Popconfirm
            title="Are you sure you want to delete this record?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" style={{ color: "red" }}>
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className=" min-w-fit bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full py-5 pl-4 pr-8">
          <h1 className="m-3 block font-extrabold uppercase text-black">
            Products Category List
          </h1>
          <div className="mb-4 flex justify-end">
            <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200 ">
              Create New
            </Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};
export default CategoryList;
