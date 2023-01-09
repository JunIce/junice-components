import React, { CSSProperties } from 'react';
import Panel from '.';
import Button from '../Button';
import Col from '../Col';
import Row from '../Row';

export default {
  title: 'Panel',
};

export const basic = () => {
  return (
    <>
      <div style={{ padding: '20px', backgroundColor: '#edf1f5' }}>
        <Panel
          title={'Panel with action'}
          extra={
            <>
              <a href="#" data-perform="panel-collapse">
                1<i className="ti-minus"></i>
              </a>
              <a href="#" data-perform="panel-dismiss">
                2<i className="ti-close"></i>
              </a>
            </>
          }
          footer={
            <>
              <span>Panel Footer </span>
            </>
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae
            ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
          </p>
          <Button type="info">Demo button</Button>
        </Panel>

        <Row>
          <Col span={4}>
            <Panel type="success" title={'success'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue.
              </p>
            </Panel>
          </Col>
          <Col span={4}>
            <Panel type="danger" title={'danger'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue.
              </p>
            </Panel>
          </Col>
          <Col span={4}>
            <Panel type="info" title={'info'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue.
              </p>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col span={4}>
            <Panel type="primary" title={'primary'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue.
              </p>
            </Panel>
          </Col>
          <Col span={4}>
            <Panel type="warning" title={'warning'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue.
              </p>
            </Panel>
          </Col>
          <Col span={4}>
            <Panel type="inverse" title={'inverse'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue.
              </p>
            </Panel>
          </Col>
        </Row>
      </div>
    </>
  );
};
