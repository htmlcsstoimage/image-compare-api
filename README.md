# image-compare-api
Simple API for comparing images.

Try it: [image-compare.hcti.io](https://image-compare.hcti.io)

## Example

URL: `https://image-compare.hcti.io/api?image_url=https://hcti.io/v1/image/28c381f2-ca52-43de-a984-3b17597a1a7b&other_image_url=https://hcti.io/v1/image/28c381f2-ca52-43de-a984-3b17597a1a7b`

**Result:**
```json
{
  "image": {
    "width": 1000,
    "height": 484,
    "type": "png"
  },
  "other_image": {
    "width": 1000,
    "height": 484,
    "type": "png"
  },
  "pixel_difference": 0,
  "percent_difference": 0
}
```

## Deploy
Setup to deploy as a Now Lambda

```
now
```

## Contribute
Open a pull request :heart:
