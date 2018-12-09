# image-compare-api
Simple API for comparing images.

Try it: [image-compare.hcti.io](https://image-compare.hcti.io)

## Example

URL: `https://image-compare.hcti.io/api?image_url=https://hcti.io/v1/image/28c381f2-ca52-43de-a984-3b17597a1a7b?width=200&other_image_url=https://hcti.io/v1/image/52842f88-a2c0-4277-b1c4-7c07cc0895cc.png`

**Result:**
```json
{
  "image": {
    "height": 97,
    "width": 200,
    "type": "jpg"
  },
  "other_image": {
    "width": 1600,
    "height": 1560,
    "type": "png"
  },
  "pixel_difference": 869
}
```

## Deploy
Setup to deploy as a Now Lambda

```
now
```

## Contribute
Open a pull request :heart:
