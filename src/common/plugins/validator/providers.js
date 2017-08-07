import {randomId} from './utils';
import Vue from 'vue';

export const vueFormState = `vueFormProviderState${randomId()}`;
export const vueFormConfig = `vueFormProviderConfig${randomId()}`;
export const formBridge = new Vue();

