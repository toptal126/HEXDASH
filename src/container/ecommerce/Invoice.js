import UilImport from '@iconscout/react-unicons/icons/uil-import';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import { Col, Row, Table } from 'antd';
import { useSelector } from 'react-redux';
import { InvoiceAction, InvoiceHeader, InvoiceLetterBox, OrderSummary, ProductTable } from './Style';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function Invoice() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Invoice',
    },
  ];
  const { mainContent, rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const invoiceTableData = [
    {
      key: '1',
      row: '1',
      details: (
        <>
          <div className="product-info">
            <Heading className="product-info-title" as="h6">
              Fiber Base Chair
            </Heading>
            <ul className="info-list">
              <li>
                <span className="info-title">Size :</span>
                <span>Large</span>
              </li>
              <li>
                <span className="info-title"> Color :</span>
                <span>Brown</span>
              </li>
            </ul>
          </div>
        </>
      ),
      unit: <span className="product-unit">$248.66</span>,
      quantity: <span className="product-quantity">3</span>,
      total: <span className="product-total-price">$943.30</span>,
    },
    {
      key: '2',
      row: '2',
      details: (
        <>
          <div className="product-info">
            <Heading className="product-info-title" as="h6">
              Panton Tunior Chair
            </Heading>
            <ul className="info-list">
              <li>
                <span className="info-title">Size :</span>
                <span>Large</span>
              </li>
              <li>
                <span className="info-title"> Color :</span>
                <span>Brown</span>
              </li>
            </ul>
          </div>
        </>
      ),
      unit: <span className="product-unit">$248.66</span>,
      quantity: <span className="product-quantity">2</span>,
      total: <span className="product-total-price">$943.30</span>,
    },
  ];

  const invoiceTableColumns = [
    {
      title: '#',
      dataIndex: 'row',
      key: 'row',
    },
    {
      title: 'Product Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Price Per Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Order Total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  const printInvoice = () => {
    window.print();
  };

  return (
    <div className="invoice-area">
      <PageHeader className="ninjadash-page-header-main" title="Invoice" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <div className="invoice-content-wrap" id="print-invoice-content">
                <InvoiceHeader>
                  <Row>
                    <Col sm={12} xs={24}>
                      <figure className="company-logo">
                        {mainContent === 'lightMode' ? (
                          <img src={require('../../static/img/logo_dark.svg').default} alt="" />
                        ) : (
                          <img src={require('../../static/img/logo_white.svg').default} alt="" />
                        )}
                      </figure>
                    </Col>
                    <Col sm={12} xs={24}>
                      <div>
                        <address className="invoice-info">
                          Admin Company <br />
                          795 Folsom Ave, Suite 600 <br />
                          San Francisco, CA 94107, USA <br />
                          Reg. number : 245000003513
                        </address>
                      </div>
                    </Col>
                  </Row>
                </InvoiceHeader>
                <InvoiceLetterBox>
                  <div className="invoice-letter-inner">
                    <article className="invoice-author">
                      <Heading className="invoice-author__title" as="h3">
                        Invoice
                      </Heading>
                      <p>No : #642678</p>
                      <p>Date : Jan 17, 2020</p>
                    </article>
                    <div className="invoice-barcode">
                      <Cards headless>
                        {mainContent === 'lightMode' ? (
                          <img style={{ width: '100%' }} src={require('../../static/img/barcode.png')} alt="barcode" />
                        ) : (
                          <img style={{ width: '100%' }} src={require('../../static/img/bar-dark.png')} alt="barcode" />
                        )}
                        <p>8364297359912267</p>
                      </Cards>
                    </div>
                    <address className="invoice-customer">
                      <Heading className="invoice-customer__title" as="h5">
                        Invoice To:
                      </Heading>
                      <p>
                        Stanley Jones <br />
                        795 Folsom Ave, Suite 600 <br />
                        San Francisco, CA 94107, USA
                      </p>
                    </address>
                  </div>
                </InvoiceLetterBox>

                <br />
                <br />
                <ProductTable>
                  <div className="table-invoice table-responsive">
                    <Table dataSource={invoiceTableData} columns={invoiceTableColumns} pagination={false} />
                  </div>
                </ProductTable>

                <Row justify="end">
                  <Col xxl={4} xl={5} sm={8} xs={14} offset={rtl ? 0 : 10}>
                    <OrderSummary>
                      <div className="invoice-summary-inner">
                        <ul className="summary-list">
                          <li>
                            <span className="summary-list-title">Subtotal :</span>
                            <span className="summary-list-text">{`$${497.32}`}</span>
                          </li>
                          <li>
                            <span className="summary-list-title">Discount :</span>
                            <span className="summary-list-text">{`$${-20}`}</span>
                          </li>
                          <li>
                            <span className="summary-list-title">Shipping Charge :</span>
                            <span className="summary-list-text">{`$${30}`}</span>
                          </li>
                        </ul>
                        <Heading className="summary-total" as="h4">
                          <span className="summary-total-label">Total : </span>
                          <span className="summary-total-amount">{`$${507.32}`}</span>
                        </Heading>
                      </div>
                    </OrderSummary>
                  </Col>
                </Row>
                <Row justify="end">
                  <Col lg={12} md={18} sm={24} offset={0}>
                    <InvoiceAction>
                      <Button size="default" shape="round" type="default" onClick={() => printInvoice()}>
                        <UilPrint />
                        Print
                      </Button>
                      <Button size="default" shape="round" type="default">
                        <UilMessage />
                        Send Invoice
                      </Button>
                      <Button size="default" shape="round" type="primary">
                        <UilImport />
                        Download
                      </Button>
                    </InvoiceAction>
                  </Col>
                </Row>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </div>
  );
}

export default Invoice;
