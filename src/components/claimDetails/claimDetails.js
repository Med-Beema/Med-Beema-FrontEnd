import React from "react";
import { Descriptions, Statistic } from "antd";
import { Button } from "react-bootstrap";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
function onFinish() {
  console.log("finished!");
}
export default function ClaimDetails() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Claim Details</h3>
        <Countdown
          title="Voting Ends In"
          value={deadline}
          onFinish={onFinish}
        />
        <div></div>
      </div>
      <Descriptions
        bordered
        column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        contentStyle={{ backgroundColor: "#fff" }}
        labelStyle={{ backgroundColor: "#eee", fontWeight: "bold" }}
      >
        <Descriptions.Item label="Policyholder's Name" span={2}>
          Cloud Database
        </Descriptions.Item>

        <Descriptions.Item label="Date of Birth">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Validity Period" span={2}>
          2022.07.23
        </Descriptions.Item>
        <Descriptions.Item label="Claim Amount">
          {" "}
          $ <span>1800</span>
        </Descriptions.Item>

        <Descriptions.Item label="Name of Medical Institution" span={3}>
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Address of Institution" span={3}>
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={3}>
          F745QSqqsoKrVORZXkpy3884135DgnG4SqqzFDV6bdleFXiOi2kyrOR2q39xMsyLRqM66hOdepsNB7PIhmmwbvydDxTDn7m66xQF2
          <br />
          F745QSqqsoKrVORZXkpy3884135DgnG4SqqzFDV6bdleFXiOi2kyrOR2q39xMsyLRqM66hOdepsNB7PIhmmwbvydDxTDn7m66xQF2
          <br />
          orAExLt9ChxWhFWprYcFihaNKLDegZt7U4FuRpbPtbssONgRNECVjm6wYJFrR
          <br />
        </Descriptions.Item>
        <Descriptions.Item label="Documents Submitted" span={3}>
          <img
            src="https://storageapi.fleek.co/685aaae9-5f7e-49dd-8fb6-72491d601510-bucket/MedBeema/image-1643737815117.png"
            height="200"
            alt=""
          ></img>
          <br />
          <img
            src="https://storageapi.fleek.co/685aaae9-5f7e-49dd-8fb6-72491d601510-bucket/MedBeema/image-1643737815117.png"
            height="200"
            alt=""
          ></img>
          <br />
          <img
            src="https://storageapi.fleek.co/685aaae9-5f7e-49dd-8fb6-72491d601510-bucket/MedBeema/image-1643737815117.png"
            height="200"
            alt=""
          ></img>
        </Descriptions.Item>
        <Descriptions.Item label="Vote" span={3}>
          <Button
            variant="success"
            className="ml-20"
            id="Accept"
            style={{
              fontSize: "20px",
              borderRadius: "20px",
              padding: "auto 20px",
              margin: "auto 20px",
            }}
          >
            Accept The Claim
          </Button>
          <Button
            variant="danger"
            className="pl-20 pr-20 ml-20"
            type="submit"
            id="Accept"
            style={{
              fontSize: "20px",
              borderRadius: "20px",
            }}
          >
            Decline The Claim
          </Button>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
