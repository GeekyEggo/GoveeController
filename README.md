[![download-count]](https://apps.elgato.com/plugins/com.geekyeggo.goveecontroller)
[![beta-version-icon]](https://github.com/GeekyEggo/GoveeController/raw/main/dist/com.geekyeggo.goveecontroller.streamDeckPlugin)
[![Twitter icon](https://img.shields.io/static/v1?style=flat-square&message=GeekyEggo&logo=Twitter&label=&color=blue&logoColor=white&labelColor=grey)](https://www.twitter.com/geekyeggo)

<img src="./assets/icon-round.svg" alt="Govee Controller" />

# Govee Controller

Govee Controller is a plugin for the Elgato Stream Deck that allows for the control of [Govee](https://govee.com) lights!

## ⚡ Actions

- On / Off
- Brightness
- Color
- Color Brightness

## :bulb: Supported Devices

Govee Controller uses the public [Govee API version 1.4](https://govee-public.s3.amazonaws.com/developer-docs/GoveeAPIReference.pdf) which requires devices to be connected via WiFi.

- H5001, H5080, H5081.
- H6002, H6003, H6008, H6049, H6050, H6050, H6051, H6052, H6054, H6056, H6058, H6059, H605B, H6061, H6062, H6071, H6072, H6073, H6075, H6076, H6083, H6085, H6086, H6087, H6089, H6104, H6109, H610A, H6110, H6117, H611A, H611B, H611C, H611Z, H6121, H6135, H6137, H6141, H6142, H6143, H6143, H6144, H6144, H6148, H614A, H614B, H614C, H614D, H614E, H6154, H6159, H615A, H615B, H615C, H615D, H6160, H6163, H6172, H6182, H6188, H618A, H618C, H618E, H6195, H6198, H6199, H619A, H619B, H619C, H619D, H619E, H619Z, H61A0.
- H7005, H7006, H7007, H7008, H7012, H7013, H7014, H7020, H7021, H7022, H7028, H7050, H7060.

_List of supported product models accurate as of 26th Jan 2022._

## :wrench: Setup

1. Open the Govee app.
1. Go to the user tab, "About Us".
1. Select "Apply for API Key".

Shortly after you should receive your API Key; this can be used in the Govee Controller to allow your Stream Deck to control your lights.

## :page_with_curl: Licence

Govee Controller is licenced under [GNU General Public License v3 (GPL-3)](LICENSE.md) and is not officially associated with Elgato or Govee. Stream Deck and Govee are trademarks or registered trademarks of [Elgato](https://www.elgato.com/en) and [Govee](https://govee.com) respectively.

[download-count]: https://img.shields.io/badge/dynamic/json?style=flat-square&label=Download&labelColor=grey&query=message&color=2ea043&url=https%3A%2F%2Fstreamdeck.api.moeritz.io%2Fapi%2Fshields%2Fdownloads%2Fcom.geekyeggo.goveecontroller&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0IiB3aWR0aD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogIDxwYXRoIGQ9Ik0xOCAxNXYzSDZ2LTNINHYzYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJ2LTNabS0xLTQtMS40MS0xLjQxTDEzIDEyLjE3VjRoLTJ2OC4xN0w4LjQxIDkuNTkgNyAxMWw1IDV6IiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KC43NSAwIDAgLjc1IC0yIC0yKSIvPgo8L3N2Zz4K
[beta-version-icon]: https://img.shields.io/badge/Govee%20Controller-1.1.0--beta-yellow?style=flat-square&labelColor=grey&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik03LjUwMDAwMDIgMGgyMC45OTk5OTk3NnYyMC45OTk5OTk3Nkg3LjUwMDAwMDJaIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTExLjQyODU3MSA1NC4yODU3MTRjMCAxLjU3MTQyOCAxLjI4NTcxNSAyLjg1NzE0NCAyLjg1NzE0MyAyLjg1NzE0NGgxMS40Mjg1NzJjMS41NzE0MjggMCAyLjg1NzE0My0xLjI4NTcxNiAyLjg1NzE0My0yLjg1NzE0NHYtMi44NTcxNDNIMTEuNDI4NTcxWk0yMCAwQzguOTcxNDI5IDAgMCA4Ljk3MTQyOSAwIDIwYzAgNi44IDMuNCAxMi43NzE0MjkgOC41NzE0MjkgMTYuNHY2LjQ1NzE0MmMwIDEuNTcxNDI5IDEuMjg1NzEzIDIuODU3MTQ0IDIuODU3MTQyIDIuODU3MTQ0aDE3LjE0Mjg1OGMxLjU3MTQyOSAwIDIuODU3MTQyLTEuMjg1NzE1IDIuODU3MTQyLTIuODU3MTQ0VjM2LjRDMzYuNiAzMi43NzE0MjkgNDAgMjYuOCA0MCAyMCA0MCA4Ljk3MTQyOSAzMS4wMjg1NzEgMCAyMCAwWm04LjE0Mjg1OCAzMS43MTQyODYtMi40Mjg1NzIgMS43MTQyODVWNDBIMTQuMjg1NzE0di02LjU3MTQyOWwtMi40Mjg1NzItMS43MTQyODVDOCAyOS4wMjg1NzEgNS43MTQyODYgMjQuNjU3MTQyIDUuNzE0Mjg2IDIwYzAtNy44ODU3MTQgNi40LTE0LjI4NTcxNDIgMTQuMjg1NzE0LTE0LjI4NTcxNDJTMzQuMjg1NzE0IDEyLjExNDI4NiAzNC4yODU3MTQgMjBjMCA0LjY1NzE0Mi0yLjI4NTcxNCA5LjAyODU3MS02LjE0Mjg1NiAxMS43MTQyODZ6IiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyLjg1NzE0O3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KC44NzUgMCAwIC44NzUgNy41MDAwMDAyIDApIi8+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6NS4yNTg1MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0iTTI4LjE3NDAwNiA0MC40MDU3OVYyMS43MzcxNzloLTEwLjA1MDEyIiB0cmFuc2Zvcm09Im1hdHJpeCguODc1IDAgMCAuODc1IDcuNTAwMDAwMiAwKSIvPgo8L3N2Zz4K
