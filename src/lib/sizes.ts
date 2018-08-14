const ems = [];
for (let i = 1; i <= 30; i++) {
  ems.push((i + 4) / 10);
}

const pxs = [];

for (let i = 1; i <= 30; i++) {
  pxs.push(i + 10);
}

const cms = [];
for (let i = 1; i <= 30; i++) {
  cms.push(i / 10);
}

export const SIZES = {
  em: ems,
  px: pxs,
  cm: cms
};
