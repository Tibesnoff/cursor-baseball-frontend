import React from "react";
import {
  Button,
  Card,
  Typography,
  Space,
  Row,
  Col,
  Statistic,
  Progress,
  Tag,
} from "antd";
import {
  BulbOutlined,
  SunOutlined,
  TrophyOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { useTheme } from "@/hooks/useTheme";

const { Title, Paragraph } = Typography;

const AppContent: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Title level={1} className="text-primary mb-2">
            Baseball Stats Dashboard
          </Title>
          <Paragraph className="text-secondary text-lg">
            Welcome to your comprehensive baseball statistics platform
          </Paragraph>
        </div>
        <Button
          type="primary"
          icon={mode === "dark" ? <SunOutlined /> : <BulbOutlined />}
          onClick={toggleTheme}
          size="large"
        >
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={6}>
          <Card className="shadow-md">
            <Statistic
              title="Team Average"
              value={0.287}
              precision={3}
              valueStyle={{ color: "var(--color-batting-avg-high)" }}
              prefix={<TrophyOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="shadow-md">
            <Statistic
              title="Home Runs"
              value={156}
              valueStyle={{ color: "var(--color-secondary)" }}
              prefix={<BarChartOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="shadow-md">
            <Statistic
              title="ERA"
              value={3.42}
              precision={2}
              valueStyle={{ color: "var(--color-era-low)" }}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="shadow-md">
            <Statistic
              title="Wins"
              value={89}
              valueStyle={{ color: "var(--color-success)" }}
              prefix={<TrophyOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="mt-6">
        <Col xs={24} lg={12}>
          <Card title="Batting Performance" className="shadow-md">
            <Space direction="vertical" className="w-full">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Batting Average</span>
                  <span className="font-semibold">0.287</span>
                </div>
                <Progress
                  percent={28.7}
                  strokeColor="var(--color-batting-avg-high)"
                  showInfo={false}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>On-Base Percentage</span>
                  <span className="font-semibold">0.342</span>
                </div>
                <Progress
                  percent={34.2}
                  strokeColor="var(--color-batting-avg-medium)"
                  showInfo={false}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Slugging Percentage</span>
                  <span className="font-semibold">0.456</span>
                </div>
                <Progress
                  percent={45.6}
                  strokeColor="var(--color-batting-avg-high)"
                  showInfo={false}
                />
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Team Stats" className="shadow-md">
            <Space direction="vertical" className="w-full">
              <div className="flex justify-between items-center">
                <span>Current Streak</span>
                <Tag color="success">W 5</Tag>
              </div>
              <div className="flex justify-between items-center">
                <span>Home Record</span>
                <Tag color="primary">45-36</Tag>
              </div>
              <div className="flex justify-between items-center">
                <span>Away Record</span>
                <Tag color="default">44-37</Tag>
              </div>
              <div className="flex justify-between items-center">
                <span>Division Rank</span>
                <Tag color="warning">2nd</Tag>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card title="Theme System Demo" className="mt-6 shadow-md">
        <Paragraph>
          This demo showcases the unified theming system with:
        </Paragraph>
        <ul className="list-disc list-inside space-y-2 text-secondary">
          <li>
            <strong>CSS Custom Properties:</strong> All colors, spacing, and
            typography defined in <code>theme.css</code>
          </li>
          <li>
            <strong>Ant Design Integration:</strong> Components use the same
            design tokens
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Utility classes reference the same
            CSS variables
          </li>
          <li>
            <strong>Dark Mode:</strong> Automatic theme switching with system
            preference detection
          </li>
          <li>
            <strong>Baseball Theme:</strong> Custom color palette inspired by
            baseball aesthetics
          </li>
        </ul>
      </Card>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
