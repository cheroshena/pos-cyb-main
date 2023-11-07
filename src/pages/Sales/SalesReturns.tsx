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
  salesDate: string;
  salesCode: string;
  returnCode: string;
  salesStatus: string;
  referenceNo: string;
  customerName: string;
  total: string;
  paidPayment: string;
  due: string;
  paymentStatus: string;
  createdBy: string;
  action: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    salesDate: "",
    salesCode: "",
    returnCode: "",
    salesStatus: "",
    referenceNo: "",
    customerName: "",
    total: "",
    paidPayment: "",
    due: "",
    paymentStatus: "",
    createdBy: "",
    action: "",
  },
];

const SalesReturnsList: React.FC = () => {
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
      title: "Sales Date",
      dataIndex: "salesDate",
      key: "salesDate",
      ...getColumnSearchProps("salesDate"),
      sorter: (a, b) => {
        const salesDateA = a.salesDate.toString();
        const salesDateB = b.salesDate.toString();
        return salesDateA.localeCompare(salesDateB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Sales Code",
      dataIndex: "salesCode",
      key: "salesCode",
      ...getColumnSearchProps("salesCode"),
      sorter: (a, b) => {
        const salesCodeA = a.salesCode.toString();
        const salesCodeB = b.salesCode.toString();
        return salesCodeA.localeCompare(salesCodeB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Return Code",
      dataIndex: "returnCode",
      key: "returnCode",
      ...getColumnSearchProps("returnCode"),
      sorter: (a, b) => {
        const returnCodeA = a.returnCode.toString();
        const returnCodeB = b.returnCode.toString();
        return returnCodeA.localeCompare(returnCodeB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Sales Status",
      dataIndex: "salesStatus",
      key: "salesStatus",
      ...getColumnSearchProps("salesStatus"),
    },
    {
      title: "Reference No",
      dataIndex: "referenceNo",
      key: "referenceNo",
      ...getColumnSearchProps("referenceNo"),
      sorter: (a, b) => {
        const referenceNoA = a.referenceNo.toString();
        const referenceNoB = b.referenceNo.toString();
        return referenceNoA.localeCompare(referenceNoB);
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      ...getColumnSearchProps("customerName"),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      ...getColumnSearchProps("total"),
    },
    {
      title: "Paid Payment",
      dataIndex: "paidPayment",
      key: "paidPayment",
      ...getColumnSearchProps("paidPayment"),
    },
    {
      title: "Due",
      dataIndex: "due",
      key: "due",
      ...getColumnSearchProps("due"),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      ...getColumnSearchProps("paymentStatus"),
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
    },
  ];
  return (
    <div className=" min-w-fit bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full py-5 pl-4 pr-8">
          <h1 className="m-3 block font-extrabold uppercase text-black">
            Sales Returns List
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
export default SalesReturnsList;
