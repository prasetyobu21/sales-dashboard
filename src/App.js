import React, { PureComponent } from 'react';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';


function App() {

  const data = [
    {
      name: 'Sep 20',
      income: 20000,
      outcome: 10000
    },
    {
      name: 'Oct 20',
      income: 30000,
      outcome: 12000
    },
    {
      name: 'Nov 20',
      income: 10000,
      outcome: 12000
    },
    {
      name: 'Dec 20',
      income: 50000,
      outcome: 30000
    },
    {
      name: 'Jan 21',
      income: 34000,
      outcome: 30000
    },
    {
      name: 'Feb 21',
      income: 10000,
      outcome: 8000
    },
    {
      name: 'Mar 21',
      income: 10500,
      outcome: 9000
    },
    {
      name: 'Apr 21',
      income: 20000,
      outcome: 12000
    },
    {
      name: 'May 21',
      income: 20000,
      outcome: 15000
    },
    {
      name: 'Jun 21',
      income: 30000,
      outcome: 15000
    },
    {
      name: 'Jul 21',
      income: 33000,
      outcome: 19000
    },
    {
      name: 'Aug 21',
      income: 20000,
      outcome: 19000
    },
  ]

  const profit = [
    {
      name: 'Jun 21',
      profit: 15000
    },
    {
      name: 'Jul 21',
      profit: 14000
    },
    {
      name: 'Aug 21',
      profit: 10000
    },
  ]

  return (
    <div className="container">
      <div className="sidebar-container">
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>Goods</li>
            <li>Supplier</li>
            <li>Transaction</li>
            <li>Account Setting</li>
          </ul>

          <p>Logout</p>
        </div>
      </div>
      <div className="content-container">
        <h1>Dashboard</h1>
        <div className="col-1">
          <div className="col-3">
            <div className="card">
              <h3 className="card-title">Overview</h3>
              <p>Supplier: <b>5</b></p>
              <p>Goods category: <b>10</b></p>
              <p>This month profit: <b>$5000</b> </p>
              <p>This month income: <b>$15000</b> </p>
              <p>This month outcome: <b>$10000</b> </p>
            </div>
          </div>
          <div className="col-3">
            <div className="card income">
              <h3 className="card-title white">Today Income</h3>
              <p className="highlight-text">$1000</p>
            </div>
          </div>
          <div className="col-3">
            <div className="card outcome">
              <h3 className="card-title white">Today Outcome</h3>
              <p className="highlight-text">$500</p>
            </div>
          </div>
        </div>

        <div className="col-1">
          <div className="col-3-wide">
            <div className="card">
              <h3 className="card-title">Annual Sales</h3>
              <ResponsiveContainer width="95%" height="70%">
                <BarChart width={950} height={200} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="#7dbd80" />
                  <Bar dataKey="outcome" fill="#CE5D5D" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h3 className="card-title">Performance (3 Months Sales)</h3>
              <ResponsiveContainer width="95%" height="70%">
                <LineChart width={450} height={200} data={profit}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="profit" stroke="#7dbd80" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-1">
          <div className="col-3-tall">
            <div className="col-1-card">
              <div className="card">
                <h3 className="card-title">Supplier List</h3>
                <div className="scroll-box">
                  <div className="scroll-list">
                    <p className="main-data">PT Agung Makmur</p>
                    <p className="sub-data">Last contact: 1 month ago</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">PT Jaya Abadi</p>
                    <p className="sub-data">Last contact: 2 months ago</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">PT Wijaya Sejahtera</p>
                    <p className="sub-data">Last contact: 3 months ago</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">PT Jaya Makmur</p>
                    <p className="sub-data">Last contact: 3 months ago</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">PT Wijaya Makmur</p>
                    <p className="sub-data">Last contact: 4 months ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-card">
              <div className="card">
                <h3 className="card-title">Incoming Goods This Months</h3>
                <div className="scroll-box">
                  <div className="scroll-list">
                    <p className="main-data">Standing Desk A452X (x50)</p>
                    <p className="sub-data">From: PT Jaya Makmur</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">Modern Wood Chair 55XT (x100)</p>
                    <p className="sub-data">From: PT Jaya Makmur</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">L Table L120 (x100)</p>
                    <p className="sub-data">From: PT Wijaya Makmur</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">Bean Bag (x200)</p>
                    <p className="sub-data">From: PT Agung Makmur</p>
                  </div>
                  <div className="scroll-list">
                    <p className="main-data">Coaster 9cm (x100)</p>
                    <p className="sub-data">From: PT Jaya Abadi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3-large">
            <div className="card">
              <h3 className="card-title">Supplier Location</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6879323145467!2d106.79297351527633!3d-6.304669863457688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee1f4e366cdf%3A0x315f7c1d05fb23d4!2sJl.%20RS.%20Fatmawati%20Raya%20No.1%2C%20RT.1%2FRW.1%2C%20Pd.%20Labu%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012450!5e0!3m2!1sen!2sid!4v1632333865053!5m2!1sen!2sid" width="95%" height="80%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
