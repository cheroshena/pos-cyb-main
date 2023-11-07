import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

interface DataType {
  key: string;
  customerName: string;
  phone: string;
  email: string;
  totalPaid: number;
  salesDue: number;
  salesReturnDue: number;
  status: string;
  action: "null";
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    customerName: "John Brown",
    phone: "011452654852",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "2",
    customerName: "Joe Black",
    phone: "011452654852",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "3",
    customerName: "Jim Green",
    phone: "07412546321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "4",
    customerName: "Jim Red",
    phone: "07412546321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "5",
    customerName: "Jim Green",
    phone: "07412546321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "6",
    customerName: "Jim Red",
    phone: "07412546321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "7",
    customerName: "Jim Green",
    phone: "0114256321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "8",
    customerName: "Jim Red",
    phone: "0114256321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "9",
    customerName: "Jim Green",
    phone: "0114256321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "10",
    customerName: "Jim Red",
    phone: "0114256321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
  {
    key: "11",
    customerName: "Jim Red",
    phone: "0114256321",
    email: "ss@gmail.com",
    totalPaid: 20,
    salesDue: 20000,
    salesReturnDue: 3000,
    status: "Paid",
    action: "null",
  },
];

const CustomersList: React.FC = () => {
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
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      ...getColumnSearchProps("customerName"),
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Total Paid",
      dataIndex: "totalPaid",
      key: "totalPaid",
      ...getColumnSearchProps("totalPaid"),
      sorter: (a, b) => {
        const totalPaidA = a.totalPaid.toString();
        const totalPaidB = b.totalPaid.toString();
        return totalPaidA.localeCompare(totalPaidB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Sales Due",
      dataIndex: "salesDue",
      key: "salesDue",
      ...getColumnSearchProps("salesDue"),
      sorter: (a, b) => {
        const salesDueA = a.salesDue.toString();
        const salesDueB = b.salesDue.toString();
        return salesDueA.localeCompare(salesDueB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Sales Return Due",
      dataIndex: "salesReturnDue",
      key: "salesReturnDue",
      ...getColumnSearchProps("salesReturnDue"),
      sorter: (a, b) => {
        const salesReturnDueA = a.salesReturnDue.toString();
        const salesReturnDueB = b.salesReturnDue.toString();
        return salesReturnDueA.localeCompare(salesReturnDueB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps("status"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div className=" min-w-fit bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full py-5 pl-4 pr-8">
          <h1 className="m-3 block font-extrabold uppercase text-black">
            Customers List
          </h1>
          <div className="mb-4 flex justify-end pt-3">
            <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200 ">
              Create New
            </Button>
            <Button className="primary m-2 bg-indigo-500 text-white hover:bg-indigo-200">
              Import Customer
            </Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};
export default CustomersList;
