import { Button, Checkbox, Form, Input, Upload } from "antd";
import { MainContext } from "../../context/MainContext";
import { UploadOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { TOKEN } from "./adminToken";
import { useEffect } from "react";
import { useRef } from "react";


export default function AdminAbout() {
  const { accessToken } = useContext(MainContext);
  const form = useRef();
  const [checkLogo,setCheckLogo] = useState(false)
  const [checkBanners,setCheckBanners] = useState(false)
  const [description, setDes] = useState('');
  const [values, setValues] = useState('');
  const [vision, setVision] = useState('')
  const [fileListLogo, setLogo] = useState({})
  const [fileListBanners, setBanners] = useState([])
  const [aboutState, setAboutState] = useState({
    // description: "string",
    // vision: "string",
    // values: "string",
    // logo: "https://cdn.tgdd.vn/Files/2020/12/11/1312984/huong-dan-tra-cuu-van-don-j-t-express-nhanh-nhat-c-4-652x367.jpg",
    // banners: [
    //   "https://icdn.dantri.com.vn/thumb_w/640/2020/05/08/j-chuandocx-1588932311071.jpeg",
    //   "https://cdn.tgdd.vn/Files/2020/12/11/1312984/huong-dan-tra-cuu-van-don-j-t-express-nhanh-nhat-c-4-652x367.jpg",
    // ],
  });
  const callAboutData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/api/about",
        method: "get",
        headers: { authorization: `Bearer ${accessToken}` },
      });
      if (result.status === 200) {
        setAboutState(result.data.data);
        console.log(aboutState);
        // setLogo(result.data.data.logo)
        // setBanners(result.data.data.banners)
        setValues(result.data.data.values)
        setVision(result.data.data.vision)
        setDes(result.data.data.description)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postApi = async (data) => {
    try {
      const result = await axios({
        url: "http://localhost:8000/api/admin/about",
        method: "post",
        headers: { authorization: `Bearer ${accessToken}` },
        data: data,
      });
      if (result.status === 200) {
        // console.log(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const postApiLogo = async (data) => {
    try {
      const result = await axios({
        url: "http://localhost:8000/api/admin/about/logo",
        method: "post",
        headers: { authorization: `Bearer ${accessToken}` },
        data: data,
      });
      if (result.status === 200) {
        // console.log(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const postApiBanner = async (data) => {
    try {
      const result = await axios({
        url: "http://localhost:8000/api/admin/about/banners",
        method: "post",
        headers: { authorization: `Bearer ${accessToken}` },
        data: data,
      });
      if (result.status === 200) {
        // console.log(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callAboutData();
  }, []);


  const changeLogo = (e) => {
    const img = e.target.files[0];
    img.preview = URL.createObjectURL(img)
    // setLogo(img)
    // console.log(img);
    setLogo(img);
    setCheckLogo(true)
  }

  const changeBanners = e => {
    const files = e.target.files;
    const banners = fileListBanners.slice()
    for (const file of files) {
      file.preview = URL.createObjectURL(file)
      banners.push(file)
    }
    // console.log(fileListBanners);
    setBanners(banners)
    setCheckBanners(true)
  }

  const handleDel = (e) => {
    let index = e.target.parentElement.parentElement.id
    const files = fileListBanners.slice(0, fileListBanners.length);
    files.splice(index, 1)
    console.log(files);
    setBanners(files);
  }

  const handleSubmit = () => {
   if(checkBanners===false||checkLogo===false){
    alert("Vui lòng điền đầy đủ thông tin")
   }
   
   else{
    const items = {
      description: description,
      values: values,
      vision: vision,
    }

    let fileBanners = new FormData();
    fileListBanners.forEach(e=>{
      fileBanners.append("banners", e)
    })

    let valueLogo = new FormData();
    valueLogo.append("logo", fileListLogo)
    postApi(items)
    postApiBanner(fileBanners);
    postApiLogo(valueLogo);
    console.log(fileListBanners);
    console.log(fileListLogo);
    // callAboutData()
    alert("Cập nhật thành công")
   }
  }

  return (
    <Form
      ref={form}
      name="basic"
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 20,
      }}
      autoComplete="off"
    >

      <Form.Item label="id">
        <Input.TextArea value={aboutState._id} rows={4} disabled='true' />
      </Form.Item>

      <Form.Item label="description">
        <Input.TextArea value={description} rows={4} onChange={(e) => setDes(e.target.value)} />
      </Form.Item>

      <Form.Item label="vision">
        <Input.TextArea value={vision} rows={4} onChange={(e) => setVision(e.target.value)} />
      </Form.Item>

      <Form.Item label="values">
        <Input.TextArea value={values} rows={4} onChange={(e) => setValues(e.target.value)} />
      </Form.Item>

      <Form.Item label="Logo">
        <input type='file' onChange={changeLogo} />
        <div className="flex align-center" style={{ width: 100, height: 100, border: "1px solid #cccc", marginTop: 8, padding: 5 }}>
          {fileListLogo && (
            <img src={fileListLogo.preview} alt={fileListLogo.name} />
          )}
        </div>
      </Form.Item>

      <Form.Item label="Banners">
        <input type="file" id="file-upload" multiple required onChange={changeBanners} />
        {fileListBanners.map((e, index) => (
          <div className="peer hover:bg-gray-300 flex align-center" style={{ position: "relative", width: 100, height: 100, border: "1px solid #cccc", marginTop: 8, padding: 5 }}>
            <div id={index} className="peer-hover:flex" style={{ position: 'absolute', right: 3, cursor: "pointer" }}>
              <DeleteOutlined className="hover:bg-gray-100" onClick={handleDel} />
            </div>
            <img src={e.preview} className="peer" />
          </div>
        ))}
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          // span: 20,
        }}
      >
        <Button
          type="primary"
          style={{
            color: "",
          }}
          htmlType="submit"
          onClick={handleSubmit}
        >
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
}
