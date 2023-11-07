import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, DatePicker, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

interface DataType {
  key: string;
  invoiceNo: string;
  salesDate: string;
  customerId: string;
  referenceNo: string;
  customerName: string;
  invoiceTotal: string;
  paidPayment: string;
  due: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    invoiceNo: "",
    salesDate: "",
    customerId: "",
    referenceNo: "",
    customerName: "",
    invoiceTotal: "",
    paidPayment: "",
    due: "",
  },
];


const SalesReport = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDateChange = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    // Handle date change logic here
    if (date) {
      setStartDate(date);
    }
  };

  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const handleEndDateChange = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    // Handle date change logic here
    if (date) {
      setEndDate(date);
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
      title: "Invoice Number",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
      ...getColumnSearchProps("invoiceNo"),
      sorter: (a, b) => {
        const invoiceNoA = a.invoiceNo.toString();
        const invoiceNoB = b.invoiceNo.toString();
        return invoiceNoA.localeCompare(invoiceNoB);
      },
      sortDirections: ["descend", "ascend"],
    },
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
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
      ...getColumnSearchProps("customerId"),
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
      title: "Invoice Total (Rs)",
      dataIndex: "invoiceTotal",
      key: "invoiceTotal",
      ...getColumnSearchProps("invoiceTotal"),
    },
    {
      title: "Paid Payment (Rs)",
      dataIndex: "paidPayment",
      key: "paidPayment",
      ...getColumnSearchProps("paidPayment"),
    },
    {
      title: "Due Amount (Rs)",
      dataIndex: "due",
      key: "due",
      ...getColumnSearchProps("due"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100  ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />

        <div className="w-full">
          <form className="'col-span-1 m-4 overflow-auto rounded-lg bg-white p-4 ">
            <div className="-mx-3 mb-6 flex flex-wrap">
              <h1 className="block pl-2 font-extrabold uppercase text-black">
                Sales Report
              </h1>
            </div>

            <div className="mb-6 flex  flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-zip"
                >
                  From Date
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  className="w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none "
                />
              </div>

              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-zip"
                >
                  To Date
                </label>

                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  className="w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none "
                />
              </div>
            </div>

            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-unit"
              >
                Customer Name
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option>-All-</option>
                  <option>Walking Customer</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />
            <div className="mb-4 flex justify-center  ">
              <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200">
                Show
              </Button>
              <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200">
                Close
              </Button>
            </div>
          </form>

          <div className="lg:grid-cols-0 grid px-5 pb-2 pt-4 ">
            <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <h1 className="font-bold">Records Table</h1>
                <Button className="primary m-2  bg-indigo-500 text-white hover:bg-indigo-200">
                  Excel
                </Button>
              </div>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SalesReport;
