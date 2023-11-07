import { useRef, useState } from "react";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Popconfirm, Space, Table, message } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

interface DataType {
  key: string;
  date: string;
  category: string;
  referenceNo: string;
  expenceFor: string;
  amount: number;
  note: string;
  createdBy: string;
  action: "null";
}

type DataIndex = keyof DataType;

let data: DataType[] = [
  {
    key: "1",
    date: "14/04/2023",
    category: "Grocery",
    referenceNo: "25",
    expenceFor: "purchase",
    amount: 20000,
    note: "fgdggdhjdrdyfyhgjt",
    createdBy: "Cashier 1",
    action: "null",
  },
];

const ExpensesList: React.FC = () => {
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
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps("date"),
    },

    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category"),
    },
    {
      title: "Reference No",
      dataIndex: "referenceNo",
      key: "referenceNo",
      ...getColumnSearchProps("referenceNo"),
    },
    {
      title: "Expense For",
      dataIndex: "expenceFor",
      key: "expenceFor",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      ...getColumnSearchProps("amount"),
      sorter: (a, b) => {
        const amountA = a.amount.toString();
        const amountB = b.amount.toString();
        return amountA.localeCompare(amountB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
      ...getColumnSearchProps("createdBy"),
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
            Expenses List
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
export default ExpensesList;
