import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import NewCustomerForm from "~/components/People/NewCustomerForm";


interface DataType {
  key: string;
  paymentDate: string;
  payment: string;
  paymentType: string;
  expenceFor: string;
  paymentNote: string;
  action: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    paymentDate: "",
    payment: "",
    paymentType: "",
    expenceFor: "",
    paymentNote: "",
    action: "",
  },
];
const NewCustomer = () => {
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
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      ...getColumnSearchProps("paymentDate"),
    },

    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      ...getColumnSearchProps("payment"),
    },
    {
      title: "Description",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Expence For",
      dataIndex: "expenceFor",
      key: "expenceFor",
      ...getColumnSearchProps("expenceFor"),
    },
    {
      title: "Payment Note",
      dataIndex: "paymentNote",
      key: "paymentNote",
      ...getColumnSearchProps("paymentNote"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <div className="bg-gray-100   ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full py-5 pl-4 pr-8">
          <NewCustomerForm />

          <div className="lg:grid-cols-0 m-4 grid pb-2 pt-4  lg:h-[40vh]">
            <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
              <h1 className="mb-4 font-bold">Opening Balance Payments</h1>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewCustomer;
