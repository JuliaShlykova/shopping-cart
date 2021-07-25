const imagesCall = require.context('./images',false, /\.jpg$/);
const images = imagesCall.keys().map((key) => imagesCall(key).default);
const data = [];

for (let i=0; i<images.length; i++) {
  let src = images[i];
  let title = images[i]
  .match(/(?<=media\/)[a-z-]+(?=\.)/g)[0]
  .replaceAll('-',' ')
  .replace(/(^|\s)\S/g,L => L.toUpperCase());
  let obj = {
    src: src,
    title: title,
    quantity: 0
  };
  data.push(obj);
}

export default data;