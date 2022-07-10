import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AdminAddCommit from "../../components/Admin/Commit/AdminAddCommit";
import AdminEditCommit from "../../components/Admin/Commit/AdminEditCommit";
import AdminEditPartner from "../../components/Admin/Partner/AdminEditPartner";
import AdminNewPartner from "../../components/Admin/Partner/AdminNewPartner";

export default function AdminPartner() {
  const [dataPartner, setDataPartner] = useState([
    {
      id: "1",
      name: "Nodea",
      logo: "https://play-lh.googleusercontent.com/5qotPJfklVo9cNI6JLJivYm3OGYRIIgRSrlKMbWQAUuAl03WwWUQwurYz36yDQUUww",
    },
    {
      id: "2",
      name: "Danske",
      logo: "https://danskebank.com/-/media/danske-bank-images/global/graphics/logo/danske-bank-logo-dark-bg.jpg?rev=db1d1203e2fb49a68beea65b43eeb689&hash=59231469392BF4421574B3E6D1402911",
    },
  ]);
  //   state open edit commit modal
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
  //   state open add commit modal
  const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);
  // state search text
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  //   state for edit commit
  const [editCommitInfor, setEditCommitInfor] = useState({});
  const searchInput = useRef(null);
  const getInforPartner = async () => {
    try {
      const result = await axios({
        url: "",
        method: "get",
        headers: "Bearer",
      });
      if (result.status === 200) {
        setDataPartner(result.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  //   close edit modal
  const onClose = () => {
    setIsModalVisibleEdit(false);
  };
  //   close add modal
  const onCloseAddModal = () => {
    setIsModalVisibleAdd(false);
  };
  // onChange={(e) => handleChangeFile(e, setImg, setEditCommit, editCommit)}

  //
  useEffect(() => {
    getInforPartner();
  }, []);
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
  const deleteAPI = async (id) => {
    try {
      const result = await axios({
        url: `url${id}`,
        method: "delete",
      });
      if (result.status === 200) {
        alert("đã xóa thành công ");
      }
    } catch (err) {
      console.log(err.response);
    }
  };
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
      title: "Name",
      dataIndex: "name",
      key: "heading",
      // width: "20%",
      sorter: (a, b) => a.heading.length - b.heading.length,

      //   ...getColumnSearchProps("heading"),
    },
    {
      title: "Tao Tac",
      dataIndex: "id",
      width: "20%",
      render: (a, e) => (
        <div className="flex flex-row justify-around">
          <button
            className="bg-green-500 p-3 w-24 hover:opacity-80 rounded-lg"
            onClick={() => {
              setIsModalVisibleEdit(!isModalVisibleEdit);
              setEditCommitInfor(e);
            }}
          >
            Chỉnh sủa
          </button>
          <button
            className="bg-red-500 p-3 w-24 hover:opacity-80 rounded-lg"
            onClick={() => {
              deleteAPI(a);
            }}
          >
            Xóa
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-y-3 border-l ">
      {<AdminNewPartner isModalVisibleAdd={isModalVisibleAdd} onClose={onCloseAddModal}></AdminNewPartner>}
      <AdminEditPartner
        isModalVisibleEdit={isModalVisibleEdit}
        infor={editCommitInfor}
        setEditCommitInfor={setEditCommitInfor}
        onClose={onClose}
      ></AdminEditPartner>

      <span className="text-2xl font-blod py-4 px-2">Partner</span>
      <div className="relative w-full h-10">
        <button
          className="inline-flex justify-around items-center absolute right-10 w-32 border rounded-lg p-2 shadow-xl hover:bg-yellow-100"
          onClick={() => setIsModalVisibleAdd(!isModalVisibleAdd)}
        >
          <AiOutlinePlus className="" />
          Thêm mới
        </button>
      </div>

      <Table columns={columns} dataSource={dataPartner} />
    </div>
  );
}
