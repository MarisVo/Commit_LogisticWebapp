import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AdminEditCommit from "../../components/Admin/Commit/AdminEditCommit";
import AdminEditMessage from "../../components/Admin/Message/AdminEditMessage";
import AdminNewMessage from "../../components/Admin/Message/AdminNewMessage";
export default function AdminContactMessage() {
  const [sortedInfo, setSortedInfo] = useState({});
  //   state open edit commit modal
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
  //   state open add commit modal
  const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);
  // call total message :
  const getMessageAPI = async () => {
    try {
      const result = await axios({
        url: "",
        method: "get",
        headers: "Bearer",
      });
      if (result.status === 200) {
        setDataMessgae(result.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const onClose = () => {
    setIsModalVisibleEdit(false);
  };
  //   close add modal
  const onCloseAddModal = () => {
    setIsModalVisibleAdd(false);
  };
  useEffect(() => {
    getMessageAPI();
  }, []);
  // delete API :

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
  // setdata to edit
  const [dataEditMessage, setDataEditMessage] = useState();
  //  data message
  const [dataMessage, setDataMessgae] = useState([
    {
      name: "a",
      email: "a@gmail42424.com",
      phone: "424",
      message: "new message",
      id: 1,
      date: "",
    },
    {
      name: "b",
      email: "bfasf@gmail.com",
      phone: "4422424",
      message: "new message",
      id: 2,
      date: "",
    },
    {
      name: "c",
      email: "chjhr@gmail.com",
      phone: "4565624",
      message: "new message",
      id: 3,
      date: "",
    },
  ]);
  // colummns table
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      width: "10%",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      sorter: (a, b) => a.email.length - b.email.length,
      //   ...getColumnSearchProps("heading"),
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      // ...getColumnSearchProps("details"),
      sorter: (a, b) => a.phone - b.phone,
      //   sortDirections: ["descend", "ascend"],
    },
    {
      title: "message",
      dataIndex: "message",
      key: "message",
      // ...getColumnSearchProps("details"),
      sorter: (a, b) => a.message.length - b.message.length,
      //   sortDirections: ["descend", "ascend"],
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
      // ...getColumnSearchProps("details"),
      // sorter: (a, b) => a.detail.length - b.detail.length,
      //   sortDirections: ["descend", "ascend"],
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
              console.log(a);
              setIsModalVisibleEdit(!isModalVisibleEdit);
              setDataEditMessage(e);
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
      <AdminNewMessage isModalVisibleAdd={isModalVisibleAdd} onClose={onCloseAddModal}></AdminNewMessage>
      <AdminEditMessage
        isModalVisibleEdit={isModalVisibleEdit}
        infor={dataEditMessage}
        setDataEditMessage={setDataEditMessage}
        onClose={onClose}
      ></AdminEditMessage>
      <span className="text-2xl font-blod py-4 px-2">Message</span>
      <div className="relative w-full h-10">
        <button
          className="inline-flex justify-around items-center absolute right-10 w-32 border rounded-lg p-2 shadow-xl hover:bg-yellow-100"
          onClick={() => setIsModalVisibleAdd(!isModalVisibleAdd)}
        >
          <AiOutlinePlus className="" />
          Thêm Mới
        </button>
      </div>
      <Table columns={columns} dataSource={dataMessage} />
    </div>
  );
}
