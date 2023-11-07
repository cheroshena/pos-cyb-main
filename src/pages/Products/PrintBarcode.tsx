import { useRef, useState } from "react";
import { SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Popconfirm, Space, Table, message } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

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

const PrintBarcode: React.FC = () => {

  const [selectedRecord, setSelectedRecord] = useState<DataType | null>(null);

  const handleEdit = (key: string) => {
    const recordToEdit = data.find((item) => item.key === key);
    if (recordToEdit) {
      setSelectedRecord(recordToEdit);
    }
  };

  const handleDelete = (key: string) => {
    const newData = data.filter((item) => item.key !== key);

    data = newData;
    message.success("Record deleted successfully!");
  };

  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const handleWarehouseChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedWarehouse(event.target.value);
  };

  const [selectedPaperSize, setSelectedPaperSize] = useState("");

  // Create a separate handler for Paper Size change
  const handlePaperSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedPaperSize(event.target.value);
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
    <div className="min-h-screen min-w-fit bg-gray-100 ">
      <Dash_header />

      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full py-5 pl-4 pr-8">
          <div className="mb-4 flex pl-5 pt-3"></div>
          <div className=" col-span-1 m-4 rounded-lg border bg-white p-4">
            <h1>Warehouse*:</h1>
            {/* Warehouse Selection */}
            <label className="mb-2 block">
              <select
                value={selectedWarehouse}
                onChange={handleWarehouseChange}
                className="rounded-lg border p-2 pr-60 "
              >
                <option value="warehouse1">Warehouse 1</option>
                <option value="warehouse2">Warehouse 2</option>
                <option value="warehouse3">Warehouse 3</option>
                {/* Add more options as needed */}
              </select>
            </label>
            <h1>Product:</h1>
            <Table columns={columns} dataSource={data} /> <h1>Paper Size*:</h1>
            {/* Warehouse Selection */}
            <label className="mb-2 block">
              <select
                value={selectedWarehouse}
                onChange={handleWarehouseChange}
                className="rounded-lg border p-2 pr-60 "
              >
                <option value="paper1">Paper 1</option>
                <option value="paper2">Paper 2</option>
                <option value="paper3">Paper 3</option>
                {/* Add more options as needed */}
              </select>
            </label>
            <div className="justify mb-4 flex  ">
              <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200">
                Preview
              </Button>
              {/* Export Product Button */}
              <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200">
                Reset
              </Button>
              {/* Create Product Button */}
              <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200">
                Print
              </Button>
            </div>
            {/* Other content related to printing barcode */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrintBarcode;
