"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var media_exports = {};
__export(media_exports, {
  Audio: () => Audio,
  Document: () => Document,
  Image: () => Image,
  Media: () => Media,
  Sticker: () => Sticker,
  Video: () => Video
});
module.exports = __toCommonJS(media_exports);
var import_types = require("../types.js");
class Media extends import_types.ClientMessage {
  /**
   * The id of the media
   */
  id;
  /**
   * The link of the media
   */
  link;
  /**
   * @param file - File to be sent
   * @param isItAnID - If the file is an ID (true) or an URL (false)
   */
  constructor(file, isItAnID = false) {
    super();
    this[isItAnID ? "id" : "link"] = file;
  }
}
class Audio extends Media {
  /**
   * @override
   * @internal
   */
  get _type() {
    return "audio";
  }
  /**
   * Create an Audio object for the API
   *
   * @example
   * ```ts
   * import { Audio } from "whatsapp-api-js/messages";
   *
   * const audio_message = new Audio("https://www.example.com/audio.mp3");
   *
   * const audio_id_message = new Audio("12345678", true);
   * ```
   *
   * @param audio - The audio file's link or id
   * @param isItAnID - Whether audio is an id (true) or a link (false)
   */
  constructor(audio, isItAnID = false) {
    super(audio, isItAnID);
  }
}
class Document extends Media {
  /**
   * The file's caption
   */
  caption;
  /**
   * The file's filename
   */
  filename;
  /**
   * @override
   * @internal
   */
  get _type() {
    return "document";
  }
  /**
   * Create a Document object for the API
   *
   * @example
   * ```ts
   * import { Document } from "whatsapp-api-js/messages";
   *
   * const document_message = new Document("https://www.example.com/document.pdf");
   *
   * const document_id_message = new Document("12345678", true);
   *
   * const document_caption_message = new Document(
   *     "https://www.example.com/document.pdf",
   *     false,
   *     "Hello world!"
   * );
   *
   * const document_filename_message = new Document(
   *     "https://www.example.com/document.pdf",
   *     false,
   *     undefined,
   *     "a weird filename.pdf"
   * );
   * ```
   *
   * @param document - The document file's link or id
   * @param isItAnID - Whether document is an id (true) or a link (false)
   * @param caption - Describes the specified document media
   * @param filename - Describes the filename for the specific document
   */
  constructor(document, isItAnID = false, caption, filename) {
    super(document, isItAnID);
    if (caption) this.caption = caption;
    if (filename) this.filename = filename;
  }
}
class Image extends Media {
  /**
   * The file's caption
   */
  caption;
  /**
   * @override
   * @internal
   */
  get _type() {
    return "image";
  }
  /**
   * Create a Image object for the API
   *
   * @example
   * ```ts
   * import { Image } from "whatsapp-api-js/messages";
   *
   * const image_message = new Image("https://i.imgur.com/4QfKuz1.png");
   *
   * const image_id_message = new Image("12345678", true);
   *
   * const image_caption_message = new Image(
   *     "https://i.imgur.com/4QfKuz1.png",
   *     false,
   *     "Hello world!"
   * );
   * ```
   *
   * @param image - The image file's link or id
   * @param isItAnID - Whether image is an id (true) or a link (false)
   * @param caption - Describes the specified image media
   */
  constructor(image, isItAnID = false, caption) {
    super(image, isItAnID);
    if (caption) this.caption = caption;
  }
}
class Sticker extends Media {
  /**
   * @override
   * @internal
   */
  get _type() {
    return "sticker";
  }
  /**
   * Create a Sticker object for the API
   *
   * @example
   * ```ts
   * import { Sticker } from "whatsapp-api-js/messages";
   *
   * const sticker_message = new Sticker("https://www.example.com/sticker.webp");
   *
   * const sticker_id_message = new Sticker("12345678", true);
   * ```
   *
   * @param sticker - The sticker file's link
   * @param isItAnID - Whether sticker is an id (true) or a link (false)
   */
  constructor(sticker, isItAnID = false) {
    super(sticker, isItAnID);
  }
}
class Video extends Media {
  /**
   * The file's caption
   */
  caption;
  /**
   * @override
   * @internal
   */
  get _type() {
    return "video";
  }
  /**
   * Create a Video object for the API
   *
   * @example
   * ```ts
   * import { Video } from "whatsapp-api-js/messages";
   *
   * const video_message = new Video("https://www.example.com/video.mp4");
   *
   * const video_id_message = new Video("12345678", true);
   *
   * const video_caption_message = new Video(
   *     "https://www.example.com/video.mp4",
   *     false,
   *     "Hello world!"
   * );
   * ```
   *
   * @param video - The video file's link
   * @param isItAnID - Whether video is an id (true) or a link (false)
   * @param caption - Describes the specified video media
   */
  constructor(video, isItAnID = false, caption) {
    super(video, isItAnID);
    if (caption) this.caption = caption;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Audio,
  Document,
  Image,
  Media,
  Sticker,
  Video
});
//# sourceMappingURL=media.js.map