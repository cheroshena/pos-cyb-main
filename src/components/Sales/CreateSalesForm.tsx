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
  productName: string;
  quantity: string;
  unitPrice: string;
  discounts: string;
  taxAmount: string;
  tax: string;
  total: string;
  action: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    productName: "",
    quantity: "",
    unitPrice: "",
    discounts: "",
    taxAmount: "",
    tax: "",
    total: "",
    action: "",
  },
];

const CreateSalesForm = () => {
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
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      ...getColumnSearchProps("productName"),
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      ...getColumnSearchProps("quantity"),
    },
    {
      title: "Description",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Tax Amount",
      dataIndex: "taxAmount",
      key: "taxAmount",
      ...getColumnSearchProps("taxAmount"),
    },
    {
      title: "Tax",
      dataIndex: "tax",
      key: "tax",
      ...getColumnSearchProps("tax"),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      ...getColumnSearchProps("total"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Dayjs | null, dateString: string) => {
    // Handle date change logic here
    if (date) {
      setStartDate(date.toDate()); // Convert Dayjs to Date
    }
  };
  

  return (
    <div>
      <form className="'col-span-1  m-4 overflow-auto rounded-lg border bg-white p-4">
        <div className=" -mx-3 mb-6 flex-wrap">
          <h1 className="block pl-2 font-extrabold uppercase ">Sales</h1>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap justify-center">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-first-name"
            >
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder=""
              required
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-zip"
            >
              Sales Date <span className="text-red-500">*</span>
            </label>

            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              className="w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none "
              required
            />
          </div>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap justify-center">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-state"
            >
              Status <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                required
              >
                <option value=""></option>
                <option>Final</option>
                <option>Quatation</option>
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

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Reference No:
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder=""
            ></input>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="lg:grid-cols-0 grid  pb-2 pt-4 lg:h-[40vh] ">
          <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Order Tax (%)
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Discount (%)
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Shipping (%)
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
            ></input>
          </div>
        </div>

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-state"
            >
              Payment Type
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
              >
                <option></option>
                <option>Cash</option>
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

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Payment Note
            </label>
            <textarea
              id="message"
              className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              placeholder=""
            ></textarea>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="mb-4 flex justify-end  ">
          <button className="mr-2 rounded-lg border bg-blue-500 px-4 py-2 text-white">
            Save
          </button>
          {/* Export Product Button */}
          <button className="mr-2 rounded-lg border bg-yellow-500 px-4 py-2 text-white">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateSalesForm;
