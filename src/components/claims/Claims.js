import React, { useState, useEffect } from "react";
import { Table } from "antd";

export default function Claims() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // return () => {

    // };
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "COVER",
      dataIndex: "cover",
    },
    {
      key: "3",
      title: "COVER AMOUNT",
      dataIndex: "coverAmount",
      sorter: (amount1, amount2) => {
        return amount1.coverAmount > amount2.coverAmount;
      },
    },
    {
      key: "4",
      title: "COVER PERIOD",
      dataIndex: "coverPeriod",
    },
    {
      key: "5",
      title: "STATUS",
      dataIndex: "status",
      filters: [
        { text: "Accepted", value: "Accepted" },
        { text: "Rejected", value: "Rejected" },
        { text: "Open To Assessors", value: "Open To Assessors" },
      ],
      onFilter: (value, record) => {
        return record.status === value;
      },
    },
    {
      key: "6",
      title: "ACTION",
      dataIndex: "",
      render: () => <a href="#">View</a>,
    },
  ];
  const data = [
    {
      id: 1,
      cover: "John Brown",
      coverAmount: 45676788,
      coverPeriod: "2021/02/09 - 2022/01/09",
      status: "Accepted",
    },
    {
      id: 2,
      cover: "John Brown",
      coverAmount: 200,
      coverPeriod: "2021/02/09 - 2022/01/09",
      status: "Accepted",
    },
    {
      id: 3,
      cover: "John Brown",
      coverAmount: 45676788,
      coverPeriod: "2021/02/09 - 2022/01/09",
      status: "Open To Assessors",
    },
    {
      id: 4,
      cover: "John Brown",
      coverAmount: 0,
      coverPeriod: "2021/02/09 - 2022/01/09",
      status: "Rejected",
    },
  ];
  return (
    <div>
      <header className="">
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={{
            current: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        ></Table>
      </header>
    </div>
  );
}
