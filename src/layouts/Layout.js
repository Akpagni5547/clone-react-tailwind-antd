import { Layout } from 'antd';
import ContentLayout from './Content';
import FooterLayout from './Footer';
import HeaderLayout from './Header';

const LayoutComponent = () => {
  return (
    <Layout>
        <HeaderLayout />
        <ContentLayout />
        <FooterLayout/>
    </Layout>
  )
}

export default LayoutComponent