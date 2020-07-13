import aid from 'aid.js';
import axios from 'axios';

export const not = aid.not;

export const isDef = aid.isDefined;

export const isNotDef = not(isDef);

export const isString = aid.isString;

export const isNumber = aid.isNumber;

export const isObject = aid.isObject;

export const isFunction = aid.isFunction;

export const isEmptyObject = aid.object.isEmpty;

export const truthy = aid.truthy;

export const falsy = aid.falsy;

export const eq = aid.eq;

export const gte = aid.math.gte;

export const gt = aid.math.gt;

export const lt = aid.math.lt;

export const lte = aid.math.lte;

export const lteZero = lte(0);

export const allOf = aid.allOf;

export const each = aid.each;

export const getRandomInt = aid.math.getRandomInt;

export const getRandomFloat = aid.math.getRandomFloat;

export const absentToEmpty = aid.string.absentToEmpty;

export const curry2 = aid.curry2;

export const isEmail = aid.string.isEmail;

export const isPartiallyInViewport = aid.element.isPartiallyInViewport;

export const hasWindow = () => typeof window !== 'undefined';

export const isServerEnv = () => typeof window !== 'undefined';

export const isSupportServiceWorker = () => (hasWindow() ? 'serviceWorker' in window.navigator : false);

export const isSupportMessageChannel = () => (hasWindow() ? 'MessageChannel' in window : false);

export const emptyObject = _ => ({});

export const redeem = (nullable, replacement) => (isDef(nullable) ? nullable : replacement);

export const getObjElseEmptyObj = any => aid.alt(val => (isObject(val) ? val : null), emptyObject)(any);

export const trim = str => str.trim();

export const uppercase = str => str.toUpperCase();

export const maybeCurrentTarget = aid.curry(evt => aid.monad.Maybe.fromNullable(evt.currentTarget));

export const decimalFloat = curry2(parseFloat)(10);

export const decimalInt = curry2(parseInt)(10);

export const digitLength = number => decimalInt(number).toString().length;

export const plus = aid.operator['+'];

export const loop = (n, func) => {
  for (let i = 0; i < n; i++) func(i);
};

export const nreduce = (n, func, seed) => {
  if (n <= 0) return;

  let accumulator = seed;
  for (let i = 0; i < n; i++) {
    accumulator = func(accumulator, i);
  }

  return accumulator;
};

export const fetchDatas = (requestConfigs = []) => {
  let axiosRequests = [];

  each(
    requestConfigs,
    config => {
      axiosRequests.push(
        axios({
          method: config.method,
          url: config.url,
          ...config.config,
        })
      );
    },
    null
  );

  console.log('axiosRequests :', axiosRequests);

  // Ref: https://github.com/axios/axios
  return axios.all(axiosRequests);
};
