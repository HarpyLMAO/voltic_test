import * as Cfx from "@wdesgardin/fivem-js";
import { animations } from "./animations";

let phoneData = {
  metaData: {},
  playerData: {},
  id: 1,
  isOpen: false,
  animationData: {
    library: null,
    animation: null,
  },
};

class Phone {
  public phoneOpened: boolean;
  public phoneProp: number;
  public phoneModel: string;
  public currentStatus: string;
  public lastDictionary: string;
  public lastAnimation: string;
  public lastIsFreeze: boolean;

  public Phone() {
    this.phoneOpened = false;
    this.phoneProp = 0;
    this.phoneModel = "prop_cs_phone_01";
    this.currentStatus = "out";
    this.lastDictionary = null;
    this.lastAnimation = null;
    this.lastIsFreeze = false;
  }

  public createPhoneProperties() {
    this.deletePhone();
    RequestModel(this.phoneModel);

    let pedHandle = Cfx.Game.PlayerPed.Handle;

    while (!HasModelLoaded(this.phoneModel)) {
      Cfx.Wait(1);
    }
    this.phoneProp = CreateObject(
      this.phoneModel,
      1.0,
      1.0,
      1.0,
      true,
      true,
      false
    );

    let bone = GetPedBoneIndex(pedHandle, 28422);

    if (this.phoneModel == "prop_cs_phone_01") {
      AttachEntityToEntity(
        this.phoneProp,
        pedHandle,
        bone,
        0.0,
        0.0,
        0.0,
        50.0,
        320.0,
        50.0,
        true,
        true,
        false,
        false,
        2,
        true
      );
    } else {
      AttachEntityToEntity(
        this.phoneProp,
        pedHandle,
        bone,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        true,
        true,
        false,
        false,
        2,
        true
      );
    }
  }

  public deletePhone() {
    if (DoesEntityExist(this.phoneProp)) {
      DetachEntity(this.phoneProp, true, true);
      Citizen.invokeNative("0xAE3CBE5BF394C9C9", this.phoneProp, true, true);
      SetEntityAsNoLongerNeeded(this.phoneProp);
      DeleteEntity(this.phoneProp);
      this.phoneProp = null;
    }
  }

  public loadAnimation(dictionary) {
    RequestAnimDict(dictionary);
    while (!HasAnimDictLoaded(dictionary)) {
      Cfx.Wait(1);
    }
  }

  public cancelPhoneAnimation() {
    var player: Cfx.Ped = Cfx.Game.PlayerPed;
    var animationLibrary: string = "cellphone@";
    var animationStatus: string = "cellphone_call_listen_base";

    if (IsPedInAnyVehicle(player.Handle, false)) {
      animationLibrary = "anim@cellphone@in_car@ps";
    }

    if (phoneData.isOpen) {
      animationStatus = "cellphone_call_to_text";
    }

    this.loadAnimation(animationLibrary);
    TaskPlayAnim(
      player.Handle,
      animationLibrary,
      animationStatus,
      3.0,
      1.0,
      -1,
      50,
      0,
      false,
      false,
      false
    );

    if (!this.phoneOpened) {
      this.deletePhone();
    }
  }

  public checkAnimationLoop() {
    (async () => {
      while (
        phoneData.animationData.library != null &&
        phoneData.animationData.animation != null
      ) {
        let ped: Cfx.Ped = Cfx.Game.PlayerPed;

        if (
          !IsEntityPlayingAnim(
            ped.Handle,
            phoneData.animationData.library,
            phoneData.animationData.animation,
            3
          )
        ) {
          this.loadAnimation(phoneData.animationData.library);
          TaskPlayAnim(
            ped.Handle,
            phoneData.animationData.library,
            phoneData.animationData.animation,
            3.0,
            3.0,
            -1,
            50,
            0,
            false,
            false,
            false
          );
        }

        Cfx.Wait(500);
      }
    })();
  }

  public doPhoneAnimation(animation: string) {
    var ped: Cfx.Ped = Cfx.Game.PlayerPed;
    var animationLibrary: string = "cellphone@";
    var animationStatus: string = animation;

    if (IsPedInAnyVehicle(ped.Handle, false)) {
      animationLibrary = "anim@cellphone@in_car@ps";
    }

    this.loadAnimation(animationLibrary);
    TaskPlayAnim(
      ped.Handle,
      animationLibrary,
      animationStatus,
      3.0,
      1.0,
      -1,
      50,
      0,
      false,
      false,
      false
    );

    phoneData.animationData.library = animationLibrary;
    phoneData.animationData.animation = animationStatus;

    this.checkAnimationLoop();
  }

  public phonePlayAnimation(status: string, freeze?: boolean, force?: boolean) {
    if (this.currentStatus == status && !force) {
      return;
    }

    let pedId: number = Cfx.Game.PlayerPed.Handle;
    freeze = freeze || false;

    let dictionary: string = "cellphone@";
    if (IsPedInAnyVehicle(pedId, false)) {
      dictionary = "anim@cellphone@in_car@ps";
    }
    this.loadAnimationDictionary(dictionary);

    let animation: string = animations[dictionary][this.currentStatus][status];
    if (this.currentStatus != "out") {
      StopAnimTask(pedId, dictionary, animation, 1.0);
    }
    let flag: number = 50;
    if (freeze) {
      flag = 14;
    }
    TaskPlayAnim(
      pedId,
      dictionary,
      animation,
      3.0,
      -1,
      -1,
      flag,
      0,
      false,
      false,
      false
    );

    if (status != "out" && this.currentStatus == "out") {
      Cfx.Wait(300);
      this.createPhoneProperties();
    }

    this.lastDictionary = dictionary;
    this.lastAnimation = animation;
    this.lastIsFreeze = freeze;
    this.currentStatus = status;

    if (status == "out") {
      Cfx.Wait(180);
      this.deletePhone();
      StopAnimTask(pedId, this.lastDictionary, this.lastAnimation, 1.0);
    }
  }

  public loadAnimationDictionary(animation: string) {
    RequestAnimDict(animation);
    while (!HasAnimDictLoaded(animation)) {
      Cfx.Wait(1);
    }
  }

  public phonePlayOut() {
    this.phonePlayAnimation("out");
  }

  public phonePlayText() {
    this.phonePlayAnimation("text");
  }

  public phonePlayIn() {
    if (this.currentStatus == "out") {
        this.phonePlayText();
    }
  }
}

export {
    Phone,
    phoneData
}




























































  /*public phonePlayAnimation(status: string, freeze?: boolean) {
    let player: Cfx.Ped = Cfx.Game.PlayerPed;
  
    let dictionary = "cellphone@";
    let animation = "f_cellphone_text_in";
  
    if (
      IsEntityPlayingAnim(player.Handle, "cellphone@", "f_cellphone_text_in", 3)
    ) {
      player.Task.clearAllImmediately();
      return;
    }
  
    RequestAnimDict("cellphone@");
    while (HasAnimDictLoaded("cellphone@") == false) {
      Cfx.Wait(1);
    }
  
    if (HasAnimDictLoaded("cellphone@")) {
      debugPrint("Animation loaded");
      TaskPlayAnim(
        player.Handle,
        "cellphone@",
        "cellphone_text_read_base",
        2.0,
        1.0,
        -1,
        49,
        0,
        false,
        false,
        false
      );
      this.createPhoneProperties();
    }
  
    RemoveAnimDict("cellphone@");
  
    this.lastDictionary = dictionary;
    this.lastAnimation = animation;
    this.lastIsFreeze = freeze;
    this.currentStatus = status;
  }*/
