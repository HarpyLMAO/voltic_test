import React, { useState } from "react";
import "./Phone.css";
import { debugData } from "../../utils/debugData";
import { fetchNui } from "../../utils/fetchNui";

debugData([
  {
    action: "setPhoneVisible",
    data: true,
  },
]);

interface ReturnClientDataCompProps {
  data: any;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => <>{JSON.stringify(data, null)}</>;

interface ReturnData {
  opened: {},
  focus: [],
  pos: {};
}

const Phone: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);

  const handleGetClientData = () => {
    fetchNui<ReturnData>("getClientName")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setClientData({ name: "Pepito" });
      });
  };

  var phoneDiv = document.getElementById("phone-div");
  if (phoneDiv?.style.visibility != "hidden") {
    handleGetClientData();
  }

  return (
    <div className="phone-wrapper">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            Buenas {clientData?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
