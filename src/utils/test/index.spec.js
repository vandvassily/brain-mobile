import { isNumeric, isNaN } from '../validate/number';

import { isFunction, isObject } from "../index";

import { addUnit } from '../format/unit';

test('isFunction', () => {
    // expect(isFunction(function(){})).toBeTruthy();
    expect(isFunction('123')).toBeFalsy();
})

test('isObject', () => {
    expect(isObject(function(){})).toBeFalsy();
    expect(isObject('123')).toBeFalsy();
    expect(isObject({})).toBeTruthy();
    expect(isObject(null)).toBeFalsy();
})

test('isNumeric', () => {
  expect(isNumeric('1')).toBeTruthy();
  expect(isNumeric('1.2')).toBeTruthy();
  expect(isNumeric('1..2')).toBeFalsy();
  expect(isNumeric('abc')).toBeFalsy();
  expect(isNumeric('1b2')).toBeFalsy();
});

test('isNaN', () => {
  expect(isNaN(NaN)).toBeTruthy();
  expect(isNaN(12)).toBeFalsy();
  expect(isNaN(10.2)).toBeFalsy();
});

test('addUnit', () => {
  expect(addUnit(0)).toEqual('0px');
  expect(addUnit(10)).toEqual('10px');
  expect(addUnit('1%')).toEqual('1%');
  expect(addUnit('1px')).toEqual('1px');
  expect(addUnit('1vw')).toEqual('1vw');
  expect(addUnit('1vh')).toEqual('1vh');
  expect(addUnit('1rem')).toEqual('1rem');
});
