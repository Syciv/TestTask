import Employees from './employees/employees';
import { Button, Container } from 'reactstrap';
import Tasks from './tasks/tasks';
import {  useState, useEffect } from 'react';
import useStyles from "./style";

function Home(props) {
  // Вкладки для переключения
  const tabs = [
      {title: 'Сотрудники', component: <Employees />},
      {title: 'Задачи', component: <Tasks />}
    ];

  const classes = useStyles();

  const [activeTab, setActiveTab] = useState(props.match.params.tab ? Number(props.match.params.tab) : 0);

  // Смена вкладки
  const openTab = event => {
      setActiveTab(Number(event.target.id));
    }

  const TabContent = ({ title, component }) => (
      <div>
        <h3>{title}</h3>
          {component}
      </div>
    );

  return <div>
        <Container className={classes.cont}>
          <div className={classes.bottomborder}>
              {tabs.map((tab, i) => (
                <Button id={i} onClick={openTab}
                  className={i === activeTab ? classes.tab_active : classes.tab_nonactive }>
                  {tab.title}
                </Button>
                ))}
          </div>
          {<TabContent {...tabs[activeTab]} />}
        </Container>
  </div>
}

export default Home;
