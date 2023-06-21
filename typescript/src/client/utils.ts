function SendReactMessage(action, data) {
  SendNUIMessage({
    action: action,
    data: data,
  });
}

let currentResourceName: string = GetCurrentResourceName();
let debugIsEnabled: boolean =
  GetConvarInt(`${currentResourceName}-debugMode`, 0) === 1;

function debugPrint(...args: any[]): void {
  if (!debugIsEnabled) return;

  const appendStr: string[] = [];
  for (const v of args) {
    appendStr.push(` ${String(v)}`);
  }
  const msgTemplate: string = `^3[${currentResourceName}]^0${appendStr.join(
    ""
  )}`;
  console.log(msgTemplate);
}

export { SendReactMessage, debugPrint };
