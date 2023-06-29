import { ESXServer } from 'fivem-esx-js/server/esx_server';

export let ESX: ESXServer;
on('esx:getSharedObject', (obj: ESXServer) => (ESX = obj));