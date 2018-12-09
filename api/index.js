const { parse } = require("url");
const rp = require("request-promise");
const pixelmatch = require("pixelmatch");
const sizeOf = require("image-size");

module.exports = async (req, res) => {
  const { query } = parse(req.url, true);
  const { image_url, other_image_url } = query;

  if (typeof query == 'undefined' || typeof image_url == 'undefined' || typeof other_image_url == 'undefined') {
    res.end("USAGE: set image_url and other_image_url as query params");
  } else {
    const image = await rp(image_url, { encoding: null })
    const other_image = await rp(other_image_url, { encoding: null })

    const image_size = sizeOf(image)
    const other_image_size = sizeOf(other_image)

    const pixel_difference = pixelmatch(image, other_image, null, image_size.width, image_size.height)
    const results =  { image: image_size, other_image: other_image_size, pixel_difference: pixel_difference }

    res.end(JSON.stringify(results));
  }
};
