import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";

export default function AdminCommitment() {
  const [dataCommit, setDataCommit] = useState([
    {
      id: "1",
      heading: "Nodea",
      logo: "https://play-lh.googleusercontent.com/5qotPJfklVo9cNI6JLJivYm3OGYRIIgRSrlKMbWQAUuAl03WwWUQwurYz36yDQUUww",
      detail: "Banking",
    },
    { id: "2", heading: "Danske", logo: "https://brandslogos.com/wp-content/uploads/images/large/danske-bank-logo.png", detail: "Banking" },
  ]);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const getInforCommitAPI = async () => {
    try {
      const result = await axios({
        url: "",
        method: "get",
        headers: "Bearer",
      });
      if (result.status === 200) {
        setDataCommit(result.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {}, []);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <>{searchText}</> : text),
  });
  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      width: "10%",
      render: (e) => <img src={e} className="h-10 w-10" alt=""></img>,
      // ...getColumnSearchProps("name"),
    },
    {
      title: "heading",
      dataIndex: "heading",
      key: "heading",
      width: "20%",
      sorter: (a, b) => a.heading.length - b.heading.length,

      ...getColumnSearchProps("heading"),
    },
    {
      title: "detail",
      dataIndex: "detail",
      key: "details",
      //   ...getColumnSearchProps("details"),
      //   sorter: (a, b) => a.details.length - b.details.length,
      //   sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tao Tac",
      dataIndex: "id",
      width: "20%",
      render: (a, e) => (
        <div className="flex flex-row justify-around">
          {console.log(a)}
          <button className="bg-green-500 p-3 w-24 hover:opacity-80 rounded-lg" onClick={() => {}}>
            Chỉnh sủa
          </button>
          <button className="bg-red-500 p-3 w-24 hover:opacity-80 rounded-lg">Xóa</button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={dataCommit} />
    </div>
  );
}
