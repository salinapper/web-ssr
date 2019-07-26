import React, { Component } from 'react';
import { Spin, Calendar, Row, Col, Card } from 'antd';
import moment from 'moment';
import { formatMessage } from 'umi/locale';
import styles from './Calendar.less';

class EventCalendar extends Component {

  state = {
    mode: 'month',
    selectEvents: [],
    upcomingEvents: []
  };

  async componentDidMount() {
    const { start_date, end_date, id, dispatch } = this.props;

    const data = await dispatch({
      type: 'event/fetch',
      payload: {
        id,
        start_date,
        end_date,
      }
    })
    const upcomingEvents = [];
    data.forEach((item) => {
      if (item.event_date.isBetween(start_date, start_date.clone().add(1, 'month'))) {
        upcomingEvents.push(item);
      }
    });

    this.setState({
      upcomingEvents
    });
  }

  monthCellRender = (date) => {
    const list = [];
    const { data } = this.props;

    data.forEach((item) => {
      if (item.event_date.format('YYYYMM') === date.format('YYYYMM')) {
        list.push(item);
      }
    });

    return (
      <ul className={styles.list}>
        {
          list.map((item, key) => {
            return (
              <li key={key}>{item.content}</li>
            )
          })
        }
      </ul>
    );
  }

  dateCellRender = (date) => {
    const list = [];
    const { data } = this.props;

    data.forEach((item) => {
      if (item.event_date.format('YYYYMMDD') === date.format('YYYYMMDD')) {
        list.push(item);
      }
    });

    return (
      <ul className={styles.list}>
        {
          list.map((item, key) => {
            return (
              <li key={key}>{item.content}</li>
            )
          })
        }
      </ul>
    );
  }

  onSelect = (date) => {
    const { mode } = this.state;
    const selectEvents = [];
    const { data } = this.props;

    if (mode === 'year') {
      data.forEach((item) => {
        if (item.event_date.format('YYYYMM') === date.format('YYYYMM')) {
          selectEvents.push(item);
        }
      });
    }
    else {
      data.forEach((item) => {
        if (item.event_date.format('YYYYMMDD') === date.format('YYYYMMDD')) {
          selectEvents.push(item);
        }
      });
    }

    this.setState({
      selectEvents
    });
  }

  onPanelChange = (date, mode) => {
    this.setState({
      mode
    });
  }

  render() {
    const { mode, selectEvents, upcomingEvents } = this.state;
    const { start_date, end_date, loading } = this.props;

    return (
      <Spin spinning={loading}>
        <Row gutter={10}>
          <Col span={upcomingEvents.length > 0 ? 18 : 24 }>
            <Card bordered={false}>
              <Calendar
                mode={mode}
                onPanelChange={this.onPanelChange}
                defaultValue={end_date}
                onSelect={this.onSelect}
                dateCellRender={this.dateCellRender}
                monthCellRender={this.monthCellRender}
                validRange={[start_date, end_date]}/>
            </Card>
            {
              selectEvents.length > 0 &&
              <Card bordered={false} style={{marginTop: 20}}>
                {
                  selectEvents.map((item, key) => {
                    return (
                      <div key={key} className={styles.eventInfo}>
                        <h3>{item.event_date.format('YYYY-MM-DD')}</h3>
                        <p>{item.content}</p>
                      </div>
                    );
                  })
                }
              </Card>
            }
          </Col>
          {
            upcomingEvents.length > 0 &&
            <Col span={6}>
              <Card bordered={false}>
                <h3>{formatMessage({id: 'event.upcoming'})}</h3>
                {
                  upcomingEvents.map((item, key) => {
                    return (
                      <div key={key} className={styles.eventInfo}>
                        <h3>{item.event_date.format('YYYY-MM-DD-')}</h3>
                        <p>{item.content}</p>
                      </div>
                    );
                  })
                }
              </Card>
            </Col>
          }
        </Row>
      </Spin>
    );
  }
}

export default EventCalendar;
