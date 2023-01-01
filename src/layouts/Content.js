import { Layout } from "antd";
import GuestPage from "../pages/GuestPages";
const { Content } = Layout;

const ContentLayout = () => {
  return (
    <Content>
      <GuestPage />
    </Content>
  );
};

export default ContentLayout;
