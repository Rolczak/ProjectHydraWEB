export interface Commander {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  rankName: string;
  rankId: number;
  phoneNumber?: any;
  birthday: string;
  unitId: number;
  unitName: string;
}

export interface DeputyCommander {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  rankName: string;
  rankId: number;
  phoneNumber?: any;
  birthday: string;
  unitId: number;
  unitName: string;
}

export interface Parent {
  id: number;
  name: string;
  commanderId: string;
  commanderName: string;
  deputyCommanderId: string;
  deputyCommanderName: string;
  parentUnitName?: any;
}

export interface SoldiersInUnit {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  rankName: string;
  rankId: number;
  phoneNumber?: any;
  birthday: string;
  unitId: number;
  unitName: string;
}

export interface UnitDetails {
  id: number;
  name: string;
  commanderId: string;
  commander: Commander;
  deputyCommanderId: string;
  deputyCommander: DeputyCommander;
  childernUnits: any[];
  parent: Parent;
  soldiersInUnit: SoldiersInUnit[];
}

export interface UserUnitId{
  unitId: number;
}
