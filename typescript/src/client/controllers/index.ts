import { Weapon } from "@wdesgardin/fivem-js";

export const Init = async (): Promise<void> => {};

import { SendReactMessage, debugPrint } from "client/utils";
import * as Cfx from "@wdesgardin/fivem-js";

function toggleNuiFrame(shouldShow) {
  SetNuiFocus(shouldShow, shouldShow);
  SendReactMessage("setVisible", shouldShow);
}

RegisterCommand(
  "show-nui",
  () => {
    toggleNuiFrame(true);
    debugPrint("Show NUI frame");
  },
  false
);

RegisterNuiCallbackType("hideFrame");
on("__cfx_nui:hideFrame", (_, cb) => {
  toggleNuiFrame(false);
  debugPrint("Hide NUI frame");
  cb({});
});

RegisterNuiCallbackType("getClientData");
on("__cfx_nui:getClientData", (data, cb) => {
  debugPrint("Data send by React", JSON.stringify(data));

  let curCoords = Cfx.Game.PlayerPed.Position;
  let retData = { x: curCoords.x, y: curCoords.y, z: curCoords.z };

  cb(retData);
});

RegisterCommand(
  "fullammo",
  () => {
    const ped = Cfx.Game.PlayerPed;

    if (ped.Weapons.Current != null) {
      const weapon: Weapon = ped.Weapons.Current;

      weapon.Ammo = weapon.MaxAmmo;
    }
  },
  false
);

RegisterCommand(
  "clearammo",
  () => {
    const ped = PlayerPedId();
    const weaponHash = GetSelectedPedWeapon(ped);

    if (weaponHash !== 0) {
      SetAmmoInClip(ped, weaponHash, 0);
    }
  },
  false
);
