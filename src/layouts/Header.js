import { Layout, Menu, ConfigProvider, Image } from "antd";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo1.png'
const { Header } = Layout;

const HeaderLayout = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(
      <>
        <span>Vols</span>
        <Link to="/" />
      </>,
      "vol"
    ),
    getItem(
      <>
        <span>Hotel</span>
        <Link to="/hotel" />
      </>,
      "hotel"
    ),
    getItem("Option 3", "3"),
    getItem("Navigation One", "sub1", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ];
  return (
    <ConfigProvider
      theme={
        {
          // components : {
          //   Layout : {
          //     colorFill : '#00b96b'
          //   },
          //   Menu : {
          //     colorPrimary: '#00b96b',
          //     colorBgContainer : '#00b96b',
          //     colorBgBase : '#00b96b',
          //     colorFill : '#00b96b'
          //   }
          // }
        }
      }
    >
      <Header
        style={{
          padding: 0,
          background : '#fff'
        }}
      >
        {/* <div className="inline-block bg-red-800" style={{

        }}>
          Hello
        </div> */}
        <Menu
          mode="horizontal"
          className=""
          defaultSelectedKeys={["vol"]}
          items={items}
        />
      </Header>
    </ConfigProvider>
  );
};

export default HeaderLayout;
