const delData = {
  1: {
    created: "2023-03-21T15:09:09.417Z",
    value: { input: "1+2", result: 3 },
  },
  2: {
    created: "2023-03-21T15:21:18.535Z",
    value: { input: "2+6", result: 8 },
  },
  3: {
    created: "2023-03-21T15:28:14.421Z",
    value: { input: "2+636*5", result: 3182 },
  },
};

for (const [key, val] of Object.entries(delData)) {
  console.log(val.value);
}
