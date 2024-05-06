import { FC } from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoSettingsOutline, IoWaterOutline } from "react-icons/io5";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { GrUserSettings } from "react-icons/gr";
import { SiteBarProps } from "../../types";

const SiteBar: FC<SiteBarProps> = ({ state }) => {
  const root = useNavigate();

  const data = [
    {
      key: "/",
      icon: <AiOutlineHome />,
      label: "Asosiy",
    },

    {
      key: "/orders",
      icon: <FaRegUser />,
      label: "Mijoslar",
    },
    {
      key: "/clients",
      icon: <LiaCartArrowDownSolid />,
      label: "Buyurtmalar",
    },
    {
      key: "/sms",
      icon: <MdOutlineMarkEmailUnread />,
      label: "SMS marketing",
    },
    {
      key: "/service",
      icon: <GrUserSettings />,
      label: "Xizmatlar",
    },
    {
      key: "/settings",
      icon: <IoSettingsOutline />,
      label: "Sozlamalar",
    },
  ];

  return (
    <>
      <ChakraProvider>
        <Sider
          className="home"
          trigger={null}
          collapsible
          collapsed={state.collapsed}
        >
          <div className="demo-logo-vertical" />
          <div className={`logo ${state.collapsed ? "active" : ""}`}>
            <IoWaterOutline size={55} color="dark" />
            <Text fontSize={"3xl"}>
             
            </Text>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={data}
            onClick={(e) => root(e.key)}
            style={{
              marginTop: "5px",
            }}
          />
        </Sider>
      </ChakraProvider>
    </>
  );
};

export default SiteBar;
