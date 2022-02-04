import React from "react";
import { Card, Col, Row } from "antd";
import "./buycover.css";

export default function Buycover() {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card title="MEDBEEMA" className="card-title" bordered={false}>
          <p class="p-8">
            Decentralized Medical Insurance is a Defi-based health insurance
            project. Defi is blockchain-based finance that does not rely on any
            central financial intermediaries. It cuts all the intermediaries
            such as brokerages, exchanges, or banks and instead utilizes smart
            contracts on blockchains. Blockchain is being explored in various
            sectors like health, finance, insurance, cryptocurrencies, NFTs,
            supply chain, and many others. This project aims to explore
            Decentralized finance in the medical insurance sector.{" "}
          </p>
        </Card>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card className="card-Wrapper" bordered={false}>
              <div className="contentWrapper">
                <div className="imageSection">
                  <div className="image">
                    <img
                      src="https://academy.moralis.io/wp-content/uploads/2021/06/cover_logo.png"
                      style={{ height: 50, width: 50 }}
                    ></img>
                  </div>
                  <div className="covername">medical</div>
                </div>
                <div className="coverInfo">
                  <label className="label">Period</label>
                  <span>2021/02/04-2021/03/04</span>
                </div>
                <div className="cost">
                  <label className="label">Cost</label>
                  <span>1000</span>
                </div>
                <div>
                  <button
                    style={{
                      width: 100,
                      background: "#002b49",
                      color: "white",
                      borderRadius: 50,
                      alignItems: "center",
                      alignContent: "center",
                      marginLeft: 90,
                    }}
                  >
                    Buy Cover
                  </button>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      </div>
    </div>
  );
}
