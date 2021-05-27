import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { InputNumber } from "antd";
import { Divider } from "antd";
import { Button } from "antd";
import { Radio } from 'antd';
import App1 from "./components/App1";

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";


const { Footer, Sider, Conten } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <nav className="navbar navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
          Luisa Dominguez
        </nav>

        <App1 />

        <body>
          <h3 class="display-1">
            <b>React</b>
          </h3>

          <Divider />

          <h2 class="h2">CALCULADORA</h2>

          <Divider dashed />

          <div className="site-input-number-wrapper">
            <h3 class="h3">Ingrese dos números</h3>

            <Divider>
              <InputNumber size="small" min={1} max={100000} defaultValue={0} />
              <InputNumber size="small" min={1} max={100000} defaultValue={0} />
            </Divider>

            <Divider>
            <h3 class="h3">Escoja una operación</h3>
            </Divider>

            <Divider>
            <Radio.Group defaultValue>
      <Radio value={1}>SUMA</Radio>
      <Radio value={2}>RESTA</Radio>
      <Radio value={3}>MULTIPLICACIÓN</Radio>
      <Radio value={4}>DIVISIÓN</Radio>
    </Radio.Group>
            </Divider>

            <Divider>
              <Button type="primary">RESULTADO</Button>
              <InputNumber size="small" min={1} max={100000} defaultValue={0} />
            </Divider>
          </div>

          <br></br>
        </body>

        <Footer>
          <h4>
            <center>
              "Siempre parece imposible hasta que se hace" -Nelson Mandela
            </center>
          </h4>
        </Footer>
      </Layout>
    </div>
  );
}


export default App;
