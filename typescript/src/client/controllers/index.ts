export const Init = async (): Promise<void> => {};

import { SendReactMessage, debugPrint } from "client/utils/utils";
import * as Cfx from "@wdesgardin/fivem-js";
import ESX from "./esx";
import { Phone, phoneData } from "./phone";

const phone: Phone = new Phone();

function loadPhone() {
  (async () => {
    ESX.TriggerServerEvent('voltic_phone:server:getPhoneData', function(phoneData: any) {
      

      phoneData.playerData = ESX.GetPlayerData();
      phoneData.metaData = {};
      phoneData.playerData.characterInfo = phoneData.characterInfo != null ? phoneData.characterInfo : {};
      phoneData.playerData.identifier = phoneData.identifier != null ? phoneData.identifier : "";
    });
  })();
}

function togglePhone(shouldShow: boolean) {
  SetNuiFocus(shouldShow, shouldShow);
  SetNuiFocusKeepInput(shouldShow);
  SendReactMessage("setPhoneVisible", shouldShow);
}

RegisterCommand(
  "show-phone",
  () => {
    openPhone();
    togglePhone(true);
    debugPrint("Show phone frame");
  },
  false
);

RegisterNuiCallbackType("hideFrame");
on("__cfx_nui:hideFrame", (_, cb) => {
  togglePhone(false);
  closePhone();
  debugPrint("Hide phone frame");
  cb({});
});

RegisterNuiCallbackType("getClientName");
on("__cfx_nui:getClientName", (data, cb) => {
  debugPrint("Data send by React", JSON.stringify(data));
  debugPrint("Player name", Cfx.Game.Player.Name);

  let retData = { name: Cfx.Game.Player.Name };
  cb(retData);
});

function openPhone() {
  phone.doPhoneAnimation("f_cellphone_text_in");

  setTimeout(() => {
    phone.createPhoneProperties();
  }, 250);
}

function closePhone() {
  phone.doPhoneAnimation("f_cellphone_text_out");

  setTimeout(() => {
    StopAnimTask(Cfx.Game.PlayerPed.Handle, phoneData.animationData.library, phoneData.animationData.animation, 2.5);
    phone.deletePhone();
    phoneData.animationData.library = null;
    phoneData.animationData.animation = null;
  }, 400);

  setTimeout(() => {
    phoneData.isOpen = false;
  }, 1000);
}
